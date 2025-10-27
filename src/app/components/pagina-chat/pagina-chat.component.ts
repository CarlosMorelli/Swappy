import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Mensagem {
  id: number;
  texto: string;
  enviada: boolean;
  timestamp: Date;
}

interface Conversa {
  id: number;
  nome: string;
  ultimaMensagem: string;
  timestamp: Date;
  avatar: string;
}

@Component({
  selector: 'app-pagina-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina-chat.component.html',
  styleUrls: ['./pagina-chat.component.css']
})
export class PaginaChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  conversas: Conversa[] = [
    {
      id: 1,
      nome: 'João Silva',
      ultimaMensagem: 'Oi! Ainda tem o produto disponível?',
      timestamp: new Date(Date.now() - 300000), // 5 minutos atrás
      avatar: '👤'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      ultimaMensagem: 'Obrigada pela troca!',
      timestamp: new Date(Date.now() - 3600000), // 1 hora atrás
      avatar: '👩'
    },
    {
      id: 3,
      nome: 'Pedro Costa',
      ultimaMensagem: 'Quando podemos nos encontrar?',
      timestamp: new Date(Date.now() - 7200000), // 2 horas atrás
      avatar: '👨'
    }
  ];

  conversaAtual: Conversa | null = null;
  mensagens: Mensagem[] = [];
  novaMensagem: string = '';
  mostrarLista: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar com a lista de conversas
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  abrirConversa(conversa: Conversa) {
    this.conversaAtual = conversa;
    this.mostrarLista = false;
    this.carregarMensagens(conversa.id);
  }

  voltarParaLista() {
    this.mostrarLista = true;
    this.conversaAtual = null;
    this.mensagens = [];
  }

  carregarMensagens(conversaId: number) {
    // Simular mensagens baseadas na conversa
    switch (conversaId) {
      case 1:
        this.mensagens = [
          {
            id: 1,
            texto: 'Oi! Vi seu anúncio do smartphone. Ainda está disponível?',
            enviada: false,
            timestamp: new Date(Date.now() - 600000)
          },
          {
            id: 2,
            texto: 'Oi! Sim, ainda tenho. Você tem interesse?',
            enviada: true,
            timestamp: new Date(Date.now() - 540000)
          },
          {
            id: 3,
            texto: 'Sim! Podemos combinar uma troca?',
            enviada: false,
            timestamp: new Date(Date.now() - 300000)
          }
        ];
        break;
      case 2:
        this.mensagens = [
          {
            id: 1,
            texto: 'Obrigada pela troca! O livro chegou em perfeito estado.',
            enviada: false,
            timestamp: new Date(Date.now() - 3600000)
          },
          {
            id: 2,
            texto: 'Que bom! Fico feliz que tenha gostado. Obrigado você também!',
            enviada: true,
            timestamp: new Date(Date.now() - 3540000)
          }
        ];
        break;
      case 3:
        this.mensagens = [
          {
            id: 1,
            texto: 'Oi! Tenho interesse na sua bicicleta. Quando podemos nos encontrar?',
            enviada: false,
            timestamp: new Date(Date.now() - 7200000)
          },
          {
            id: 2,
            texto: 'Oi! Que tal no sábado de manhã no parque?',
            enviada: true,
            timestamp: new Date(Date.now() - 7140000)
          }
        ];
        break;
    }
  }

  enviarMensagem() {
    if (this.novaMensagem.trim() && this.conversaAtual) {
      const mensagem: Mensagem = {
        id: this.mensagens.length + 1,
        texto: this.novaMensagem.trim(),
        enviada: true,
        timestamp: new Date()
      };

      this.mensagens.push(mensagem);
      this.novaMensagem = '';

      // Simular resposta automática após 2 segundos
      setTimeout(() => {
        this.simularResposta();
      }, 2000);
    }
  }

  simularResposta() {
    const respostasAutomaticas = [
      'Entendi! Vou verificar e te respondo.',
      'Perfeito! Combinado então.',
      'Obrigado pela mensagem!',
      'Vamos combinar os detalhes.',
      'Ótimo! Até logo.'
    ];

    const respostaAleatoria = respostasAutomaticas[Math.floor(Math.random() * respostasAutomaticas.length)];

    const resposta: Mensagem = {
      id: this.mensagens.length + 1,
      texto: respostaAleatoria,
      enviada: false,
      timestamp: new Date()
    };

    this.mensagens.push(resposta);
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {}
    }
  }

  formatarHora(timestamp: Date): string {
    return timestamp.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatarDataUltimaMensagem(timestamp: Date): string {
    const agora = new Date();
    const diff = agora.getTime() - timestamp.getTime();
    const minutos = Math.floor(diff / 60000);
    const horas = Math.floor(diff / 3600000);
    const dias = Math.floor(diff / 86400000);

    if (minutos < 60) {
      return `${minutos}min`;
    } else if (horas < 24) {
      return `${horas}h`;
    } else {
      return `${dias}d`;
    }
  }

  navigateToChat() {
    this.router.navigate(['/chat']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}

