import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [NgFor, NgIf, GithubComponent],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  links = [
    {
      url: 'https://www.linkedin.com/in/valentino-guzman-593b64325/',
      text: 'LinkedIn',
      icon: {
        viewBox: '0 0 256 256',
        width: '16',
        height: '16',
        class: 'icon icon-tabler icons-tabler-filled icon-tabler-linkedin',
        path: 'M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453'
      }
    },
    {
      url: 'https://github.com/scino11',
      text: 'GitHub'
    },
    {
      url: 'mailto:valenguzman1802@gmail.com',
      text: 'Envíame un correo',
      icon: {
        viewBox: '0 0 24 24',
        width: '16',
        height: '16',
        class: 'icon icon-tabler icons-tabler-filled icon-tabler-mail',
        path: 'M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z'
      }
    },
    {
      url: '',
      text: 'CV',
      icon: {
        viewBox: '0 0 24 24',
        width: '16',
        height: '16',
        class: 'icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text',
        path: 'M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z'
      }
    }
  ];
  
}
import { GithubComponent } from '../icons/github/github.component';








