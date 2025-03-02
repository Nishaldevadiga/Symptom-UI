import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { TranslocoLoaderData } from "@ngneat/transloco/lib/transloco.loader";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    getTranslation(lang: string, data?: TranslocoLoaderData): Observable<Translation> | Promise<Translation> {
        throw new Error("Method not implemented.");
    }
    private http = inject(HttpClient);

}
