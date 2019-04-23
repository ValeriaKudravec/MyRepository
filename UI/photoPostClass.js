'use strict';
var photoPosts = [

      {
    
        id: '1',
    
        descriprion: 'Первый пост',
    
        createdAt: new  Date('2018-02-23T23:00:00'),
    
        author: 'Иванов Иван',
    
        photoLink: '41_NQcBBMCI.jpg',
        likes: ['petrov', 'ivanov'],
        hashtag:['pain', 'rain', 'again'],
  
       },
       {
    
        id: '2',
    
        descriprion: 'Второй пост',
    
        createdAt:   new  Date('2018-01-23T23:01:00'),
    
        author: 'Петров Иван',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['second', 'post', 'again'],
  
       },
       {
    
        id: '3',
    
        descriprion: 'Третий пост',
    
        createdAt:   new  Date('2017-02-23T23:05:00'),
    
        author: 'Петров петр',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/931389/91ddf199-d34b-4f7d-b9e3-c19c05d80767/s1200',
        likes: ['ivanov', 'сидоров'],
        hashtag:['Third', 'post'],
       },
       {
    
        id: '4',
    
        descriprion: 'Четвертый пост',
    
        createdAt:   new  Date('2018-03-08T23:01:00'),
    
        author: 'User4',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/805781/d1df9cd5-7ef8-48e9-a15f-8e9e502f5d4b/s1200',
        likes: ['petrov', 'ivanov', 'сидоров', 'user3'],
        hashtag:['post', 'again'],
       },
       {
    
        id: '5',
    
        descriprion: 'Пятый пост',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'пользователь',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['hello', 'beauti', 'five'],
  
       },
       {
    
        id: '6',
    
        descriprion: 'Шестой пост',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'Огайчик Екатерина',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'пользователь'],
        hashtag:['girl', 'lfl', 'love'],
       },
       {
    
        id: '7',
    
        descriprion: 'seven пост',
    
        createdAt:   new  Date('2018-02-01T23:01:00'),
    
        author: 'Блогер',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'Огайчик Екатерина', 'пользователь', 'User4', 'User3'],
        hashtag:['seven'],
       },
       {
    
        id: '8',
    
        descriprion: '8 пост',
    
        createdAt:   new  Date('2018-04-23T23:01:00'),
    
        author: 'Иванов Петр',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['8', 'post'],
       },
       {
    
        id: '9',
    
        descriprion: 'Девятый пост',
    
        createdAt:   new  Date('2018-03-23T23:01:00'),
    
        author: 'калека',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'Иванов Петр'],
        hashtag:['калека', 'post'],
       },
       {
    
        id: '10',
    
        descriprion: 'Десятый пост',
    
        createdAt:   new  Date('2018-02-02T23:01:00'),
    
        author: 'Чувак чувачок',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров', 'калека', 'Иванов Петр'],
        hashtag:['cat', 'dog', 'animals'],
       },
       {
    
        id: '11',
    
        descriprion: 'Одинадцатый пост',
    
        createdAt:  new Date('2018-02-23T23:01:00'),
    
        author: 'тюльпан',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['cat', 'help', 'js'],
       },
       {
    
        id: '12',
    
        descriprion: 'двенадцатый пост',
    
        createdAt:  new  Date('2018-02-23T23:01:00'),
    
        author: 'чсв печь',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['krasivo', 'simpatichno', 'again'],
       },
       {
    
        id: '13',
    
        descriprion: 'Тринадцатый пост',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'уууууужин',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['13', 'post', 'again'],
       },
       {
    
        id: '14',
    
        descriprion: 'Четырнадцатый пост',
    
        createdAt:  new  Date('2018-02-23T23:01:00'),
    
        author: 'юджин',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['beauti', 'post', 'smile'],
       },
       {
    
        id: '15',
    
        descriprion: 'евгений мележ',
    
        createdAt:   new  Date('2018-02-03T23:01:00'),
    
        author: 'мележ',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov'],
        hashtag:['second', 'post', 'pain'],
       },
       {
    
        id: '16',
    
        descriprion: '16-ый пост',
    
        createdAt:  new  Date('2018-02-23T23:01:00'),
    
        author: 'снеговик',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['rain', 'post', 'dog'],
       },
       {
    
        id: '17',
    
        descriprion: 'рюмка водки',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'Петрова Ивана',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['second', 'vodka', 'pivo'],
       },
       {
    
        id: '18',
    
        descriprion: 'красотуля',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'Ивангей',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['its', 'okey', 'to', 'be', 'gay'],
       },
       {
    
        id: '19',
    
        descriprion: 'дивчина',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'Алесенька Котик',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['pretty', 'nail', 'smile'],
       },
       {
    
        id: '20',
    
        descriprion: 'памагити',
    
        createdAt:   new  Date('2018-02-23T23:01:00'),
    
        author: 'можно ненада',
    
        photoLink: 'https://avatars.mds.yandex.net/get-pdb/25978/c677b333-0293-4299-96bc-39df0e535ca2/orig',
        likes: ['petrov', 'ivanov', 'сидоров'],
        hashtag:['help', 'ne', 'nada'],
       },
    ];

function comparePost(a, b) {
      return a.createdAt>b.createdAt ? -1 : a.createdAt<b.createdAt ? 1 : 0;
    }
class PostCollection{
    constructor(photoPosts){
        this._photoPosts = photoPosts.slice();
    }
      filter(filterConfig){
      var arr = new Array();
      let index = 0;
            if(filterConfig!=null){
            for(let i = 0;i <this._photoPosts.length; ++i){
                  if(this._photoPosts[i].author == filterConfig.author){
                        arr[index]=this._photoPosts[i];
                              ++index;
                  }
                        for(let k = 0; k < this._photoPosts[i].hashtag.length; k++){
                        if(this._photoPosts[i].hashtag[k] === filterConfig.hashtag){
                              arr[index]=this._photoPosts[i];
                              ++index;
                        }
                  }
                  if(this._photoPosts[i].createdAt === filterConfig.createdAt){
                        arr[index]=this._photoPosts[i];
                        ++index;
                  }
            } 
            return arr;
          }
          else{
                return this._photoPosts;
          }
         
  }
    getPage (skip, top, filterConfig){
        let returnArray = new Array();
        var arr = new Array();
        arr = this.filter(filterConfig);
        if(top+skip > arr.length){
              top = arr.length;
        }
        for(let l = skip; l < top; ++l){
              returnArray[l] = arr[l];
        }
       returnArray.sort(comparePost);
        return returnArray;
  }
      getPhotoPost(id) {
            for(let i = 0;i < this._photoPosts.length; ++i){
                  if(this._photoPosts[i].id === id){
                        return this._photoPosts[i];
                  }
            }
            return null;
      }
      validatePhotoPost(post){
            if(post.id === null){
                  return false;
            }
            if(post.descriprion === null){
                  return false;
            }
            if(post.author === null){
                  return false;
            }
            if(post.photoLink === null){
                  return false;
            }
            if(post.createdAt === null){
                  return false;
            }
            return true;
      }
      addPhotoPost(photoPost){
            if(this.validatePhotoPost(photoPost)){
                  this._photoPosts.push(photoPost);
            }
      }
      removePhotoPost(id){
            for(let i = 0;i < this._photoPosts.length; ++i){
                  if(this._photoPosts[i].id === id){
                        this._photoPosts.slice(i, 1);
                  }
            }
      }
      addAll(photoposts){
            let returnArr = [];
            for(let i = 0; i < photoposts.length; ++i){
                  if(this.validatePhotoPost(photoposts[i])){
                        this._photoPosts.push(photoposts[i]);
                  }
                  else{
                        returnArray.push(photoposts[i]);
                  }
            }
            return returnArr;
      }
      editPhotoPost(id, photoPost){
            post = this._photoPosts.getPhotoPost(id);
            if(photoPost.descriprion!=null){
                  post.descriprion = photoPost.descriprion;
            }
            if(photoPost.photoLink != null){
                  post.photoLink = photoPost.photoLink;
            }
            if(photoPost.likes!=null){
                  post.likes = photoPost.likes;
            }
            if(photoPost.hashtag != null){
                  post.hashtag = photoPost.hashtag;
            }
      }
}
var post = new PostCollection(photoPosts);
post.getPage(0,10, {hashtag:'post'});
post.removePhotoPost('1');
post.getPage(0,10);
post.validatePhotoPost({author:'hi', descriprion:'hello'});
post.addPhotoPost({
      id: '21',
      descriprion: 'новый пост',
      createdAt:  Date.parse('2018-02-23T23:00:00'),
      author: 'новопостер',
      photoLink: '41_NQcBBMCI.jpg',
      likes: ['petrov', 'ivanov'],
      hashtag:['new', 'rain', 'again'],

     });
 post.getPage(0,10, {hashtag:'new'});