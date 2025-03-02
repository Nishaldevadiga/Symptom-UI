import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationsModule } from '../../Service/translations/translations.module';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  standalone:false
})
export class EducationComponent implements OnInit, AfterViewInit{

  public _translate:TranslateService;
  public translate:TranslationsModule;
  supLang=['en','hn','es'];

  constructor(
    private translateService: TranslateService,
    private translationsModule: TranslationsModule
  ) {
    this._translate = this.translateService;
    this.translate = this.translationsModule;
    // Set default language to 'en'
    this._translate.setDefaultLang('en');
  }


  ngAfterViewInit(): void {
   
  }
  translatorReady = false;

  ngOnInit(): void {
    this.waitForTranslator();
  }

  dropdownchange(event:any){
    this._translate.setDefaultLang(event.value);
  }

  // Check for the Google Translate iframe every 500ms
  waitForTranslator() {
    const checkInterval = setInterval(() => {
      const iframe = document.querySelector('iframe.goog-te-menu-frame');
      if (iframe) {
        this.translatorReady = true;
        clearInterval(checkInterval);
      }
    }, 500);
  }

  onChangeLanguage(event: Event): void {
    // If not ready, show a warning and return
    if (!this.translatorReady) {
      alert('Translator is not ready yet. Please wait a moment and try again.');
      return;
    }

    const selectElem = event.target as HTMLSelectElement;
    const lang = selectElem.value;
    const iframe = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!iframeDoc) {
      alert('Unable to access translator iframe. Please try again.');
      return;
    }

 

    // The hidden menu items have .goog-te-menu2-item span.text
    const menuItems = iframeDoc.querySelectorAll('.goog-te-menu2-item span.text') as NodeListOf<HTMLElement>;
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      if (item.innerText === lang) {
        item.click();
        break;
      }
    }
  }
}