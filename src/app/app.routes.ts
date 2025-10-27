import { Routes } from '@angular/router';
import { PaginaHomeComponent } from './components/pagina-home/pagina-home.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaSignupComponent } from './components/pagina-signup/pagina-signup.component';
import { PaginaCarrinhoComponent } from './components/pagina-carrinho/pagina-carrinho.component';
import { PaginaChatComponent } from './components/pagina-chat/pagina-chat.component';
import { PaginaAnunciarComponent } from './components/pagina-anunciar/pagina-anunciar.component';
import { PontosComponent } from './components/pagina-pontos/pagina-pontos';

export const routes: Routes = [
  { path: '', component: PaginaHomeComponent },
  { path: 'produto/:id', component: PaginaProdutoComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'signup', component:PaginaSignupComponent},
  { path: 'signup', component: PaginaSignupComponent },
  { path: 'carrinho', component: PaginaCarrinhoComponent },
  { path: 'chat', component: PaginaChatComponent },
  { path: 'anunciar', component: PaginaAnunciarComponent },
  { path: 'pontos', component: PontosComponent },
  { path: '**', redirectTo: '' }
];
