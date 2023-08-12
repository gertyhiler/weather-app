import { create } from 'zustand';

export const useSliderState = create((set, get) => ({
	gap: null,
	itemWidth: null,
	step: null,
	maxStep: null,
	itemCountInContainer: null,
	sliderWidth: null,
	translate: null,
	isPrev: false,
	isNext: true,

	initSlider: (sliderRef, gap, itemWidth) => {
		set({
			sliderWidth: sliderRef.offsetWidth,
			gap,
			itemWidth,
			step: 1,
			itemCountInContainer: sliderRef.firstChild.firstChild.childNodes.length,
			maxStep: Math.ceil(
				((itemWidth + gap / 2) * sliderRef.firstChild.firstChild.childNodes.length) / sliderRef.offsetWidth
			),
			translate: 0,
			isNext: true,
			isPrev: false,
		});

		window.addEventListener(
			'resize',
			(e) => {
				if (sliderRef.offsetWidth === get().sliderWidth) return;
				set({
					sliderWidth: sliderRef.offsetWidth,
					maxStep: Math.ceil(
						((itemWidth + gap / 2) * sliderRef.firstChild.firstChild.childNodes.length) / sliderRef.offsetWidth
					),
				});
			},
			false
		);
	},

	nextBtn: () => {
		if (!get().isNext) return;
		set({ step: get().step + 1 });
		if (get().step === get().maxStep) set({ isNext: false, isPrev: true });
		set({
			translate:
				get().translate +
				Number(get().sliderWidth / (get().itemWidth + get().gap)).toFixed() * (get().itemWidth + get().gap),
		});
	},
	prevBtn: () => {
		if (!get().isPrev) return;

		set({ step: get().step - 1 });
		if (get().step === 1) set({ isNext: true, isPrev: false });
		set({
			translate:
				get().translate -
				Number(get().sliderWidth / (get().itemWidth + get().gap)).toFixed() * (get().itemWidth + get().gap),
		});
	},
}));