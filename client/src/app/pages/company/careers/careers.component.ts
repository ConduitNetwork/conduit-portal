import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  public jobs: any = {
    engineering: [
      {
        title: 'Sr. Network Engineer - Infrastructure',
        summary: 'Autonomous Networks, Blockchains, Distributed Computing',
        location: 'Seattle, WA / Remote'
      },
      {
        title: 'Sr. Software Engineer - Backend Systems',
        summary: 'Functional & Object-Oriented Programming, HA, Kubernetes',
        location: 'Seattle, WA / Remote'
      },
      {
        title: 'Sr. Fullstack Developer - JavaScript',
        summary: 'Web Frameworks (Angular, React, Express), RESTful Services',
        location: 'Seattle, WA / Remote'
      },
      {
        title: 'Sr. Security Engineer - Platform Security',
        summary: 'Security & Privacy, Incident Detection & Response',
        location: 'Seattle, WA / Remote'
      }
    ],
    business: [
      {
        title: 'Business Development Mananger',
        summary: 'Operations, Value Creation, Strategies & Priorities',
        location: 'Boston, MA / Remote'
      },
      {
        title: 'Business Analyst',
        summary: 'BRDs, Reports, ',
        location: 'Boston, MA / Remote'
      }
    ],
    sales: [
      {
        title: 'Product Support Specialist',
        summary: '.',
        location: 'Boston, MA / Remote'
      },
      {
        title: 'Enterprise Success Manager',
        summary: '.',
        location: 'Boston, MA / Remote'
      },
      {
        title: 'Sales & Support Engineer',
        summary: '.',
        location: 'Boston, MA / Seattle, WA / Remote'
      }
    ],
    marketing: [
      {
        title: 'Sr. Product Marketing Manager',
        summary: '.',
        location: 'Boston, MA / Remote'
      },
      {
        title: 'Social Media Manager',
        summary: '.',
        location: 'Boston, MA / Remote'
      }
    ],
    finance: [
      {
        title: 'Senior Financial Analyst',
        summary: '.',
        location: 'Boston, MA'
      },
      {
        title: 'Accounting Intern',
        summary: '.',
        location: 'Boston, MA'
      }
    ],
    legal: [
      {
        title: 'Senior Counsel, General',
        summary: 'Corporate, Privacy, Finance',
        location: 'Boston, MA / Remote'
      }
    ],
    design: [
      {
        title: 'UX Design Lead',
        summary: '.',
        location: 'Boston, MA / Seattle, WA / Remote'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  public mail( title ) {
    window.location.href = `mailto:jobs@conduitcomputing.com?subject=${title}`;
  }

}
