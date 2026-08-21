export const CATEGORIES = ["All", "Food", "Interior", "Exterior", "Drinks", "Events"];

const HEIGHTS = ["aspect-[4/3]", "aspect-[2/3]", "aspect-square"];
export type GalleryImageType = {
  id: number;
  src: string;
  category: string;
  title: string;
  heightClass: string;
};

const rawImages = [
  // Food Images (from res.tsx - Verified Working URLs)
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312958/fiddleriverjasper_Do_the_changing_seasons_have_you_craving_comfort_food_Order_2020-10-04_CF5Ikh9lkDT_2411996770173599955.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Dive_into_the_ocean_s_delights_with_our_Crispy_Calamari__Sav_2023-11-11_CzfFRf-PC6H_323332625026909351.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Dive_into_our_delectable_Cod_Cakes__Enjoy_a_symphony_of_flav_2023-11-17_Czt7SN7K5Pg_323750444379534640.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Dig_in__We_re_currently_taking_reservations_for_groups_of_up_2020-08-31_CEj9wCwloRW_238802380977120981.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Dip_our_delectable_calamari_into_our_homemade_tzatziki_sauce_2023-10-14_CyXGM9tOUm0_321306413832190610.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Dig_in_to_our_butter_baked_Pacific_halibut_filet_crusted_wit_2018-02-13_BfHzlT7nNpq_171356504763169853.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Dietary_restrictions_No_problem__We_can_accommodate_a_wide_r_2023-07-11_CuiK6xwhQbz_314412350948016305.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Did_someone_say_seafood_Our_chefs_at_Fiddle_River_Restaurant_2023-07-04_CuSPY0Ah6m3_313963956603923090.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Did_someone_say_seafood_Our_chefs_at_Fiddle_River_Restaurant_2023-07-04_CuSPY0Ah6m3_313963956603923090_3.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Did_someone_say_seafood_Our_chefs_at_Fiddle_River_Restaurant_2023-07-04_CuSPY0Ah6m3_313963956603923090_2.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Did_someone_say_seafood_Our_chefs_at_Fiddle_River_Restaurant_2023-04-08_CqwIE2DBmKU_307599406277685314.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Date_Night._Crispy_Pork_Strudel_appetizers__for_two._Jack_Da_2016-08-26_BJj29MsDW4V_132514441540071784.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Crispy__golden__and_full_of_flavour_-_our_Vienna_Schnitzel_i_2025-05-09_DJcP-jhM4_-_362884566919699251.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Crowd_pleaser._Wild_Game_Meatloaf_Slow-baked_rancher_s_elk_a_2016-09-14_BKU8T9RBeR9_133896024348045426.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy__golden_perfection___Our_Vienna_Schnitzel_is_everythi_2025-08-26_DNy3w7eUrhu_370727069823183883.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy__golden_fries_topped_with_a_generous_sprinkle_of_truf_2024-06-11_C8DKJAghM9l_338759594419872138.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy_wings._Bold_flavours._Salt___Pepper___Honey_Garlic___2026-05-15_DYVXccfgCT2_3897124162367399158.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy_cod__crunchy_fries__and_a_slaw_with_a_twist___Enjoy_o_2026-06-29_DaLP9lZjFvx_393030530255371364.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Crispy_on_the_outside__tender_on_the_inside___our_Pacific_Co_2025-05-17_DJws5ttihQ5_363460237942705874.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312953/fiddleriverjasper_Crispy_Calamari__done_right._Lightly_spiced_squid_rings__fri_2025-08-31_DOByqNbiMga_371147037089417013.jpg", category: 'Food' },
  
  // Desserts
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Did_you_know_every_dessert_at_Fiddle_River_Restaurant_is_mad_2026-07-15_Day3K2NliQ3_394145526186548536.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312955/fiddleriverjasper_Dessert__Cre%CC%80me_Bru%CC%82le%CC%81e_spiffed-up_with_a_toasted_almond_britt_2016-10-31_BMO0wl2jl9S_137326697399178837.jpg", category: 'Food' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312954/fiddleriverjasper_Cre%CC%80me_bru%CC%82le%CC%81e_with__FiddleRiverJasper_flair._This_classic_des_2018-03-02_Bfy5MUHHVFd_172569314211537340.jpg", category: 'Food' },

  // Interior Images
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Discover_the_allure_of_our_outdoor_patio__and_let_the_enchan_2023-06-10_CtSVBUnBY2h_312164994154689680.jpg", category: 'Interior' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312957/fiddleriverjasper_Did_you_know_we_take_reservations_online_up_to_90_days_in_ad_2020-03-02_B9M6doEF2yJ_225543463598656218.jpg", category: 'Interior' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Did_you_know_we_take_reservations_online_up_to_90_days_in_ad_2020-09-24_CFgRYqtDze1_240499866292710392.jpg", category: 'Interior' },
  { src: "https://res.cloudinary.com/jhprfvpg/image/upload/v1787312956/fiddleriverjasper_Did_you_also_know_we_are_open_for_lunch_starting_this_Friday_2024-09-17_DAAD5sSB28O_345878167251736551.jpg", category: 'Interior' },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", category: 'Interior' },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", category: 'Interior' },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", category: 'Interior' },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80", category: 'Interior' },

  // Exterior
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", category: 'Exterior' },
  { src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&q=80", category: 'Exterior' },
  { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80", category: 'Exterior' },

  // Drinks
  { src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80", category: 'Drinks' },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", category: 'Drinks' },
  { src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80", category: 'Drinks' },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80", category: 'Drinks' },
  { src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80", category: 'Drinks' },

  // More Food from Unsplash (High Quality Restaurant Images)
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", category: 'Food' },
  { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80", category: 'Food' },
];

export const MOCK_IMAGES: GalleryImageType[] = rawImages.map((img, i) => ({
  id: i,
  src: img.src,
  category: img.category,
  title: `Fiddle River · ${img.category}`,
  heightClass: HEIGHTS[i % HEIGHTS.length]
}));
