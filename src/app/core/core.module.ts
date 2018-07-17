import { NgModule, Optional, SkipSelf} from '@angular/core';
import { ServiceModule, SettingService} from '../service/service.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    ServiceModule.forRoot()
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: '/api'
      }
    }
  ],
  declarations: []
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule, private setting: SettingService) {
    if (parentModule) {
      throw new Error( 'CoreModule已经装载，请仅在AppModule中引入该模块');
    }
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = navigator.language ? navigator.language : 'zh-cn';
      localStorage.setItem('lang', lang);
    }
    if (lang.includes('zh')) {
      if (lang.includes('TW') || lang.includes('HK')) {
        this.setting.language = 'zh-Hans-HK';
      } else {
        this.setting.language = 'zh-Hans';
      }
    } else {
      this.setting.language = 'en';
    }
  }
}
