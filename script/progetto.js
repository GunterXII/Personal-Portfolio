export class Progetto{
    constructor(titolo,descrizione,immagine,link) {
        this.titolo=titolo
        this.descrizione=descrizione
        this.immagine=immagine
        this.link=link
    }
   render() {
  return `
    <div class="parent">
      <div class="card">
        <div class="content-box">
          <span class="card-title">${this.titolo}</span>
          <p class="card-content">${this.descrizione}</p>
          <span class="see-more"><a href=${this.link} target="_blank">GUARDA</a></span>
        </div>
        <div class="date-box">
          <img src="${this.immagine}" alt="" width="70px">
        </div>
      </div>
    </div>
  `;
}

}