import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div class="socials">
      <a href="https://github.com/oskreduard" target="_blank" class="ion ion-social-github"></a>
      <a href="https://github.com/ObuitragoO" target="_blank" class="ion ion-social-github"></a>
      <a href="https://es-la.facebook.com/RegistraduriaNacional/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Registraduria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://co.linkedin.com/company/registradur%C3%ADa-nacional-del-estado-civil" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
