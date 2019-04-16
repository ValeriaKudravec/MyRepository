'use strict';
var photoPosts = [

      {
    
        id: '1',
    
        descriprion: 'Первый пост',
    
        createdAt:  new Date('2018-02-23T23:00:00'),
    
        author: 'Иванов Иван',
    
        photoLink: '41_NQcBBMCI.jpg',
        likes: ['petrov', 'ivanov'],
        hashtag:['pain', 'rain', 'again'],
  
       },
       {
    
        id: '2',
    
        descriprion: 'Второй пост',
    
        createdAt:  new Date('2018-01-23T23:01:00'),
    
        author: 'Петров Иван',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['second', 'post', 'again'],
  
       },
       {
    
        id: '3',
    
        descriprion: 'Третий пост',
    
        createdAt: new Date('2017-02-23T23:05:00'),
    
        author: 'Петров петр',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/931389/91ddf199-d34b-4f7d-b9e3-c19c05d80767/s1200',
        likes: ['ivanov', 'сидоров'],
        hashtag:['Third', 'post'],
       },
       {
    
        id: '4',
    
        descriprion: 'Четвертый пост',
    
        createdAt: new Date('2018-03-08T23:01:00'),
    
        author: 'User4',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/805781/d1df9cd5-7ef8-48e9-a15f-8e9e502f5d4b/s1200',
        likes: ['petrov', 'ivanov', 'сидоров', 'user3'],
        hashtag:['post', 'again'],
       },
       {
    
        id: '5',
    
        descriprion: 'Пятый пост',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'пользователь',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['hello', 'beauti', 'five'],
  
       },
       {
    
        id: '6',
    
        descriprion: 'Шестой пост',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'Огайчик Екатерина',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'пользователь'],
        hashtag:['girl', 'lfl', 'love'],
       },
       {
    
        id: '7',
    
        descriprion: 'seven пост',
    
        createdAt: new Date('2018-02-01T23:01:00'),
    
        author: 'Блогер',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'Огайчик Екатерина', 'пользователь', 'User4', 'User3'],
        hashtag:['seven'],
       },
       {
    
        id: '8',
    
        descriprion: '8 пост',
    
        createdAt: new Date('2018-04-23T23:01:00'),
    
        author: 'Иванов Петр',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['8', 'post'],
       },
       {
    
        id: '9',
    
        descriprion: 'Девятый пост',
    
        createdAt: new Date('2018-03-23T23:01:00'),
    
        author: 'калека',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'Иванов Петр'],
        hashtag:['калека', 'post'],
       },
       {
    
        id: '10',
    
        descriprion: 'Десятый пост',
    
        createdAt: new Date('2018-02-02T23:01:00'),
    
        author: 'Чувак чувачок',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'калека', 'Иванов Петр'],
        hashtag:['cat', 'dog', 'animals'],
       },
       {
    
        id: '11',
    
        descriprion: 'Одинадцатый пост',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'тюльпан',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['cat', 'help', 'js'],
       },
       {
    
        id: '12',
    
        descriprion: 'двенадцатый пост',
    
        createdAt:  Date('2018-02-23T23:01:00'),
    
        author: 'чсв печь',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['krasivo', 'simpatichno', 'again'],
       },
       {
    
        id: '13',
    
        descriprion: 'Тринадцатый пост',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'уууууужин',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['13', 'post', 'again'],
       },
       {
    
        id: '14',
    
        descriprion: 'Четырнадцатый пост',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'юджин',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['beauti', 'post', 'smile'],
       },
       {
    
        id: '15',
    
        descriprion: 'евгений мележ',
    
        createdAt: new Date('2018-02-03T23:01:00'),
    
        author: 'мележ',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov'],
        hashtag:['second', 'post', 'pain'],
       },
       {
    
        id: '16',
    
        descriprion: '16-ый пост',
    
        createdAt: new  Date('2018-02-23T23:01:00'),
    
        author: 'снеговик',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['rain', 'post', 'dog'],
       },
       {
    
        id: '17',
    
        descriprion: 'рюмка водки',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'Петрова Ивана',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['second', 'vodka', 'pivo'],
       },
       {
    
        id: '18',
    
        descriprion: 'красотуля',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'Ивангей',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['its', 'okey', 'to', 'be', 'gay'],
       },
       {
    
        id: '19',
    
        descriprion: 'дивчина',
    
        createdAt:  new Date('2018-02-23T23:01:00'),
    
        author: 'Алесенька Котик',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['pretty', 'nail', 'smile'],
       },
       {
    
        id: '20',
    
        descriprion: 'памагити',
    
        createdAt: new Date('2018-02-23T23:01:00'),
    
        author: 'можно ненада',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['help', 'ne', 'nada'],
       },
    ];


  

class posts{
    constructor(photoPosts){
        this._photoPosts = photoPosts.slice();
    }
    show(newPost){
        for(let i = 0; i <this._photoPosts.length; i++){
            var postDiv = document.createElement("div");
            postDiv.classList.add("indent");
            var post = document.createElement("div");
            post.classList.add("post");
            postDiv.appendChild(post);
            var figure = document.createElement("figure");
            post.appendChild(figure);
            var k1 = document.createElement("k");
            var k2 = document.createElement("k");
            figure.appendChild(k1);
            figure.appendChild(k2);
            k1.classList.add("name");
            var font = document.createElement("font"); 
            var name = document.createTextNode(this._photoPosts[i].author);
            k2.classList.add("date");
            k2.appendChild(font);
            var date = document.createTextNode((this._photoPosts[i].createdAt).getDate() +"." + 
            ((this._photoPosts[i].createdAt).getMonth()+1) +"." + (this._photoPosts[i].createdAt).getFullYear() );
            font.setAttribute('size', -2);
            font.appendChild(date);
            k1.appendChild(name);
            var settingSetting =  document.createElement("img"); 
            settingSetting.classList.add("setting");
            settingSetting.setAttribute('src', "setting.png");
            var settingDelete =  document.createElement("img"); 
            settingDelete.classList.add("setting");
            settingDelete.setAttribute('src', "deleteIcon.png");
            figure.appendChild(settingSetting);
            figure.appendChild(settingDelete);
            var p = document.createElement("p");
            var deskriptoin = document.createTextNode(newPost.descriprion);
            p.appendChild(deskriptoin);
            post.appendChild(p);
            for(let i = 0; i < newPost.hashtag.length; i++){
                var a = document.createElement("a");
                a.setAttribute('class', "teg");
                var teg = document.createTextNode('#' + newPost.hashtag[i] + " ");
                a.appendChild(teg);
                post.appendChild(a);
            }
            document.body.appendChild(postDiv);
        }
    }
}
window.onload = function() {
    var post = new posts(photoPosts);
    post.show({
    
        id: '1',
    
        descriprion: 'first post ',
    
        createdAt:  Date.parse('2018-02-23T23:00:00'),
    
        author: 'Иванов Иван',
    
        photoLink: '41_NQcBBMCI.jpg',
        likes: ['petrov', 'ivanov'],
        hashtag:['pain', 'rain', 'again'],
  
       });
  }