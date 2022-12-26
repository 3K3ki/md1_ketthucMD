class Manga {
    id
    img;
    mangaName;
    chapter_number;
    statusManga;


    constructor(id, img, mangaName, chapter_number, statusManga) {
        this.id = id;
        this.img = img;
        this.mangaName = mangaName;
        this.chapter_number = chapter_number;
        this.statusManga = statusManga;
    }
    getId() { return this.id; }
    setId(){this.id = id}
    getImg() {
        return this.img ;
    }
    setImg(img) {
        this.img = img;
    }
    getmangaName() {
        return this.mangaName;
    }
    setmangaName(mangaName) {
        this.mangaName = mangaName;
    }
    getchapter_number() {
        return this.chapter_number;
    }
    setchapter_number(chapter_number) {
        this.chapter_number = chapter_number;
    }
    getstatusManga() {
        return this.statusManga;
    }
    setstatusManga(statusManga) {
        this.statusManga = statusManga;
    }
}