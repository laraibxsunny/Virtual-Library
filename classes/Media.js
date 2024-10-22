class Media {
  static totalMediaCount = 0;
  constructor(title, year, genre) {
    this.mediaCount = Media.totalMediaCount;
    Media.totalMediaCount++;

    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

module.exports = { Media };
