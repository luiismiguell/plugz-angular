import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  private currentSlide = 0;
  private totalSlides = 6;
  private autoSlideInterval: any;

  ngOnInit() {
    this.initCarousels();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private initCarousels() {
    // Inicializa carrossel de benefícios
    const benefitsCarousel = document.querySelector('.benefits-carousel-section .carousel-component');
    if (benefitsCarousel) {
      this.setupCarousel(benefitsCarousel);
    }

    // Inicializa carrossel de depoimentos
    const testimonialsCarousel = document.querySelector('.testimonials-section .carousel-component');
    if (testimonialsCarousel) {
      this.setupCarousel(testimonialsCarousel);
    }
  }

  private setupCarousel(carousel: Element) {
    const track = carousel.querySelector('.carousel-track') as HTMLElement;
    const prevBtn = carousel.querySelector('.prev-arrow') as HTMLElement;
    const nextBtn = carousel.querySelector('.next-arrow') as HTMLElement;
    const slides = carousel.querySelectorAll('.carousel-slide, .testimonial-slide');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
      const translateX = -currentIndex * 100;
      track.style.transform = `translateX(${translateX}%)`;
    };

    prevBtn?.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
      updateCarousel();
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      const benefitsTrack = document.querySelector('.benefits-carousel-section .carousel-track') as HTMLElement;
      if (benefitsTrack) {
        this.currentSlide = this.currentSlide < this.totalSlides - 1 ? this.currentSlide + 1 : 0;
        const translateX = -this.currentSlide * 100;
        benefitsTrack.style.transform = `translateX(${translateX}%)`;
      }
    }, 5000);
  }
}
