class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Назва книги має бути непорожнім рядком');
        }

        this._title = value.trim();
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Автор має бути непорожнім рядком');
        }

        this._author = value.trim();
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Рік має бути додатним цілим числом');
        }

        this._year = value;
    }

    printInfo() {
        console.log(
            `Назва: ${this.title}\n` +
            `Автор: ${this.author}\n` +
            `Рік видання: ${this.year}`
        );
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Передайте непорожній масив книг');
        }

        for (let i = 0; i < books.length; i++) {
            if (!(books[i] instanceof Book)) {
                throw new Error('Масив має містити екземпляри Book або EBook');
            }
        }

        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }
}

export default Book;