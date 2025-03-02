import { Component } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.css',
  standalone:false
})
export class CommunitiesComponent {
  newPostContent: string = '';

  posts = [
    {
      author: "Jane Doe",
      date: new Date(),
      content: "Hello everyone! Let's support each other in our journey.",
      likes: 10,
      comments: [
        { author: "John", content: "Absolutely! We are in this together." }
      ],
      showComments: false,
      newComment: ''
    }
  ];

  addPost() {
    if (!this.newPostContent.trim()) return;
    this.posts.unshift({
      author: "Anonymous",
      date: new Date(),
      content: this.newPostContent,
      likes: 0,
      comments: [],
      showComments: false,
      newComment: ''
    });
    this.newPostContent = '';
  }

  likePost(post: any) {
    post.likes++;
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (!post.newComment.trim()) return;
    post.comments.push({ author: "User", content: post.newComment });
    post.newComment = '';
  }
}
