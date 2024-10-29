jQuery(document).ready(function ($) {
  "use strict";
  var container = $(".etn-countdown-wrap");

  if (container.length > 0) {
    $.each(container, function (key, item) {
      var current_countdown_wrap = this;

      // countdown
      let etn_event_start_date = $(item).data("start-date");

      var countDownDate = new Date(etn_event_start_date).getTime();

      let etn_timer_x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(item).find(".day-count").html(days);
        $(item).find(".hr-count").html(hours);
        $(item).find(".min-count").html(minutes);
        $(item).find(".sec-count").html(seconds);
        if (distance < 0) {
          clearInterval(etn_timer_x);
          $(current_countdown_wrap).html(localized_data_obj.expired);
        }
      }, 1000);
    });
  }

  $(".attr-nav-pills>li>a").first().trigger("click");

  //   custom tabs
  $(document).on("click", ".etn-tab-a", function (event) {
    event.preventDefault();
    $(this)
      .parents(".etn-tab-wrapper")
      .find(".etn-tab")
      .removeClass("tab-active");
    $(this)
      .parents(".etn-tab-wrapper")
      .find(".etn-tab[data-id='" + $(this).attr("data-id") + "']")
      .addClass("tab-active");
    $(this)
      .parents(".etn-tab-wrapper")
      .find(".etn-tab-a")
      .removeClass("etn-active");
    $(this).parent().find(".etn-tab-a").addClass("etn-active");
  });

  //======================== Attendee form validation start ================================= //

  /**
   * Get form value and send for validation
   */
  $(".attendee_submit")
    .prop("disabled", true)
    .addClass("attendee_submit_disable");

  // disable attendee form submit multiple times
  $(".attende_form").submit(function () {
    $(".attendee_submit")
      .prop("disabled", true)
      .addClass("attendee_submit_disable");
  });

  function button_disable(button_class) {
    var allErrorElement = $(".attendee_error").length;
    var attendee_submit = $(button_class);

    if (allErrorElement === 0) {
      attendee_submit
        .prop("disabled", false)
        .removeClass("attendee_submit_disable");
    } else {
      attendee_submit
        .prop("disabled", true)
        .addClass("attendee_submit_disable");
    }
  }

  function getInputFieldWithAttr(selector) {
    var inputField = null;
    $(selector)
      .find("input")
      .each(function () {
        var $_this = $(this);

        if (
          $_this.attr("data-etn_required") === "required" &&
          ($_this.attr("type") === "checkbox" ||
            $_this.attr("type") === "radio")
        ) {
          inputField = "input[name='" + $_this.attr("name") + "']";
          return false; // Exit the loop after finding the matching input field
        }
      });
    return inputField;
  }

  // if update form exist check validation

  function getAttendeeUpdateFields(isUpdateForm) {
    var attendee_update_field = !isUpdateForm
      ? [
          "input[name='attendee_name[]']",
          "input[name='attendee_email[]']",
          "input[name='attendee_phone[]']",
        ]
      : ["input[name='name']", "input[name='email']", "input[name='phone']"];

    if ($(".etn-attendee-extra-fields").length > 0) {
      var form_data = [];
      var attendee_update_field = [];

      $("input:not(:submit,:hidden)").each(function () {
        form_data.push({
          name: this.name,
          value: this.value,
        });
      });

      if ($(".etn-checkbox-field-wrap").length > 0) {
        $(".etn-checkbox-field-wrap")
          .find("input")
          .each(function (i) {
            const singleElement = getInputFieldWithAttr($(this).parent());
            attendee_update_field.push(singleElement);
          });
      }

      if ($(".etn-radio-field-wrap").length > 0) {
        const input = getInputFieldWithAttr(".etn-radio-field-wrap");
        attendee_update_field.push(input);
      }

      if (form_data.length > 0) {
        form_data.map(function (obj) {
          var $input = $("input[name='" + obj.name + "']");
          if (
            $input.attr("required") == "required" &&
            $input.attr("type") !== "hidden"
          ) {
            attendee_update_field.push("input[name='" + obj.name + "']");
          }
        });
      }
    }

    return attendee_update_field;
  }

  if ($(".attendee_update_submit").length > 0) {
    const isUpdateForm = true;
    const attendee_update_field = getAttendeeUpdateFields(isUpdateForm);
    validation_checking(attendee_update_field, ".attendee_update_submit");
  }
  if ($(".attendee_submit").length > 0) {
    const isUpdateForm = false;
    const attendee_field = getAttendeeUpdateFields(isUpdateForm);
    validation_checking(attendee_field, ".attendee_submit");
  }

  function validation_checking(input_arr, button_class) {
    var invalid_items = [];
    $.each(input_arr, function (index, value) {
      var $this = $(value);
      switch ($this.attr("type")) {
        case "text":
        case "email":
        case "tel":
        case "number":
        case "date":
          if (typeof $this.val() === "undefined" || $this.val() == "") {
            $this.addClass("attendee_error");
            invalid_items.push(value);
          }
          break;
        case "radio":
        case "checkbox":
          // if radio or checkbox is required and not checked
          if (
            $this.is('[data-etn_required="required"]') &&
            !$this.is(":checked")
          ) {
            $this.addClass("attendee_error");
            invalid_items.push(value);
          }
          break;
        default:
          break;
      }

      $(".attende_form").on("keyup change", value, function () {
        var $_this = $(this);
        var get_type = $_this.attr("type");
        var id = $_this.attr("id");
        var response = get_error_message(get_type, $_this.val(), value);

        if (get_type === "radio") {
          id = id.split("_radio_")[0];
        } else if (get_type === "checkbox") {
          id = id.split("_checkbox_")[0];
        }

        $("." + id).html("");
        if (typeof response !== "undefined" && response.message !== "success") {
          $("." + id).html(response.message);
          if (!$("#" + id).hasClass("attendee_error")) {
            $("#" + id).addClass("attendee_error");
          }
        } else {
          $("#" + id).removeClass("attendee_error");
          if (get_type == "radio" || get_type == "checkbox") {
            $_this
              .parents(".etn-" + get_type + "-field-wrap")
              .find(".etn-attendee-extra-fields")
              .removeClass("attendee_error");
          }
        }
        button_disable(button_class);
      });
    });

    // Check if the invalid_items array is empty or not
    if (invalid_items.length > 0) {
      $(button_class)
        .prop("disabled", true)
        .addClass("attendee_submit_disable");
    } else {
      $(button_class)
        .prop("disabled", false)
        .removeClass("attendee_submit_disable");
    }
  }

  /**
   * Check type and input validation
   * @param {*} type
   * @param {*} value
   */
  function get_error_message(type, value, input_name = "") {
    var response = {
      error_type: "no_error",
      message: "success",
    };

    if (type !== "radio" || type !== "checkbox") {
      value.length == 0
        ? $(this).addClass("attendee_error")
        : $(this).removeClass("attendee_error");
    } else {
      if ($(input_name).is(":checked")) {
        if (type == "radio") {
          // for removing 'attendee_error' class from all radio label
          $(this)
            .parents(".etn-radio-field-wrap")
            .find(".etn-attendee-extra-fields")
            .removeClass("attendee_error");
        } else if (type == "checkbox") {
          // for removing 'attendee_error' class from all checkbox label
          $(this)
            .parents(".etn-checkbox-field-wrap")
            .find(".etn-attendee-extra-fields")
            .removeClass("attendee_error");
        }
      } else {
        $(this).addClass("attendee_error");
      }
    }
    switch (type) {
      case "email":
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value.length !== 0) {
          if (re.test(String(value).toLowerCase()) == false) {
            response.error_type = "not-valid";
            response.message =
              localized_data_obj.attendee_form_validation_msg.email.invalid;
          }
        } else {
          response.error_type = "empty";
          response.message =
            localized_data_obj.attendee_form_validation_msg.email.empty;
        }
        break;
      case "tel":
        if (value.length === 0) {
          response.error_type = "empty";
          response.message =
            localized_data_obj.attendee_form_validation_msg.tel.empty;
        } else if (value.length > 15) {
          response.error_type = "not-valid";
          response.message =
            localized_data_obj.attendee_form_validation_msg.tel.invalid;
        } else if (!value.match(/^\d+/) == true) {
          response.error_type = "not-valid";
          response.message =
            localized_data_obj.attendee_form_validation_msg.tel.only_number;
        }
        break;
      case "text":
      case "number":
      case "date":
        if (value.length === 0) {
          response.error_type = "empty";
          response.message =
            localized_data_obj.attendee_form_validation_msg[type];
        }
        break;

      case "radio":
      case "checkbox":
        if (!$(input_name).is(":checked")) {
          response.error_type = "not-selected";
          response.message =
            localized_data_obj.attendee_form_validation_msg.radio;
        }
        break;

      default:
        break;
    }

    return response;
  }

  //====================== Attendee form validation end ================================= //

  //===================================
  //  advanced ajax search
  //================================= //

  if ($(".etn_event_inline_form").length) {
    if ($(".etn-event-archive-wrap").length === 0) {
      $(".etn-event-wrapper").before(
        '<div class="etn_event_ajax_preloader"><div class="lds-dual-ring"></div></div>'
      );
    }

    function ajax_load(current, search_params) {
      let ajax_wraper = $(".etn-event-archive-wrap");
      const queryString = new URL(window.location);
      queryString.searchParams.set(search_params, current.value);
      window.history.pushState({}, "", queryString);

      const queryValue = new URLSearchParams(window.location.search);

      let etn_categorys = queryValue.get("etn_categorys"),
        etn_event_location = queryValue.get("etn_event_location"),
        etn_event_date_range = queryValue.get("etn_event_date_range"),
        etn_event_will_happen = queryValue.get("etn_event_will_happen"),
        keyword = queryValue.get("s");

      if (
        (keyword !== null && keyword.length) ||
        (etn_event_location !== null && etn_event_location.length) ||
        (etn_categorys !== null && etn_categorys.length) ||
        (etn_event_date_range !== null && etn_event_date_range.length) ||
        (etn_event_will_happen !== null && etn_event_will_happen.length)
      ) {
        ajax_wraper
          .parents(".etn_search_item_container")
          .find(".etn_event_ajax_preloader")
          .addClass("loading");
        let data = {
          action: "etn_event_ajax_get_data",
          etn_categorys,
          etn_event_location,
          etn_event_date_range,
          etn_event_will_happen,
          s: keyword,
        };
        let i = 0;
        jQuery.ajax({
          url: localized_data_obj.ajax_url,
          data,
          method: "POST",
          beforeSend: function () {
            ajax_wraper
              .parents(".etn_search_item_container")
              .find(".etn_event_ajax_preloader")
              .addClass("loading");
            i++;
          },
          success: function (content) {
            ajax_wraper
              .parents(".etn_search_item_container")
              .find(".etn_event_ajax_preloader")
              .removeClass("loading");
            $(".etn_search_item_container")
              .find(".etn-event-wrapper")
              .html(content);
          },
          complete: function () {
            i--;
            if (i <= 0) {
              ajax_wraper
                .parents(".etn_search_item_container")
                .find(".etn_event_ajax_preloader")
                .removeClass("loading");
            }
          },
        });
      }
    }

    const searchItems = [
      "etn_event_location",
      "etn_categorys",
      "etn_event_date_range",
      "etn_event_will_happen",
    ];

    searchItems.map((item) => {
      if ($(`[name="${item}"]`).length) {
        $(item).on("change", function (e) {
          ajax_load(this, item);
        });
      }
    });

    if ($(".etn_event_inline_form").find('[name="s"]').length) {
      $(".etn_event_inline_form")
        .find('[name="s"]')
        .on("keyup", function (e) {
          ajax_load(this, "s");
        });
    }
  }

  /*================================
      Event accordion
      ===================================*/

  $(".etn-recurring-widget .etn-recurring-header").click(function () {
    $(".etn-recurring-widget")
      .removeClass("active")
      .addClass("no-active")
      .find(".etn-zoom-event-notice")
      .slideUp();
    if ($(this).parents(".recurring-content").hasClass("active")) {
      $(this)
        .parents(".recurring-content")
        .removeClass("active")
        .find(".etn-form-wrap")
        .slideUp();
    } else {
      $(
        ".etn-recurring-widget .recurring-content.active .etn-form-wrap"
      ).slideUp();
      $(".etn-recurring-widget .recurring-content.active").removeClass(
        "active"
      );
      $(this)
        .parents(".recurring-content")
        .addClass("active")
        .find(".etn-form-wrap")
        .slideDown();
      $(this)
        .parents(".etn-recurring-widget")
        .addClass("active")
        .removeClass("no-active")
        .find(".etn-zoom-event-notice")
        .slideDown();
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".etn-recurring-widget");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass("no-active");
    }
  });

  // recurring event load more
  $(document).ready(function () {
    var count = $(".etn-recurring-widget").length;
    var limit = 3;
    $(".etn-recurring-widget").slice(0, limit).show();
    if (count <= limit) {
      $("#seeMore").fadeOut();
    }
    $("body").on("click touchstart", "#seeMore", function (e) {
      e.preventDefault();
      $(".etn-recurring-widget:hidden").slice(0, limit).slideDown();
      if ($(".etn-recurring-widget:hidden").length == 0) {
        $("#seeMore").fadeOut();
      }
    });
  });

  // quantity add/ sub in event ticket
  var $etn_single_event_scope = $(".etn-single-event-ticket-wrap");
  if ($etn_single_event_scope.length > 0) {
    $.each($etn_single_event_scope, (key, scope) => {
      etn_ticket_quantity_update($, $(scope));
    });
  }

  // Attendee details form
  const attendeeFormTitle = $(".etn-ticket-single-variation-title");
  const attendeeFormWrap = $(".etn-attendee-form-wrap");

  $.each(attendeeFormTitle, (i, item) => {
    $(item).click(() => {
      const clickedTicketName = $(item).data("ticket_name");
      $(item).toggleClass("etn-attendee-ticket-collapsed");
      $.each(attendeeFormWrap, (wrapIndex, wrap) => {
        if ($(wrap).data("ticket_name") == clickedTicketName) {
          $(wrap).slideToggle();
        }
      });
    });
  });

  /*================================
      // To Create PDF and download
      ===================================*/
  const ticket_download_btn = document.getElementById(
    "etn_ticket_download_btn"
  );

  if (ticket_download_btn) {
    ticket_download_btn?.addEventListener(
      "click",
      etn_ticket_download_btn_click
    );
  }

  $("#purchase_ticket_form").on("submit", () => {
    $(".etn-add-to-cart-block")
      .attr("disabled", "disabled")
      .addClass("disabled button--loading");
  });
});

// Ticket PDF generate function
function makeTicketPDF(e) {
  var node = document.getElementsByClassName("etn-ticket-wrapper")[0];
  const ticketname = e.target.dataset.ticketname;

  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      // document.body.appendChild(img);
      const jsPDF = window.jspdf.jsPDF;
      var doc = new jsPDF("p", "mm", "a4");
      doc.addImage(img, "PNG", -145, 10, 500, 0, "", "NONE");
      // window.open(doc.output("bloburl"))
      doc.save(ticketname);
    })
    ["catch"](function (error) {
      console.error("oops, something went wrong!", error);
    });
}

/*
 * Event ticket quantity addition/sublimation
 */
function etn_ticket_quantity_update($, $scope) {
  // quantity add/ sub in event ticket
  let parent_ticket = $scope.find(".etn-event-form-parent");

  if (typeof parent_ticket !== "undefined") {
    let index = 0;

    parent_ticket.each(function (idx) {
      let unique_id = $(this).data("etn_uid");
      var $this = $(this).data("etn_uid", unique_id);
      var variations = $this.find(".variations_" + index);
      var single_ticket = variations.find(".etn-single-ticket-item");
      var ticket_length = single_ticket.length;

      // default check , if it has only one variation
      // show min ticket size

      if (typeof ticket_length !== "undefined" && ticket_length == 1) {
        var min_ticket = parseInt(
          $this.find(".ticket_0").data("etn_min_ticket")
        );

        if (typeof min_ticket !== "undefined" && min_ticket !== null) {
          $this.find(".ticket_0").val(min_ticket);
          ticket_price_cal($this, single_ticket, variations);
        }
      }

      single_ticket.each(function (idx) {
        var ticket_wrap = $this.find(".etn_ticket_variation");
        // default call
        multiPricing(ticket_wrap, idx, $(this));
        ticket_price_cal($(this), single_ticket, variations);
        $this.find(".etn_ticket_variation").on("keyup", function () {
          let current_this = $(this);
          multiPricing(ticket_wrap, idx, current_this);
        });
      });

      single_ticket.find(".qt-btn").on("click", function () {
        var $button = $(this);
        var $input = $button
          .closest(".etn-quantity")
          .find("input.etn_ticket_variation");
        var current_key = $button.data("key");
        var $input_wrapper = single_ticket.parent(".variation_" + current_key);
        $input.val((i, v) => Math.max(0, +v + 1 * $button.data("multi")));
        multiPricing($input_wrapper, current_key, $(this));
        ticket_price_cal($this, single_ticket, variations);
      });

      // added quantity and price update in keyup
      single_ticket.find(".etn_ticket_variation").on("keyup", function () {
        ticket_price_cal($this, single_ticket, variations);
      });

      index++;
    });
  }

  var client_fname = $scope.find("#etn-st-client-fname");
  var client_lname = $scope.find("#etn-st-client-lname");
  var client_email = $scope.find("#etn-st-client-email");
  var cart_button = $scope.find(".etn-add-to-cart-block");
  const valid_email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var valid_input = [client_fname, client_lname, client_email];
  $.each(valid_input, function (index, value) {
    $(value).on("keyup", function () {
      stripe_client_validation(
        client_fname,
        client_lname,
        client_email,
        cart_button
      );

      $scope.find(".client_fname_error").html("");
      $scope.find(".client_lname_error").html("");
      $scope.find(".client_email_error").html("");

      if (client_fname.val() == "") {
        $scope
          .find(".client_fname_error")
          .html(localized_data_obj.attendee_form_validation_msg.text);
      }
      if (client_lname.val() == "") {
        $scope
          .find(".client_lname_error")
          .html(localized_data_obj.attendee_form_validation_msg.text);
      }

      if (client_email.val() == "") {
        $scope
          .find(".client_email_error")
          .html(localized_data_obj.attendee_form_validation_msg.email.empty);
      } else if (
        valid_email.test(String(client_email.val()).toLowerCase()) == false
      ) {
        $scope
          .find(".client_email_error")
          .html(localized_data_obj.attendee_form_validation_msg.email.invalid);
      }
    });
  });

  /**
   * Get price, quantity
   * @param {*} $this
   * @param {*} key
   * @param {*} ticket_length
   * @param {*} current_this
   * @returns
   */
  function multiPricing($this, key, current_this = null) {
    // min max quantity checking
    var ticket_div = $(".ticket_" + key);
    var etn_min_ticket = parseInt(ticket_div.data("etn_min_ticket"));
    var etn_max_ticket = parseInt(ticket_div.data("etn_max_ticket"));
    var etn_current_stock = parseInt(ticket_div.data("etn_current_stock"));
    var etn_cart_limit = parseInt(ticket_div.data("etn_cart_limit"));
    var etn_cart_limit_message = ticket_div.data("etn_cart_limit_message");
    var message_div = $this.find(".show_message_" + key);
    var current_input = ticket_div.val();

    if (etn_current_stock < etn_max_ticket) {
      etn_max_ticket = etn_current_stock;
    }

    $this.parents(".etn-single-ticket-item").next(".show_message").html("");

    // check stock value
    let $ticket_this = $this;
    let ticket_current_stock = etn_current_stock;
    if ($ticket_this.length > 1) {
      $ticket_this = current_this;
      ticket_current_stock = parseInt($ticket_this.data("etn_current_stock"));
    }
    if (parseInt($ticket_this.val()) > ticket_current_stock) {
      $ticket_this.val("").val(ticket_current_stock);
      message_div.html("").html($ticket_this.data("stock_limit"));
      return;
    } else {
      message_div.html("");
    }

    if (etn_max_ticket == 0 || (etn_min_ticket == 0 && etn_max_ticket == 0)) {
      return;
    }

    var qty_message = current_this
      .siblings(".ticket_" + key)
      .data("qty_message");

    // checking min,max validation
    if (current_input >= etn_min_ticket && current_input <= etn_max_ticket) {
      message_div.html("");
    } else {
      // force input qty field
      // max
      if (ticket_div.val() > etn_max_ticket) {
        ticket_div.val(etn_max_ticket);
        message_div.html(qty_message);
      }
      // min
      if (ticket_div.val() < etn_min_ticket) {
        ticket_div.val(etn_min_ticket);
      }
    }
  }

  /**
   * Calculate ticket price
   * @param {*} $this
   * @param {*} single_ticket
   * @param {*} variations
   */
  function ticket_price_cal($this, single_ticket, variations) {
    const pricing_form = $(".etn-event-form-parent.etn-ticket-variation");
    let decimal_number_points = pricing_form.data("decimal-number-points");
    let thousand_separator = pricing_form.data("thousand-separator");
    let decimal_separator = pricing_form.data("decimal-separator");
    if (
      typeof decimal_number_points === "undefined" ||
      decimal_number_points === null
    ) {
      style: "decimal";
      decimal_number_points = 2;
    }

    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimal_number_points,
    });

    var total_price = 0;
    var total_qty = 0;

    // calculating total qty,price
    var form_length = single_ticket.length;
    var cart_button = "etn-add-to-cart-block";

    for (let index = 0; index < form_length; index++) {
      var quantity = parseInt(variations.find(".ticket_" + index).val());
      var price = parseFloat(variations.find(".ticket_" + index).data("price"));
      var ticket_price = price.toFixed(decimal_number_points) * quantity;
      var sub_ticket_price = formatter
        .format(ticket_price)
        .replace(/,/g, thousand_separator)
        .replace(/\./g, decimal_separator);

      // subtotal display
      single_ticket.find("._sub_total_" + index).text(sub_ticket_price);
      total_price += ticket_price;
      total_qty += quantity;
    }

    const total_total_price_format = formatter
      .format(total_price)
      .replace(/,/g, thousand_separator)
      .replace(/\./g, decimal_separator);
    variations
      .find(".variation_total_price")
      .html(total_total_price_format)
      .val(total_total_price_format);
    variations.find(".variation_total_qty").html(total_qty).val(total_qty);
    variations.find(".variation_picked_total_qty").val(total_qty);

    if (total_qty > 0) {
      $("." + cart_button)
        .removeAttr("disabled")
        .removeClass("disabled");
      single_ticket
        .find(".etn_ticket_variation")
        .removeClass("variation_qty_error");
    } else {
      $this
        .find("." + cart_button)
        .attr("disabled", "disabled")
        .addClass("disabled");
      single_ticket
        .find(".etn_ticket_variation")
        .addClass("variation_qty_error");
    }

    const client_fname = $this.find("#etn-st-client-fname");
    const client_lname = $this.find("#etn-st-client-lname");
    const client_email = $this.find("#etn-st-client-email");

    if (
      client_fname.length > 0 ||
      client_lname.length > 0 ||
      client_email.length > 0
    ) {
      if (
        client_fname.val() === "" ||
        client_lname.val() === "" ||
        client_email.val() === ""
      ) {
        $this
          .find("." + cart_button)
          .attr("disabled", "disabled")
          .addClass("disabled");
      } else {
        $this
          .find("." + cart_button)
          .removeAttr("disabled")
          .removeClass("disabled");
      }
    }
  }
}

function stripe_client_validation(
  client_fname,
  client_lname,
  client_email,
  cart_button
) {
  if (
    client_fname.length > 0 ||
    client_lname.length > 0 ||
    client_email.length > 0
  ) {
    if (
      client_fname.val() == "" ||
      client_lname.val() == "" ||
      client_email.val() == ""
    ) {
      cart_button.attr("disabled", "disabled").addClass("disabled");
    } else {
      cart_button.removeAttr("disabled").removeClass("disabled");
    }
  }
}

/**
 * ticket download mechanism
 *
 * @param {*} e
 */
function etn_ticket_download_btn_click(e) {
  const jsPDF = window.jspdf.jsPDF;
  const elementHtml = document.getElementById(
    "etn_attendee_details_to_print"
  ).innerHTML;
  const doc = new jsPDF("p", "pt", "a4");
  const ticketname = e.target.dataset.ticketname;

  const getContent =
    "<div class='etn-ticket-pdf-wrapper' style='padding: 05px 15px; width:575px;height: 820px; margin: auto;'>" +
    elementHtml +
    "</div>";

  doc.html(getContent, {
    callback: function () {
      // to debug
      // window.open(doc.output("bloburl"));

      // to save as pdf file...
      doc.save(ticketname);
    },
    x: 10,
    y: 10,
  });
}

/**
 * print ticket content area
 *
 * @param {*} ticketMarkup
 * @returns
 */
function etn_ticket_content_area(ticketMarkup) {
  "use strict";
  var mywindow = window.open("", "PRINT", "height=400,width=800");
  mywindow.document.write(
    '<style type="text/css">' +
      ".etn-ticket-main-wrapper{max-width:610px;width:100%;height:auto;margin:20px auto;border-radius:14px;padding:20px;border:1px solid #d8d9df}.etn-ticket{display:flex;flex-direction:column}.etn-ticket-logo-wrapper{text-align:center;padding-bottom:25px}.logo-shape{display:flex;justify-content:space-between;max-width:300px;margin:auto;align-items:center;margin-top:25px}span.logo-bar{border-bottom:1px solid #d8d9df;display:inline-block;width:100%;margin:0 5px}span.logo-bar.bar-two{width:18px;height:8px;background:#d8d9df;transform:rotate(45deg);border:none}.etn-ticket-head{border-bottom:2px dashed #eff0f1;margin-bottom:17px}.etn-ticket-head-title{color:#0d165e;font-size:24px;font-weight:700;margin:0 0 11 0}.etn-ticket-head-time{font-size:15;font-weight:400;margin-bottom:22px}.etn-ticket-body-top-ul{margin:0 0 30px 0;padding:0;list-style-type:none;display:grid;grid-template-columns:auto auto}.etn-ticket-body-top-li{font-size:14px;font-weight:700;color:#0d165e}.etn-ticket-body-top-li p{font-size:15px;font-weight:400;color:#656975}.etn-ticket-qr-code{text-align:center;border:1px soid #0d165e;border-radius:14px;font-weight:700;color:#0d165e}.etn-ticket-qr-code img{border:2px solid #0d165e;border-radius:14px}.etn-download-ticket{text-align:center;margin:30px auto;max-width:610px;display:flex;justify-content:space-between}.etn-download-ticket .etn-download-ticket-btn,.etn-download-ticket .etn-print-ticket-btn{background-color:#5d5dff;color:#fff;font-weight:700;font-size:16px;border:1px solid #5d5dff;border-radius:6px;width:100%}.etn-download-ticket .etn-print-ticket-btn{background-color:#fff;color:#5d5dff;margin-right:20px}.etn-qrImage{width:150px;height:150px}" +
      ".etn-ticket-wrapper.ticket-style-2 .etn-ticket-content{flex:0 0 60%;max-width:60%;padding-left:30px;border-left:1px solid #eaeaea}.etn-ticket-wrapper.ticket-style-2 .etn-qrImage{width:100%;height:auto;max-width:200px;max-height:200px}.etn-ticket-wrapper.ticket-style-2 .etn-ticket-main-wrapper{padding:0;border:none; display: flex;}.etn-ticket-wrapper.ticket-style-2 .etn-ticket-body-top-li p,.etn-ticket-wrapper.ticket-style-2 .etn-ticket-body-top-li span{font-size:12px;font-weight:700;color:#A1A5AE;text-transform:uppercase;margin-right:5px}.etn-ticket-wrapper.ticket-style-2 .etn-ticket-body-top-li,.etn-ticket-wrapper.ticket-style-2 .etn-ticket-body-top-li p.etn-ticket-id{font-size:14px;font-weight:500;color:#11142E}.etn-ticket-wrapper.ticket-style-2 .etn-ticket-head{margin-bottom:30px;padding-bottom:20px}" +
      ".etn-ticket-wrapper.ticket-style-2 .ticket-left-side {  flex: 0 0 30%; max-width: 30%;  padding-right: 30px; }" +
      "</style>"
  );

  var contentToPrint =
    document.getElementsByClassName(ticketMarkup)[0].innerHTML;
  contentToPrint = contentToPrint.split('<div class="etn-download-ticket">')[0];
  mywindow.document.write("</head><body >");
  mywindow.document.write(contentToPrint);
  mywindow.document.write("</body></html>");
  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/
  mywindow.print();
  return true;
}
