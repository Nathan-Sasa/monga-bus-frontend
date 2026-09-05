import { Component, effect, inject } from '@angular/core';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service'
import { Button } from 'primeng/button'

@Component({
    selector: 'mg-theme',
    imports: [
        Button
    ],
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.css',
})
export class ThemeComponent {
    private readonly themeService = inject(ThemeAppService)
    protected appTheme = AppTheme
    protected choiceTheme: boolean = false

    icon: string = 'pi pi-display'
    themeNumber: number = 1

    constructor() {
        effect(() => {
            const currentProvideTheme = this.themeService.themeDisplay()
            switch(currentProvideTheme){
                case this.appTheme.Light:
                    this.toggleTheme('Light')
                    break
                case this.appTheme.Dark:
                    this.toggleTheme('Dark')
                    break
                case this.appTheme.System:
                    this.toggleTheme('System')
                    break
                }
        })
    }

    toggleTheme(mode: string) {
        console.log('theme number : ', this.themeNumber)

        switch(mode){
            case 'Light':
                this.themeService.setLightTheme()
                this.themeNumber = 2
                this.icon = 'pi pi-moon'
                break
            case 'Dark':
                this.themeService.setDarkTheme()
                this.themeNumber = 3
                this.icon = 'pi pi-desktop'
                break
            case 'System':
                this.themeService.setSystemTheme()
                this.themeNumber = 1
                this.icon = 'pi pi-sun'
                break
            default :
                this.themeService.setSystemTheme()
                this.themeNumber = 1
                this.icon = 'pi pi-sun'
                break
        }
    }

    changeMode(){
        // this.themeNumber ++
        // if (this.themeNumber === 3) this.themeNumber = 1
        console.log('provide theme update : ', this.themeService.themeDisplay())
        // console.log('theme number : ', this.themeNumber)

        switch(this.themeNumber){
            case 1:
                this.toggleTheme('Light')
                break
            case 2:
                this.toggleTheme('Dark')
                break
            case 3:
                this.toggleTheme('System')
                break  
        }
    }
}
