import type { GameCard } from "../interfaces/IGameCard";
import { getElementGenericly } from "../utils/getSelector";

export class Carousel {
    private targetContainer: HTMLDivElement;
    private targetTrack: HTMLDivElement;
    private cardsData: GameCard[];
    private cardsElement: HTMLDivElement[] = [];

    constructor(containerSelect: string, trackSelect: string, data: GameCard[]) {
        this.targetContainer = getElementGenericly<HTMLDivElement>(containerSelect) as HTMLDivElement;
        this.targetTrack = getElementGenericly<HTMLDivElement>(trackSelect) as HTMLDivElement;
        this.cardsData = data;

        this.init();
    }

    private init(): void {
        if(!this.targetContainer || !this.targetTrack) return;

        if (this.cardsData.length === 1) {
            this.targetContainer.classList.add('single-card-mode');
        }

        this.renderCards();

        if (this.cardsData.length > 1) {
            this.setupScrollListener();
            setTimeout(() => this.scrollToCard(1), 100);
        }
    }

    private renderCards(): void {
        this.targetTrack.innerHTML = '';
        this.cardsData.forEach((card) => {
            const cardEl: HTMLDivElement = document.createElement('div');
            cardEl.classList.add('carasoul-card');
            cardEl.classList.add('side');

            cardEl.innerHTML = `
                <div class="card-content">
                    <img src="../..${card.cardImage}" alt="${card.name}" loading="lazy">
                    <div class="card-info">
                        <h3 class="card-title">${card.shortDescription}</h3>
                        <div class="meta">
                            <span class="rating">
                                <img src="../../assets/icons/star.svg" alt="Star">
                            ${card.rating}</span>
                            <span class="likes">
                                <img src="../../assets/icons/fav.svg" alt="Fav" class="ic">${card.likesCount}  
                            </span>
                        </div>
                    </div>
                </div>
            `;

            cardEl.addEventListener('click', () => {
                const ind: number = this.cardsElement.indexOf(cardEl);
                this.scrollToCard(ind);
            });

            this.targetTrack.appendChild(cardEl);
            this.cardsElement.push(cardEl);
        });
    }

    private setupScrollListener(): void {
        let isTicked: boolean = false;

        this.targetContainer.addEventListener('scroll', (): void => {
            if (!isTicked) {
                window.requestAnimationFrame(() => {
                    this.updateActiveCard();
                    isTicked = false;
                });

                isTicked = true;
            }
        });
    }

    private updateActiveCard(): void {
        const centeredContainer = this.targetContainer.getBoundingClientRect().left + this.targetContainer.offsetWidth / 2;
        let closestCardIndex = 0;
        let minDistance = Infinity;

        this.cardsElement.forEach((card, ind) => {
            document.addEventListener('click', () => {
                console.log('hey')
            })
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const dist = Math.abs(centeredContainer - cardCenter);

            if (dist < minDistance) {
                minDistance = dist;
                closestCardIndex = ind;
            }
        });

        this.cardsElement.forEach((card, ind) => {
            if (ind === closestCardIndex) {
                card.classList.remove('side');
                card.classList.add('active');
            } else {
                card.classList.remove('active');
                card.classList.add('side');
            }
        });
    }

    public scrollToCard(ind: number): void {
        if (ind < 0 || ind >= this.cardsElement.length) return;

        const card = this.cardsElement[ind];
        const containerWidth = this.targetContainer.offsetWidth;

        const scrollTarget = card.offsetLeft - (containerWidth / 2) + (card.offsetWidth / 2);

        this.targetContainer.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    }
}