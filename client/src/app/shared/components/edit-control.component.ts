import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer
} from '@angular/core';

@Component({
  selector: 'ta-edit-control',
  template: `
    <div class="input-group">      

      <input #titleInput type="text" [(ngModel)]="task.title" class="form-control" placeholder="{{placeholderText}}">

      <span class="input-group-btn">

        <button *ngIf="showTick" class="btn btn-default set-color" [class.btn-success]="isMouseIn"
          [class.set-color-light]="isMouseIn"
          (click)="tickClicked()">
          <span class="glyphicon glyphicon-check"></span>
        </button>

        <button *ngIf="showCross" class="btn btn-default set-color" [class.btn-danger]="isMouseIn"
          [class.set-color-light]="isMouseIn"
          (click)="crossClicked()">
          <span class="glyphicon glyphicon-trash"></span>
        </button>

        <button *ngIf="showCross" class="btn btn-default set-color" [class.btn-primary]="isMouseIn"
          [class.set-color-light]="isMouseIn"
          (click)="taVisible=!taVisible">
          <span class="glyphicon glyphicon-comment"></span>
        </button>
      </span>

    </div>
    <textarea #commentTextArea class="form-control" [style.display]="taVisible?'block':'none'" [(ngModel)]="task.comment"></textarea>
  `,
  styles: [`
    .set-color { color: grey; }
    .set-color-light { color: white; }
    textarea { resize: vertical; }
  `]
})
export class EditControlComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() task;
  @Input() placeholderText: string;
  @Input() showTick: boolean = true;
  @Input() showCross: boolean = true;

  @Output() onTick = new EventEmitter < string > ();
  @Output() onCross = new EventEmitter < string > ();
  @Output() onUpdate = new EventEmitter < string > ();

  @ViewChild('titleInput') titleRef: ElementRef;
  @ViewChild('commentTextArea') commentRef: ElementRef;

  isMouseIn: boolean = false;
  taVisible: boolean = false;

  titleBlurFunc: Function;
  titleKeyPressFunc: Function;
  commentBlurFunc: Function;

  constructor(private renderer: Renderer) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.bindElementEvents();
  }

  ngOnDestroy() {
    this.titleBlurFunc();
    this.titleKeyPressFunc();
    this.commentBlurFunc();
  }

  bindElementEvents() {
    this.titleBlurFunc = this.renderer.listen(this.titleRef.nativeElement, 'blur', this.emitTaskChange.bind(this));
    this.titleKeyPressFunc = this.renderer.listen(this.titleRef.nativeElement, 'keypress', (event) => {
      if(event.charCode === 13) { //ENTER
        this.emitTaskChange();
      }
    });
    
    this.commentBlurFunc = this.renderer.listen(this.commentRef.nativeElement, 'blur', this.emitTaskChange.bind(this));
  }

  // Event Handlers
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isMouseIn = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isMouseIn = false;
  }

  // PUBLIC FUNCTIONS
  public focusInput() {
    this.titleRef.nativeElement.focus();
  }

  // EVENT EMITTERS
  tickClicked() {
    this.onTick.emit(this.task._id);
  }

  crossClicked() {
    this.onCross.emit(this.task._id);
  }

  emitTaskChange() {
    this.onUpdate.emit(this.task);
  }
}


// <span class="input-group-addon">
//   <input type="checkbox">
// </span>
