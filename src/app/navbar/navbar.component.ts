import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
     
      
    });    
  }
  navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact' },
  ];





  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    // You can implement form submission logic here
    // For now, we'll just log the form data
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

    // You can also send the form data to a backend API or perform other actions.
  }
}
