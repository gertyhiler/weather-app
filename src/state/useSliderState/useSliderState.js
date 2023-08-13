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

	initSlider: (sliderRef, gap, itemWidth, itemCount) => {
		set({
			sliderWidth: sliderRef.offsetWidth,
			gap,
			itemWidth,
			step: 1,
			itemCountInContainer: itemCount,
			maxStep: itemCount - Number((sliderRef.offsetWidth / (itemWidth + gap)).toFixed()) + 1,
			translate: 0,
			isNext: itemCount - Number((sliderRef.offsetWidth / (itemWidth + gap)).toFixed()) + 1 <= 1 ? false : true,
			isPrev: false,
		});

    console.log();
    // old calc max step
    // Math.ceil(
    //   ((itemWidth + gap / 2) * itemCount) / sliderRef.offsetWidth
    // ),

		window.addEventListener(
			'resize',
			(e) => {
				if (sliderRef.offsetWidth === get().sliderWidth) return;
				set({
					sliderWidth: sliderRef.offsetWidth,
					maxStep: itemCount - Number((sliderRef.offsetWidth / (itemWidth + gap)).toFixed()) + 1,
          translate: 0,
          step: 1,
          isNext: itemCount - Number((sliderRef.offsetWidth / (itemWidth + gap)).toFixed()) + 1 <= 1 ? false : true,
			    isPrev: false,
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
				get().translate + (get().itemWidth + get().gap),
		});
	},
	prevBtn: () => {
		if (!get().isPrev) return;

		set({ step: get().step - 1 });
		if (get().step === 1) set({ isNext: true, isPrev: false });
		set({
			translate:
				get().translate -
				(get().itemWidth + get().gap),
		});
	},
}));
