import { Component, effect, HostListener, signal } from '@angular/core';
import { MongaLogoComponent } from '../../components/monga-logo/monga-logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeComponent } from '../../components/theme/theme.component';
import { DrawerModule } from 'primeng/drawer';
import { Button } from 'primeng/button'
import { routesUrl } from '../../utils/routes-url';
import { EntryAnimDirective } from '../../directives/entry-anim.directive';

@Component({
    selector: 'mg-header',
    imports: [
    MongaLogoComponent,
    RouterLink,
    ThemeComponent,
    RouterLinkActive,
    EntryAnimDirective,
    DrawerModule,
    Button,
],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {

    routesUrl = routesUrl

    lastScroll = 0
	navBarVisible = true
	scrollThreshold = 10
    protected btnText = signal<boolean>(false)

    protected isMenuOpen: boolean = false
    public isNavOpen = signal<boolean>(false)

    constructor(){
        effect(() => {
            const header = document.querySelector('header')
            if (this.isNavOpen() === true){                
                header?.classList.add('bg-brand-bg!', 'shadow-xs!', 'border-brand-border!')
            } else {
                header?.classList.remove('bg-brand-bg!', 'shadow-xs!', 'border-brand-border!')
                // header.
            }
        })
    }


    @HostListener('window:scroll', [])
    onScroll(){
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop
        const header = document.querySelector('header')

        if(window.scrollY > 80){
            header?.classList.add('bg-brand-bg', 'shadow-xs', 'border-brand-border')
            header?.classList.remove('bg-transparent', 'shadow-none', 'border-transparent',)
            this.btnText.set(true)
        }else {
            header?.classList.remove('bg-brand-bg', 'shadow-xs', 'border-brand-border')
            header?.classList.add('bg-transparent', 'shadow-none', 'border-transparent',)
            this.btnText.set(false)
        }

        if(Math.abs(currentScroll - this.lastScroll) < this.scrollThreshold) {
            return
        }

        if(currentScroll > this.lastScroll && currentScroll > 240){
            this.navBarVisible = false
        } else {
            this.navBarVisible = true
        }

        this.lastScroll = currentScroll
    }
}
