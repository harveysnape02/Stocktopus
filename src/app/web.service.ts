import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class WebService {

  product_list: any;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://127.0.0.1:5000/api/v1.0/allproducts')
  };

  getFilteredProducts(filter: any){
    return this.http.get('http://127.0.0.1:5000/api/v1.0/allproducts/'+filter)
  }

  getProductsByName(name: any){
    return this.http.get('http://127.0.0.1:5000/api/v1.0/productbyname/'+name)
  }

 getLowProducts(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/lowquantity');
 }

 getMonthlyCosts(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/monthlycosts');
 }

 getQtyOverview(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/qtyoverview');
 }

 getMonthlyStock(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/monthlyorders');
 }

 getStockValue(): Observable<any[]> {
  return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/totalstockvalue');
 }

 getUniqueCategories(){
  return this.http.get<string[]>('http://127.0.0.1:5000/api/v1.0/unique-categories');
 }

 getIDbyName(name: string): Observable<string> {
    return this.http.get("http://127.0.0.1:5000/api/v1.0/productidbyname/" + name, { responseType: 'text' });
  }

  editProduct(id: any, productData: any): Observable<any> {
    const url = "http://127.0.0.1:5000/api/v1.0/editProduct/"+id
    let params = new HttpParams()
      .set('Name', productData.Name)
      .set('Description', productData.Description)
      .set('Cost', productData.Cost)
      .set('PricePerUnit', productData.PricePerUnit)
      .set('Supplier', productData.Supplier)
      .set('Quantity', productData.Quantity)
      .set('Category', productData.Category);

    return this.http.put(url, params.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

  editDisplayName(id: any, displayName: any): Observable<any> {
    const url = "http://127.0.0.1:5000/api/v1.0/changedisplayname/"+id;
    let params = new HttpParams().set('DisplayName', displayName);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.put(url, params.toString(), { headers });
  }

  editPassword(id: any, password: any): Observable<any> {
    const url = "http://127.0.0.1:5000/api/v1.0/changepassword/"+id;
    let params = new HttpParams().set('Password', password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.put(url, params.toString(), { headers });
  }

  addProduct(productData: FormData): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/v1.0/addproduct', productData)
  }

  addProductUpdate(productData: FormData, id: any): Observable<any> {
    const url = `http://127.0.0.1:5000/api/v1.0/addproductupdate/${id}/ProductUpdates`;

    return this.http.post(url, productData);
}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:5000/api/v1.0/getuserdetails');
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete('http://127.0.0.1:5000/api/v1.0/deleteproduct/'+id);
  }
  }
