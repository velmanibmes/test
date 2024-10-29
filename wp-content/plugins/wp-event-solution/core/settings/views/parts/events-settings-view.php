<!-- Events Settings Tab -->
<div class="etn-settings-section attr-tab-pane" data-id="tab2" id="etn-events_options">
    <div class="etn-settings-single-section">
        <div class="etn-recaptcha-settings-wrapper">
            <div class="etn-recaptcha-settings">
                <div class="etn-settings-tab-wrapper etn-settings-tab-style">
                    <ul class="etn-settings-nav">
                        <li>
                            <a class="etn-settings-tab-a etn-settings-active" data-id="events-details">
								<?php echo esc_html__( 'Events Details', 'eventin' ); ?>
                                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="etn-settings-tab-a" data-id="attendee-settings">
								<?php echo esc_html__( 'Attendee', 'eventin' ); ?>
                                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="etn-settings-tab-a" data-id="email-settings">
								<?php echo esc_html__( 'Email Settings', 'eventin' ); ?>
                                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="etn-settings-tab-content">
                        <div class="etn-settings-tab" id="events-details">
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Date', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide event date from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_date_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_date_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_date_from_details"/>
                                    <label for="checked_hide_date_from_details" class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Time', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide evente time from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_time_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_time_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_time_from_details"/>
                                    <label for="checked_hide_time_from_details" class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Location', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide event location from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_location_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_location_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_location_from_details"/>
                                    <label for="checked_hide_location_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Total Seats', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide total seats from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_seats_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_seats_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_seats_from_details"/>
                                    <label for="checked_hide_seats_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Attendee Count', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide total attendee count from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_attendee_count_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_attendee_count_from_details ); ?>
                                           class="etn-admin-control-input" name="etn_hide_attendee_count_from_details"/>
                                    <label for="checked_hide_attendee_count_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>


                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Organizers', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide organizers from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_organizers_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_organizers_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_organizers_from_details"/>
                                    <label for="checked_hide_organizers_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <!-- Setting for hiding speaker block from single event -->
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Speakers Block', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide speakers block from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_speakers_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_speaker_from_details ); ?>
                                           class="etn-admin-control-input etn_hide_speaker_from_details"
                                           name="etn_hide_speaker_from_details"/>
                                    <label for="checked_hide_speakers_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Event Schedule Details', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide schedule details from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_schedule_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_schedule_from_details ); ?>
                                           class="etn-admin-control-input etn-form-modalinput-paypal_sandbox"
                                           name="etn_hide_schedule_from_details"/>
                                    <label for="checked_hide_schedule_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>


                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Hide Calendar', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Hide calendar from event details.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="checked_hide_calendar_from_details"
                                           type="checkbox" <?php echo esc_html( $checked_hide_calendar_from_details ); ?>
                                           class="etn-admin-control-input" name="checked_hide_calendar_from_details"/>
                                    <label for="checked_hide_calendar_from_details"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Enable Rich Results', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Enable ld-json Rich Snippets support for event', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="disable_rich_snippets_for_event"
                                           type="checkbox" <?php echo esc_html( $disable_rich_snippets_for_event ); ?>
                                           class="etn-admin-control-input" name="disable_rich_snippets_for_event"/>
                                    <label for="disable_rich_snippets_for_event"
                                           class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Related Event Per Page.', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Number of related events to show in the single event page.', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input type="number" name="related_events_per_page" step="1" min="1"
                                           value="<?php echo esc_attr( ! empty( $related_events_per_page ) ? $related_events_per_page : 6 ); ?>"
                                           class="etn-setting-input attr-form-control">
                                </div>
                            </div>
							<?php
							if ( is_array( $settings_arr ) && isset( $settings_arr['pro_details_options'] ) && file_exists( $settings_arr['pro_details_options'] ) ) {
								include_once $settings_arr['pro_details_options'];
							}
							?>
                        </div>

                        <div class="etn-settings-tab" id="attendee-settings">
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label for="attendee_registration"><?php esc_html_e( 'Enable Attendee Registration', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( "Enable attendee registration for unique tickets and attendee tracking.", 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="attendee_registration"
                                           type="checkbox" <?php echo esc_html( $attendee_registration ); ?>
                                           class="etn-admin-control-input" name="attendee_registration"/>
                                    <label for="attendee_registration" class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label for="reg_require_phone"><?php esc_html_e( 'Require Phone for Registration', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( "Require attendee phone number for ticket purchase.", 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="reg_require_phone"
                                           type="checkbox" <?php echo esc_html( $reg_require_phone ); ?>
                                           class="etn-admin-control-input" name="reg_require_phone"/>
                                    <label for="reg_require_phone" class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label for="reg_require_email"><?php esc_html_e( 'Require E-mail for Registration', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( "Require attendee e-mail number for ticket purchase.", 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="reg_require_email"
                                           type="checkbox" <?php echo esc_html( $reg_require_email ); ?>
                                           class="etn-admin-control-input" name="reg_require_email"/>
                                    <label for="reg_require_email" class="etn_switch_button_label"></label>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label for="attendee_remove"><?php esc_html_e( 'Remove Attendees After Failed Payment', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( "Attendees with failed status will be removed from attendee list. Given number will be calculated in days.", 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id='attendee_remove' type="number"
                                           value="<?php echo ( $attendee_remove ) ? esc_html( $attendee_remove ) : 30; ?>"
                                           class="etn-setting-input attr-form-control etn-recaptcha-secret-key"
                                           name="attendee_remove"
                                           placeholder="<?php esc_html_e( 'no. of days', 'eventin' ); ?>" min="1"/>
                                </div>
                            </div>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label for="disable_ticket_email"><?php esc_html_e( 'Disable Ticket Email', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( "Disable sending separate email with unique attendee ticket PDF and attendee information update option.", 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input id="disable_ticket_email"
                                           type="checkbox" <?php echo esc_html( $disable_ticket_email ); ?>
                                           class="etn-admin-control-input" name="disable_ticket_email"/>
                                    <label for="disable_ticket_email" class="etn_switch_button_label"></label>
                                </div>
                            </div>

                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label>
										<?php esc_html_e( 'Attendee Ticket Style', 'eventin' ); ?>
                                    </label>
                                    <div class="etn-desc"> <?php esc_html_e( 'You  can set attendee ticket veriation style', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
									<?php $disabled = ! class_exists( 'Wpeventin_Pro' ) ? 'disabled' : ''; ?>
                                    <select value='style-1' id="attendee_ticket_style" name='attendee_ticket_style'
                                            class="etn-setting-input attr-form-control etn-settings-select">
                                        <option value='style-1' <?php echo esc_html( selected( $attendee_ticket_style, 'style-1', false ) ); ?>> <?php echo esc_html__( 'Style 1', 'eventin' ); ?> </option>
                                        <option <?php echo esc_attr( $disabled ) ?>
                                                value='style-2' <?php echo esc_html( selected( $attendee_ticket_style, 'style-2', false ) ); ?>> <?php echo esc_html( 'Style 2 (Pro)', 'eventin' ); ?> </option>
                                    </select>
                                </div>
                            </div>

							<?php
							if ( is_array( $settings_arr ) && isset( $settings_arr['pro_attendee_options'] ) && file_exists( $settings_arr['pro_attendee_options'] ) ) {
								include_once $settings_arr['pro_attendee_options'];
							}
							?>
                        </div>

                        <div class="etn-settings-tab" id="email-settings">
							<?php do_action( 'etn_before_notification_settings' ); ?>
                            <div class="attr-form-group etn-label-item">
                                <div class="etn-label">
                                    <label class="etn-setting-label"
                                           for="admin_mail_address"><?php esc_html_e( 'Admin Email Address', 'eventin' ); ?></label>
                                    <div class="etn-desc"> <?php esc_html_e( 'Email will be sent to users from this mail address', 'eventin' ); ?> </div>
                                </div>
                                <div class="etn-meta">
                                    <input type="text" name="admin_mail_address"
                                           value="<?php echo esc_attr( isset( $settings['admin_mail_address'] ) && $settings['admin_mail_address'] !== '' ? $settings['admin_mail_address'] : wp_get_current_user()->data->user_email ); ?>"
                                           class="etn-setting-input attr-form-control etn-recaptcha-secret-key"
                                           placeholder="<?php esc_html_e( 'Admin Email Address', 'eventin' ); ?>">
                                </div>
                            </div>
							<?php do_action( 'etn_after_notification_settings' ); ?>
                        </div>

                    </div>
                </div>
				<?php
				if ( is_array( $settings_arr ) && isset( $settings_arr['remainder_email'] ) && file_exists( $settings_arr['remainder_email'] ) ) {
					include_once $settings_arr['remainder_email'];
				}
				?>
            </div>
        </div>
    </div>
</div>
<!-- ./End Events Settings Tab -->