import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-preview',
  standalone: true,
  templateUrl: './cv-preview.html',
  styleUrl: './cv-preview.css',
})
export class CvPreview {
  @Input() personalDetails: any = {};
  @Input() educationList: any[] = [];

  hasValue(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }

  formatDegreeType(value: string): string {
    const map: Record<string, string> = {
      certificate: 'Certificate',
      diploma: 'Diploma',
      bachelor: "Bachelor's Degree",
      master: "Master's Degree",
      doctorate: 'Doctorate',
      other: 'Other',
    };

    return map[value] || value || '—';
  }

  formatStatus(value: string): string {
    const map: Record<string, string> = {
      finished: 'Finished',
      current: 'Currently studying',
    };

    return map[value] || value || '—';
  }
}