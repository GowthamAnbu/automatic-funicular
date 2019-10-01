import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChildren,
  ElementRef,
  Renderer2
} from '@angular/core';
import { Post } from 'src/app/template-driven/models/post';
import { TAGS } from '../../constants/constants';
import { ShowCreatorComponent } from '../showCreator/show-creator.component';
import { SpecialMessangerComponent } from '../special-messanger/special-messanger';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styles: [``]
})
export class PostFormComponent implements OnInit, AfterContentInit, AfterViewInit {
  showIdMessage: boolean;

  @Input()
  isCreateForm = true;

  @Input()
  post: Post;

  @Output()
  postSubmitted = new EventEmitter<Post>();

  @ViewChildren(SpecialMessangerComponent) messanger: QueryList<SpecialMessangerComponent>;

  @ContentChild(ShowCreatorComponent, { static: true })

  @ViewChild('title', { read: ElementRef, static: true }) titleRef: ElementRef;

  isImageClicked: ShowCreatorComponent;

  // local state based on business logic which is needed by dumb components
  tags = TAGS;

  ngOnInit() {}

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
  ) {

  }

  ngAfterViewInit() {
    // console.log(this.messanger);
    /* change detector is one option and avoid using setTimeOut */
    this.messanger.forEach((specialMessangerComponnet, index) => {
      if (index === 0) {
        specialMessangerComponnet.message = 'create operation will take 60 minutes and then we will analyse and approve it :)';
      }
    });
    this.cd.detectChanges();
    if (this.titleRef) {
      this.renderer.setAttribute(this.titleRef.nativeElement, 'placeholder', 'renderer title goes here');
      this.renderer.addClass(this.titleRef.nativeElement, 'title-renderer');
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // #####=============>https://github.com/angular/angular/issues/15674<=============================#####
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // ####################################################################################################
      // improper way instead use renderer
      // this.titleRef.nativeElement.setAttribute('placeholder', 'title goes here');
      // this.titleRef.nativeElement.classList.add('title');
      // this.titleRef.nativeElement.focus();
    }
  }

  ngAfterContentInit() {
    // this.messanger.message = 'create operation will take 60 minutes and then we will analyse and approve it :)';
    if (this.isImageClicked) {
      /* this.isImageClicked.forEach(
        showCreatorComponent => showCreatorComponent.clicked.subscribe((imageClick: boolean) => {
          // console.log('inside form', imageClick);
           this.showIdMessage = imageClick;
        })
      ); */
      this.isImageClicked.clicked.subscribe((imageClick: boolean) => {
        // console.log('inside form', imageClick);
        this.showIdMessage = imageClick;
      });
    }
  }

  submit(value: any, valid: boolean) {
    // console.log(value, valid);
    // if (valid) {
    this.postSubmitted.emit(value);
    // }
  }
}
