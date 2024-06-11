import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './contacts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent { }
