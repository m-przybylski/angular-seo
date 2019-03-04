import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly url = `${window.location}api?timeout=`;
  constructor(private httpClient: HttpClient) {}
  title = 'angular-seo';
  header = 'Response';
  ngOnInit() {
    this.httpClient.get<string>(`${this.url}1`).subscribe(res => this.header = `${this.header}_R${res}`);
    this.httpClient.get<string>(`${this.url}3`).subscribe(res => this.header = `${this.header}_R${res}`);
    this.httpClient.get<string>(`${this.url}9`).subscribe(res => this.header = `${this.header}_R${res}`);
  }
}
