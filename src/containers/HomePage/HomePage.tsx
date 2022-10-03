import { Category } from 'components/Category/Category';
import { Content1 } from 'components/Content1/Content1';
import { CustomSwiper } from 'components/CustomSwiper/CustomSwiper';
import { Divider } from 'components/Divider/Divider';
import Footer from 'components/Footer/Footer';
import { ListingCard } from 'components/ListingCard/ListingCard';
import { ListingCard2 } from 'components/ListingCard2/ListingCard2';
import { LocationCard } from 'components/LocationCard/LocationCard';
import { NavBar } from 'components/NavBar/NavBar';
import { categories_data } from 'data/categories_data';
import { listings_data } from 'data/listings_data';
import { locations_data } from 'data/locations_data';
import { SwiperSlide } from 'swiper/react';

import { CopyRight } from '../../components/CopyRight/CopyRight';
import { DownloadApp } from '../../components/DownloadApp/DownloadApp';
import { JoinUs } from '../../components/JoinUs/JoinUs';
import { Search } from '../../components/Search/Search';
import { ListingCards2 } from './ListingCards2/ListingCard2';

export const HomePage = () => {
  const object = {
    general: {
      password_page: {
        login_form_heading: 'Vào cửa hàng bằng mật khẩu:',
        login_password_button: 'Vào bằng mật khẩu',
        login_form_password_label: 'Mật khẩu',
        login_form_password_placeholder: 'Mật khẩu của bạn',
        login_form_error: 'Sai mật khẩu!',
        login_form_submit: 'Vào',
        modal: 'Hộp tương tác mật khẩu',
        admin_link_html: 'Bạn có phải chủ cửa hàng không? <a href="/admin" class="link underlined-link">Đăng nhập tại đây</a>',
        powered_by_shopify_html: 'Cửa hàng này sẽ do {{ shopify }} cung cấp',
      },
      social: {
        alt_text: {
          share_on_facebook: 'Chia sẻ trên Facebook',
          share_on_twitter: 'Tweet trên Twitter',
          share_on_pinterest: 'Ghim trên Pinterest',
        },
        links: {
          twitter: 'Twitter',
          facebook: 'Facebook',
          pinterest: 'Pinterest',
          instagram: 'Instagram',
          tumblr: 'Tumblr',
          snapchat: 'Snapchat',
          youtube: 'YouTube',
          vimeo: 'Vimeo',
          tiktok: 'TikTok',
        },
      },
      continue_shopping: 'Tiếp tục mua sắm',
      pagination: {
        label: 'Phân trang',
        page: 'Trang {{ number }}',
        next: 'Trang sau',
        previous: 'Trang trước',
      },
      search: {
        search: 'Tìm kiếm',
      },
      cart: {
        view: 'Xem giỏ hàng của tôi ({{ count }})',
        item_added: 'Mặt hàng đã thêm vào giỏ hàng',
      },
      share: {
        copy_to_clipboard: 'Sao chép liên kết',
        share: 'Chia sẻ',
        share_url: 'Liên kết',
        success_message: 'Đã sao chép liên kết vào bảng nhớ tạm',
        close: 'Đóng cửa sổ chia sẻ',
      },
    },
    newsletter: {
      label: 'Email',
      success: 'Cảm ơn bạn đã đăng ký',
      button_label: 'Đăng ký',
    },
    accessibility: {
      skip_to_text: 'Chuyển đến nội dung',
      close: 'Đóng',
      unit_price_separator: 'trên',
      vendor: 'Nhà cung cấp:',
      error: 'Lỗi',
      refresh_page: 'Khi bạn chọn một mục, toàn bộ trang sẽ được làm mới.',
      link_messages: {
        new_window: 'Mở trong cửa sổ mới.',
        external: 'Mở trang web bên ngoài.',
      },
      next_slide: 'Trượt sang phải',
      previous_slide: 'Trượt sang trái',
      loading: 'Đang tải...',
      of: 'trên',
      skip_to_product_info: 'Chuyển đến thông tin sản phẩm',
      total_reviews: 'tổng số lượt đánh giá',
      star_reviews_info: '{{ rating_value }}/{{ rating_max }} sao',
    },
    blogs: {
      article: {
        blog: 'Blog',
        read_more_title: 'Đọc thêm: {{ title }}',
        read_more: 'Đọc thêm',
        comments: {
          one: '{{ count }} bình luận',
          other: '{{ count }} bình luận',
        },
        moderated: 'Xin lưu ý, bình luận cần được phê duyệt trước khi được đăng.',
        comment_form_title: 'Để lại bình luận',
        name: 'Tên',
        email: 'Email',
        message: 'Bình luận',
        post: 'Gửi bình luận',
        back_to_blog: 'Quay lại blog',
        share: 'Chia sẻ bài viết này',
        success: 'Bạn đã gửi bình luận thành công! Xin cảm ơn!',
        success_moderated: 'Bạn đã gửi bình luận thành công. Chúng tôi sẽ đăng bình luận sau chốc lát, khi blog của chúng tôi được kiểm duyệt.',
      },
    },
    onboarding: {
      product_title: 'Tiêu đề sản phẩm mẫu',
      collection_title: 'Tên bộ sưu tập của bạn',
    },
    products: {
      product: {
        add_to_cart: 'Thêm vào giỏ hàng',
        description: 'Mô tả',
        on_sale: 'Giảm giá',
        product_variants: 'Mẫu mã sản phẩm',
        quantity: {
          label: 'Số lượng',
          input_label: 'Số lượng của {{ product }}',
          increase: 'Tăng số lượng của {{ product }}',
          decrease: 'Giảm số lượng của {{ product }}',
        },
        price: {
          from_price_html: 'Từ {{ price }}',
          regular_price: 'Giá thông thường',
          sale_price: 'Giá bán',
          unit_price: 'Đơn giá',
        },
        share: 'Chia sẻ sản phẩm này',
        sold_out: 'Đã bán hết',
        unavailable: 'Không có sẵn',
        vendor: 'Nhà cung cấp',
        video_exit_message: '{{ title }} mở video toàn màn hình ở cùng một cửa sổ.',
        xr_button: 'Xem tại không gian của bạn',
        xr_button_label: 'Xem tại không gian của bạn, tải mặt hàng trong cửa sổ thực tế tăng cường',
        pickup_availability: {
          view_store_info: 'Xem thông tin cửa hàng',
          check_other_stores: 'Kiểm tra tình trạng còn hàng tại các cửa hàng khác',
          pick_up_available: 'Có thể nhận hàng tại cửa hàng',
          pick_up_available_at_html: 'Có thể nhận hàng tại <span class="color-foreground">{{ location_name }}</span>',
          pick_up_unavailable_at_html: 'Hiện chưa thể nhận hàng tại <span class="color-foreground">{{ location_name }}</span>',
          unavailable: 'Không thể tải khả năng nhận hàng tại cửa hàng',
          refresh: 'Làm mới',
        },
        media: {
          open_featured_media: 'Mở phương tiện nổi bật trong dạng xem bộ sưu tập',
          open_media: 'Mở {{ index }} phương tiện trong dạng xem bộ sưu tập',
          play_model: 'Mở Trình xem 3D',
          play_video: 'Phát video',
        },
        view_full_details: 'Xem toàn bộ chi tiết',
      },
      modal: {
        label: 'Thư viện phương tiện',
      },
    },
    templates: {
      '404': {
        title: 'Không tìm thấy trang',
        subtext: '404',
      },
      search: {
        no_results: 'Không tìm thấy kết quả cho "{{ terms }}". Kiểm tra chính tả hoặc sử dụng một từ hoặc cụm từ khác.',
        results_with_count: {
          one: 'Tìm thấy {{ count }} kết quả cho “{{ terms }}”',
          other: 'Tìm thấy {{ count }} kết quả cho “{{ terms }}”',
        },
        title: 'Kết quả tìm kiếm',
        page: 'Trang',
        products: 'Sản phẩm',
        search_for: 'Tìm kiếm “{{ terms }}”',
      },
      cart: {
        cart: 'Giỏ hàng',
      },
      contact: {
        form: {
          name: 'Tên',
          email: 'Email',
          phone: 'Số điện thoại',
          comment: 'Bình luận',
          send: 'Gửi',
          post_success: 'Cảm ơn đã liên hệ với chúng tôi. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.',
          error_heading: 'Vui lòng điều chỉnh các mục sau:',
        },
      },
    },
    sections: {
      header: {
        announcement: 'Thông báo',
        menu: 'Menu',
        cart_count: {
          one: '{{ count }} mặt hàng',
          other: '{{ count }} mặt hàng',
        },
      },
      cart: {
        title: 'Giỏ hàng của bạn',
        caption: 'Các mặt hàng trong giỏ hàng',
        remove_title: 'Xóa {{ title }}',
        subtotal: 'Tổng phụ',
        new_subtotal: 'Tổng phụ mới',
        note: 'Hướng dẫn đặc biệt của đơn hàng',
        checkout: 'Thanh toán',
        empty: 'Giỏ hàng của bạn đang trống',
        cart_error: 'Đã xảy ra lỗi khi cập nhật giỏ hàng. Vui lòng thử lại.',
        cart_quantity_error_html: 'Bạn chỉ có thể thêm [số lượng] mặt hàng này vào giỏ hàng.',
        taxes_and_shipping_policy_at_checkout_html: 'Thuế và <a href="{{ link }}">phí vận chuyển</a> được tính khi thanh toán',
        taxes_included_but_shipping_at_checkout: 'Đã bao gồm thuế và phí vận chuyển được tính khi thanh toán',
        taxes_included_and_shipping_policy_html: 'Đã bao gồm thuế. <a href="{{ link }}">Phí vận chuyển</a> được tính khi thanh toán.',
        taxes_and_shipping_at_checkout: 'Thuế và phí vận chuyển được tính khi thanh toán',
        headings: {
          product: 'Sản phẩm',
          price: 'Giá',
          total: 'Tổng',
          quantity: 'Số lượng',
        },
        update: 'Cập nhật',
        login: {
          title: 'Bạn đã có tài khoản?',
          paragraph_html: '<a href="{{ link }}" class="link underlined-link">Đăng nhập</a> để thanh toán nhanh hơn.',
        },
      },
      footer: {
        payment: 'Phương thức thanh toán',
        social_placeholder: 'Hãy theo dõi chúng tôi trên truyền thông xã hội!',
      },
      featured_blog: {
        view_all: 'Xem tất cả',
        onboarding_title: 'Bài viết blog',
        onboarding_content: 'Cho khách hàng xem tóm tắt bài viết blog',
      },
      featured_collection: {
        view_all: 'Xem tất cả',
        view_all_label: 'Xem toàn bộ sản phẩm trong bộ sưu tập {{ collection_name }}',
      },
      collection_list: {
        view_all: 'Xem tất cả',
      },
      collection_template: {
        title: 'Bộ sưu tập',
        sort_by_label: 'Sắp xếp theo:',
        sort_button: 'Sắp xếp',
        empty: 'Không tìm thấy sản phẩm',
        apply: 'Áp dụng',
        clear: 'Xóa',
        clear_all: 'Xóa tất cả',
        from: 'Từ',
        filter_and_sort: 'Lọc và sắp xếp',
        filter_by_label: 'Bộ lọc:',
        filter_button: 'Lọc',
        max_price: 'Giá cao nhất là {{ price }}',
        reset: 'Đặt lại',
        to: 'Đến',
        use_fewer_filters_html: 'Sử dụng ít bộ lọc hơn hoặc <a class="{{ class }}" href="{{ link }}">xóa tất cả</a>',
        product_count: {
          one: '{{ product_count }}/{{ count }} sản phẩm',
          other: '{{ product_count }}/{{ count }} sản phẩm',
        },
        filters_selected: {
          one: 'Đã chọn {{ count }}',
          other: 'Đã chọn {{ count }}',
        },
        product_count_simple: {
          one: '{{ count }} sản phẩm',
          other: '{{ count }} sản phẩm',
        },
      },
      video: {
        load_video: 'Tải video: {{ description }}',
      },
    },
    localization: {
      country_label: 'Quốc gia/khu vực',
      language_label: 'Ngôn ngữ',
      update_language: 'Cập nhật ngôn ngữ',
      update_country: 'Cập nhật quốc gia/khu vực',
    },
    customer: {
      account: {
        title: 'Tài khoản',
        details: 'Chi tiết tài khoản',
        view_addresses: 'Xem địa chỉ',
        return: 'Quay lại Chi tiết tài khoản',
      },
      account_fallback: 'Tài khoản',
      activate_account: {
        title: 'Kích hoạt tài khoản',
        subtext: 'Tạo mật khẩu để kích hoạt tài khoản.',
        password: 'Mật khẩu',
        password_confirm: 'Xác nhận mật khẩu',
        submit: 'Kích hoạt tài khoản',
        cancel: 'Từ chối lời mời',
      },
      addresses: {
        title: 'Địa chỉ',
        default: 'Mặc định',
        add_new: 'Thêm địa chỉ mới',
        edit_address: 'Sửa địa chỉ',
        first_name: 'Tên',
        last_name: 'Họ',
        company: 'Công ty',
        address1: 'Địa chỉ 1',
        address2: 'Địa chỉ 2',
        city: 'Thành phố',
        country: 'Quốc gia/khu vực',
        province: 'Tỉnh',
        zip: 'Mã bưu chính/mã ZIP',
        phone: 'Điện thoại',
        set_default: 'Đặt làm địa chỉ mặc định',
        add: 'Thêm địa chỉ',
        update: 'Cập nhật địa chỉ',
        cancel: 'Hủy',
        edit: 'Chỉnh sửa',
        delete: 'Xóa',
        delete_confirm: 'Bạn có chắc chắn muốn xóa địa chỉ này không?',
      },
      log_in: 'Đăng nhập',
      log_out: 'Đăng xuất',
      login_page: {
        cancel: 'Hủy',
        create_account: 'Tạo tài khoản',
        email: 'Email',
        forgot_password: 'Quên mật khẩu?',
        guest_continue: 'Tiếp tục',
        guest_title: 'Tiếp tục với tư cách khách',
        password: 'Mật khẩu',
        title: 'Đăng nhập',
        sign_in: 'Đăng nhập',
        submit: 'Gửi',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        login: 'Đăng nhập',
      },
      orders: {
        title: 'Lịch sử đặt hàng',
        order_number: 'Đơn hàng',
        order_number_link: 'Đơn hàng số {{ number }}',
        date: 'Ngày',
        payment_status: 'Trạng thái thanh toán',
        fulfillment_status: 'Trạng thái thực hiện',
        total: 'Tổng',
        none: 'Bạn chưa đặt đơn hàng nào.',
      },
      recover_password: {
        title: 'Đặt lại mật khẩu',
        subtext: 'Chúng tôi sẽ gửi email cho bạn để đặt lại mật khẩu',
        success: 'Chúng tôi đã gửi cho bạn email chứa liên kết cập nhật mật khẩu.',
      },
      register: {
        title: 'Tạo tài khoản',
        first_name: 'Tên',
        last_name: 'Họ',
        email: 'Email',
        password: 'Mật khẩu',
        submit: 'Tạo',
        description: 'Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.',
      },
      reset_password: {
        title: 'Đặt lại mật khẩu tài khoản',
        subtext: 'Nhập mật khẩu mới cho {{ email }}',
        password: 'Mật khẩu',
        password_confirm: 'Xác nhận mật khẩu',
        submit: 'Đặt lại mật khẩu',
      },
      order: {
        title: 'Đơn hàng {{ name }}',
        date_html: 'Đặt vào {{ date }}',
        cancelled_html: 'Đơn hàng đã bị hủy vào {{ date }}',
        cancelled_reason: 'Lý do: {{ reason }}',
        billing_address: 'Địa chỉ thanh toán',
        payment_status: 'Trạng thái thanh toán',
        shipping_address: 'Địa chỉ giao hàng',
        fulfillment_status: 'Trạng thái thực hiện',
        discount: 'Giảm giá',
        shipping: 'Vận chuyển',
        tax: 'Thuế',
        product: 'Sản phẩm',
        sku: 'SKU',
        price: 'Giá',
        quantity: 'Số lượng',
        total: 'Tổng',
        fulfilled_at_html: 'Đã thực hiện {{ date }}',
        track_shipment: 'Theo dõi lô hàng',
        tracking_url: 'Liên kết theo dõi',
        tracking_company: 'Hãng vận chuyển',
        tracking_number: 'Số theo dõi',
        subtotal: 'Tổng phụ',
      },
    },
    gift_cards: {
      issued: {
        title: 'Đây là thẻ quà tặng {{ value }} của bạn cho {{ shop }}!',
        subtext: 'Thẻ quà tặng của bạn',
        gift_card_code: 'Mã thẻ quà tặng',
        shop_link: 'Tiếp tục mua sắm',
        remaining_html: 'Còn lại {{ balance }}',
        add_to_apple_wallet: 'Thêm vào Apple Wallet',
        qr_image_alt: 'Mã QR — quét để đổi thẻ quà tặng',
        copy_code: 'Sao chép mã',
        expired: 'Đã hết hạn',
        copy_code_success: 'Đã sao chép mã thành công',
        print_gift_card: 'In',
      },
    },
    pagefly: {
      products: {
        product: {
          regular_price: 'Regular price',
          sold_out: 'Sold out',
          unavailable: 'Unavailable',
          on_sale: 'Sale',
          quantity: 'Quantity',
          add_to_cart: 'Add to cart',
          back_to_collection: 'Back to {{ title }}',
          view_details: 'View details',
        },
      },
      article: {
        tags: 'Tags:',
        all_topics: 'All topics',
        by_author: 'by {{ author }}',
        posted_in: 'Posted in',
        read_more: 'Read more',
        back_to_blog: 'Back to {{ title }}',
      },
      comments: {
        title: 'Leave a comment',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        post: 'Post comment',
        moderated: 'Please note, comments must be approved before they are published',
        success_moderated: 'Your comment was posted successfully. We will publish it in a little while, as our blog is moderated.',
        success: 'Your comment was posted successfully! Thank you!',
        comments_with_count: {
          one: '{{ count }} comment',
          other: '{{ count }} comments',
        },
      },
      password_page: {
        login_form_message: 'Enter store using password:',
        login_form_password_label: 'Password',
        login_form_password_placeholder: 'Your password',
        login_form_submit: 'Enter',
        signup_form_email_label: 'Email',
        signup_form_success: 'We will send you an email right before we open!',
        password_link: 'Enter using password',
      },
    },
  };
  const translate_data = {
    0: [] as string[],
  };
  const array = [];

  for (const [key, value] of Object.entries(object)) {
    translate_data[0].push(`${key}`);
    array.push([`${key}`, `${value}`]);
  }
  console.log(array);
  return (
    <>
      <NavBar />
      <Search />
      <div className="container mt-5">
        <div className="text-22 font-medium text-gray9 mb-6">Find the Best Businesses in Town</div>
        <div className="row">
          {categories_data.slice(0, 4).map(category => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2" key={category.categoryId}>
              <Content1 link={`/search/category=${category.categoryName.toLowerCase().replaceAll('', '')}&location=all`}>
                <Category key={category.categoryId} {...category} />
              </Content1>
            </div>
          ))}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <Content1 link="/search/category=all&location=all">
              <div className="flex justify-center items-center w-100% text-16 font-medium text-primary">
                <span>See all</span>
                <span className="text-16 font-medium text-primary ml-10">
                  <i className="far fa-angle-right"></i>
                </span>
              </div>
            </Content1>
          </div>
        </div>
      </div>
      <div className="container mt-64">
        <div className="text-22 text-gray9 font-medium mb-10">Happening Cities</div>
        <div className="row relative">
          <a
            href="/search/category=all&location=all"
            className="absolute top-50% right-0 flex justify-center items-center translate-x-10 translate-y-_50% w-46 h-46 rounded-1/2 shadow-1 bg-light text-25 z-100 cursor-pointer"
          >
            <i className="fal fa-angle-right"></i>
          </a>
          {locations_data.slice(0, 5).map(location => (
            <div key={location.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
              <LocationCard {...location} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-45 mb-20">
        <div className="font-medium text-22 text-gray9 text-left mb-10">Popular Listings In Our Directory</div>
        <div className="row">
          {listings_data.slice(0, 4).map(listing => (
            <div key={listing.listingId} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <ListingCard variant="variant1">
                <ListingCard.Header variant="variant1" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
                <ListingCard.Body
                  listingAds={listing.listingAds}
                  listingVerify={listing.listingVerify}
                  listingLocations={listing.listingLocations}
                  listingGallery={listing.listingGallery}
                  listingLink={listing.listingLink}
                  listingTitle={listing.listingTitle}
                />
                <ListingCard.Footer
                  variant="variant1"
                  isInWishlist={listing.isInWishlist}
                  listingCategoryId={listing.listingCategoryId}
                  listingOpenStatus={listing.listingOpenStatus}
                />
              </ListingCard>
            </div>
          ))}
        </div>
      </div>
      <JoinUs />
      <ListingCards2 />
      <CustomSwiper title="Recent Collections" link="search/category=all&location=all" titleFontWeight={500}>
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard2>
              <ListingCard2.Header listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard2.Body
                isInWishlist={listing.isInWishlist}
                listingLocations={listing.listingLocations}
                listingCategoryId={listing.listingCategoryId}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
            </ListingCard2>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <CustomSwiper
        link={'search/category=all&location=all'}
        title="Top Viewed"
        slidesPerView={5}
        titleFontWeight={500}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard variant="variant2">
              <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard.Body
                listingAds={listing.listingAds}
                listingVerify={listing.listingVerify}
                listingLocations={listing.listingLocations}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
              <ListingCard.Footer
                variant="variant2"
                isInWishlist={listing.isInWishlist}
                listingCategoryId={listing.listingCategoryId}
                listingOpenStatus={listing.listingOpenStatus}
              />
            </ListingCard>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <div className="container mt-50">
        <div className="row flex justify-center">
          <div className="col-lg-8 relative flex justify-center bg-center bg-cover">
            <img className="object-cover" src="/assets/adsplaceholder.png" alt="" />
          </div>
        </div>
      </div>
      <CustomSwiper
        title="You Might Also Like"
        link="search/category=all&location=all"
        titleFontWeight={500}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <CustomSwiper.Button iconNext={<i className="fal fa-angle-right"></i>} iconPrev={<i className="fal fa-angle-left"></i>} />
        {listings_data.map(listing => (
          <SwiperSlide key={listing.listingId}>
            <ListingCard variant="variant2">
              <ListingCard.Header variant="variant2" listingRatingScore={listing.listingRatingScore} listingUserId={listing.listingUserId} />
              <ListingCard.Body
                listingAds={listing.listingAds}
                listingVerify={listing.listingVerify}
                listingLocations={listing.listingLocations}
                listingGallery={listing.listingGallery}
                listingLink={listing.listingLink}
                listingTitle={listing.listingTitle}
              />
              <ListingCard.Footer
                variant="variant2"
                isInWishlist={listing.isInWishlist}
                listingCategoryId={listing.listingCategoryId}
                listingOpenStatus={listing.listingOpenStatus}
              />
            </ListingCard>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <DownloadApp />
      <Divider />
      <Footer />
      <Divider />
      <CopyRight />
    </>
  );
};
