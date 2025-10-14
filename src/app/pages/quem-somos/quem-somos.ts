import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  imports: [],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.css'
})
export class QuemSomos implements AfterViewInit {

  ngAfterViewInit() {
    setTimeout(() => {
      this.initCarousel();
    }, 100);
  }

  private initCarousel() {
    const carousel = document.querySelector('.detailed-benefits-carousel');
    if (!carousel) {
      console.log('Carousel not found');
      return;
    }

    const track = carousel.querySelector('.carousel-track') as HTMLElement;
    if (!track) {
      console.log('Track not found');
      return;
    }

    const slides = Array.from(track.children) as HTMLElement[];
    const nextButton = carousel.querySelector('.next-arrow') as HTMLButtonElement;
    const prevButton = carousel.querySelector('.prev-arrow') as HTMLButtonElement;
    
    console.log('Slides found:', slides.length);
    
    if (slides.length === 0 || !nextButton || !prevButton) {
      console.log('Missing elements');
      return;
    }

    let currentIndex = 0;
    const maxIndex = slides.length - 1;

    const updateCarousel = () => {
      const slideWidth = 41; // 40% + 1rem margin
      const translateX = -currentIndex * slideWidth;
      track.style.transform = `translateX(${translateX}%)`;
      console.log('Updated to slide:', currentIndex, 'translateX:', translateX);
    };

    nextButton.addEventListener('click', () => {
      const maxVisibleIndex = Math.max(0, slides.length - 2); // Permite ver os últimos slides
      if (currentIndex < maxVisibleIndex) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });

    prevButton.addEventListener('click', () => {
      const maxVisibleIndex = Math.max(0, slides.length - 2);
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxVisibleIndex;
      }
      updateCarousel();
    });

    // Força a posição inicial
    track.style.transform = 'translateX(0%)';
    console.log('Carousel initialized');
  }
}
