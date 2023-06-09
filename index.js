'use strict';

const newspaper = {
    title: 'Назва газети',
    articles: [
        {
            author: '1 author',
            date: '09.06.2023',
            text: 'lorem1'
        },
        {
            author: '2 author',
            date: '09.06.2023',
            text: 'lorem2'
        },
        {
            author: '3 author',
            date: '09.06.2023',
            text: 'lorem3'
        },
        {
            author: '4 author',
            date: '09.06.2023',
            text: 'lorem4'
        },
    ],
    showArticles: function() {
        this.articles.forEach((article, index) => {
            console.log(`${this.title} ${index} - ${article.author}`); // Втрата контексту this
        })
    }
}

newspaper.showArticles();