import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Noticia } from "../models/noticia";

@Injectable({
  providedIn: "root"
})
export class NoticiaService {
  noticiaSeleccionada: Noticia;
  noticias: Noticia[];
  readonly URL_API = "http://localhost:3678";

  constructor(private http: HttpClient) {
    this.noticiaSeleccionada = new Noticia();
  }

  getNoticias() {
    return this.http.get(this.URL_API + "/noticias");
  }

  getNoticia(_id: String) {
    return this.http.get(this.URL_API + _id);
  }

  postNoticia(noticia: Noticia) {
    return this.http.post(this.URL_API + "/noticia", noticia);
  }

  putNoticia(noticia: Noticia) {
    return this.http.put(this.URL_API + "/noticia/" + noticia._id, noticia);
  }

  deleteNoticia(_id: String) {
    return this.http.delete(this.URL_API + "/noticia/" + _id);
  }
}
