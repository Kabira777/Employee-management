import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

constructor(private router:Router){}

ngOnInit(): void {
  const isDark = localStorage.getItem('dark-mode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
    const toggle = document.getElementById('darkModeToggle') as HTMLInputElement;
    if (toggle) toggle.checked = true;
  }

  const toggle = document.getElementById('darkModeToggle') as HTMLInputElement;
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode').toString());
    });
  }
}


logOut(){
  const loggedOut=confirm('Are you sure want to Log out?');
  
  if(loggedOut){
    this.router.navigate(['/login'])
  }
  
}
}
