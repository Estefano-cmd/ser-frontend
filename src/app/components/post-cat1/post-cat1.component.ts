import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from "@angular/forms";

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-post-cat1',
  templateUrl: './post-cat1.component.html',
  styleUrls: ['./post-cat1.component.css']
})
export class PostCat1Component implements OnInit {
  closeResult: string = '';
  constructor(private modalService: NgbModal) { }
    
    ngOnInit() {
      
    }
    resetForm(form: NgForm){
      form.reset();
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

    selectedCategory(category: string){
      localStorage.setItem('category', category);
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

}
