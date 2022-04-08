import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
  
})
export class PublicacionComponent implements OnInit {

  data: Post[] | any;

  //Calendar Events
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

  onDateClick(res: any) {
    alert('Click en la fecha : ' + res.dateStr);
  }

  closeResult: string = '';

  constructor(public PostService: PostService, private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Post')!);
    this.getPostById(this.data.id);
    //console.log(JSON.parse(this.data));

    //calendar
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:4200')
        .subscribe((res: any) => {
          this.Events.push(res);
          console.log(this.Events);
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }

  getPostById(_id: String){
    this.PostService.getOnePostById(_id).subscribe(
      res =>{
        this.PostService.Post = res
        
        console.log(res);
      },
      err => console.log(err)
    )
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_og3xa2p', 'template_xvn4qq9', e.target as HTMLFormElement, '7BRIxqPNOTWLRAe_9')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
