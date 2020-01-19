import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NoticiaService } from "../../services/noticia.service";
import { Noticia } from "src/app/models/noticia";

//declare var M: any;
@Component({
  selector: "app-noticias",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.css"]
})
export class NoticiasComponent implements OnInit {
  constructor(private noticiaService: NoticiaService) {}

  ngOnInit() {
    this.getNoticias();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.noticiaService.noticiaSeleccionada = new Noticia();
    }
  }

  addNoticia(form: NgForm) {
    this.noticiaService.postNoticia(form.value).subscribe(res => {
      console.log(res);
     // M.toast({ html: "Noticia Guardada" });
      this.getNoticias();
    });
    form.reset();
  }

  editNoticia(noticia: Noticia, form: NgForm) {
    this.noticiaService.noticiaSeleccionada = noticia;
    this.noticiaService.putNoticia(form.value).subscribe(res => {
      //M.toast({ html: "Actualizado " + noticia._id });
      this.getNoticias();
    });
  }

  deleteNoticia(_id: String) {
    this.noticiaService.deleteNoticia(_id).subscribe(req => {
      this.getNoticias();
      //M.toast({ html: "Eliminado " + _id });
    });
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe(res => {
      this.noticiaService.noticias = res as Noticia[];
      console.log(this.noticiaService.noticias);
    });
  }
}
