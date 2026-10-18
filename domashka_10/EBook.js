import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);

        this.format = format;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Формат має бути непорожнім рядком');
        }

        const normalizedFormat = value
            .trim()
            .toLowerCase()
            .replace(/^\./, '');

        const allowedFormats = ['pdf', 'epub', 'mobi'];

        if (!allowedFormats.includes(normalizedFormat)) {
            throw new Error('Дозволені формати: PDF, EPUB, MOBI');
        }

        this._format = normalizedFormat;
    }

    printInfo() {
        console.log(
            `Назва: ${this.title}\n` +
            `Автор: ${this.author}\n` +
            `Рік видання: ${this.year}\n` +
            `Формат файлу: ${this.format}`
        );
    }
    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error('Потрібно передати екземпляр класу Book');
        }

        return new EBook(
            book.title,
            book.author,
            book.year,
            format
        );
    }
}

export default EBook;