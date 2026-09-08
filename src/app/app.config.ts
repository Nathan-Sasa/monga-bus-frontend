import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes'
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { routes } from './app.routes';
import { semantic } from '@primeuix/themes/aura/base';

const mgPreset = definePreset(Aura, {
	semantic: {
		primary : {
			50: '{amber.50}',
			100: '{amber.100}',
			200: '{amber.200}',
			300: '{amber.300}',
			400: '{amber.400}',
			500: '{amber.500}',
			600: '{amber.600}',
			700: '{amber.700}',
			800: '{amber.800}',
			900: '{amber.900}',
		}
	},

	components: {
		progressspinner: {
			colorScheme: {
				light: {
					root: {
						colorOne: '{primary.500}',
						colorTwo: '{primary.500}',
						colorThree: '{primary.200}',
						colorFour: '{primary.200}',
					}
				},
				dark: {
					root: {
						colorOne: '{primary.500}',
						colorTwo: '{primary.500}',
						colorThree: '{primary.200}',
						colorFour: '{primary.200}',
					}
				}
			}
		}
	}
})

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'top',
				anchorScrolling: 'enabled',
			}),
		),
		provideHttpClient(),
		provideAnimationsAsync(),
		providePrimeNG({
            theme: {
                preset: mgPreset,
				options: {
					darkModeSelector: '.dark'
				}
            }
        }),
		{ provide: LOCALE_ID, useValue: 'fr-FR' },
	]
};
