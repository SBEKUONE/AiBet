import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  private apiKey = 'd35b6a0ee690458c929528804c8f4654';
  private apiUrl = 'https://api.football-data.org/v4';

  constructor(private http: HttpClient) {}

  getChampionsLeagueMatches(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Auth-Token': this.apiKey
    });
  
    return this.http.get(`${this.apiUrl}/matches`, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
  
}
