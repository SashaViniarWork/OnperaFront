import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  slider: any[];

  constructor(public router: Router) {
    this.slider = [
      {
        isDataSlide: true,
        imgUrl: 'https://source.unsplash.com/LAaSoL0LrYs/1920x1080',
        headerText: 'About Company',
        index: '0',
        link: 'about',
        text: 'Onpera Technologies is a professional services company that offers a rich pallet of solutions designed for increased\n' +
          '          business productivity and efficiency. We developed our solutions according to your business needs and with the\n' +
          '          end-users in mind. Our services portfolio is not what makes us different. What makes us different is who we are\n' +
          '          and how we provide the services to our clients.'
      },
      {
        isDataSlide: false,
        index: '1',
        imgUrl: 'https://source.unsplash.com/bF2vsubyHcQ/1920x1080',
        headerText: 'Our Services',
        text: 'Starting as early as you have an idea, we work with you to analyze, build, design, and release a final product to market.\n' +
          '          We’re focused on understanding your users’ needs, validating hypotheses quickly, reducing risks, and continually improving\n' +
          '          our processes to ensure highly efficient and fluid product development life cycle.'
      },
      {
        isDataSlide: false,
        index: '2',
        imgUrl: 'https://source.unsplash.com/szFUQoyvrxM/1920x1080',
        headerText: 'Our Teams',
        link: 'team',
        text: ' <ul>\n' +
          '          <li>Java Developers</li>\n' +
          '          <li>Front-End Team</li>\n' +
          '          <li>QA Engineers</li>\n' +
          '        </ul>'
      },
      {
        isDataSlide: false,
        index: '3',
        imgUrl: 'https://source.unsplash.com/szFUQoyvrxM/1920x1080',
        headerText: 'Contact Us',
        text: 'Contact Us'
      },

    ];
  }

  ngOnInit() {
  }

  navigate(url) {
    this.router.navigate(['landing/' + url]);
  }

}
