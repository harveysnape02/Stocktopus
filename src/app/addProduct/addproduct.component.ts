import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { WebService } from '../web.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MatTooltipModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})


export class AddproductComponent implements OnInit{
  categoryList: string[] = [];
  showCategories: boolean = false;
  addProductForm!: FormGroup;

  @ViewChild('nameAdd') nameAdd!: ElementRef;
  @ViewChild('descriptionAdd') descriptionAdd!: ElementRef;
  @ViewChild('costAdd') costAdd!: ElementRef;
  @ViewChild('ppuAdd') ppuAdd!: ElementRef;
  @ViewChild('supplierAdd') supplierAdd!: ElementRef;
  @ViewChild('qtyAdd') qtyAdd!: ElementRef;
  @ViewChild('imageAdd') imageAdd!: ElementRef;
  @ViewChild('categoryAdd') categoryAdd!: ElementRef;


  toggleCategory(): void {
    this.showCategories = !this.showCategories;
    }

  constructor(private webService: WebService) {}

  ngOnInit(): void {
      this.webService.getUniqueCategories().subscribe({
        next: categories => {
          this.categoryList = categories;
        },
        error: error => {
          console.error('Error fetching categories', error);
        }
      });
  }
  getCategoriesTooltip(): string {
    return `Previous categories assigned to products: ${this.categoryList.join(', ')}`;
  }
  addProducts(){
    console.log("button pressed");

  // setting the values for the form
  const newName = (this.nameAdd.nativeElement as HTMLInputElement).value;
  const newDescription = (this.descriptionAdd.nativeElement as HTMLInputElement).value;
  const newCost = (this.costAdd.nativeElement as HTMLInputElement).value;
  const newPPU = (this.ppuAdd.nativeElement as HTMLInputElement).value;
  const newSupplier = (this.supplierAdd.nativeElement as HTMLInputElement).value;
  const newQty = (this.qtyAdd.nativeElement as HTMLInputElement).value;
  const newImage = (this.imageAdd.nativeElement as HTMLInputElement).value;
  const newCategory = (this.categoryAdd.nativeElement as HTMLInputElement).value;

  // Creating the form using formdata
  const formData = new FormData();
  formData.append("Name", newName);
  formData.append("Description", newDescription);
  formData.append("Cost", newCost);
  formData.append("PricePerUnit", newPPU);
  formData.append("Supplier", newSupplier);
  formData.append("Quantity", newQty);
  formData.append("Image", newImage);
  formData.append("Category", newCategory);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  // Call the web service to add the product
  this.webService.addProduct(formData).subscribe({
    next: response => {
      console.log('Product added successfully', response);
    },
    // error: error => {
    //   console.error('Error adding product', error);
    // }
  });

}
}
