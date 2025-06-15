import Fuse from 'fuse.js';

/** A glyph of a Nerd font, see https://www.nerdfonts.com. */
export type NerdFontGlyph = {
  /**
   * The human-readable name of the glyph.
   */
  name: string;
  /**
   * The hexadecimal Unicode code point of the glyph.
   */
  code: number;
};

/**
 * {@linkcode NERD_FONT_GLYPHS} is a list of all glyphs in Nerd fonts.
 */
export const NERD_FONT_GLYPHS: NerdFontGlyph[] = [
  {
    name: 'nf-cod-account',
    code: 0xeb99,
  },
  {
    name: 'nf-cod-activate_breakpoints',
    code: 0xea97,
  },
  {
    name: 'nf-cod-add',
    code: 0xea60,
  },
  {
    name: 'nf-cod-archive',
    code: 0xea98,
  },
  {
    name: 'nf-cod-arrow_both',
    code: 0xea99,
  },
  {
    name: 'nf-cod-arrow_circle_down',
    code: 0xebfc,
  },
  {
    name: 'nf-cod-arrow_circle_left',
    code: 0xebfd,
  },
  {
    name: 'nf-cod-arrow_circle_right',
    code: 0xebfe,
  },
  {
    name: 'nf-cod-arrow_circle_up',
    code: 0xebff,
  },
  {
    name: 'nf-cod-arrow_down',
    code: 0xea9a,
  },
  {
    name: 'nf-cod-arrow_left',
    code: 0xea9b,
  },
  {
    name: 'nf-cod-arrow_right',
    code: 0xea9c,
  },
  {
    name: 'nf-cod-arrow_small_down',
    code: 0xea9d,
  },
  {
    name: 'nf-cod-arrow_small_left',
    code: 0xea9e,
  },
  {
    name: 'nf-cod-arrow_small_right',
    code: 0xea9f,
  },
  {
    name: 'nf-cod-arrow_small_up',
    code: 0xeaa0,
  },
  {
    name: 'nf-cod-arrow_swap',
    code: 0xebcb,
  },
  {
    name: 'nf-cod-arrow_up',
    code: 0xeaa1,
  },
  {
    name: 'nf-cod-azure',
    code: 0xebd8,
  },
  {
    name: 'nf-cod-azure_devops',
    code: 0xebe8,
  },
  {
    name: 'nf-cod-beaker',
    code: 0xea79,
  },
  {
    name: 'nf-cod-beaker_stop',
    code: 0xebe1,
  },
  {
    name: 'nf-cod-bell',
    code: 0xeaa2,
  },
  {
    name: 'nf-cod-bell_dot',
    code: 0xeb9a,
  },
  {
    name: 'nf-cod-bell_slash',
    code: 0xec08,
  },
  {
    name: 'nf-cod-bell_slash_dot',
    code: 0xec09,
  },
  {
    name: 'nf-cod-blank',
    code: 0xec03,
  },
  {
    name: 'nf-cod-bold',
    code: 0xeaa3,
  },
  {
    name: 'nf-cod-book',
    code: 0xeaa4,
  },
  {
    name: 'nf-cod-bookmark',
    code: 0xeaa5,
  },
  {
    name: 'nf-cod-bracket_dot',
    code: 0xebe5,
  },
  {
    name: 'nf-cod-bracket_error',
    code: 0xebe6,
  },
  {
    name: 'nf-cod-briefcase',
    code: 0xeaac,
  },
  {
    name: 'nf-cod-broadcast',
    code: 0xeaad,
  },
  {
    name: 'nf-cod-browser',
    code: 0xeaae,
  },
  {
    name: 'nf-cod-bug',
    code: 0xeaaf,
  },
  {
    name: 'nf-cod-calendar',
    code: 0xeab0,
  },
  {
    name: 'nf-cod-call_incoming',
    code: 0xeb92,
  },
  {
    name: 'nf-cod-call_outgoing',
    code: 0xeb93,
  },
  {
    name: 'nf-cod-case_sensitive',
    code: 0xeab1,
  },
  {
    name: 'nf-cod-check',
    code: 0xeab2,
  },
  {
    name: 'nf-cod-check_all',
    code: 0xebb1,
  },
  {
    name: 'nf-cod-checklist',
    code: 0xeab3,
  },
  {
    name: 'nf-cod-chevron_down',
    code: 0xeab4,
  },
  {
    name: 'nf-cod-chevron_left',
    code: 0xeab5,
  },
  {
    name: 'nf-cod-chevron_right',
    code: 0xeab6,
  },
  {
    name: 'nf-cod-chevron_up',
    code: 0xeab7,
  },
  {
    name: 'nf-cod-chip',
    code: 0xec19,
  },
  {
    name: 'nf-cod-chrome_close',
    code: 0xeab8,
  },
  {
    name: 'nf-cod-chrome_maximize',
    code: 0xeab9,
  },
  {
    name: 'nf-cod-chrome_minimize',
    code: 0xeaba,
  },
  {
    name: 'nf-cod-chrome_restore',
    code: 0xeabb,
  },
  {
    name: 'nf-cod-circle',
    code: 0xeabc,
  },
  {
    name: 'nf-cod-circle_filled',
    code: 0xea71,
  },
  {
    name: 'nf-cod-circle_large',
    code: 0xebb5,
  },
  {
    name: 'nf-cod-circle_large_filled',
    code: 0xebb4,
  },
  {
    name: 'nf-cod-circle_slash',
    code: 0xeabd,
  },
  {
    name: 'nf-cod-circle_small',
    code: 0xec07,
  },
  {
    name: 'nf-cod-circle_small_filled',
    code: 0xeb8a,
  },
  {
    name: 'nf-cod-circuit_board',
    code: 0xeabe,
  },
  {
    name: 'nf-cod-clear_all',
    code: 0xeabf,
  },
  {
    name: 'nf-cod-clippy',
    code: 0xeac0,
  },
  {
    name: 'nf-cod-close',
    code: 0xea76,
  },
  {
    name: 'nf-cod-close_all',
    code: 0xeac1,
  },
  {
    name: 'nf-cod-cloud',
    code: 0xebaa,
  },
  {
    name: 'nf-cod-cloud_download',
    code: 0xeac2,
  },
  {
    name: 'nf-cod-cloud_upload',
    code: 0xeac3,
  },
  {
    name: 'nf-cod-code',
    code: 0xeac4,
  },
  {
    name: 'nf-cod-coffee',
    code: 0xec15,
  },
  {
    name: 'nf-cod-collapse_all',
    code: 0xeac5,
  },
  {
    name: 'nf-cod-color_mode',
    code: 0xeac6,
  },
  {
    name: 'nf-cod-combine',
    code: 0xebb6,
  },
  {
    name: 'nf-cod-comment',
    code: 0xea6b,
  },
  {
    name: 'nf-cod-comment_discussion',
    code: 0xeac7,
  },
  {
    name: 'nf-cod-comment_draft',
    code: 0xec0e,
  },
  {
    name: 'nf-cod-comment_unresolved',
    code: 0xec0a,
  },
  {
    name: 'nf-cod-compass',
    code: 0xebd5,
  },
  {
    name: 'nf-cod-compass_active',
    code: 0xebd7,
  },
  {
    name: 'nf-cod-compass_dot',
    code: 0xebd6,
  },
  {
    name: 'nf-cod-copilot',
    code: 0xec1e,
  },
  {
    name: 'nf-cod-copy',
    code: 0xebcc,
  },
  {
    name: 'nf-cod-credit_card',
    code: 0xeac9,
  },
  {
    name: 'nf-cod-dash',
    code: 0xeacc,
  },
  {
    name: 'nf-cod-dashboard',
    code: 0xeacd,
  },
  {
    name: 'nf-cod-database',
    code: 0xeace,
  },
  {
    name: 'nf-cod-debug',
    code: 0xead8,
  },
  {
    name: 'nf-cod-debug_all',
    code: 0xebdc,
  },
  {
    name: 'nf-cod-debug_alt',
    code: 0xeb91,
  },
  {
    name: 'nf-cod-debug_alt_small',
    code: 0xeba8,
  },
  {
    name: 'nf-cod-debug_breakpoint_conditional',
    code: 0xeaa7,
  },
  {
    name: 'nf-cod-debug_breakpoint_conditional_unverified',
    code: 0xeaa6,
  },
  {
    name: 'nf-cod-debug_breakpoint_data',
    code: 0xeaa9,
  },
  {
    name: 'nf-cod-debug_breakpoint_data_unverified',
    code: 0xeaa8,
  },
  {
    name: 'nf-cod-debug_breakpoint_function',
    code: 0xeb88,
  },
  {
    name: 'nf-cod-debug_breakpoint_function_unverified',
    code: 0xeb87,
  },
  {
    name: 'nf-cod-debug_breakpoint_log',
    code: 0xeaab,
  },
  {
    name: 'nf-cod-debug_breakpoint_log_unverified',
    code: 0xeaaa,
  },
  {
    name: 'nf-cod-debug_breakpoint_unsupported',
    code: 0xeb8c,
  },
  {
    name: 'nf-cod-debug_console',
    code: 0xeb9b,
  },
  {
    name: 'nf-cod-debug_continue',
    code: 0xeacf,
  },
  {
    name: 'nf-cod-debug_continue_small',
    code: 0xebe0,
  },
  {
    name: 'nf-cod-debug_coverage',
    code: 0xebdd,
  },
  {
    name: 'nf-cod-debug_disconnect',
    code: 0xead0,
  },
  {
    name: 'nf-cod-debug_line_by_line',
    code: 0xebd0,
  },
  {
    name: 'nf-cod-debug_pause',
    code: 0xead1,
  },
  {
    name: 'nf-cod-debug_rerun',
    code: 0xebc0,
  },
  {
    name: 'nf-cod-debug_restart',
    code: 0xead2,
  },
  {
    name: 'nf-cod-debug_restart_frame',
    code: 0xeb90,
  },
  {
    name: 'nf-cod-debug_reverse_continue',
    code: 0xeb8e,
  },
  {
    name: 'nf-cod-debug_stackframe',
    code: 0xeb8b,
  },
  {
    name: 'nf-cod-debug_stackframe_active',
    code: 0xeb89,
  },
  {
    name: 'nf-cod-debug_start',
    code: 0xead3,
  },
  {
    name: 'nf-cod-debug_step_back',
    code: 0xeb8f,
  },
  {
    name: 'nf-cod-debug_step_into',
    code: 0xead4,
  },
  {
    name: 'nf-cod-debug_step_out',
    code: 0xead5,
  },
  {
    name: 'nf-cod-debug_step_over',
    code: 0xead6,
  },
  {
    name: 'nf-cod-debug_stop',
    code: 0xead7,
  },
  {
    name: 'nf-cod-desktop_download',
    code: 0xea78,
  },
  {
    name: 'nf-cod-device_camera',
    code: 0xeada,
  },
  {
    name: 'nf-cod-device_camera_video',
    code: 0xead9,
  },
  {
    name: 'nf-cod-device_mobile',
    code: 0xeadb,
  },
  {
    name: 'nf-cod-diff',
    code: 0xeae1,
  },
  {
    name: 'nf-cod-diff_added',
    code: 0xeadc,
  },
  {
    name: 'nf-cod-diff_ignored',
    code: 0xeadd,
  },
  {
    name: 'nf-cod-diff_modified',
    code: 0xeade,
  },
  {
    name: 'nf-cod-diff_removed',
    code: 0xeadf,
  },
  {
    name: 'nf-cod-diff_renamed',
    code: 0xeae0,
  },
  {
    name: 'nf-cod-discard',
    code: 0xeae2,
  },
  {
    name: 'nf-cod-edit',
    code: 0xea73,
  },
  {
    name: 'nf-cod-editor_layout',
    code: 0xeae3,
  },
  {
    name: 'nf-cod-ellipsis',
    code: 0xea7c,
  },
  {
    name: 'nf-cod-empty_window',
    code: 0xeae4,
  },
  {
    name: 'nf-cod-error',
    code: 0xea87,
  },
  {
    name: 'nf-cod-error_small',
    code: 0xebfb,
  },
  {
    name: 'nf-cod-exclude',
    code: 0xeae5,
  },
  {
    name: 'nf-cod-expand_all',
    code: 0xeb95,
  },
  {
    name: 'nf-cod-export',
    code: 0xebac,
  },
  {
    name: 'nf-cod-extensions',
    code: 0xeae6,
  },
  {
    name: 'nf-cod-eye',
    code: 0xea70,
  },
  {
    name: 'nf-cod-eye_closed',
    code: 0xeae7,
  },
  {
    name: 'nf-cod-feedback',
    code: 0xeb96,
  },
  {
    name: 'nf-cod-file',
    code: 0xea7b,
  },
  {
    name: 'nf-cod-file_binary',
    code: 0xeae8,
  },
  {
    name: 'nf-cod-file_code',
    code: 0xeae9,
  },
  {
    name: 'nf-cod-file_media',
    code: 0xeaea,
  },
  {
    name: 'nf-cod-file_pdf',
    code: 0xeaeb,
  },
  {
    name: 'nf-cod-file_submodule',
    code: 0xeaec,
  },
  {
    name: 'nf-cod-file_symlink_directory',
    code: 0xeaed,
  },
  {
    name: 'nf-cod-file_symlink_file',
    code: 0xeaee,
  },
  {
    name: 'nf-cod-file_zip',
    code: 0xeaef,
  },
  {
    name: 'nf-cod-files',
    code: 0xeaf0,
  },
  {
    name: 'nf-cod-filter',
    code: 0xeaf1,
  },
  {
    name: 'nf-cod-filter_filled',
    code: 0xebce,
  },
  {
    name: 'nf-cod-flame',
    code: 0xeaf2,
  },
  {
    name: 'nf-cod-fold',
    code: 0xeaf5,
  },
  {
    name: 'nf-cod-fold_down',
    code: 0xeaf3,
  },
  {
    name: 'nf-cod-fold_up',
    code: 0xeaf4,
  },
  {
    name: 'nf-cod-folder',
    code: 0xea83,
  },
  {
    name: 'nf-cod-folder_active',
    code: 0xeaf6,
  },
  {
    name: 'nf-cod-folder_library',
    code: 0xebdf,
  },
  {
    name: 'nf-cod-folder_opened',
    code: 0xeaf7,
  },
  {
    name: 'nf-cod-game',
    code: 0xec17,
  },
  {
    name: 'nf-cod-gear',
    code: 0xeaf8,
  },
  {
    name: 'nf-cod-gift',
    code: 0xeaf9,
  },
  {
    name: 'nf-cod-gist_secret',
    code: 0xeafa,
  },
  {
    name: 'nf-cod-git_commit',
    code: 0xeafc,
  },
  {
    name: 'nf-cod-git_compare',
    code: 0xeafd,
  },
  {
    name: 'nf-cod-git_fetch',
    code: 0xec1d,
  },
  {
    name: 'nf-cod-git_merge',
    code: 0xeafe,
  },
  {
    name: 'nf-cod-git_pull_request',
    code: 0xea64,
  },
  {
    name: 'nf-cod-git_pull_request_closed',
    code: 0xebda,
  },
  {
    name: 'nf-cod-git_pull_request_create',
    code: 0xebbc,
  },
  {
    name: 'nf-cod-git_pull_request_draft',
    code: 0xebdb,
  },
  {
    name: 'nf-cod-git_pull_request_go_to_changes',
    code: 0xec0b,
  },
  {
    name: 'nf-cod-git_pull_request_new_changes',
    code: 0xec0c,
  },
  {
    name: 'nf-cod-github',
    code: 0xea84,
  },
  {
    name: 'nf-cod-github_action',
    code: 0xeaff,
  },
  {
    name: 'nf-cod-github_alt',
    code: 0xeb00,
  },
  {
    name: 'nf-cod-github_inverted',
    code: 0xeba1,
  },
  {
    name: 'nf-cod-globe',
    code: 0xeb01,
  },
  {
    name: 'nf-cod-go_to_file',
    code: 0xea94,
  },
  {
    name: 'nf-cod-grabber',
    code: 0xeb02,
  },
  {
    name: 'nf-cod-graph',
    code: 0xeb03,
  },
  {
    name: 'nf-cod-graph_left',
    code: 0xebad,
  },
  {
    name: 'nf-cod-graph_line',
    code: 0xebe2,
  },
  {
    name: 'nf-cod-graph_scatter',
    code: 0xebe3,
  },
  {
    name: 'nf-cod-gripper',
    code: 0xeb04,
  },
  {
    name: 'nf-cod-group_by_ref_type',
    code: 0xeb97,
  },
  {
    name: 'nf-cod-heart',
    code: 0xeb05,
  },
  {
    name: 'nf-cod-heart_filled',
    code: 0xec04,
  },
  {
    name: 'nf-cod-history',
    code: 0xea82,
  },
  {
    name: 'nf-cod-home',
    code: 0xeb06,
  },
  {
    name: 'nf-cod-horizontal_rule',
    code: 0xeb07,
  },
  {
    name: 'nf-cod-hubot',
    code: 0xeb08,
  },
  {
    name: 'nf-cod-inbox',
    code: 0xeb09,
  },
  {
    name: 'nf-cod-indent',
    code: 0xebf9,
  },
  {
    name: 'nf-cod-info',
    code: 0xea74,
  },
  {
    name: 'nf-cod-insert',
    code: 0xec11,
  },
  {
    name: 'nf-cod-inspect',
    code: 0xebd1,
  },
  {
    name: 'nf-cod-issue_draft',
    code: 0xebd9,
  },
  {
    name: 'nf-cod-issue_reopened',
    code: 0xeb0b,
  },
  {
    name: 'nf-cod-issues',
    code: 0xeb0c,
  },
  {
    name: 'nf-cod-italic',
    code: 0xeb0d,
  },
  {
    name: 'nf-cod-jersey',
    code: 0xeb0e,
  },
  {
    name: 'nf-cod-json',
    code: 0xeb0f,
  },
  {
    name: 'nf-cod-kebab_vertical',
    code: 0xeb10,
  },
  {
    name: 'nf-cod-key',
    code: 0xeb11,
  },
  {
    name: 'nf-cod-law',
    code: 0xeb12,
  },
  {
    name: 'nf-cod-layers',
    code: 0xebd2,
  },
  {
    name: 'nf-cod-layers_active',
    code: 0xebd4,
  },
  {
    name: 'nf-cod-layers_dot',
    code: 0xebd3,
  },
  {
    name: 'nf-cod-layout',
    code: 0xebeb,
  },
  {
    name: 'nf-cod-layout_activitybar_left',
    code: 0xebec,
  },
  {
    name: 'nf-cod-layout_activitybar_right',
    code: 0xebed,
  },
  {
    name: 'nf-cod-layout_centered',
    code: 0xebf7,
  },
  {
    name: 'nf-cod-layout_menubar',
    code: 0xebf6,
  },
  {
    name: 'nf-cod-layout_panel',
    code: 0xebf2,
  },
  {
    name: 'nf-cod-layout_panel_center',
    code: 0xebef,
  },
  {
    name: 'nf-cod-layout_panel_justify',
    code: 0xebf0,
  },
  {
    name: 'nf-cod-layout_panel_left',
    code: 0xebee,
  },
  {
    name: 'nf-cod-layout_panel_off',
    code: 0xec01,
  },
  {
    name: 'nf-cod-layout_panel_right',
    code: 0xebf1,
  },
  {
    name: 'nf-cod-layout_sidebar_left',
    code: 0xebf3,
  },
  {
    name: 'nf-cod-layout_sidebar_left_off',
    code: 0xec02,
  },
  {
    name: 'nf-cod-layout_sidebar_right',
    code: 0xebf4,
  },
  {
    name: 'nf-cod-layout_sidebar_right_off',
    code: 0xec00,
  },
  {
    name: 'nf-cod-layout_statusbar',
    code: 0xebf5,
  },
  {
    name: 'nf-cod-library',
    code: 0xeb9c,
  },
  {
    name: 'nf-cod-lightbulb',
    code: 0xea61,
  },
  {
    name: 'nf-cod-lightbulb_autofix',
    code: 0xeb13,
  },
  {
    name: 'nf-cod-link',
    code: 0xeb15,
  },
  {
    name: 'nf-cod-link_external',
    code: 0xeb14,
  },
  {
    name: 'nf-cod-list_filter',
    code: 0xeb83,
  },
  {
    name: 'nf-cod-list_flat',
    code: 0xeb84,
  },
  {
    name: 'nf-cod-list_ordered',
    code: 0xeb16,
  },
  {
    name: 'nf-cod-list_selection',
    code: 0xeb85,
  },
  {
    name: 'nf-cod-list_tree',
    code: 0xeb86,
  },
  {
    name: 'nf-cod-list_unordered',
    code: 0xeb17,
  },
  {
    name: 'nf-cod-live_share',
    code: 0xeb18,
  },
  {
    name: 'nf-cod-loading',
    code: 0xeb19,
  },
  {
    name: 'nf-cod-location',
    code: 0xeb1a,
  },
  {
    name: 'nf-cod-lock',
    code: 0xea75,
  },
  {
    name: 'nf-cod-lock_small',
    code: 0xebe7,
  },
  {
    name: 'nf-cod-magnet',
    code: 0xebae,
  },
  {
    name: 'nf-cod-mail',
    code: 0xeb1c,
  },
  {
    name: 'nf-cod-mail_read',
    code: 0xeb1b,
  },
  {
    name: 'nf-cod-map',
    code: 0xec05,
  },
  {
    name: 'nf-cod-map_filled',
    code: 0xec06,
  },
  {
    name: 'nf-cod-markdown',
    code: 0xeb1d,
  },
  {
    name: 'nf-cod-megaphone',
    code: 0xeb1e,
  },
  {
    name: 'nf-cod-mention',
    code: 0xeb1f,
  },
  {
    name: 'nf-cod-menu',
    code: 0xeb94,
  },
  {
    name: 'nf-cod-merge',
    code: 0xebab,
  },
  {
    name: 'nf-cod-mic',
    code: 0xec12,
  },
  {
    name: 'nf-cod-mic_filled',
    code: 0xec1c,
  },
  {
    name: 'nf-cod-milestone',
    code: 0xeb20,
  },
  {
    name: 'nf-cod-mirror',
    code: 0xea69,
  },
  {
    name: 'nf-cod-mortar_board',
    code: 0xeb21,
  },
  {
    name: 'nf-cod-move',
    code: 0xeb22,
  },
  {
    name: 'nf-cod-multiple_windows',
    code: 0xeb23,
  },
  {
    name: 'nf-cod-music',
    code: 0xec1b,
  },
  {
    name: 'nf-cod-mute',
    code: 0xeb24,
  },
  {
    name: 'nf-cod-new_file',
    code: 0xea7f,
  },
  {
    name: 'nf-cod-new_folder',
    code: 0xea80,
  },
  {
    name: 'nf-cod-newline',
    code: 0xebea,
  },
  {
    name: 'nf-cod-no_newline',
    code: 0xeb25,
  },
  {
    name: 'nf-cod-note',
    code: 0xeb26,
  },
  {
    name: 'nf-cod-notebook',
    code: 0xebaf,
  },
  {
    name: 'nf-cod-notebook_template',
    code: 0xebbf,
  },
  {
    name: 'nf-cod-octoface',
    code: 0xeb27,
  },
  {
    name: 'nf-cod-open_preview',
    code: 0xeb28,
  },
  {
    name: 'nf-cod-organization',
    code: 0xea7e,
  },
  {
    name: 'nf-cod-output',
    code: 0xeb9d,
  },
  {
    name: 'nf-cod-package',
    code: 0xeb29,
  },
  {
    name: 'nf-cod-paintcan',
    code: 0xeb2a,
  },
  {
    name: 'nf-cod-pass',
    code: 0xeba4,
  },
  {
    name: 'nf-cod-pass_filled',
    code: 0xebb3,
  },
  {
    name: 'nf-cod-person',
    code: 0xea67,
  },
  {
    name: 'nf-cod-person_add',
    code: 0xebcd,
  },
  {
    name: 'nf-cod-piano',
    code: 0xec1a,
  },
  {
    name: 'nf-cod-pie_chart',
    code: 0xebe4,
  },
  {
    name: 'nf-cod-pin',
    code: 0xeb2b,
  },
  {
    name: 'nf-cod-pinned',
    code: 0xeba0,
  },
  {
    name: 'nf-cod-pinned_dirty',
    code: 0xebb2,
  },
  {
    name: 'nf-cod-play',
    code: 0xeb2c,
  },
  {
    name: 'nf-cod-play_circle',
    code: 0xeba6,
  },
  {
    name: 'nf-cod-plug',
    code: 0xeb2d,
  },
  {
    name: 'nf-cod-preserve_case',
    code: 0xeb2e,
  },
  {
    name: 'nf-cod-preview',
    code: 0xeb2f,
  },
  {
    name: 'nf-cod-primitive_square',
    code: 0xea72,
  },
  {
    name: 'nf-cod-project',
    code: 0xeb30,
  },
  {
    name: 'nf-cod-pulse',
    code: 0xeb31,
  },
  {
    name: 'nf-cod-question',
    code: 0xeb32,
  },
  {
    name: 'nf-cod-quote',
    code: 0xeb33,
  },
  {
    name: 'nf-cod-radio_tower',
    code: 0xeb34,
  },
  {
    name: 'nf-cod-reactions',
    code: 0xeb35,
  },
  {
    name: 'nf-cod-record',
    code: 0xeba7,
  },
  {
    name: 'nf-cod-record_keys',
    code: 0xea65,
  },
  {
    name: 'nf-cod-record_small',
    code: 0xebfa,
  },
  {
    name: 'nf-cod-redo',
    code: 0xebb0,
  },
  {
    name: 'nf-cod-references',
    code: 0xeb36,
  },
  {
    name: 'nf-cod-refresh',
    code: 0xeb37,
  },
  {
    name: 'nf-cod-regex',
    code: 0xeb38,
  },
  {
    name: 'nf-cod-remote',
    code: 0xeb3a,
  },
  {
    name: 'nf-cod-remote_explorer',
    code: 0xeb39,
  },
  {
    name: 'nf-cod-remove',
    code: 0xeb3b,
  },
  {
    name: 'nf-cod-replace',
    code: 0xeb3d,
  },
  {
    name: 'nf-cod-replace_all',
    code: 0xeb3c,
  },
  {
    name: 'nf-cod-reply',
    code: 0xea7d,
  },
  {
    name: 'nf-cod-repo',
    code: 0xea62,
  },
  {
    name: 'nf-cod-repo_clone',
    code: 0xeb3e,
  },
  {
    name: 'nf-cod-repo_force_push',
    code: 0xeb3f,
  },
  {
    name: 'nf-cod-repo_forked',
    code: 0xea63,
  },
  {
    name: 'nf-cod-repo_pull',
    code: 0xeb40,
  },
  {
    name: 'nf-cod-repo_push',
    code: 0xeb41,
  },
  {
    name: 'nf-cod-report',
    code: 0xeb42,
  },
  {
    name: 'nf-cod-request_changes',
    code: 0xeb43,
  },
  {
    name: 'nf-cod-rocket',
    code: 0xeb44,
  },
  {
    name: 'nf-cod-root_folder',
    code: 0xeb46,
  },
  {
    name: 'nf-cod-root_folder_opened',
    code: 0xeb45,
  },
  {
    name: 'nf-cod-rss',
    code: 0xeb47,
  },
  {
    name: 'nf-cod-ruby',
    code: 0xeb48,
  },
  {
    name: 'nf-cod-run_above',
    code: 0xebbd,
  },
  {
    name: 'nf-cod-run_all',
    code: 0xeb9e,
  },
  {
    name: 'nf-cod-run_below',
    code: 0xebbe,
  },
  {
    name: 'nf-cod-run_errors',
    code: 0xebde,
  },
  {
    name: 'nf-cod-save',
    code: 0xeb4b,
  },
  {
    name: 'nf-cod-save_all',
    code: 0xeb49,
  },
  {
    name: 'nf-cod-save_as',
    code: 0xeb4a,
  },
  {
    name: 'nf-cod-screen_full',
    code: 0xeb4c,
  },
  {
    name: 'nf-cod-screen_normal',
    code: 0xeb4d,
  },
  {
    name: 'nf-cod-search',
    code: 0xea6d,
  },
  {
    name: 'nf-cod-search_fuzzy',
    code: 0xec0d,
  },
  {
    name: 'nf-cod-search_stop',
    code: 0xeb4e,
  },
  {
    name: 'nf-cod-send',
    code: 0xec0f,
  },
  {
    name: 'nf-cod-server',
    code: 0xeb50,
  },
  {
    name: 'nf-cod-server_environment',
    code: 0xeba3,
  },
  {
    name: 'nf-cod-server_process',
    code: 0xeba2,
  },
  {
    name: 'nf-cod-settings',
    code: 0xeb52,
  },
  {
    name: 'nf-cod-settings_gear',
    code: 0xeb51,
  },
  {
    name: 'nf-cod-shield',
    code: 0xeb53,
  },
  {
    name: 'nf-cod-sign_in',
    code: 0xea6f,
  },
  {
    name: 'nf-cod-sign_out',
    code: 0xea6e,
  },
  {
    name: 'nf-cod-smiley',
    code: 0xeb54,
  },
  {
    name: 'nf-cod-snake',
    code: 0xec16,
  },
  {
    name: 'nf-cod-sort_precedence',
    code: 0xeb55,
  },
  {
    name: 'nf-cod-source_control',
    code: 0xea68,
  },
  {
    name: 'nf-cod-sparkle',
    code: 0xec10,
  },
  {
    name: 'nf-cod-split_horizontal',
    code: 0xeb56,
  },
  {
    name: 'nf-cod-split_vertical',
    code: 0xeb57,
  },
  {
    name: 'nf-cod-squirrel',
    code: 0xeb58,
  },
  {
    name: 'nf-cod-star_empty',
    code: 0xea6a,
  },
  {
    name: 'nf-cod-star_full',
    code: 0xeb59,
  },
  {
    name: 'nf-cod-star_half',
    code: 0xeb5a,
  },
  {
    name: 'nf-cod-stop_circle',
    code: 0xeba5,
  },
  {
    name: 'nf-cod-symbol_array',
    code: 0xea8a,
  },
  {
    name: 'nf-cod-symbol_boolean',
    code: 0xea8f,
  },
  {
    name: 'nf-cod-symbol_class',
    code: 0xeb5b,
  },
  {
    name: 'nf-cod-symbol_color',
    code: 0xeb5c,
  },
  {
    name: 'nf-cod-symbol_constant',
    code: 0xeb5d,
  },
  {
    name: 'nf-cod-symbol_enum',
    code: 0xea95,
  },
  {
    name: 'nf-cod-symbol_enum_member',
    code: 0xeb5e,
  },
  {
    name: 'nf-cod-symbol_event',
    code: 0xea86,
  },
  {
    name: 'nf-cod-symbol_field',
    code: 0xeb5f,
  },
  {
    name: 'nf-cod-symbol_file',
    code: 0xeb60,
  },
  {
    name: 'nf-cod-symbol_interface',
    code: 0xeb61,
  },
  {
    name: 'nf-cod-symbol_key',
    code: 0xea93,
  },
  {
    name: 'nf-cod-symbol_keyword',
    code: 0xeb62,
  },
  {
    name: 'nf-cod-symbol_method',
    code: 0xea8c,
  },
  {
    name: 'nf-cod-symbol_misc',
    code: 0xeb63,
  },
  {
    name: 'nf-cod-symbol_namespace',
    code: 0xea8b,
  },
  {
    name: 'nf-cod-symbol_numeric',
    code: 0xea90,
  },
  {
    name: 'nf-cod-symbol_operator',
    code: 0xeb64,
  },
  {
    name: 'nf-cod-symbol_parameter',
    code: 0xea92,
  },
  {
    name: 'nf-cod-symbol_property',
    code: 0xeb65,
  },
  {
    name: 'nf-cod-symbol_ruler',
    code: 0xea96,
  },
  {
    name: 'nf-cod-symbol_snippet',
    code: 0xeb66,
  },
  {
    name: 'nf-cod-symbol_string',
    code: 0xeb8d,
  },
  {
    name: 'nf-cod-symbol_structure',
    code: 0xea91,
  },
  {
    name: 'nf-cod-symbol_variable',
    code: 0xea88,
  },
  {
    name: 'nf-cod-sync',
    code: 0xea77,
  },
  {
    name: 'nf-cod-sync_ignored',
    code: 0xeb9f,
  },
  {
    name: 'nf-cod-table',
    code: 0xebb7,
  },
  {
    name: 'nf-cod-tag',
    code: 0xea66,
  },
  {
    name: 'nf-cod-target',
    code: 0xebf8,
  },
  {
    name: 'nf-cod-tasklist',
    code: 0xeb67,
  },
  {
    name: 'nf-cod-telescope',
    code: 0xeb68,
  },
  {
    name: 'nf-cod-terminal',
    code: 0xea85,
  },
  {
    name: 'nf-cod-terminal_bash',
    code: 0xebca,
  },
  {
    name: 'nf-cod-terminal_cmd',
    code: 0xebc4,
  },
  {
    name: 'nf-cod-terminal_debian',
    code: 0xebc5,
  },
  {
    name: 'nf-cod-terminal_linux',
    code: 0xebc6,
  },
  {
    name: 'nf-cod-terminal_powershell',
    code: 0xebc7,
  },
  {
    name: 'nf-cod-terminal_tmux',
    code: 0xebc8,
  },
  {
    name: 'nf-cod-terminal_ubuntu',
    code: 0xebc9,
  },
  {
    name: 'nf-cod-text_size',
    code: 0xeb69,
  },
  {
    name: 'nf-cod-three_bars',
    code: 0xeb6a,
  },
  {
    name: 'nf-cod-thumbsdown',
    code: 0xeb6b,
  },
  {
    name: 'nf-cod-thumbsdown_filled',
    code: 0xec13,
  },
  {
    name: 'nf-cod-thumbsup',
    code: 0xeb6c,
  },
  {
    name: 'nf-cod-thumbsup_filled',
    code: 0xec14,
  },
  {
    name: 'nf-cod-tools',
    code: 0xeb6d,
  },
  {
    name: 'nf-cod-trash',
    code: 0xea81,
  },
  {
    name: 'nf-cod-triangle_down',
    code: 0xeb6e,
  },
  {
    name: 'nf-cod-triangle_left',
    code: 0xeb6f,
  },
  {
    name: 'nf-cod-triangle_right',
    code: 0xeb70,
  },
  {
    name: 'nf-cod-triangle_up',
    code: 0xeb71,
  },
  {
    name: 'nf-cod-twitter',
    code: 0xeb72,
  },
  {
    name: 'nf-cod-type_hierarchy',
    code: 0xebb9,
  },
  {
    name: 'nf-cod-type_hierarchy_sub',
    code: 0xebba,
  },
  {
    name: 'nf-cod-type_hierarchy_super',
    code: 0xebbb,
  },
  {
    name: 'nf-cod-unfold',
    code: 0xeb73,
  },
  {
    name: 'nf-cod-ungroup_by_ref_type',
    code: 0xeb98,
  },
  {
    name: 'nf-cod-unlock',
    code: 0xeb74,
  },
  {
    name: 'nf-cod-unmute',
    code: 0xeb75,
  },
  {
    name: 'nf-cod-unverified',
    code: 0xeb76,
  },
  {
    name: 'nf-cod-variable_group',
    code: 0xebb8,
  },
  {
    name: 'nf-cod-verified',
    code: 0xeb77,
  },
  {
    name: 'nf-cod-verified_filled',
    code: 0xebe9,
  },
  {
    name: 'nf-cod-versions',
    code: 0xeb78,
  },
  {
    name: 'nf-cod-vm',
    code: 0xea7a,
  },
  {
    name: 'nf-cod-vm_active',
    code: 0xeb79,
  },
  {
    name: 'nf-cod-vm_connect',
    code: 0xeba9,
  },
  {
    name: 'nf-cod-vm_outline',
    code: 0xeb7a,
  },
  {
    name: 'nf-cod-vm_running',
    code: 0xeb7b,
  },
  {
    name: 'nf-cod-vr',
    code: 0xec18,
  },
  {
    name: 'nf-cod-wand',
    code: 0xebcf,
  },
  {
    name: 'nf-cod-warning',
    code: 0xea6c,
  },
  {
    name: 'nf-cod-watch',
    code: 0xeb7c,
  },
  {
    name: 'nf-cod-whitespace',
    code: 0xeb7d,
  },
  {
    name: 'nf-cod-whole_word',
    code: 0xeb7e,
  },
  {
    name: 'nf-cod-window',
    code: 0xeb7f,
  },
  {
    name: 'nf-cod-word_wrap',
    code: 0xeb80,
  },
  {
    name: 'nf-cod-workspace_trusted',
    code: 0xebc1,
  },
  {
    name: 'nf-cod-workspace_unknown',
    code: 0xebc3,
  },
  {
    name: 'nf-cod-workspace_untrusted',
    code: 0xebc2,
  },
  {
    name: 'nf-cod-zoom_in',
    code: 0xeb81,
  },
  {
    name: 'nf-cod-zoom_out',
    code: 0xeb82,
  },
  {
    name: 'nf-custom-ada',
    code: 0xe6b5,
  },
  {
    name: 'nf-custom-asm',
    code: 0xe6ab,
  },
  {
    name: 'nf-custom-astro',
    code: 0xe6b3,
  },
  {
    name: 'nf-custom-bazel',
    code: 0xe63a,
  },
  {
    name: 'nf-custom-c',
    code: 0xe61e,
  },
  {
    name: 'nf-custom-chuck',
    code: 0xe6b6,
  },
  {
    name: 'nf-custom-common_lisp',
    code: 0xe6b0,
  },
  {
    name: 'nf-custom-cpp',
    code: 0xe61d,
  },
  {
    name: 'nf-custom-crystal',
    code: 0xe62f,
  },
  {
    name: 'nf-custom-css',
    code: 0xe6b8,
  },
  {
    name: 'nf-custom-default',
    code: 0xe612,
  },
  {
    name: 'nf-custom-electron',
    code: 0xe62e,
  },
  {
    name: 'nf-custom-elixir',
    code: 0xe62d,
  },
  {
    name: 'nf-custom-elm',
    code: 0xe62c,
  },
  {
    name: 'nf-custom-emacs',
    code: 0xe632,
  },
  {
    name: 'nf-custom-fennel',
    code: 0xe6af,
  },
  {
    name: 'nf-custom-firebase',
    code: 0xe657,
  },
  {
    name: 'nf-custom-folder',
    code: 0xe5ff,
  },
  {
    name: 'nf-custom-folder_config',
    code: 0xe5fc,
  },
  {
    name: 'nf-custom-folder_git',
    code: 0xe5fb,
  },
  {
    name: 'nf-custom-folder_git_branch',
    code: 0xe5fb,
  },
  {
    name: 'nf-custom-folder_github',
    code: 0xe5fd,
  },
  {
    name: 'nf-custom-folder_npm',
    code: 0xe5fa,
  },
  {
    name: 'nf-custom-folder_oct',
    code: 0xe6ad,
  },
  {
    name: 'nf-custom-folder_open',
    code: 0xe5fe,
  },
  {
    name: 'nf-custom-go',
    code: 0xe626,
  },
  {
    name: 'nf-custom-home',
    code: 0xe617,
  },
  {
    name: 'nf-custom-kotlin',
    code: 0xe634,
  },
  {
    name: 'nf-custom-msdos',
    code: 0xe629,
  },
  {
    name: 'nf-custom-neovim',
    code: 0xe6ae,
  },
  {
    name: 'nf-custom-orgmode',
    code: 0xe633,
  },
  {
    name: 'nf-custom-play_arrow',
    code: 0xe602,
  },
  {
    name: 'nf-custom-prettier',
    code: 0xe6b4,
  },
  {
    name: 'nf-custom-puppet',
    code: 0xe631,
  },
  {
    name: 'nf-custom-purescript',
    code: 0xe630,
  },
  {
    name: 'nf-custom-ruby',
    code: 0xe605,
  },
  {
    name: 'nf-custom-scheme',
    code: 0xe6b1,
  },
  {
    name: 'nf-custom-toml',
    code: 0xe6b2,
  },
  {
    name: 'nf-custom-v_lang',
    code: 0xe6ac,
  },
  {
    name: 'nf-custom-vim',
    code: 0xe62b,
  },
  {
    name: 'nf-custom-vitruvian',
    code: 0xe6b7,
  },
  {
    name: 'nf-custom-windows',
    code: 0xe62a,
  },
  {
    name: 'nf-dev-aarch64',
    code: 0xe700,
  },
  {
    name: 'nf-dev-adonisjs',
    code: 0xe701,
  },
  {
    name: 'nf-dev-aftereffects',
    code: 0xe705,
  },
  {
    name: 'nf-dev-akka',
    code: 0xe708,
  },
  {
    name: 'nf-dev-algolia',
    code: 0xe70a,
  },
  {
    name: 'nf-dev-alpinejs',
    code: 0xe713,
  },
  {
    name: 'nf-dev-amazonwebservices',
    code: 0xe7ad,
  },
  {
    name: 'nf-dev-anaconda',
    code: 0xe715,
  },
  {
    name: 'nf-dev-android',
    code: 0xe70e,
  },
  {
    name: 'nf-dev-androidstudio',
    code: 0xe71a,
  },
  {
    name: 'nf-dev-angular',
    code: 0xe753,
  },
  {
    name: 'nf-dev-angularjs',
    code: 0xe71c,
  },
  {
    name: 'nf-dev-angularmaterial',
    code: 0xe720,
  },
  {
    name: 'nf-dev-ansible',
    code: 0xe723,
  },
  {
    name: 'nf-dev-antdesign',
    code: 0xe72a,
  },
  {
    name: 'nf-dev-apache',
    code: 0xe72b,
  },
  {
    name: 'nf-dev-apacheairflow',
    code: 0xe72c,
  },
  {
    name: 'nf-dev-apachekafka',
    code: 0xe72e,
  },
  {
    name: 'nf-dev-apachespark',
    code: 0xe72f,
  },
  {
    name: 'nf-dev-apl',
    code: 0xe730,
  },
  {
    name: 'nf-dev-appcelerator',
    code: 0xe7ab,
  },
  {
    name: 'nf-dev-apple',
    code: 0xe711,
  },
  {
    name: 'nf-dev-appwrite',
    code: 0xe731,
  },
  {
    name: 'nf-dev-archlinux',
    code: 0xe732,
  },
  {
    name: 'nf-dev-arduino',
    code: 0xe733,
  },
  {
    name: 'nf-dev-argocd',
    code: 0xe734,
  },
  {
    name: 'nf-dev-astro',
    code: 0xe735,
  },
  {
    name: 'nf-dev-atom',
    code: 0xe764,
  },
  {
    name: 'nf-dev-awk',
    code: 0xe741,
  },
  {
    name: 'nf-dev-aws',
    code: 0xe7ad,
  },
  {
    name: 'nf-dev-axios',
    code: 0xe74f,
  },
  {
    name: 'nf-dev-azure',
    code: 0xe754,
  },
  {
    name: 'nf-dev-azuredevops',
    code: 0xe756,
  },
  {
    name: 'nf-dev-azuresqldatabase',
    code: 0xe75b,
  },
  {
    name: 'nf-dev-babel',
    code: 0xe75d,
  },
  {
    name: 'nf-dev-backbone',
    code: 0xe752,
  },
  {
    name: 'nf-dev-backbonejs',
    code: 0xe752,
  },
  {
    name: 'nf-dev-ballerina',
    code: 0xe75e,
  },
  {
    name: 'nf-dev-bamboo',
    code: 0xe75f,
  },
  {
    name: 'nf-dev-bash',
    code: 0xe760,
  },
  {
    name: 'nf-dev-beats',
    code: 0xe761,
  },
  {
    name: 'nf-dev-behance',
    code: 0xe762,
  },
  {
    name: 'nf-dev-bitbucket',
    code: 0xe703,
  },
  {
    name: 'nf-dev-blazor',
    code: 0xe765,
  },
  {
    name: 'nf-dev-blender',
    code: 0xe766,
  },
  {
    name: 'nf-dev-bootstrap',
    code: 0xe747,
  },
  {
    name: 'nf-dev-bower',
    code: 0xe74d,
  },
  {
    name: 'nf-dev-browserstack',
    code: 0xe76b,
  },
  {
    name: 'nf-dev-bulma',
    code: 0xe76c,
  },
  {
    name: 'nf-dev-bun',
    code: 0xe76f,
  },
  {
    name: 'nf-dev-c',
    code: 0xe771,
  },
  {
    name: 'nf-dev-c_lang',
    code: 0xe771,
  },
  {
    name: 'nf-dev-cairo',
    code: 0xe773,
  },
  {
    name: 'nf-dev-cakephp',
    code: 0xe77a,
  },
  {
    name: 'nf-dev-canva',
    code: 0xe77c,
  },
  {
    name: 'nf-dev-capacitor',
    code: 0xe785,
  },
  {
    name: 'nf-dev-carbon',
    code: 0xe788,
  },
  {
    name: 'nf-dev-cassandra',
    code: 0xe789,
  },
  {
    name: 'nf-dev-centos',
    code: 0xe78a,
  },
  {
    name: 'nf-dev-ceylon',
    code: 0xe78b,
  },
  {
    name: 'nf-dev-chrome',
    code: 0xe743,
  },
  {
    name: 'nf-dev-circleci',
    code: 0xe78c,
  },
  {
    name: 'nf-dev-clarity',
    code: 0xe78d,
  },
  {
    name: 'nf-dev-clion',
    code: 0xe78e,
  },
  {
    name: 'nf-dev-clojure',
    code: 0xe768,
  },
  {
    name: 'nf-dev-clojure_alt',
    code: 0xe76a,
  },
  {
    name: 'nf-dev-clojurescript',
    code: 0xe790,
  },
  {
    name: 'nf-dev-cloudflare',
    code: 0xe792,
  },
  {
    name: 'nf-dev-cloudflareworkers',
    code: 0xe793,
  },
  {
    name: 'nf-dev-cmake',
    code: 0xe794,
  },
  {
    name: 'nf-dev-codeac',
    code: 0xe796,
  },
  {
    name: 'nf-dev-codecov',
    code: 0xe797,
  },
  {
    name: 'nf-dev-codeigniter',
    code: 0xe780,
  },
  {
    name: 'nf-dev-codepen',
    code: 0xe716,
  },
  {
    name: 'nf-dev-coffeescript',
    code: 0xe751,
  },
  {
    name: 'nf-dev-composer',
    code: 0xe783,
  },
  {
    name: 'nf-dev-confluence',
    code: 0xe799,
  },
  {
    name: 'nf-dev-consul',
    code: 0xe79a,
  },
  {
    name: 'nf-dev-contao',
    code: 0xe79b,
  },
  {
    name: 'nf-dev-corejs',
    code: 0xe79d,
  },
  {
    name: 'nf-dev-cosmosdb',
    code: 0xe79f,
  },
  {
    name: 'nf-dev-couchbase',
    code: 0xe7a0,
  },
  {
    name: 'nf-dev-couchdb',
    code: 0xe7a2,
  },
  {
    name: 'nf-dev-cplusplus',
    code: 0xe7a3,
  },
  {
    name: 'nf-dev-crystal',
    code: 0xe7ac,
  },
  {
    name: 'nf-dev-csharp',
    code: 0xe7b2,
  },
  {
    name: 'nf-dev-css3',
    code: 0xe749,
  },
  {
    name: 'nf-dev-css3_full',
    code: 0xe74a,
  },
  {
    name: 'nf-dev-cucumber',
    code: 0xe7b7,
  },
  {
    name: 'nf-dev-cypressio',
    code: 0xe7b9,
  },
  {
    name: 'nf-dev-d3js',
    code: 0xe7bc,
  },
  {
    name: 'nf-dev-dart',
    code: 0xe798,
  },
  {
    name: 'nf-dev-database',
    code: 0xe706,
  },
  {
    name: 'nf-dev-datagrip',
    code: 0xe7bd,
  },
  {
    name: 'nf-dev-dataspell',
    code: 0xe7be,
  },
  {
    name: 'nf-dev-dbeaver',
    code: 0xe7bf,
  },
  {
    name: 'nf-dev-debian',
    code: 0xe77d,
  },
  {
    name: 'nf-dev-denojs',
    code: 0xe7c0,
  },
  {
    name: 'nf-dev-devicon',
    code: 0xe7c1,
  },
  {
    name: 'nf-dev-digital_ocean',
    code: 0xe7ae,
  },
  {
    name: 'nf-dev-digitalocean',
    code: 0xe7ae,
  },
  {
    name: 'nf-dev-discordjs',
    code: 0xe7c2,
  },
  {
    name: 'nf-dev-django',
    code: 0xe71d,
  },
  {
    name: 'nf-dev-djangorest',
    code: 0xe7c3,
  },
  {
    name: 'nf-dev-dlang',
    code: 0xe7af,
  },
  {
    name: 'nf-dev-docker',
    code: 0xe7b0,
  },
  {
    name: 'nf-dev-doctrine',
    code: 0xe774,
  },
  {
    name: 'nf-dev-dotnet',
    code: 0xe77f,
  },
  {
    name: 'nf-dev-dotnetcore',
    code: 0xe7c6,
  },
  {
    name: 'nf-dev-dreamweaver',
    code: 0xe79c,
  },
  {
    name: 'nf-dev-dropbox',
    code: 0xe707,
  },
  {
    name: 'nf-dev-dropwizard',
    code: 0xe7c7,
  },
  {
    name: 'nf-dev-drupal',
    code: 0xe742,
  },
  {
    name: 'nf-dev-dynamodb',
    code: 0xe7c8,
  },
  {
    name: 'nf-dev-eclipse',
    code: 0xe79e,
  },
  {
    name: 'nf-dev-ecto',
    code: 0xe7c9,
  },
  {
    name: 'nf-dev-elasticsearch',
    code: 0xe7ca,
  },
  {
    name: 'nf-dev-electron',
    code: 0xe7cb,
  },
  {
    name: 'nf-dev-eleventy',
    code: 0xe7cc,
  },
  {
    name: 'nf-dev-elixir',
    code: 0xe7cd,
  },
  {
    name: 'nf-dev-elm',
    code: 0xe7ce,
  },
  {
    name: 'nf-dev-emacs',
    code: 0xe7cf,
  },
  {
    name: 'nf-dev-embeddedc',
    code: 0xe7d0,
  },
  {
    name: 'nf-dev-ember',
    code: 0xe71b,
  },
  {
    name: 'nf-dev-envoy',
    code: 0xe7d1,
  },
  {
    name: 'nf-dev-erlang',
    code: 0xe7b1,
  },
  {
    name: 'nf-dev-eslint',
    code: 0xe7d2,
  },
  {
    name: 'nf-dev-express',
    code: 0xe7d3,
  },
  {
    name: 'nf-dev-facebook',
    code: 0xe7d4,
  },
  {
    name: 'nf-dev-fastapi',
    code: 0xe7d5,
  },
  {
    name: 'nf-dev-fastify',
    code: 0xe7d6,
  },
  {
    name: 'nf-dev-faunadb',
    code: 0xe7d7,
  },
  {
    name: 'nf-dev-feathersjs',
    code: 0xe7d8,
  },
  {
    name: 'nf-dev-fedora',
    code: 0xe7d9,
  },
  {
    name: 'nf-dev-figma',
    code: 0xe7da,
  },
  {
    name: 'nf-dev-filezilla',
    code: 0xe7db,
  },
  {
    name: 'nf-dev-firebase',
    code: 0xe787,
  },
  {
    name: 'nf-dev-firefox',
    code: 0xe745,
  },
  {
    name: 'nf-dev-flask',
    code: 0xe7dc,
  },
  {
    name: 'nf-dev-flutter',
    code: 0xe7dd,
  },
  {
    name: 'nf-dev-fortran',
    code: 0xe7de,
  },
  {
    name: 'nf-dev-foundation',
    code: 0xe7df,
  },
  {
    name: 'nf-dev-framermotion',
    code: 0xe7e0,
  },
  {
    name: 'nf-dev-framework7',
    code: 0xe7e1,
  },
  {
    name: 'nf-dev-fsharp',
    code: 0xe7a7,
  },
  {
    name: 'nf-dev-gatling',
    code: 0xe7e2,
  },
  {
    name: 'nf-dev-gatsby',
    code: 0xe7e3,
  },
  {
    name: 'nf-dev-gazebo',
    code: 0xe7e4,
  },
  {
    name: 'nf-dev-gcc',
    code: 0xe7e5,
  },
  {
    name: 'nf-dev-gentoo',
    code: 0xe7e6,
  },
  {
    name: 'nf-dev-ghost',
    code: 0xe71f,
  },
  {
    name: 'nf-dev-ghost_small',
    code: 0xe714,
  },
  {
    name: 'nf-dev-gimp',
    code: 0xe7e7,
  },
  {
    name: 'nf-dev-git',
    code: 0xe702,
  },
  {
    name: 'nf-dev-git_branch',
    code: 0xe725,
  },
  {
    name: 'nf-dev-git_commit',
    code: 0xe729,
  },
  {
    name: 'nf-dev-git_compare',
    code: 0xe728,
  },
  {
    name: 'nf-dev-git_merge',
    code: 0xe727,
  },
  {
    name: 'nf-dev-git_pull_request',
    code: 0xe726,
  },
  {
    name: 'nf-dev-gitbook',
    code: 0xe7e8,
  },
  {
    name: 'nf-dev-github',
    code: 0xe709,
  },
  {
    name: 'nf-dev-github_badge',
    code: 0xe709,
  },
  {
    name: 'nf-dev-github_full',
    code: 0xe717,
  },
  {
    name: 'nf-dev-githubactions',
    code: 0xe7e9,
  },
  {
    name: 'nf-dev-githubcodespaces',
    code: 0xe7ea,
  },
  {
    name: 'nf-dev-gitlab',
    code: 0xe7eb,
  },
  {
    name: 'nf-dev-gitpod',
    code: 0xe7ec,
  },
  {
    name: 'nf-dev-gitter',
    code: 0xe7ed,
  },
  {
    name: 'nf-dev-gnu',
    code: 0xe779,
  },
  {
    name: 'nf-dev-go',
    code: 0xe724,
  },
  {
    name: 'nf-dev-godot',
    code: 0xe7ee,
  },
  {
    name: 'nf-dev-goland',
    code: 0xe7ef,
  },
  {
    name: 'nf-dev-google',
    code: 0xe7f0,
  },
  {
    name: 'nf-dev-googlecloud',
    code: 0xe7f1,
  },
  {
    name: 'nf-dev-gradle',
    code: 0xe7f2,
  },
  {
    name: 'nf-dev-grafana',
    code: 0xe7f3,
  },
  {
    name: 'nf-dev-grails',
    code: 0xe7b3,
  },
  {
    name: 'nf-dev-graphql',
    code: 0xe7f4,
  },
  {
    name: 'nf-dev-groovy',
    code: 0xe775,
  },
  {
    name: 'nf-dev-grpc',
    code: 0xe7f5,
  },
  {
    name: 'nf-dev-grunt',
    code: 0xe74c,
  },
  {
    name: 'nf-dev-gulp',
    code: 0xe763,
  },
  {
    name: 'nf-dev-hadoop',
    code: 0xe7f6,
  },
  {
    name: 'nf-dev-handlebars',
    code: 0xe7f7,
  },
  {
    name: 'nf-dev-hardhat',
    code: 0xe7f8,
  },
  {
    name: 'nf-dev-harvester',
    code: 0xe7f9,
  },
  {
    name: 'nf-dev-haskell',
    code: 0xe777,
  },
  {
    name: 'nf-dev-haxe',
    code: 0xe7fa,
  },
  {
    name: 'nf-dev-helm',
    code: 0xe7fb,
  },
  {
    name: 'nf-dev-heroku',
    code: 0xe77b,
  },
  {
    name: 'nf-dev-hibernate',
    code: 0xe7fc,
  },
  {
    name: 'nf-dev-homebrew',
    code: 0xe7fd,
  },
  {
    name: 'nf-dev-html5',
    code: 0xe736,
  },
  {
    name: 'nf-dev-hugo',
    code: 0xe7fe,
  },
  {
    name: 'nf-dev-ie',
    code: 0xe744,
  },
  {
    name: 'nf-dev-ifttt',
    code: 0xe7ff,
  },
  {
    name: 'nf-dev-illustrator',
    code: 0xe7b4,
  },
  {
    name: 'nf-dev-influxdb',
    code: 0xe800,
  },
  {
    name: 'nf-dev-inkscape',
    code: 0xe801,
  },
  {
    name: 'nf-dev-insomnia',
    code: 0xe802,
  },
  {
    name: 'nf-dev-intellij',
    code: 0xe7b5,
  },
  {
    name: 'nf-dev-ionic',
    code: 0xe7a9,
  },
  {
    name: 'nf-dev-jaegertracing',
    code: 0xe803,
  },
  {
    name: 'nf-dev-jamstack',
    code: 0xe804,
  },
  {
    name: 'nf-dev-jasmine',
    code: 0xe805,
  },
  {
    name: 'nf-dev-java',
    code: 0xe738,
  },
  {
    name: 'nf-dev-javascript',
    code: 0xe781,
  },
  {
    name: 'nf-dev-javascript_alt',
    code: 0xe74e,
  },
  {
    name: 'nf-dev-javascript_badge',
    code: 0xe781,
  },
  {
    name: 'nf-dev-jeet',
    code: 0xe806,
  },
  {
    name: 'nf-dev-jekyll',
    code: 0xe70d,
  },
  {
    name: 'nf-dev-jekyll_small',
    code: 0xe70d,
  },
  {
    name: 'nf-dev-jenkins',
    code: 0xe767,
  },
  {
    name: 'nf-dev-jest',
    code: 0xe807,
  },
  {
    name: 'nf-dev-jetbrains',
    code: 0xe808,
  },
  {
    name: 'nf-dev-jetpackcompose',
    code: 0xe809,
  },
  {
    name: 'nf-dev-jira',
    code: 0xe75c,
  },
  {
    name: 'nf-dev-jiraalign',
    code: 0xe80a,
  },
  {
    name: 'nf-dev-jquery',
    code: 0xe750,
  },
  {
    name: 'nf-dev-json',
    code: 0xe80b,
  },
  {
    name: 'nf-dev-jule',
    code: 0xe80c,
  },
  {
    name: 'nf-dev-julia',
    code: 0xe80d,
  },
  {
    name: 'nf-dev-junit',
    code: 0xe80e,
  },
  {
    name: 'nf-dev-jupyter',
    code: 0xe80f,
  },
  {
    name: 'nf-dev-k3os',
    code: 0xe810,
  },
  {
    name: 'nf-dev-k3s',
    code: 0xe811,
  },
  {
    name: 'nf-dev-k6',
    code: 0xe812,
  },
  {
    name: 'nf-dev-kaggle',
    code: 0xe813,
  },
  {
    name: 'nf-dev-karatelabs',
    code: 0xe814,
  },
  {
    name: 'nf-dev-karma',
    code: 0xe815,
  },
  {
    name: 'nf-dev-kdeneon',
    code: 0xe816,
  },
  {
    name: 'nf-dev-keras',
    code: 0xe817,
  },
  {
    name: 'nf-dev-kibana',
    code: 0xe818,
  },
  {
    name: 'nf-dev-knexjs',
    code: 0xe819,
  },
  {
    name: 'nf-dev-knockout',
    code: 0xe81a,
  },
  {
    name: 'nf-dev-kotlin',
    code: 0xe81b,
  },
  {
    name: 'nf-dev-krakenjs',
    code: 0xe784,
  },
  {
    name: 'nf-dev-krakenjs_badge',
    code: 0xe784,
  },
  {
    name: 'nf-dev-ktor',
    code: 0xe81c,
  },
  {
    name: 'nf-dev-kubernetes',
    code: 0xe81d,
  },
  {
    name: 'nf-dev-labview',
    code: 0xe81e,
  },
  {
    name: 'nf-dev-laravel',
    code: 0xe73f,
  },
  {
    name: 'nf-dev-latex',
    code: 0xe81f,
  },
  {
    name: 'nf-dev-less',
    code: 0xe758,
  },
  {
    name: 'nf-dev-linkedin',
    code: 0xe820,
  },
  {
    name: 'nf-dev-linux',
    code: 0xe712,
  },
  {
    name: 'nf-dev-liquibase',
    code: 0xe821,
  },
  {
    name: 'nf-dev-livewire',
    code: 0xe822,
  },
  {
    name: 'nf-dev-llvm',
    code: 0xe823,
  },
  {
    name: 'nf-dev-lodash',
    code: 0xe824,
  },
  {
    name: 'nf-dev-logstash',
    code: 0xe825,
  },
  {
    name: 'nf-dev-lua',
    code: 0xe826,
  },
  {
    name: 'nf-dev-lumen',
    code: 0xe827,
  },
  {
    name: 'nf-dev-magento',
    code: 0xe740,
  },
  {
    name: 'nf-dev-mariadb',
    code: 0xe828,
  },
  {
    name: 'nf-dev-markdown',
    code: 0xe73e,
  },
  {
    name: 'nf-dev-materializecss',
    code: 0xe7b6,
  },
  {
    name: 'nf-dev-materialui',
    code: 0xe829,
  },
  {
    name: 'nf-dev-matlab',
    code: 0xe82a,
  },
  {
    name: 'nf-dev-matplotlib',
    code: 0xe82b,
  },
  {
    name: 'nf-dev-maven',
    code: 0xe82c,
  },
  {
    name: 'nf-dev-maya',
    code: 0xe82d,
  },
  {
    name: 'nf-dev-meteor',
    code: 0xe7a5,
  },
  {
    name: 'nf-dev-meteorfull',
    code: 0xe7a6,
  },
  {
    name: 'nf-dev-microsoftsqlserver',
    code: 0xe82e,
  },
  {
    name: 'nf-dev-minitab',
    code: 0xe82f,
  },
  {
    name: 'nf-dev-mithril',
    code: 0xe830,
  },
  {
    name: 'nf-dev-mobx',
    code: 0xe831,
  },
  {
    name: 'nf-dev-mocha',
    code: 0xe832,
  },
  {
    name: 'nf-dev-modx',
    code: 0xe833,
  },
  {
    name: 'nf-dev-moleculer',
    code: 0xe834,
  },
  {
    name: 'nf-dev-mongodb',
    code: 0xe7a4,
  },
  {
    name: 'nf-dev-mongoose',
    code: 0xe835,
  },
  {
    name: 'nf-dev-moodle',
    code: 0xe836,
  },
  {
    name: 'nf-dev-mootools_badge',
    code: 0xe78f,
  },
  {
    name: 'nf-dev-mozilla',
    code: 0xe786,
  },
  {
    name: 'nf-dev-msdos',
    code: 0xe837,
  },
  {
    name: 'nf-dev-mysql',
    code: 0xe704,
  },
  {
    name: 'nf-dev-nano',
    code: 0xe838,
  },
  {
    name: 'nf-dev-neo4j',
    code: 0xe839,
  },
  {
    name: 'nf-dev-neovim',
    code: 0xe83a,
  },
  {
    name: 'nf-dev-nestjs',
    code: 0xe83b,
  },
  {
    name: 'nf-dev-netlify',
    code: 0xe83c,
  },
  {
    name: 'nf-dev-networkx',
    code: 0xe83d,
  },
  {
    name: 'nf-dev-nextjs',
    code: 0xe83e,
  },
  {
    name: 'nf-dev-nginx',
    code: 0xe776,
  },
  {
    name: 'nf-dev-ngrx',
    code: 0xe83f,
  },
  {
    name: 'nf-dev-nhibernate',
    code: 0xe840,
  },
  {
    name: 'nf-dev-nim',
    code: 0xe841,
  },
  {
    name: 'nf-dev-nimble',
    code: 0xe842,
  },
  {
    name: 'nf-dev-nixos',
    code: 0xe843,
  },
  {
    name: 'nf-dev-nodejs',
    code: 0xe719,
  },
  {
    name: 'nf-dev-nodejs_small',
    code: 0xe718,
  },
  {
    name: 'nf-dev-nodemon',
    code: 0xe844,
  },
  {
    name: 'nf-dev-nodewebkit',
    code: 0xe845,
  },
  {
    name: 'nf-dev-nomad',
    code: 0xe846,
  },
  {
    name: 'nf-dev-norg',
    code: 0xe847,
  },
  {
    name: 'nf-dev-notion',
    code: 0xe848,
  },
  {
    name: 'nf-dev-npm',
    code: 0xe71e,
  },
  {
    name: 'nf-dev-nuget',
    code: 0xe849,
  },
  {
    name: 'nf-dev-numpy',
    code: 0xe84a,
  },
  {
    name: 'nf-dev-nuxtjs',
    code: 0xe84b,
  },
  {
    name: 'nf-dev-oauth',
    code: 0xe84c,
  },
  {
    name: 'nf-dev-objectivec',
    code: 0xe84d,
  },
  {
    name: 'nf-dev-ocaml',
    code: 0xe84e,
  },
  {
    name: 'nf-dev-ohmyzsh',
    code: 0xe84f,
  },
  {
    name: 'nf-dev-okta',
    code: 0xe850,
  },
  {
    name: 'nf-dev-openal',
    code: 0xe851,
  },
  {
    name: 'nf-dev-openapi',
    code: 0xe852,
  },
  {
    name: 'nf-dev-opencl',
    code: 0xe853,
  },
  {
    name: 'nf-dev-opencv',
    code: 0xe854,
  },
  {
    name: 'nf-dev-opengl',
    code: 0xe855,
  },
  {
    name: 'nf-dev-openstack',
    code: 0xe856,
  },
  {
    name: 'nf-dev-opensuse',
    code: 0xe857,
  },
  {
    name: 'nf-dev-opentelemetry',
    code: 0xe858,
  },
  {
    name: 'nf-dev-opera',
    code: 0xe746,
  },
  {
    name: 'nf-dev-oracle',
    code: 0xe859,
  },
  {
    name: 'nf-dev-ory',
    code: 0xe85a,
  },
  {
    name: 'nf-dev-p5js',
    code: 0xe85b,
  },
  {
    name: 'nf-dev-packer',
    code: 0xe85c,
  },
  {
    name: 'nf-dev-pandas',
    code: 0xe85d,
  },
  {
    name: 'nf-dev-perl',
    code: 0xe769,
  },
  {
    name: 'nf-dev-pfsense',
    code: 0xe85e,
  },
  {
    name: 'nf-dev-phalcon',
    code: 0xe85f,
  },
  {
    name: 'nf-dev-phoenix',
    code: 0xe860,
  },
  {
    name: 'nf-dev-photonengine',
    code: 0xe861,
  },
  {
    name: 'nf-dev-photoshop',
    code: 0xe7b8,
  },
  {
    name: 'nf-dev-php',
    code: 0xe73d,
  },
  {
    name: 'nf-dev-phpstorm',
    code: 0xe862,
  },
  {
    name: 'nf-dev-playwright',
    code: 0xe863,
  },
  {
    name: 'nf-dev-plotly',
    code: 0xe864,
  },
  {
    name: 'nf-dev-pnpm',
    code: 0xe865,
  },
  {
    name: 'nf-dev-podman',
    code: 0xe866,
  },
  {
    name: 'nf-dev-poetry',
    code: 0xe867,
  },
  {
    name: 'nf-dev-polygon',
    code: 0xe868,
  },
  {
    name: 'nf-dev-portainer',
    code: 0xe869,
  },
  {
    name: 'nf-dev-postcss',
    code: 0xe86a,
  },
  {
    name: 'nf-dev-postgresql',
    code: 0xe76e,
  },
  {
    name: 'nf-dev-postman',
    code: 0xe86b,
  },
  {
    name: 'nf-dev-powershell',
    code: 0xe86c,
  },
  {
    name: 'nf-dev-premierepro',
    code: 0xe86d,
  },
  {
    name: 'nf-dev-prisma',
    code: 0xe86e,
  },
  {
    name: 'nf-dev-processing',
    code: 0xe86f,
  },
  {
    name: 'nf-dev-prolog',
    code: 0xe7a1,
  },
  {
    name: 'nf-dev-prometheus',
    code: 0xe870,
  },
  {
    name: 'nf-dev-protractor',
    code: 0xe871,
  },
  {
    name: 'nf-dev-pulsar',
    code: 0xe872,
  },
  {
    name: 'nf-dev-pulumi',
    code: 0xe873,
  },
  {
    name: 'nf-dev-puppeteer',
    code: 0xe874,
  },
  {
    name: 'nf-dev-purescript',
    code: 0xe875,
  },
  {
    name: 'nf-dev-putty',
    code: 0xe876,
  },
  {
    name: 'nf-dev-pycharm',
    code: 0xe877,
  },
  {
    name: 'nf-dev-pypi',
    code: 0xe878,
  },
  {
    name: 'nf-dev-pyscript',
    code: 0xe879,
  },
  {
    name: 'nf-dev-pytest',
    code: 0xe87a,
  },
  {
    name: 'nf-dev-python',
    code: 0xe73c,
  },
  {
    name: 'nf-dev-pytorch',
    code: 0xe87b,
  },
  {
    name: 'nf-dev-qodana',
    code: 0xe87c,
  },
  {
    name: 'nf-dev-qt',
    code: 0xe87d,
  },
  {
    name: 'nf-dev-quarkus',
    code: 0xe87e,
  },
  {
    name: 'nf-dev-quasar',
    code: 0xe87f,
  },
  {
    name: 'nf-dev-qwik',
    code: 0xe880,
  },
  {
    name: 'nf-dev-r',
    code: 0xe881,
  },
  {
    name: 'nf-dev-rabbitmq',
    code: 0xe882,
  },
  {
    name: 'nf-dev-rails',
    code: 0xe73b,
  },
  {
    name: 'nf-dev-railway',
    code: 0xe883,
  },
  {
    name: 'nf-dev-rancher',
    code: 0xe884,
  },
  {
    name: 'nf-dev-raspberry_pi',
    code: 0xe722,
  },
  {
    name: 'nf-dev-reach',
    code: 0xe885,
  },
  {
    name: 'nf-dev-react',
    code: 0xe7ba,
  },
  {
    name: 'nf-dev-reactbootstrap',
    code: 0xe886,
  },
  {
    name: 'nf-dev-reactnavigation',
    code: 0xe887,
  },
  {
    name: 'nf-dev-reactrouter',
    code: 0xe888,
  },
  {
    name: 'nf-dev-readthedocs',
    code: 0xe889,
  },
  {
    name: 'nf-dev-realm',
    code: 0xe88a,
  },
  {
    name: 'nf-dev-rect',
    code: 0xe88b,
  },
  {
    name: 'nf-dev-redhat',
    code: 0xe7bb,
  },
  {
    name: 'nf-dev-redis',
    code: 0xe76d,
  },
  {
    name: 'nf-dev-redux',
    code: 0xe88c,
  },
  {
    name: 'nf-dev-renpy',
    code: 0xe88d,
  },
  {
    name: 'nf-dev-replit',
    code: 0xe88e,
  },
  {
    name: 'nf-dev-requirejs',
    code: 0xe770,
  },
  {
    name: 'nf-dev-rider',
    code: 0xe88f,
  },
  {
    name: 'nf-dev-rocksdb',
    code: 0xe890,
  },
  {
    name: 'nf-dev-rockylinux',
    code: 0xe891,
  },
  {
    name: 'nf-dev-rollup',
    code: 0xe892,
  },
  {
    name: 'nf-dev-ros',
    code: 0xe893,
  },
  {
    name: 'nf-dev-rspec',
    code: 0xe894,
  },
  {
    name: 'nf-dev-rstudio',
    code: 0xe895,
  },
  {
    name: 'nf-dev-ruby',
    code: 0xe739,
  },
  {
    name: 'nf-dev-ruby_on_rails',
    code: 0xe73b,
  },
  {
    name: 'nf-dev-ruby_rough',
    code: 0xe791,
  },
  {
    name: 'nf-dev-rubymine',
    code: 0xe896,
  },
  {
    name: 'nf-dev-rust',
    code: 0xe7a8,
  },
  {
    name: 'nf-dev-rxjs',
    code: 0xe897,
  },
  {
    name: 'nf-dev-safari',
    code: 0xe748,
  },
  {
    name: 'nf-dev-salesforce',
    code: 0xe898,
  },
  {
    name: 'nf-dev-sanity',
    code: 0xe899,
  },
  {
    name: 'nf-dev-sass',
    code: 0xe74b,
  },
  {
    name: 'nf-dev-scala',
    code: 0xe737,
  },
  {
    name: 'nf-dev-scalingo',
    code: 0xe89a,
  },
  {
    name: 'nf-dev-scikitlearn',
    code: 0xe89b,
  },
  {
    name: 'nf-dev-sdl',
    code: 0xe89c,
  },
  {
    name: 'nf-dev-selenium',
    code: 0xe89d,
  },
  {
    name: 'nf-dev-sema',
    code: 0xe89e,
  },
  {
    name: 'nf-dev-sentry',
    code: 0xe89f,
  },
  {
    name: 'nf-dev-sequelize',
    code: 0xe8a0,
  },
  {
    name: 'nf-dev-shopware',
    code: 0xe8a1,
  },
  {
    name: 'nf-dev-shotgrid',
    code: 0xe8a2,
  },
  {
    name: 'nf-dev-sketch',
    code: 0xe8a3,
  },
  {
    name: 'nf-dev-slack',
    code: 0xe8a4,
  },
  {
    name: 'nf-dev-smashing_magazine',
    code: 0xe72d,
  },
  {
    name: 'nf-dev-socketio',
    code: 0xe8a5,
  },
  {
    name: 'nf-dev-solidity',
    code: 0xe8a6,
  },
  {
    name: 'nf-dev-solidjs',
    code: 0xe8a7,
  },
  {
    name: 'nf-dev-sonarqube',
    code: 0xe8a8,
  },
  {
    name: 'nf-dev-sourcetree',
    code: 0xe8a9,
  },
  {
    name: 'nf-dev-spack',
    code: 0xe8aa,
  },
  {
    name: 'nf-dev-splunk',
    code: 0xe8ab,
  },
  {
    name: 'nf-dev-spring',
    code: 0xe8ac,
  },
  {
    name: 'nf-dev-spss',
    code: 0xe8ad,
  },
  {
    name: 'nf-dev-spyder',
    code: 0xe8ae,
  },
  {
    name: 'nf-dev-sqlalchemy',
    code: 0xe8af,
  },
  {
    name: 'nf-dev-sqldeveloper',
    code: 0xe8b0,
  },
  {
    name: 'nf-dev-sqlite',
    code: 0xe7c4,
  },
  {
    name: 'nf-dev-ssh',
    code: 0xe8b1,
  },
  {
    name: 'nf-dev-stackoverflow',
    code: 0xe710,
  },
  {
    name: 'nf-dev-stata',
    code: 0xe8b2,
  },
  {
    name: 'nf-dev-storybook',
    code: 0xe8b3,
  },
  {
    name: 'nf-dev-streamlit',
    code: 0xe8b4,
  },
  {
    name: 'nf-dev-stylus',
    code: 0xe759,
  },
  {
    name: 'nf-dev-sublime',
    code: 0xe7aa,
  },
  {
    name: 'nf-dev-subversion',
    code: 0xe8b5,
  },
  {
    name: 'nf-dev-supabase',
    code: 0xe8b6,
  },
  {
    name: 'nf-dev-svelte',
    code: 0xe8b7,
  },
  {
    name: 'nf-dev-swagger',
    code: 0xe8b8,
  },
  {
    name: 'nf-dev-swift',
    code: 0xe755,
  },
  {
    name: 'nf-dev-swiper',
    code: 0xe8b9,
  },
  {
    name: 'nf-dev-symfony',
    code: 0xe757,
  },
  {
    name: 'nf-dev-symfony_badge',
    code: 0xe757,
  },
  {
    name: 'nf-dev-tailwindcss',
    code: 0xe8ba,
  },
  {
    name: 'nf-dev-tauri',
    code: 0xe8bb,
  },
  {
    name: 'nf-dev-tensorflow',
    code: 0xe8bc,
  },
  {
    name: 'nf-dev-terminal',
    code: 0xe795,
  },
  {
    name: 'nf-dev-terraform',
    code: 0xe8bd,
  },
  {
    name: 'nf-dev-tex',
    code: 0xe8be,
  },
  {
    name: 'nf-dev-thealgorithms',
    code: 0xe8bf,
  },
  {
    name: 'nf-dev-threedsmax',
    code: 0xe8c0,
  },
  {
    name: 'nf-dev-threejs',
    code: 0xe8c1,
  },
  {
    name: 'nf-dev-titaniumsdk',
    code: 0xe8c2,
  },
  {
    name: 'nf-dev-tomcat',
    code: 0xe8c3,
  },
  {
    name: 'nf-dev-tortoisegit',
    code: 0xe8c4,
  },
  {
    name: 'nf-dev-towergit',
    code: 0xe8c5,
  },
  {
    name: 'nf-dev-traefikmesh',
    code: 0xe8c6,
  },
  {
    name: 'nf-dev-traefikproxy',
    code: 0xe8c7,
  },
  {
    name: 'nf-dev-travis',
    code: 0xe77e,
  },
  {
    name: 'nf-dev-trello',
    code: 0xe75a,
  },
  {
    name: 'nf-dev-trpc',
    code: 0xe8c8,
  },
  {
    name: 'nf-dev-twitter',
    code: 0xe8c9,
  },
  {
    name: 'nf-dev-typescript',
    code: 0xe8ca,
  },
  {
    name: 'nf-dev-typo3',
    code: 0xe772,
  },
  {
    name: 'nf-dev-ubuntu',
    code: 0xe73a,
  },
  {
    name: 'nf-dev-uml',
    code: 0xe8cb,
  },
  {
    name: 'nf-dev-unifiedmodelinglanguage',
    code: 0xe8cb,
  },
  {
    name: 'nf-dev-unity',
    code: 0xe721,
  },
  {
    name: 'nf-dev-unity_small',
    code: 0xe721,
  },
  {
    name: 'nf-dev-unix',
    code: 0xe8cc,
  },
  {
    name: 'nf-dev-unrealengine',
    code: 0xe8cd,
  },
  {
    name: 'nf-dev-uwsgi',
    code: 0xe8ce,
  },
  {
    name: 'nf-dev-v8',
    code: 0xe8cf,
  },
  {
    name: 'nf-dev-vagrant',
    code: 0xe8d0,
  },
  {
    name: 'nf-dev-vala',
    code: 0xe8d1,
  },
  {
    name: 'nf-dev-vault',
    code: 0xe8d2,
  },
  {
    name: 'nf-dev-vercel',
    code: 0xe8d3,
  },
  {
    name: 'nf-dev-vertx',
    code: 0xe8d4,
  },
  {
    name: 'nf-dev-vim',
    code: 0xe7c5,
  },
  {
    name: 'nf-dev-visualbasic',
    code: 0xe8d5,
  },
  {
    name: 'nf-dev-visualstudio',
    code: 0xe70c,
  },
  {
    name: 'nf-dev-vite',
    code: 0xe8d6,
  },
  {
    name: 'nf-dev-vitejs',
    code: 0xe8d7,
  },
  {
    name: 'nf-dev-vitess',
    code: 0xe8d8,
  },
  {
    name: 'nf-dev-vitest',
    code: 0xe8d9,
  },
  {
    name: 'nf-dev-vscode',
    code: 0xe8da,
  },
  {
    name: 'nf-dev-vsphere',
    code: 0xe8db,
  },
  {
    name: 'nf-dev-vuejs',
    code: 0xe8dc,
  },
  {
    name: 'nf-dev-vuestorefront',
    code: 0xe8dd,
  },
  {
    name: 'nf-dev-vuetify',
    code: 0xe8de,
  },
  {
    name: 'nf-dev-vyper',
    code: 0xe8df,
  },
  {
    name: 'nf-dev-wasm',
    code: 0xe8e0,
  },
  {
    name: 'nf-dev-webflow',
    code: 0xe8e1,
  },
  {
    name: 'nf-dev-weblate',
    code: 0xe8e2,
  },
  {
    name: 'nf-dev-webpack',
    code: 0xe8e3,
  },
  {
    name: 'nf-dev-webstorm',
    code: 0xe8e4,
  },
  {
    name: 'nf-dev-windows',
    code: 0xe70f,
  },
  {
    name: 'nf-dev-windows11',
    code: 0xe8e5,
  },
  {
    name: 'nf-dev-woocommerce',
    code: 0xe8e6,
  },
  {
    name: 'nf-dev-wordpress',
    code: 0xe70b,
  },
  {
    name: 'nf-dev-xamarin',
    code: 0xe8e7,
  },
  {
    name: 'nf-dev-xcode',
    code: 0xe8e8,
  },
  {
    name: 'nf-dev-xd',
    code: 0xe8e9,
  },
  {
    name: 'nf-dev-xml',
    code: 0xe8ea,
  },
  {
    name: 'nf-dev-yaml',
    code: 0xe8eb,
  },
  {
    name: 'nf-dev-yarn',
    code: 0xe8ec,
  },
  {
    name: 'nf-dev-yii',
    code: 0xe782,
  },
  {
    name: 'nf-dev-yugabytedb',
    code: 0xe8ed,
  },
  {
    name: 'nf-dev-yunohost',
    code: 0xe8ee,
  },
  {
    name: 'nf-dev-zend',
    code: 0xe778,
  },
  {
    name: 'nf-dev-zig',
    code: 0xe8ef,
  },
  {
    name: 'nf-extra-progress_empty_left',
    code: 0xee00,
  },
  {
    name: 'nf-extra-progress_empty_mid',
    code: 0xee01,
  },
  {
    name: 'nf-extra-progress_empty_right',
    code: 0xee02,
  },
  {
    name: 'nf-extra-progress_full_left',
    code: 0xee03,
  },
  {
    name: 'nf-extra-progress_full_mid',
    code: 0xee04,
  },
  {
    name: 'nf-extra-progress_full_right',
    code: 0xee05,
  },
  {
    name: 'nf-extra-progress_spinner_1',
    code: 0xee06,
  },
  {
    name: 'nf-extra-progress_spinner_2',
    code: 0xee07,
  },
  {
    name: 'nf-extra-progress_spinner_3',
    code: 0xee08,
  },
  {
    name: 'nf-extra-progress_spinner_4',
    code: 0xee09,
  },
  {
    name: 'nf-extra-progress_spinner_5',
    code: 0xee0a,
  },
  {
    name: 'nf-extra-progress_spinner_6',
    code: 0xee0b,
  },
  {
    name: 'nf-fa-500px',
    code: 0xf26e,
  },
  {
    name: 'nf-fa-accessible_icon',
    code: 0xf29b,
  },
  {
    name: 'nf-fa-accusoft',
    code: 0xf0b7,
  },
  {
    name: 'nf-fa-address_book',
    code: 0xf2b9,
  },
  {
    name: 'nf-fa-address_book_o',
    code: 0xf2ba,
  },
  {
    name: 'nf-fa-address_card',
    code: 0xf2bb,
  },
  {
    name: 'nf-fa-address_card_o',
    code: 0xf2bc,
  },
  {
    name: 'nf-fa-adjust',
    code: 0xf042,
  },
  {
    name: 'nf-fa-adn',
    code: 0xf170,
  },
  {
    name: 'nf-fa-adversal',
    code: 0xf0b8,
  },
  {
    name: 'nf-fa-affiliatetheme',
    code: 0xf0b9,
  },
  {
    name: 'nf-fa-airbnb',
    code: 0xef93,
  },
  {
    name: 'nf-fa-algolia',
    code: 0xf0ba,
  },
  {
    name: 'nf-fa-align_center',
    code: 0xf037,
  },
  {
    name: 'nf-fa-align_justify',
    code: 0xf039,
  },
  {
    name: 'nf-fa-align_left',
    code: 0xf036,
  },
  {
    name: 'nf-fa-align_right',
    code: 0xf038,
  },
  {
    name: 'nf-fa-alipay',
    code: 0xeebc,
  },
  {
    name: 'nf-fa-amazon',
    code: 0xf270,
  },
  {
    name: 'nf-fa-amazon_pay',
    code: 0xed56,
  },
  {
    name: 'nf-fa-ambulance',
    code: 0xf0f9,
  },
  {
    name: 'nf-fa-american_sign_language_interpreting',
    code: 0xf2a3,
  },
  {
    name: 'nf-fa-amilia',
    code: 0xf0bb,
  },
  {
    name: 'nf-fa-anchor',
    code: 0xf13d,
  },
  {
    name: 'nf-fa-android',
    code: 0xf17b,
  },
  {
    name: 'nf-fa-angellist',
    code: 0xf209,
  },
  {
    name: 'nf-fa-angle_double_down',
    code: 0xf103,
  },
  {
    name: 'nf-fa-angle_double_left',
    code: 0xf100,
  },
  {
    name: 'nf-fa-angle_double_right',
    code: 0xf101,
  },
  {
    name: 'nf-fa-angle_double_up',
    code: 0xf102,
  },
  {
    name: 'nf-fa-angle_down',
    code: 0xf107,
  },
  {
    name: 'nf-fa-angle_left',
    code: 0xf104,
  },
  {
    name: 'nf-fa-angle_right',
    code: 0xf105,
  },
  {
    name: 'nf-fa-angle_up',
    code: 0xf106,
  },
  {
    name: 'nf-fa-angles_down',
    code: 0xf103,
  },
  {
    name: 'nf-fa-angles_left',
    code: 0xf100,
  },
  {
    name: 'nf-fa-angles_right',
    code: 0xf101,
  },
  {
    name: 'nf-fa-angles_up',
    code: 0xf102,
  },
  {
    name: 'nf-fa-angrycreative',
    code: 0xf0bc,
  },
  {
    name: 'nf-fa-angular',
    code: 0xed4b,
  },
  {
    name: 'nf-fa-ankh',
    code: 0xeebd,
  },
  {
    name: 'nf-fa-app_store',
    code: 0xf0bd,
  },
  {
    name: 'nf-fa-app_store_ios',
    code: 0xf0be,
  },
  {
    name: 'nf-fa-apper',
    code: 0xf0bf,
  },
  {
    name: 'nf-fa-apple',
    code: 0xf179,
  },
  {
    name: 'nf-fa-apple_pay',
    code: 0xed41,
  },
  {
    name: 'nf-fa-apple_whole',
    code: 0xee98,
  },
  {
    name: 'nf-fa-archive',
    code: 0xf187,
  },
  {
    name: 'nf-fa-archway',
    code: 0xee20,
  },
  {
    name: 'nf-fa-area_chart',
    code: 0xf1fe,
  },
  {
    name: 'nf-fa-arrow_circle_down',
    code: 0xf0ab,
  },
  {
    name: 'nf-fa-arrow_circle_left',
    code: 0xf0a8,
  },
  {
    name: 'nf-fa-arrow_circle_o_down',
    code: 0xf01a,
  },
  {
    name: 'nf-fa-arrow_circle_o_left',
    code: 0xf190,
  },
  {
    name: 'nf-fa-arrow_circle_o_right',
    code: 0xf18e,
  },
  {
    name: 'nf-fa-arrow_circle_o_up',
    code: 0xf01b,
  },
  {
    name: 'nf-fa-arrow_circle_right',
    code: 0xf0a9,
  },
  {
    name: 'nf-fa-arrow_circle_up',
    code: 0xf0aa,
  },
  {
    name: 'nf-fa-arrow_down',
    code: 0xf063,
  },
  {
    name: 'nf-fa-arrow_down_1_9',
    code: 0xf162,
  },
  {
    name: 'nf-fa-arrow_down_9_1',
    code: 0xefb1,
  },
  {
    name: 'nf-fa-arrow_down_a_z',
    code: 0xf15d,
  },
  {
    name: 'nf-fa-arrow_down_long',
    code: 0xf175,
  },
  {
    name: 'nf-fa-arrow_down_short_wide',
    code: 0xefaf,
  },
  {
    name: 'nf-fa-arrow_down_wide_short',
    code: 0xf160,
  },
  {
    name: 'nf-fa-arrow_down_z_a',
    code: 0xefad,
  },
  {
    name: 'nf-fa-arrow_left',
    code: 0xf060,
  },
  {
    name: 'nf-fa-arrow_left_long',
    code: 0xf177,
  },
  {
    name: 'nf-fa-arrow_pointer',
    code: 0xf245,
  },
  {
    name: 'nf-fa-arrow_right',
    code: 0xf061,
  },
  {
    name: 'nf-fa-arrow_right_arrow_left',
    code: 0xf0ec,
  },
  {
    name: 'nf-fa-arrow_right_from_bracket',
    code: 0xf08b,
  },
  {
    name: 'nf-fa-arrow_right_long',
    code: 0xf178,
  },
  {
    name: 'nf-fa-arrow_right_to_bracket',
    code: 0xf090,
  },
  {
    name: 'nf-fa-arrow_rotate_left',
    code: 0xf0e2,
  },
  {
    name: 'nf-fa-arrow_rotate_right',
    code: 0xf01e,
  },
  {
    name: 'nf-fa-arrow_turn_down',
    code: 0xf149,
  },
  {
    name: 'nf-fa-arrow_turn_up',
    code: 0xf148,
  },
  {
    name: 'nf-fa-arrow_up',
    code: 0xf062,
  },
  {
    name: 'nf-fa-arrow_up_1_9',
    code: 0xf163,
  },
  {
    name: 'nf-fa-arrow_up_9_1',
    code: 0xefb2,
  },
  {
    name: 'nf-fa-arrow_up_a_z',
    code: 0xf15e,
  },
  {
    name: 'nf-fa-arrow_up_long',
    code: 0xf176,
  },
  {
    name: 'nf-fa-arrow_up_right_from_square',
    code: 0xf08e,
  },
  {
    name: 'nf-fa-arrow_up_short_wide',
    code: 0xefb0,
  },
  {
    name: 'nf-fa-arrow_up_wide_short',
    code: 0xf161,
  },
  {
    name: 'nf-fa-arrow_up_z_a',
    code: 0xefae,
  },
  {
    name: 'nf-fa-arrows',
    code: 0xf047,
  },
  {
    name: 'nf-fa-arrows_alt',
    code: 0xf0b2,
  },
  {
    name: 'nf-fa-arrows_h',
    code: 0xf07e,
  },
  {
    name: 'nf-fa-arrows_left_right',
    code: 0xf07e,
  },
  {
    name: 'nf-fa-arrows_rotate',
    code: 0xf021,
  },
  {
    name: 'nf-fa-arrows_up_down',
    code: 0xf07d,
  },
  {
    name: 'nf-fa-arrows_up_down_left_right',
    code: 0xf047,
  },
  {
    name: 'nf-fa-arrows_v',
    code: 0xf07d,
  },
  {
    name: 'nf-fa-artstation',
    code: 0xef31,
  },
  {
    name: 'nf-fa-asl_interpreting',
    code: 0xf2a3,
  },
  {
    name: 'nf-fa-assistive_listening_systems',
    code: 0xf2a2,
  },
  {
    name: 'nf-fa-asterisk',
    code: 0xf069,
  },
  {
    name: 'nf-fa-asymmetrik',
    code: 0xf0cf,
  },
  {
    name: 'nf-fa-at',
    code: 0xf1fa,
  },
  {
    name: 'nf-fa-atlassian',
    code: 0xef32,
  },
  {
    name: 'nf-fa-atom',
    code: 0xee99,
  },
  {
    name: 'nf-fa-audible',
    code: 0xf0df,
  },
  {
    name: 'nf-fa-audio_description',
    code: 0xf29e,
  },
  {
    name: 'nf-fa-automobile',
    code: 0xf1b9,
  },
  {
    name: 'nf-fa-autoprefixer',
    code: 0xed47,
  },
  {
    name: 'nf-fa-avianex',
    code: 0xefc2,
  },
  {
    name: 'nf-fa-aviato',
    code: 0xed4c,
  },
  {
    name: 'nf-fa-award',
    code: 0xee22,
  },
  {
    name: 'nf-fa-aws',
    code: 0xf0ef,
  },
  {
    name: 'nf-fa-baby',
    code: 0xef33,
  },
  {
    name: 'nf-fa-baby_carriage',
    code: 0xef34,
  },
  {
    name: 'nf-fa-backward',
    code: 0xf04a,
  },
  {
    name: 'nf-fa-backward_fast',
    code: 0xf049,
  },
  {
    name: 'nf-fa-backward_step',
    code: 0xf048,
  },
  {
    name: 'nf-fa-bacon',
    code: 0xef77,
  },
  {
    name: 'nf-fa-bag_shopping',
    code: 0xf290,
  },
  {
    name: 'nf-fa-bahai',
    code: 0xeecb,
  },
  {
    name: 'nf-fa-balance_scale',
    code: 0xf24e,
  },
  {
    name: 'nf-fa-ban',
    code: 0xf05e,
  },
  {
    name: 'nf-fa-ban_smoking',
    code: 0xee16,
  },
  {
    name: 'nf-fa-bandage',
    code: 0xed74,
  },
  {
    name: 'nf-fa-bandcamp',
    code: 0xf2d5,
  },
  {
    name: 'nf-fa-bank',
    code: 0xf19c,
  },
  {
    name: 'nf-fa-bar_chart',
    code: 0xf080,
  },
  {
    name: 'nf-fa-bar_chart_o',
    code: 0xf080,
  },
  {
    name: 'nf-fa-barcode',
    code: 0xf02a,
  },
  {
    name: 'nf-fa-bars',
    code: 0xf0c9,
  },
  {
    name: 'nf-fa-bars_progress',
    code: 0xef8f,
  },
  {
    name: 'nf-fa-bars_staggered',
    code: 0xee19,
  },
  {
    name: 'nf-fa-baseball',
    code: 0xed5c,
  },
  {
    name: 'nf-fa-baseball_bat_ball',
    code: 0xed5b,
  },
  {
    name: 'nf-fa-basket_shopping',
    code: 0xf291,
  },
  {
    name: 'nf-fa-basketball',
    code: 0xed5d,
  },
  {
    name: 'nf-fa-bath',
    code: 0xf2cd,
  },
  {
    name: 'nf-fa-bathtub',
    code: 0xf2cd,
  },
  {
    name: 'nf-fa-battery',
    code: 0xf240,
  },
  {
    name: 'nf-fa-battery_0',
    code: 0xf244,
  },
  {
    name: 'nf-fa-battery_1',
    code: 0xf243,
  },
  {
    name: 'nf-fa-battery_2',
    code: 0xf242,
  },
  {
    name: 'nf-fa-battery_3',
    code: 0xf241,
  },
  {
    name: 'nf-fa-battery_4',
    code: 0xf240,
  },
  {
    name: 'nf-fa-battery_empty',
    code: 0xf244,
  },
  {
    name: 'nf-fa-battery_full',
    code: 0xf240,
  },
  {
    name: 'nf-fa-battery_half',
    code: 0xf242,
  },
  {
    name: 'nf-fa-battery_quarter',
    code: 0xf243,
  },
  {
    name: 'nf-fa-battery_three_quarters',
    code: 0xf241,
  },
  {
    name: 'nf-fa-battle_net',
    code: 0xef94,
  },
  {
    name: 'nf-fa-bed',
    code: 0xf236,
  },
  {
    name: 'nf-fa-bed_pulse',
    code: 0xed8a,
  },
  {
    name: 'nf-fa-beer',
    code: 0xf0fc,
  },
  {
    name: 'nf-fa-beer_mug_empty',
    code: 0xf0fc,
  },
  {
    name: 'nf-fa-behance',
    code: 0xf1b4,
  },
  {
    name: 'nf-fa-behance_square',
    code: 0xf1b5,
  },
  {
    name: 'nf-fa-bell',
    code: 0xf0f3,
  },
  {
    name: 'nf-fa-bell_concierge',
    code: 0xee2b,
  },
  {
    name: 'nf-fa-bell_o',
    code: 0xf0a2,
  },
  {
    name: 'nf-fa-bell_slash',
    code: 0xf1f6,
  },
  {
    name: 'nf-fa-bell_slash_o',
    code: 0xf1f7,
  },
  {
    name: 'nf-fa-bezier_curve',
    code: 0xee24,
  },
  {
    name: 'nf-fa-bicycle',
    code: 0xf206,
  },
  {
    name: 'nf-fa-bimobject',
    code: 0xf0ff,
  },
  {
    name: 'nf-fa-binoculars',
    code: 0xf1e5,
  },
  {
    name: 'nf-fa-biohazard',
    code: 0xef35,
  },
  {
    name: 'nf-fa-birthday_cake',
    code: 0xf1fd,
  },
  {
    name: 'nf-fa-bitbucket',
    code: 0xf171,
  },
  {
    name: 'nf-fa-bitbucket_square',
    code: 0xf172,
  },
  {
    name: 'nf-fa-bitcoin',
    code: 0xf10f,
  },
  {
    name: 'nf-fa-bity',
    code: 0xf116,
  },
  {
    name: 'nf-fa-black_tie',
    code: 0xf27e,
  },
  {
    name: 'nf-fa-blackberry',
    code: 0xf117,
  },
  {
    name: 'nf-fa-blender',
    code: 0xede1,
  },
  {
    name: 'nf-fa-blender_phone',
    code: 0xeeea,
  },
  {
    name: 'nf-fa-blind',
    code: 0xf29d,
  },
  {
    name: 'nf-fa-blog',
    code: 0xef36,
  },
  {
    name: 'nf-fa-blogger',
    code: 0xf11f,
  },
  {
    name: 'nf-fa-blogger_b',
    code: 0xf12f,
  },
  {
    name: 'nf-fa-bluetooth',
    code: 0xf293,
  },
  {
    name: 'nf-fa-bluetooth_b',
    code: 0xf294,
  },
  {
    name: 'nf-fa-bold',
    code: 0xf032,
  },
  {
    name: 'nf-fa-bolt',
    code: 0xf0e7,
  },
  {
    name: 'nf-fa-bomb',
    code: 0xf1e2,
  },
  {
    name: 'nf-fa-bone',
    code: 0xee9a,
  },
  {
    name: 'nf-fa-bong',
    code: 0xee25,
  },
  {
    name: 'nf-fa-book',
    code: 0xf02d,
  },
  {
    name: 'nf-fa-book_atlas',
    code: 0xee21,
  },
  {
    name: 'nf-fa-book_bible',
    code: 0xeebe,
  },
  {
    name: 'nf-fa-book_journal_whills',
    code: 0xeecd,
  },
  {
    name: 'nf-fa-book_medical',
    code: 0xef78,
  },
  {
    name: 'nf-fa-book_open',
    code: 0xede2,
  },
  {
    name: 'nf-fa-book_open_reader',
    code: 0xee9b,
  },
  {
    name: 'nf-fa-book_quran',
    code: 0xeedc,
  },
  {
    name: 'nf-fa-book_skull',
    code: 0xeeeb,
  },
  {
    name: 'nf-fa-book_tanakh',
    code: 0xef8e,
  },
  {
    name: 'nf-fa-bookmark',
    code: 0xf02e,
  },
  {
    name: 'nf-fa-bookmark_o',
    code: 0xf097,
  },
  {
    name: 'nf-fa-bootstrap',
    code: 0xef95,
  },
  {
    name: 'nf-fa-border_all',
    code: 0xefa3,
  },
  {
    name: 'nf-fa-border_none',
    code: 0xefa4,
  },
  {
    name: 'nf-fa-border_top_left',
    code: 0xefa5,
  },
  {
    name: 'nf-fa-bowling_ball',
    code: 0xed5e,
  },
  {
    name: 'nf-fa-box',
    code: 0xed75,
  },
  {
    name: 'nf-fa-box_archive',
    code: 0xf187,
  },
  {
    name: 'nf-fa-box_open',
    code: 0xed95,
  },
  {
    name: 'nf-fa-boxes_stacked',
    code: 0xed76,
  },
  {
    name: 'nf-fa-braille',
    code: 0xf2a1,
  },
  {
    name: 'nf-fa-brain',
    code: 0xee9c,
  },
  {
    name: 'nf-fa-bread_slice',
    code: 0xef79,
  },
  {
    name: 'nf-fa-briefcase',
    code: 0xf0b1,
  },
  {
    name: 'nf-fa-briefcase_medical',
    code: 0xed77,
  },
  {
    name: 'nf-fa-broom',
    code: 0xede4,
  },
  {
    name: 'nf-fa-broom_ball',
    code: 0xed6e,
  },
  {
    name: 'nf-fa-brush',
    code: 0xee26,
  },
  {
    name: 'nf-fa-btc',
    code: 0xf15a,
  },
  {
    name: 'nf-fa-buffer',
    code: 0xef96,
  },
  {
    name: 'nf-fa-bug',
    code: 0xf188,
  },
  {
    name: 'nf-fa-building',
    code: 0xf1ad,
  },
  {
    name: 'nf-fa-building_columns',
    code: 0xf19c,
  },
  {
    name: 'nf-fa-building_o',
    code: 0xf0f7,
  },
  {
    name: 'nf-fa-bullhorn',
    code: 0xf0a1,
  },
  {
    name: 'nf-fa-bullseye',
    code: 0xf140,
  },
  {
    name: 'nf-fa-burger',
    code: 0xef82,
  },
  {
    name: 'nf-fa-buromobelexperte',
    code: 0xf13f,
  },
  {
    name: 'nf-fa-bus',
    code: 0xf207,
  },
  {
    name: 'nf-fa-bus_simple',
    code: 0xee27,
  },
  {
    name: 'nf-fa-business_time',
    code: 0xeebf,
  },
  {
    name: 'nf-fa-buy_n_large',
    code: 0xefb6,
  },
  {
    name: 'nf-fa-buysellads',
    code: 0xf20d,
  },
  {
    name: 'nf-fa-cab',
    code: 0xf1ba,
  },
  {
    name: 'nf-fa-cable_car',
    code: 0xef71,
  },
  {
    name: 'nf-fa-cake_candles',
    code: 0xf1fd,
  },
  {
    name: 'nf-fa-calculator',
    code: 0xf1ec,
  },
  {
    name: 'nf-fa-calendar',
    code: 0xf073,
  },
  {
    name: 'nf-fa-calendar_check',
    code: 0xf274,
  },
  {
    name: 'nf-fa-calendar_check_o',
    code: 0xf274,
  },
  {
    name: 'nf-fa-calendar_day',
    code: 0xef37,
  },
  {
    name: 'nf-fa-calendar_days',
    code: 0xf073,
  },
  {
    name: 'nf-fa-calendar_minus',
    code: 0xf272,
  },
  {
    name: 'nf-fa-calendar_minus_o',
    code: 0xf272,
  },
  {
    name: 'nf-fa-calendar_o',
    code: 0xf133,
  },
  {
    name: 'nf-fa-calendar_plus',
    code: 0xf271,
  },
  {
    name: 'nf-fa-calendar_plus_o',
    code: 0xf271,
  },
  {
    name: 'nf-fa-calendar_times_o',
    code: 0xf273,
  },
  {
    name: 'nf-fa-calendar_week',
    code: 0xef38,
  },
  {
    name: 'nf-fa-calendar_xmark',
    code: 0xf273,
  },
  {
    name: 'nf-fa-camera',
    code: 0xf030,
  },
  {
    name: 'nf-fa-camera_retro',
    code: 0xf083,
  },
  {
    name: 'nf-fa-campground',
    code: 0xeeec,
  },
  {
    name: 'nf-fa-canadian_maple_leaf',
    code: 0xef39,
  },
  {
    name: 'nf-fa-candy_cane',
    code: 0xef3a,
  },
  {
    name: 'nf-fa-cannabis',
    code: 0xee28,
  },
  {
    name: 'nf-fa-capsules',
    code: 0xed79,
  },
  {
    name: 'nf-fa-car',
    code: 0xf1b9,
  },
  {
    name: 'nf-fa-car_battery',
    code: 0xee9e,
  },
  {
    name: 'nf-fa-car_burst',
    code: 0xee9f,
  },
  {
    name: 'nf-fa-car_rear',
    code: 0xee9d,
  },
  {
    name: 'nf-fa-car_side',
    code: 0xeea0,
  },
  {
    name: 'nf-fa-caravan',
    code: 0xefc1,
  },
  {
    name: 'nf-fa-caret_down',
    code: 0xf0d7,
  },
  {
    name: 'nf-fa-caret_left',
    code: 0xf0d9,
  },
  {
    name: 'nf-fa-caret_right',
    code: 0xf0da,
  },
  {
    name: 'nf-fa-caret_square_o_down',
    code: 0xf150,
  },
  {
    name: 'nf-fa-caret_square_o_left',
    code: 0xf191,
  },
  {
    name: 'nf-fa-caret_square_o_right',
    code: 0xf152,
  },
  {
    name: 'nf-fa-caret_square_o_up',
    code: 0xf151,
  },
  {
    name: 'nf-fa-caret_up',
    code: 0xf0d8,
  },
  {
    name: 'nf-fa-carrot',
    code: 0xef3b,
  },
  {
    name: 'nf-fa-cart_arrow_down',
    code: 0xf218,
  },
  {
    name: 'nf-fa-cart_flatbed',
    code: 0xed7f,
  },
  {
    name: 'nf-fa-cart_flatbed_suitcase',
    code: 0xee66,
  },
  {
    name: 'nf-fa-cart_plus',
    code: 0xf217,
  },
  {
    name: 'nf-fa-cart_shopping',
    code: 0xf07a,
  },
  {
    name: 'nf-fa-cash_register',
    code: 0xef3c,
  },
  {
    name: 'nf-fa-cat',
    code: 0xeeed,
  },
  {
    name: 'nf-fa-cc',
    code: 0xf20a,
  },
  {
    name: 'nf-fa-cc_amazon_pay',
    code: 0xed57,
  },
  {
    name: 'nf-fa-cc_amex',
    code: 0xf1f3,
  },
  {
    name: 'nf-fa-cc_apple_pay',
    code: 0xed42,
  },
  {
    name: 'nf-fa-cc_diners_club',
    code: 0xf24c,
  },
  {
    name: 'nf-fa-cc_discover',
    code: 0xf1f2,
  },
  {
    name: 'nf-fa-cc_jcb',
    code: 0xf24b,
  },
  {
    name: 'nf-fa-cc_mastercard',
    code: 0xf1f1,
  },
  {
    name: 'nf-fa-cc_paypal',
    code: 0xf1f4,
  },
  {
    name: 'nf-fa-cc_stripe',
    code: 0xf1f5,
  },
  {
    name: 'nf-fa-cc_visa',
    code: 0xf1f0,
  },
  {
    name: 'nf-fa-centercode',
    code: 0xf14f,
  },
  {
    name: 'nf-fa-centos',
    code: 0xef3d,
  },
  {
    name: 'nf-fa-certificate',
    code: 0xf0a3,
  },
  {
    name: 'nf-fa-chain',
    code: 0xf0c1,
  },
  {
    name: 'nf-fa-chain_broken',
    code: 0xf127,
  },
  {
    name: 'nf-fa-chair',
    code: 0xeeee,
  },
  {
    name: 'nf-fa-chalkboard',
    code: 0xede5,
  },
  {
    name: 'nf-fa-chalkboard_user',
    code: 0xede6,
  },
  {
    name: 'nf-fa-champagne_glasses',
    code: 0xef49,
  },
  {
    name: 'nf-fa-charging_station',
    code: 0xeea1,
  },
  {
    name: 'nf-fa-chart_area',
    code: 0xf1fe,
  },
  {
    name: 'nf-fa-chart_bar',
    code: 0xf080,
  },
  {
    name: 'nf-fa-chart_line',
    code: 0xf201,
  },
  {
    name: 'nf-fa-chart_pie',
    code: 0xf200,
  },
  {
    name: 'nf-fa-check',
    code: 0xf00c,
  },
  {
    name: 'nf-fa-check_circle',
    code: 0xf058,
  },
  {
    name: 'nf-fa-check_circle_o',
    code: 0xf05d,
  },
  {
    name: 'nf-fa-check_double',
    code: 0xee29,
  },
  {
    name: 'nf-fa-check_square',
    code: 0xf14a,
  },
  {
    name: 'nf-fa-check_square_o',
    code: 0xf046,
  },
  {
    name: 'nf-fa-check_to_slot',
    code: 0xef2f,
  },
  {
    name: 'nf-fa-cheese',
    code: 0xef7a,
  },
  {
    name: 'nf-fa-chess',
    code: 0xed5f,
  },
  {
    name: 'nf-fa-chess_bishop',
    code: 0xed60,
  },
  {
    name: 'nf-fa-chess_board',
    code: 0xed61,
  },
  {
    name: 'nf-fa-chess_king',
    code: 0xed62,
  },
  {
    name: 'nf-fa-chess_knight',
    code: 0xed63,
  },
  {
    name: 'nf-fa-chess_pawn',
    code: 0xed64,
  },
  {
    name: 'nf-fa-chess_queen',
    code: 0xed65,
  },
  {
    name: 'nf-fa-chess_rook',
    code: 0xed66,
  },
  {
    name: 'nf-fa-chevron_circle_down',
    code: 0xf13a,
  },
  {
    name: 'nf-fa-chevron_circle_left',
    code: 0xf137,
  },
  {
    name: 'nf-fa-chevron_circle_right',
    code: 0xf138,
  },
  {
    name: 'nf-fa-chevron_circle_up',
    code: 0xf139,
  },
  {
    name: 'nf-fa-chevron_down',
    code: 0xf078,
  },
  {
    name: 'nf-fa-chevron_left',
    code: 0xf053,
  },
  {
    name: 'nf-fa-chevron_right',
    code: 0xf054,
  },
  {
    name: 'nf-fa-chevron_up',
    code: 0xf077,
  },
  {
    name: 'nf-fa-child',
    code: 0xf1ae,
  },
  {
    name: 'nf-fa-chrome',
    code: 0xf268,
  },
  {
    name: 'nf-fa-chromecast',
    code: 0xef97,
  },
  {
    name: 'nf-fa-church',
    code: 0xede7,
  },
  {
    name: 'nf-fa-circle',
    code: 0xf111,
  },
  {
    name: 'nf-fa-circle_arrow_down',
    code: 0xf0ab,
  },
  {
    name: 'nf-fa-circle_arrow_left',
    code: 0xf0a8,
  },
  {
    name: 'nf-fa-circle_arrow_right',
    code: 0xf0a9,
  },
  {
    name: 'nf-fa-circle_arrow_up',
    code: 0xf0aa,
  },
  {
    name: 'nf-fa-circle_check',
    code: 0xf05d,
  },
  {
    name: 'nf-fa-circle_chevron_down',
    code: 0xf13a,
  },
  {
    name: 'nf-fa-circle_chevron_left',
    code: 0xf137,
  },
  {
    name: 'nf-fa-circle_chevron_right',
    code: 0xf138,
  },
  {
    name: 'nf-fa-circle_chevron_up',
    code: 0xf139,
  },
  {
    name: 'nf-fa-circle_dollar_to_slot',
    code: 0xed98,
  },
  {
    name: 'nf-fa-circle_dot',
    code: 0xf192,
  },
  {
    name: 'nf-fa-circle_down',
    code: 0xf01a,
  },
  {
    name: 'nf-fa-circle_exclamation',
    code: 0xf06a,
  },
  {
    name: 'nf-fa-circle_h',
    code: 0xed83,
  },
  {
    name: 'nf-fa-circle_half_stroke',
    code: 0xf042,
  },
  {
    name: 'nf-fa-circle_info',
    code: 0xf05a,
  },
  {
    name: 'nf-fa-circle_left',
    code: 0xf190,
  },
  {
    name: 'nf-fa-circle_minus',
    code: 0xf056,
  },
  {
    name: 'nf-fa-circle_notch',
    code: 0xf1ce,
  },
  {
    name: 'nf-fa-circle_o',
    code: 0xf10c,
  },
  {
    name: 'nf-fa-circle_o_notch',
    code: 0xf1ce,
  },
  {
    name: 'nf-fa-circle_pause',
    code: 0xf28b,
  },
  {
    name: 'nf-fa-circle_play',
    code: 0xf144,
  },
  {
    name: 'nf-fa-circle_plus',
    code: 0xf055,
  },
  {
    name: 'nf-fa-circle_question',
    code: 0xf059,
  },
  {
    name: 'nf-fa-circle_radiation',
    code: 0xef5b,
  },
  {
    name: 'nf-fa-circle_right',
    code: 0xf18e,
  },
  {
    name: 'nf-fa-circle_stop',
    code: 0xf28d,
  },
  {
    name: 'nf-fa-circle_thin',
    code: 0xf1db,
  },
  {
    name: 'nf-fa-circle_up',
    code: 0xf01b,
  },
  {
    name: 'nf-fa-circle_user',
    code: 0xf2bd,
  },
  {
    name: 'nf-fa-circle_xmark',
    code: 0xf05c,
  },
  {
    name: 'nf-fa-city',
    code: 0xeec0,
  },
  {
    name: 'nf-fa-clipboard',
    code: 0xf0ea,
  },
  {
    name: 'nf-fa-clipboard_alt',
    code: 0xf07f,
  },
  {
    name: 'nf-fa-clipboard_check',
    code: 0xed7a,
  },
  {
    name: 'nf-fa-clipboard_list',
    code: 0xed7b,
  },
  {
    name: 'nf-fa-clipboard_user',
    code: 0xef7c,
  },
  {
    name: 'nf-fa-clock',
    code: 0xf017,
  },
  {
    name: 'nf-fa-clock_o',
    code: 0xf017,
  },
  {
    name: 'nf-fa-clock_rotate_left',
    code: 0xf1da,
  },
  {
    name: 'nf-fa-clone',
    code: 0xf24d,
  },
  {
    name: 'nf-fa-close',
    code: 0xf00d,
  },
  {
    name: 'nf-fa-closed_captioning',
    code: 0xf20a,
  },
  {
    name: 'nf-fa-cloud',
    code: 0xf0c2,
  },
  {
    name: 'nf-fa-cloud_arrow_down',
    code: 0xf0ed,
  },
  {
    name: 'nf-fa-cloud_arrow_up',
    code: 0xf0ee,
  },
  {
    name: 'nf-fa-cloud_bolt',
    code: 0xef2c,
  },
  {
    name: 'nf-fa-cloud_download',
    code: 0xf0ed,
  },
  {
    name: 'nf-fa-cloud_meatball',
    code: 0xef1a,
  },
  {
    name: 'nf-fa-cloud_moon',
    code: 0xeeef,
  },
  {
    name: 'nf-fa-cloud_moon_rain',
    code: 0xef1b,
  },
  {
    name: 'nf-fa-cloud_rain',
    code: 0xef1c,
  },
  {
    name: 'nf-fa-cloud_showers_heavy',
    code: 0xef1d,
  },
  {
    name: 'nf-fa-cloud_sun',
    code: 0xeef0,
  },
  {
    name: 'nf-fa-cloud_sun_rain',
    code: 0xef1e,
  },
  {
    name: 'nf-fa-cloud_upload',
    code: 0xf0ee,
  },
  {
    name: 'nf-fa-cloudscale',
    code: 0xf15f,
  },
  {
    name: 'nf-fa-cloudsmith',
    code: 0xf167,
  },
  {
    name: 'nf-fa-cloudversify',
    code: 0xf16f,
  },
  {
    name: 'nf-fa-cny',
    code: 0xf157,
  },
  {
    name: 'nf-fa-code',
    code: 0xf121,
  },
  {
    name: 'nf-fa-code_branch',
    code: 0xf126,
  },
  {
    name: 'nf-fa-code_commit',
    code: 0xf172,
  },
  {
    name: 'nf-fa-code_fork',
    code: 0xf126,
  },
  {
    name: 'nf-fa-code_merge',
    code: 0xf17f,
  },
  {
    name: 'nf-fa-codepen',
    code: 0xf1cb,
  },
  {
    name: 'nf-fa-codiepie',
    code: 0xf284,
  },
  {
    name: 'nf-fa-coffee',
    code: 0xf0f4,
  },
  {
    name: 'nf-fa-cog',
    code: 0xf013,
  },
  {
    name: 'nf-fa-cogs',
    code: 0xf085,
  },
  {
    name: 'nf-fa-coins',
    code: 0xede8,
  },
  {
    name: 'nf-fa-columns',
    code: 0xf0db,
  },
  {
    name: 'nf-fa-comment',
    code: 0xf075,
  },
  {
    name: 'nf-fa-comment_dollar',
    code: 0xeec1,
  },
  {
    name: 'nf-fa-comment_dots',
    code: 0xf27b,
  },
  {
    name: 'nf-fa-comment_medical',
    code: 0xef7d,
  },
  {
    name: 'nf-fa-comment_o',
    code: 0xf0e5,
  },
  {
    name: 'nf-fa-comment_slash',
    code: 0xed96,
  },
  {
    name: 'nf-fa-comment_sms',
    code: 0xef68,
  },
  {
    name: 'nf-fa-commenting',
    code: 0xf27a,
  },
  {
    name: 'nf-fa-commenting_o',
    code: 0xf27b,
  },
  {
    name: 'nf-fa-comments',
    code: 0xf086,
  },
  {
    name: 'nf-fa-comments_dollar',
    code: 0xeec2,
  },
  {
    name: 'nf-fa-comments_o',
    code: 0xf0e6,
  },
  {
    name: 'nf-fa-compact_disc',
    code: 0xede9,
  },
  {
    name: 'nf-fa-compass',
    code: 0xf14e,
  },
  {
    name: 'nf-fa-compass_drafting',
    code: 0xee31,
  },
  {
    name: 'nf-fa-compress',
    code: 0xf066,
  },
  {
    name: 'nf-fa-computer_mouse',
    code: 0xefba,
  },
  {
    name: 'nf-fa-confluence',
    code: 0xef3f,
  },
  {
    name: 'nf-fa-connectdevelop',
    code: 0xf20e,
  },
  {
    name: 'nf-fa-contao',
    code: 0xf26d,
  },
  {
    name: 'nf-fa-cookie',
    code: 0xee2c,
  },
  {
    name: 'nf-fa-cookie_bite',
    code: 0xee2d,
  },
  {
    name: 'nf-fa-copy',
    code: 0xf0c5,
  },
  {
    name: 'nf-fa-copyright',
    code: 0xf1f9,
  },
  {
    name: 'nf-fa-cotton_bureau',
    code: 0xefb5,
  },
  {
    name: 'nf-fa-couch',
    code: 0xed97,
  },
  {
    name: 'nf-fa-cow',
    code: 0xeef1,
  },
  {
    name: 'nf-fa-cpanel',
    code: 0xf18f,
  },
  {
    name: 'nf-fa-creative_commons',
    code: 0xf25e,
  },
  {
    name: 'nf-fa-creative_commons_by',
    code: 0xedb1,
  },
  {
    name: 'nf-fa-creative_commons_nc',
    code: 0xedb2,
  },
  {
    name: 'nf-fa-creative_commons_nc_eu',
    code: 0xedb3,
  },
  {
    name: 'nf-fa-creative_commons_nc_jp',
    code: 0xedb4,
  },
  {
    name: 'nf-fa-creative_commons_nd',
    code: 0xedb5,
  },
  {
    name: 'nf-fa-creative_commons_pd',
    code: 0xedb6,
  },
  {
    name: 'nf-fa-creative_commons_pd_alt',
    code: 0xedb7,
  },
  {
    name: 'nf-fa-creative_commons_remix',
    code: 0xedb8,
  },
  {
    name: 'nf-fa-creative_commons_sa',
    code: 0xedb9,
  },
  {
    name: 'nf-fa-creative_commons_sampling',
    code: 0xedba,
  },
  {
    name: 'nf-fa-creative_commons_sampling_plus',
    code: 0xedbb,
  },
  {
    name: 'nf-fa-creative_commons_share',
    code: 0xedbc,
  },
  {
    name: 'nf-fa-creative_commons_zero',
    code: 0xedbd,
  },
  {
    name: 'nf-fa-credit_card',
    code: 0xf09d,
  },
  {
    name: 'nf-fa-credit_card_alt',
    code: 0xf283,
  },
  {
    name: 'nf-fa-critical_role',
    code: 0xeef2,
  },
  {
    name: 'nf-fa-crop',
    code: 0xf125,
  },
  {
    name: 'nf-fa-crop_simple',
    code: 0xee2e,
  },
  {
    name: 'nf-fa-cross',
    code: 0xeec3,
  },
  {
    name: 'nf-fa-crosshairs',
    code: 0xf05b,
  },
  {
    name: 'nf-fa-crow',
    code: 0xedea,
  },
  {
    name: 'nf-fa-crown',
    code: 0xedeb,
  },
  {
    name: 'nf-fa-crutch',
    code: 0xef7e,
  },
  {
    name: 'nf-fa-css3',
    code: 0xf13c,
  },
  {
    name: 'nf-fa-css3_alt',
    code: 0xf19f,
  },
  {
    name: 'nf-fa-cube',
    code: 0xf1b2,
  },
  {
    name: 'nf-fa-cubes',
    code: 0xf1b3,
  },
  {
    name: 'nf-fa-cut',
    code: 0xf0c4,
  },
  {
    name: 'nf-fa-cutlery',
    code: 0xf0f5,
  },
  {
    name: 'nf-fa-cuttlefish',
    code: 0xf1af,
  },
  {
    name: 'nf-fa-d_and_d',
    code: 0xf1bf,
  },
  {
    name: 'nf-fa-d_and_d_beyond',
    code: 0xeef3,
  },
  {
    name: 'nf-fa-dashboard',
    code: 0xf0e4,
  },
  {
    name: 'nf-fa-dashcube',
    code: 0xf210,
  },
  {
    name: 'nf-fa-database',
    code: 0xf1c0,
  },
  {
    name: 'nf-fa-deaf',
    code: 0xf2a4,
  },
  {
    name: 'nf-fa-deafness',
    code: 0xf2a4,
  },
  {
    name: 'nf-fa-dedent',
    code: 0xf03b,
  },
  {
    name: 'nf-fa-delete_left',
    code: 0xee23,
  },
  {
    name: 'nf-fa-delicious',
    code: 0xf1a5,
  },
  {
    name: 'nf-fa-democrat',
    code: 0xef1f,
  },
  {
    name: 'nf-fa-deploydog',
    code: 0xf1cf,
  },
  {
    name: 'nf-fa-deskpro',
    code: 0xf1df,
  },
  {
    name: 'nf-fa-desktop',
    code: 0xf108,
  },
  {
    name: 'nf-fa-dev',
    code: 0xeef4,
  },
  {
    name: 'nf-fa-deviantart',
    code: 0xf1bd,
  },
  {
    name: 'nf-fa-dharmachakra',
    code: 0xeec4,
  },
  {
    name: 'nf-fa-dhl',
    code: 0xef40,
  },
  {
    name: 'nf-fa-diagram_project',
    code: 0xefce,
  },
  {
    name: 'nf-fa-diamond',
    code: 0xf29f,
  },
  {
    name: 'nf-fa-diamond_turn_right',
    code: 0xeea2,
  },
  {
    name: 'nf-fa-diaspora',
    code: 0xef41,
  },
  {
    name: 'nf-fa-dice',
    code: 0xedec,
  },
  {
    name: 'nf-fa-dice_d20',
    code: 0xeef5,
  },
  {
    name: 'nf-fa-dice_d6',
    code: 0xeef6,
  },
  {
    name: 'nf-fa-dice_five',
    code: 0xeded,
  },
  {
    name: 'nf-fa-dice_four',
    code: 0xedee,
  },
  {
    name: 'nf-fa-dice_one',
    code: 0xedef,
  },
  {
    name: 'nf-fa-dice_six',
    code: 0xedf0,
  },
  {
    name: 'nf-fa-dice_three',
    code: 0xedf1,
  },
  {
    name: 'nf-fa-dice_two',
    code: 0xedf2,
  },
  {
    name: 'nf-fa-digg',
    code: 0xf1a6,
  },
  {
    name: 'nf-fa-digital_ocean',
    code: 0xf1ef,
  },
  {
    name: 'nf-fa-discord',
    code: 0xf1ff,
  },
  {
    name: 'nf-fa-discourse',
    code: 0xf20c,
  },
  {
    name: 'nf-fa-disease',
    code: 0xef7f,
  },
  {
    name: 'nf-fa-divide',
    code: 0xedf3,
  },
  {
    name: 'nf-fa-dna',
    code: 0xed7d,
  },
  {
    name: 'nf-fa-dochub',
    code: 0xf20f,
  },
  {
    name: 'nf-fa-docker',
    code: 0xf21f,
  },
  {
    name: 'nf-fa-dog',
    code: 0xeef7,
  },
  {
    name: 'nf-fa-dollar',
    code: 0xf155,
  },
  {
    name: 'nf-fa-dollar_sign',
    code: 0xf155,
  },
  {
    name: 'nf-fa-dolly',
    code: 0xed7e,
  },
  {
    name: 'nf-fa-door_closed',
    code: 0xedf4,
  },
  {
    name: 'nf-fa-door_open',
    code: 0xedf5,
  },
  {
    name: 'nf-fa-dot_circle_o',
    code: 0xf192,
  },
  {
    name: 'nf-fa-dove',
    code: 0xed99,
  },
  {
    name: 'nf-fa-down_left_and_up_right_to_center',
    code: 0xed4d,
  },
  {
    name: 'nf-fa-down_long',
    code: 0xf03f,
  },
  {
    name: 'nf-fa-download',
    code: 0xf019,
  },
  {
    name: 'nf-fa-draft2digital',
    code: 0xf220,
  },
  {
    name: 'nf-fa-dragon',
    code: 0xeef8,
  },
  {
    name: 'nf-fa-draw_polygon',
    code: 0xeea3,
  },
  {
    name: 'nf-fa-dribbble',
    code: 0xf17d,
  },
  {
    name: 'nf-fa-drivers_license',
    code: 0xf2c2,
  },
  {
    name: 'nf-fa-drivers_license_o',
    code: 0xf2c3,
  },
  {
    name: 'nf-fa-dropbox',
    code: 0xf16b,
  },
  {
    name: 'nf-fa-droplet',
    code: 0xf043,
  },
  {
    name: 'nf-fa-droplet_slash',
    code: 0xee8e,
  },
  {
    name: 'nf-fa-drum',
    code: 0xee32,
  },
  {
    name: 'nf-fa-drum_steelpan',
    code: 0xee33,
  },
  {
    name: 'nf-fa-drumstick_bite',
    code: 0xeef9,
  },
  {
    name: 'nf-fa-drupal',
    code: 0xf1a9,
  },
  {
    name: 'nf-fa-dumbbell',
    code: 0xed67,
  },
  {
    name: 'nf-fa-dumpster',
    code: 0xef42,
  },
  {
    name: 'nf-fa-dumpster_fire',
    code: 0xef43,
  },
  {
    name: 'nf-fa-dungeon',
    code: 0xeefa,
  },
  {
    name: 'nf-fa-dyalog',
    code: 0xf22f,
  },
  {
    name: 'nf-fa-ear_deaf',
    code: 0xf2a4,
  },
  {
    name: 'nf-fa-ear_listen',
    code: 0xf2a2,
  },
  {
    name: 'nf-fa-earlybirds',
    code: 0xf230,
  },
  {
    name: 'nf-fa-earth_africa',
    code: 0xee45,
  },
  {
    name: 'nf-fa-earth_americas',
    code: 0xee46,
  },
  {
    name: 'nf-fa-earth_asia',
    code: 0xee47,
  },
  {
    name: 'nf-fa-earth_europe',
    code: 0xef4b,
  },
  {
    name: 'nf-fa-ebay',
    code: 0xedbe,
  },
  {
    name: 'nf-fa-edge',
    code: 0xf282,
  },
  {
    name: 'nf-fa-edit',
    code: 0xf044,
  },
  {
    name: 'nf-fa-eercast',
    code: 0xf2da,
  },
  {
    name: 'nf-fa-egg',
    code: 0xef80,
  },
  {
    name: 'nf-fa-eject',
    code: 0xf052,
  },
  {
    name: 'nf-fa-elementor',
    code: 0xed5a,
  },
  {
    name: 'nf-fa-ellipsis',
    code: 0xf141,
  },
  {
    name: 'nf-fa-ellipsis_h',
    code: 0xf141,
  },
  {
    name: 'nf-fa-ellipsis_v',
    code: 0xf142,
  },
  {
    name: 'nf-fa-ellipsis_vertical',
    code: 0xf142,
  },
  {
    name: 'nf-fa-ello',
    code: 0xeea4,
  },
  {
    name: 'nf-fa-ember',
    code: 0xed4e,
  },
  {
    name: 'nf-fa-empire',
    code: 0xf1d1,
  },
  {
    name: 'nf-fa-envelope',
    code: 0xf0e0,
  },
  {
    name: 'nf-fa-envelope_o',
    code: 0xf003,
  },
  {
    name: 'nf-fa-envelope_open',
    code: 0xf2b6,
  },
  {
    name: 'nf-fa-envelope_open_o',
    code: 0xf2b7,
  },
  {
    name: 'nf-fa-envelope_open_text',
    code: 0xeec5,
  },
  {
    name: 'nf-fa-envelope_square',
    code: 0xf199,
  },
  {
    name: 'nf-fa-envelopes_bulk',
    code: 0xeed1,
  },
  {
    name: 'nf-fa-envira',
    code: 0xf299,
  },
  {
    name: 'nf-fa-equals',
    code: 0xedf6,
  },
  {
    name: 'nf-fa-eraser',
    code: 0xf12d,
  },
  {
    name: 'nf-fa-erlang',
    code: 0xf23f,
  },
  {
    name: 'nf-fa-ethereum',
    code: 0xed58,
  },
  {
    name: 'nf-fa-ethernet',
    code: 0xef44,
  },
  {
    name: 'nf-fa-etsy',
    code: 0xf2d7,
  },
  {
    name: 'nf-fa-eur',
    code: 0xf153,
  },
  {
    name: 'nf-fa-euro',
    code: 0xf153,
  },
  {
    name: 'nf-fa-euro_sign',
    code: 0xf153,
  },
  {
    name: 'nf-fa-evernote',
    code: 0xef98,
  },
  {
    name: 'nf-fa-exchange',
    code: 0xf0ec,
  },
  {
    name: 'nf-fa-exclamation',
    code: 0xf12a,
  },
  {
    name: 'nf-fa-exclamation_circle',
    code: 0xf06a,
  },
  {
    name: 'nf-fa-exclamation_triangle',
    code: 0xf071,
  },
  {
    name: 'nf-fa-expand',
    code: 0xf065,
  },
  {
    name: 'nf-fa-expeditedssl',
    code: 0xf23e,
  },
  {
    name: 'nf-fa-external_link',
    code: 0xf08e,
  },
  {
    name: 'nf-fa-external_link_square',
    code: 0xf14c,
  },
  {
    name: 'nf-fa-eye',
    code: 0xf06e,
  },
  {
    name: 'nf-fa-eye_dropper',
    code: 0xf1fb,
  },
  {
    name: 'nf-fa-eye_low_vision',
    code: 0xf2a8,
  },
  {
    name: 'nf-fa-eye_slash',
    code: 0xf070,
  },
  {
    name: 'nf-fa-eyedropper',
    code: 0xf1fb,
  },
  {
    name: 'nf-fa-fa',
    code: 0xf2b4,
  },
  {
    name: 'nf-fa-face_angry',
    code: 0xee1f,
  },
  {
    name: 'nf-fa-face_dizzy',
    code: 0xee30,
  },
  {
    name: 'nf-fa-face_flushed',
    code: 0xee42,
  },
  {
    name: 'nf-fa-face_frown',
    code: 0xf119,
  },
  {
    name: 'nf-fa-face_frown_open',
    code: 0xee43,
  },
  {
    name: 'nf-fa-face_grimace',
    code: 0xee48,
  },
  {
    name: 'nf-fa-face_grin',
    code: 0xee49,
  },
  {
    name: 'nf-fa-face_grin_beam',
    code: 0xee4b,
  },
  {
    name: 'nf-fa-face_grin_beam_sweat',
    code: 0xee4c,
  },
  {
    name: 'nf-fa-face_grin_hearts',
    code: 0xee4d,
  },
  {
    name: 'nf-fa-face_grin_squint',
    code: 0xee4e,
  },
  {
    name: 'nf-fa-face_grin_squint_tears',
    code: 0xee4f,
  },
  {
    name: 'nf-fa-face_grin_stars',
    code: 0xee50,
  },
  {
    name: 'nf-fa-face_grin_tears',
    code: 0xee51,
  },
  {
    name: 'nf-fa-face_grin_tongue',
    code: 0xee52,
  },
  {
    name: 'nf-fa-face_grin_tongue_squint',
    code: 0xee53,
  },
  {
    name: 'nf-fa-face_grin_tongue_wink',
    code: 0xee54,
  },
  {
    name: 'nf-fa-face_grin_wide',
    code: 0xee4a,
  },
  {
    name: 'nf-fa-face_grin_wink',
    code: 0xee55,
  },
  {
    name: 'nf-fa-face_kiss',
    code: 0xee5f,
  },
  {
    name: 'nf-fa-face_kiss_beam',
    code: 0xee60,
  },
  {
    name: 'nf-fa-face_kiss_wink_heart',
    code: 0xee61,
  },
  {
    name: 'nf-fa-face_laugh',
    code: 0xee62,
  },
  {
    name: 'nf-fa-face_laugh_beam',
    code: 0xee63,
  },
  {
    name: 'nf-fa-face_laugh_squint',
    code: 0xee64,
  },
  {
    name: 'nf-fa-face_laugh_wink',
    code: 0xee65,
  },
  {
    name: 'nf-fa-face_meh',
    code: 0xf11a,
  },
  {
    name: 'nf-fa-face_meh_blank',
    code: 0xee6d,
  },
  {
    name: 'nf-fa-face_rolling_eyes',
    code: 0xee6e,
  },
  {
    name: 'nf-fa-face_sad_cry',
    code: 0xee7b,
  },
  {
    name: 'nf-fa-face_sad_tear',
    code: 0xee7c,
  },
  {
    name: 'nf-fa-face_smile',
    code: 0xf118,
  },
  {
    name: 'nf-fa-face_smile_beam',
    code: 0xee80,
  },
  {
    name: 'nf-fa-face_smile_wink',
    code: 0xeda9,
  },
  {
    name: 'nf-fa-face_surprise',
    code: 0xee89,
  },
  {
    name: 'nf-fa-face_tired',
    code: 0xee8f,
  },
  {
    name: 'nf-fa-facebook',
    code: 0xf09a,
  },
  {
    name: 'nf-fa-facebook_f',
    code: 0xf24f,
  },
  {
    name: 'nf-fa-facebook_messenger',
    code: 0xf25f,
  },
  {
    name: 'nf-fa-facebook_official',
    code: 0xf230,
  },
  {
    name: 'nf-fa-facebook_square',
    code: 0xf082,
  },
  {
    name: 'nf-fa-fan',
    code: 0xefa7,
  },
  {
    name: 'nf-fa-fantasy_flight_games',
    code: 0xeefb,
  },
  {
    name: 'nf-fa-fast_backward',
    code: 0xf049,
  },
  {
    name: 'nf-fa-fast_forward',
    code: 0xf050,
  },
  {
    name: 'nf-fa-fax',
    code: 0xf1ac,
  },
  {
    name: 'nf-fa-feather',
    code: 0xedf7,
  },
  {
    name: 'nf-fa-feather_pointed',
    code: 0xee34,
  },
  {
    name: 'nf-fa-fedex',
    code: 0xef45,
  },
  {
    name: 'nf-fa-fedora',
    code: 0xef46,
  },
  {
    name: 'nf-fa-feed',
    code: 0xf09e,
  },
  {
    name: 'nf-fa-female',
    code: 0xf182,
  },
  {
    name: 'nf-fa-fighter_jet',
    code: 0xf0fb,
  },
  {
    name: 'nf-fa-figma',
    code: 0xef47,
  },
  {
    name: 'nf-fa-file',
    code: 0xf15b,
  },
  {
    name: 'nf-fa-file_archive_o',
    code: 0xf1c6,
  },
  {
    name: 'nf-fa-file_arrow_down',
    code: 0xee36,
  },
  {
    name: 'nf-fa-file_arrow_up',
    code: 0xee3d,
  },
  {
    name: 'nf-fa-file_audio',
    code: 0xf1c7,
  },
  {
    name: 'nf-fa-file_audio_o',
    code: 0xf1c7,
  },
  {
    name: 'nf-fa-file_code',
    code: 0xf1c9,
  },
  {
    name: 'nf-fa-file_code_o',
    code: 0xf1c9,
  },
  {
    name: 'nf-fa-file_contract',
    code: 0xee35,
  },
  {
    name: 'nf-fa-file_csv',
    code: 0xeefc,
  },
  {
    name: 'nf-fa-file_excel',
    code: 0xf1c3,
  },
  {
    name: 'nf-fa-file_excel_o',
    code: 0xf1c3,
  },
  {
    name: 'nf-fa-file_export',
    code: 0xee37,
  },
  {
    name: 'nf-fa-file_image',
    code: 0xf1c5,
  },
  {
    name: 'nf-fa-file_image_o',
    code: 0xf1c5,
  },
  {
    name: 'nf-fa-file_import',
    code: 0xee38,
  },
  {
    name: 'nf-fa-file_invoice',
    code: 0xee39,
  },
  {
    name: 'nf-fa-file_invoice_dollar',
    code: 0xee3a,
  },
  {
    name: 'nf-fa-file_lines',
    code: 0xf15c,
  },
  {
    name: 'nf-fa-file_medical',
    code: 0xed80,
  },
  {
    name: 'nf-fa-file_movie_o',
    code: 0xf1c8,
  },
  {
    name: 'nf-fa-file_o',
    code: 0xf016,
  },
  {
    name: 'nf-fa-file_pdf',
    code: 0xf1c1,
  },
  {
    name: 'nf-fa-file_pdf_o',
    code: 0xf1c1,
  },
  {
    name: 'nf-fa-file_pen',
    code: 0xf05f,
  },
  {
    name: 'nf-fa-file_photo_o',
    code: 0xf1c5,
  },
  {
    name: 'nf-fa-file_picture_o',
    code: 0xf1c5,
  },
  {
    name: 'nf-fa-file_powerpoint',
    code: 0xf1c4,
  },
  {
    name: 'nf-fa-file_powerpoint_o',
    code: 0xf1c4,
  },
  {
    name: 'nf-fa-file_prescription',
    code: 0xee3b,
  },
  {
    name: 'nf-fa-file_signature',
    code: 0xee3c,
  },
  {
    name: 'nf-fa-file_sound_o',
    code: 0xf1c7,
  },
  {
    name: 'nf-fa-file_text',
    code: 0xf15c,
  },
  {
    name: 'nf-fa-file_text_o',
    code: 0xf0f6,
  },
  {
    name: 'nf-fa-file_video',
    code: 0xf1c8,
  },
  {
    name: 'nf-fa-file_video_o',
    code: 0xf1c8,
  },
  {
    name: 'nf-fa-file_waveform',
    code: 0xed81,
  },
  {
    name: 'nf-fa-file_word',
    code: 0xf1c2,
  },
  {
    name: 'nf-fa-file_word_o',
    code: 0xf1c2,
  },
  {
    name: 'nf-fa-file_zip_o',
    code: 0xf1c6,
  },
  {
    name: 'nf-fa-file_zipper',
    code: 0xf1c6,
  },
  {
    name: 'nf-fa-files_o',
    code: 0xf0c5,
  },
  {
    name: 'nf-fa-fill',
    code: 0xee3e,
  },
  {
    name: 'nf-fa-fill_drip',
    code: 0xee3f,
  },
  {
    name: 'nf-fa-film',
    code: 0xf008,
  },
  {
    name: 'nf-fa-filter',
    code: 0xf0b0,
  },
  {
    name: 'nf-fa-filter_circle_dollar',
    code: 0xeec8,
  },
  {
    name: 'nf-fa-fingerprint',
    code: 0xee40,
  },
  {
    name: 'nf-fa-fire',
    code: 0xf06d,
  },
  {
    name: 'nf-fa-fire_extinguisher',
    code: 0xf134,
  },
  {
    name: 'nf-fa-fire_flame_curved',
    code: 0xef76,
  },
  {
    name: 'nf-fa-fire_flame_simple',
    code: 0xed78,
  },
  {
    name: 'nf-fa-firefox',
    code: 0xf269,
  },
  {
    name: 'nf-fa-first_order',
    code: 0xf2b0,
  },
  {
    name: 'nf-fa-first_order_alt',
    code: 0xedd4,
  },
  {
    name: 'nf-fa-firstdraft',
    code: 0xf262,
  },
  {
    name: 'nf-fa-fish',
    code: 0xee41,
  },
  {
    name: 'nf-fa-flag',
    code: 0xf024,
  },
  {
    name: 'nf-fa-flag_checkered',
    code: 0xf11e,
  },
  {
    name: 'nf-fa-flag_o',
    code: 0xf11d,
  },
  {
    name: 'nf-fa-flag_usa',
    code: 0xef20,
  },
  {
    name: 'nf-fa-flash',
    code: 0xf0e7,
  },
  {
    name: 'nf-fa-flask',
    code: 0xf0c3,
  },
  {
    name: 'nf-fa-flickr',
    code: 0xf16e,
  },
  {
    name: 'nf-fa-flipboard',
    code: 0xed68,
  },
  {
    name: 'nf-fa-floppy_disk',
    code: 0xf0c7,
  },
  {
    name: 'nf-fa-floppy_o',
    code: 0xf0c7,
  },
  {
    name: 'nf-fa-fly',
    code: 0xed43,
  },
  {
    name: 'nf-fa-folder',
    code: 0xf07b,
  },
  {
    name: 'nf-fa-folder_minus',
    code: 0xeec6,
  },
  {
    name: 'nf-fa-folder_o',
    code: 0xf114,
  },
  {
    name: 'nf-fa-folder_open',
    code: 0xf07c,
  },
  {
    name: 'nf-fa-folder_open_o',
    code: 0xf115,
  },
  {
    name: 'nf-fa-folder_plus',
    code: 0xeec7,
  },
  {
    name: 'nf-fa-folder_tree',
    code: 0xef81,
  },
  {
    name: 'nf-fa-font',
    code: 0xf031,
  },
  {
    name: 'nf-fa-font_awesome',
    code: 0xf2b4,
  },
  {
    name: 'nf-fa-fonticons',
    code: 0xf280,
  },
  {
    name: 'nf-fa-fonticons_fi',
    code: 0xf26f,
  },
  {
    name: 'nf-fa-football',
    code: 0xed69,
  },
  {
    name: 'nf-fa-fort_awesome',
    code: 0xf286,
  },
  {
    name: 'nf-fa-fort_awesome_alt',
    code: 0xf27f,
  },
  {
    name: 'nf-fa-forumbee',
    code: 0xf211,
  },
  {
    name: 'nf-fa-forward',
    code: 0xf04e,
  },
  {
    name: 'nf-fa-forward_fast',
    code: 0xf050,
  },
  {
    name: 'nf-fa-forward_step',
    code: 0xf051,
  },
  {
    name: 'nf-fa-foursquare',
    code: 0xf180,
  },
  {
    name: 'nf-fa-free_code_camp',
    code: 0xf2c5,
  },
  {
    name: 'nf-fa-freebsd',
    code: 0xf28f,
  },
  {
    name: 'nf-fa-frog',
    code: 0xedf8,
  },
  {
    name: 'nf-fa-frown_o',
    code: 0xf119,
  },
  {
    name: 'nf-fa-fulcrum',
    code: 0xedd5,
  },
  {
    name: 'nf-fa-futbol',
    code: 0xf1e3,
  },
  {
    name: 'nf-fa-futbol_o',
    code: 0xf1e3,
  },
  {
    name: 'nf-fa-galactic_republic',
    code: 0xedd6,
  },
  {
    name: 'nf-fa-galactic_senate',
    code: 0xedd7,
  },
  {
    name: 'nf-fa-gamepad',
    code: 0xf11b,
  },
  {
    name: 'nf-fa-gas_pump',
    code: 0xedf9,
  },
  {
    name: 'nf-fa-gauge',
    code: 0xeeb2,
  },
  {
    name: 'nf-fa-gauge_high',
    code: 0xed2f,
  },
  {
    name: 'nf-fa-gauge_simple',
    code: 0xeeb3,
  },
  {
    name: 'nf-fa-gauge_simple_high',
    code: 0xf0e4,
  },
  {
    name: 'nf-fa-gavel',
    code: 0xf0e3,
  },
  {
    name: 'nf-fa-gbp',
    code: 0xf154,
  },
  {
    name: 'nf-fa-ge',
    code: 0xf1d1,
  },
  {
    name: 'nf-fa-gear',
    code: 0xf013,
  },
  {
    name: 'nf-fa-gears',
    code: 0xf085,
  },
  {
    name: 'nf-fa-gem',
    code: 0xf219,
  },
  {
    name: 'nf-fa-genderless',
    code: 0xf22d,
  },
  {
    name: 'nf-fa-get_pocket',
    code: 0xf265,
  },
  {
    name: 'nf-fa-gg',
    code: 0xf260,
  },
  {
    name: 'nf-fa-gg_circle',
    code: 0xf261,
  },
  {
    name: 'nf-fa-ghost',
    code: 0xeefe,
  },
  {
    name: 'nf-fa-gift',
    code: 0xf06b,
  },
  {
    name: 'nf-fa-gifts',
    code: 0xef48,
  },
  {
    name: 'nf-fa-git',
    code: 0xf1d3,
  },
  {
    name: 'nf-fa-git_alt',
    code: 0xefa0,
  },
  {
    name: 'nf-fa-git_square',
    code: 0xf1d2,
  },
  {
    name: 'nf-fa-github',
    code: 0xf09b,
  },
  {
    name: 'nf-fa-github_alt',
    code: 0xf113,
  },
  {
    name: 'nf-fa-github_square',
    code: 0xf092,
  },
  {
    name: 'nf-fa-gitkraken',
    code: 0xf2ac,
  },
  {
    name: 'nf-fa-gitlab',
    code: 0xf296,
  },
  {
    name: 'nf-fa-gitter',
    code: 0xed50,
  },
  {
    name: 'nf-fa-gittip',
    code: 0xf184,
  },
  {
    name: 'nf-fa-glass',
    code: 0xf000,
  },
  {
    name: 'nf-fa-glasses',
    code: 0xedfa,
  },
  {
    name: 'nf-fa-glide',
    code: 0xf2a5,
  },
  {
    name: 'nf-fa-glide_g',
    code: 0xf2a6,
  },
  {
    name: 'nf-fa-globe',
    code: 0xf0ac,
  },
  {
    name: 'nf-fa-gofore',
    code: 0xf2af,
  },
  {
    name: 'nf-fa-golf_ball_tee',
    code: 0xed6a,
  },
  {
    name: 'nf-fa-goodreads',
    code: 0xf2bf,
  },
  {
    name: 'nf-fa-goodreads_g',
    code: 0xf2cf,
  },
  {
    name: 'nf-fa-google',
    code: 0xf1a0,
  },
  {
    name: 'nf-fa-google_drive',
    code: 0xf2df,
  },
  {
    name: 'nf-fa-google_play',
    code: 0xf2e1,
  },
  {
    name: 'nf-fa-google_plus',
    code: 0xf0d5,
  },
  {
    name: 'nf-fa-google_plus_circle',
    code: 0xf2b3,
  },
  {
    name: 'nf-fa-google_plus_official',
    code: 0xf2b3,
  },
  {
    name: 'nf-fa-google_plus_square',
    code: 0xf0d4,
  },
  {
    name: 'nf-fa-google_wallet',
    code: 0xf1ee,
  },
  {
    name: 'nf-fa-gopuram',
    code: 0xeec9,
  },
  {
    name: 'nf-fa-graduation_cap',
    code: 0xf19d,
  },
  {
    name: 'nf-fa-gratipay',
    code: 0xf184,
  },
  {
    name: 'nf-fa-grav',
    code: 0xf2d6,
  },
  {
    name: 'nf-fa-greater_than',
    code: 0xedfb,
  },
  {
    name: 'nf-fa-greater_than_equal',
    code: 0xedfc,
  },
  {
    name: 'nf-fa-grip',
    code: 0xee56,
  },
  {
    name: 'nf-fa-grip_lines',
    code: 0xef4c,
  },
  {
    name: 'nf-fa-grip_lines_vertical',
    code: 0xef4d,
  },
  {
    name: 'nf-fa-grip_vertical',
    code: 0xee57,
  },
  {
    name: 'nf-fa-gripfire',
    code: 0xf2e2,
  },
  {
    name: 'nf-fa-group',
    code: 0xf0c0,
  },
  {
    name: 'nf-fa-grunt',
    code: 0xf2e3,
  },
  {
    name: 'nf-fa-guitar',
    code: 0xef4e,
  },
  {
    name: 'nf-fa-gulp',
    code: 0xf2e4,
  },
  {
    name: 'nf-fa-h_square',
    code: 0xf0fd,
  },
  {
    name: 'nf-fa-hacker_news',
    code: 0xf1d4,
  },
  {
    name: 'nf-fa-hackerrank',
    code: 0xeea5,
  },
  {
    name: 'nf-fa-hammer',
    code: 0xeeff,
  },
  {
    name: 'nf-fa-hamsa',
    code: 0xeeca,
  },
  {
    name: 'nf-fa-hand',
    code: 0xf256,
  },
  {
    name: 'nf-fa-hand_back_fist',
    code: 0xf255,
  },
  {
    name: 'nf-fa-hand_dots',
    code: 0xed73,
  },
  {
    name: 'nf-fa-hand_fist',
    code: 0xeefd,
  },
  {
    name: 'nf-fa-hand_grab_o',
    code: 0xf255,
  },
  {
    name: 'nf-fa-hand_holding',
    code: 0xed9a,
  },
  {
    name: 'nf-fa-hand_holding_dollar',
    code: 0xed9c,
  },
  {
    name: 'nf-fa-hand_holding_droplet',
    code: 0xed9d,
  },
  {
    name: 'nf-fa-hand_holding_heart',
    code: 0xed9b,
  },
  {
    name: 'nf-fa-hand_lizard',
    code: 0xf258,
  },
  {
    name: 'nf-fa-hand_lizard_o',
    code: 0xf258,
  },
  {
    name: 'nf-fa-hand_middle_finger',
    code: 0xef83,
  },
  {
    name: 'nf-fa-hand_o_down',
    code: 0xf0a7,
  },
  {
    name: 'nf-fa-hand_o_left',
    code: 0xf0a5,
  },
  {
    name: 'nf-fa-hand_o_right',
    code: 0xf0a4,
  },
  {
    name: 'nf-fa-hand_o_up',
    code: 0xf0a6,
  },
  {
    name: 'nf-fa-hand_paper_o',
    code: 0xf256,
  },
  {
    name: 'nf-fa-hand_peace',
    code: 0xf25b,
  },
  {
    name: 'nf-fa-hand_peace_o',
    code: 0xf25b,
  },
  {
    name: 'nf-fa-hand_point_down',
    code: 0xf0a7,
  },
  {
    name: 'nf-fa-hand_point_left',
    code: 0xf0a5,
  },
  {
    name: 'nf-fa-hand_point_right',
    code: 0xf0a4,
  },
  {
    name: 'nf-fa-hand_point_up',
    code: 0xf0a6,
  },
  {
    name: 'nf-fa-hand_pointer',
    code: 0xf25a,
  },
  {
    name: 'nf-fa-hand_pointer_o',
    code: 0xf25a,
  },
  {
    name: 'nf-fa-hand_rock_o',
    code: 0xf255,
  },
  {
    name: 'nf-fa-hand_scissors',
    code: 0xf257,
  },
  {
    name: 'nf-fa-hand_scissors_o',
    code: 0xf257,
  },
  {
    name: 'nf-fa-hand_spock',
    code: 0xf259,
  },
  {
    name: 'nf-fa-hand_spock_o',
    code: 0xf259,
  },
  {
    name: 'nf-fa-hand_stop_o',
    code: 0xf256,
  },
  {
    name: 'nf-fa-hands',
    code: 0xf2a7,
  },
  {
    name: 'nf-fa-hands_asl_interpreting',
    code: 0xf2a3,
  },
  {
    name: 'nf-fa-hands_holding',
    code: 0xed9e,
  },
  {
    name: 'nf-fa-hands_praying',
    code: 0xeedb,
  },
  {
    name: 'nf-fa-handshake',
    code: 0xf2b5,
  },
  {
    name: 'nf-fa-handshake_angle',
    code: 0xed9f,
  },
  {
    name: 'nf-fa-handshake_o',
    code: 0xf2b5,
  },
  {
    name: 'nf-fa-handshake_simple',
    code: 0xeda0,
  },
  {
    name: 'nf-fa-hanukiah',
    code: 0xef00,
  },
  {
    name: 'nf-fa-hard_drive',
    code: 0xf0a0,
  },
  {
    name: 'nf-fa-hard_of_hearing',
    code: 0xf2a4,
  },
  {
    name: 'nf-fa-hashtag',
    code: 0xf292,
  },
  {
    name: 'nf-fa-hat_cowboy',
    code: 0xefb7,
  },
  {
    name: 'nf-fa-hat_cowboy_side',
    code: 0xefb8,
  },
  {
    name: 'nf-fa-hat_wizard',
    code: 0xef01,
  },
  {
    name: 'nf-fa-hdd_o',
    code: 0xf0a0,
  },
  {
    name: 'nf-fa-header',
    code: 0xf1dc,
  },
  {
    name: 'nf-fa-heading',
    code: 0xf1dc,
  },
  {
    name: 'nf-fa-headphones',
    code: 0xf025,
  },
  {
    name: 'nf-fa-headphones_simple',
    code: 0xee58,
  },
  {
    name: 'nf-fa-headset',
    code: 0xee59,
  },
  {
    name: 'nf-fa-heard_o',
    code: 0xf08a,
  },
  {
    name: 'nf-fa-heart',
    code: 0xf004,
  },
  {
    name: 'nf-fa-heart_crack',
    code: 0xef4f,
  },
  {
    name: 'nf-fa-heart_o',
    code: 0xf08a,
  },
  {
    name: 'nf-fa-heart_pulse',
    code: 0xf21e,
  },
  {
    name: 'nf-fa-heartbeat',
    code: 0xf21e,
  },
  {
    name: 'nf-fa-helicopter',
    code: 0xedfd,
  },
  {
    name: 'nf-fa-helmet_safety',
    code: 0xef84,
  },
  {
    name: 'nf-fa-highlighter',
    code: 0xee5a,
  },
  {
    name: 'nf-fa-hippo',
    code: 0xef03,
  },
  {
    name: 'nf-fa-hips',
    code: 0xed6b,
  },
  {
    name: 'nf-fa-hire_a_helper',
    code: 0xf2e6,
  },
  {
    name: 'nf-fa-history',
    code: 0xf1da,
  },
  {
    name: 'nf-fa-hockey_puck',
    code: 0xed6c,
  },
  {
    name: 'nf-fa-holly_berry',
    code: 0xef50,
  },
  {
    name: 'nf-fa-home',
    code: 0xf015,
  },
  {
    name: 'nf-fa-hooli',
    code: 0xed51,
  },
  {
    name: 'nf-fa-hornbill',
    code: 0xee5b,
  },
  {
    name: 'nf-fa-horse',
    code: 0xef04,
  },
  {
    name: 'nf-fa-horse_head',
    code: 0xef51,
  },
  {
    name: 'nf-fa-hospital',
    code: 0xf0f8,
  },
  {
    name: 'nf-fa-hospital_o',
    code: 0xf0f8,
  },
  {
    name: 'nf-fa-hospital_user',
    code: 0xef86,
  },
  {
    name: 'nf-fa-hot_tub_person',
    code: 0xee5c,
  },
  {
    name: 'nf-fa-hotdog',
    code: 0xef87,
  },
  {
    name: 'nf-fa-hotel',
    code: 0xf236,
  },
  {
    name: 'nf-fa-hotel_building',
    code: 0xee5d,
  },
  {
    name: 'nf-fa-hotjar',
    code: 0xf2e7,
  },
  {
    name: 'nf-fa-hourglass',
    code: 0xf254,
  },
  {
    name: 'nf-fa-hourglass_1',
    code: 0xf251,
  },
  {
    name: 'nf-fa-hourglass_2',
    code: 0xf252,
  },
  {
    name: 'nf-fa-hourglass_3',
    code: 0xf253,
  },
  {
    name: 'nf-fa-hourglass_end',
    code: 0xf253,
  },
  {
    name: 'nf-fa-hourglass_half',
    code: 0xf252,
  },
  {
    name: 'nf-fa-hourglass_o',
    code: 0xf250,
  },
  {
    name: 'nf-fa-hourglass_start',
    code: 0xf251,
  },
  {
    name: 'nf-fa-house',
    code: 0xf015,
  },
  {
    name: 'nf-fa-house_chimney',
    code: 0xef85,
  },
  {
    name: 'nf-fa-house_chimney_crack',
    code: 0xef05,
  },
  {
    name: 'nf-fa-house_chimney_medical',
    code: 0xef7b,
  },
  {
    name: 'nf-fa-houzz',
    code: 0xf27c,
  },
  {
    name: 'nf-fa-hryvnia_sign',
    code: 0xef06,
  },
  {
    name: 'nf-fa-html5',
    code: 0xf13b,
  },
  {
    name: 'nf-fa-hubspot',
    code: 0xf2e8,
  },
  {
    name: 'nf-fa-hurricane',
    code: 0xef21,
  },
  {
    name: 'nf-fa-i_cursor',
    code: 0xf246,
  },
  {
    name: 'nf-fa-ice_cream',
    code: 0xef88,
  },
  {
    name: 'nf-fa-icicles',
    code: 0xef52,
  },
  {
    name: 'nf-fa-icons',
    code: 0xefa8,
  },
  {
    name: 'nf-fa-id_badge',
    code: 0xf2c1,
  },
  {
    name: 'nf-fa-id_card',
    code: 0xf2c2,
  },
  {
    name: 'nf-fa-id_card_clip',
    code: 0xed84,
  },
  {
    name: 'nf-fa-id_card_o',
    code: 0xf2c3,
  },
  {
    name: 'nf-fa-igloo',
    code: 0xef53,
  },
  {
    name: 'nf-fa-ils',
    code: 0xf20b,
  },
  {
    name: 'nf-fa-image',
    code: 0xf03e,
  },
  {
    name: 'nf-fa-image_portrait',
    code: 0xed19,
  },
  {
    name: 'nf-fa-images',
    code: 0xf00f,
  },
  {
    name: 'nf-fa-imdb',
    code: 0xf2d8,
  },
  {
    name: 'nf-fa-inbox',
    code: 0xf01c,
  },
  {
    name: 'nf-fa-indent',
    code: 0xf03c,
  },
  {
    name: 'nf-fa-industry',
    code: 0xf275,
  },
  {
    name: 'nf-fa-infinity',
    code: 0xedfe,
  },
  {
    name: 'nf-fa-info',
    code: 0xf129,
  },
  {
    name: 'nf-fa-info_circle',
    code: 0xf05a,
  },
  {
    name: 'nf-fa-inr',
    code: 0xf156,
  },
  {
    name: 'nf-fa-instagram',
    code: 0xf16d,
  },
  {
    name: 'nf-fa-institution',
    code: 0xf19c,
  },
  {
    name: 'nf-fa-intercom',
    code: 0xef54,
  },
  {
    name: 'nf-fa-internet_explorer',
    code: 0xf26b,
  },
  {
    name: 'nf-fa-intersex',
    code: 0xf224,
  },
  {
    name: 'nf-fa-invision',
    code: 0xef55,
  },
  {
    name: 'nf-fa-ioxhost',
    code: 0xf208,
  },
  {
    name: 'nf-fa-italic',
    code: 0xf033,
  },
  {
    name: 'nf-fa-itch_io',
    code: 0xef99,
  },
  {
    name: 'nf-fa-itunes',
    code: 0xf2e9,
  },
  {
    name: 'nf-fa-itunes_note',
    code: 0xf2eb,
  },
  {
    name: 'nf-fa-java',
    code: 0xedaf,
  },
  {
    name: 'nf-fa-jedi',
    code: 0xeecc,
  },
  {
    name: 'nf-fa-jedi_order',
    code: 0xedd8,
  },
  {
    name: 'nf-fa-jenkins',
    code: 0xf2ec,
  },
  {
    name: 'nf-fa-jet_fighter',
    code: 0xf0fb,
  },
  {
    name: 'nf-fa-jira',
    code: 0xef56,
  },
  {
    name: 'nf-fa-joget',
    code: 0xf2ed,
  },
  {
    name: 'nf-fa-joint',
    code: 0xee5e,
  },
  {
    name: 'nf-fa-joomla',
    code: 0xf1aa,
  },
  {
    name: 'nf-fa-jpy',
    code: 0xf157,
  },
  {
    name: 'nf-fa-js',
    code: 0xf2ee,
  },
  {
    name: 'nf-fa-jsfiddle',
    code: 0xf1cc,
  },
  {
    name: 'nf-fa-kaaba',
    code: 0xeece,
  },
  {
    name: 'nf-fa-kaggle',
    code: 0xeea6,
  },
  {
    name: 'nf-fa-key',
    code: 0xf084,
  },
  {
    name: 'nf-fa-keybase',
    code: 0xedbf,
  },
  {
    name: 'nf-fa-keyboard',
    code: 0xf11c,
  },
  {
    name: 'nf-fa-keyboard_o',
    code: 0xf11c,
  },
  {
    name: 'nf-fa-keycdn',
    code: 0xf2f0,
  },
  {
    name: 'nf-fa-khanda',
    code: 0xeecf,
  },
  {
    name: 'nf-fa-kickstarter',
    code: 0xf2f3,
  },
  {
    name: 'nf-fa-kickstarter_k',
    code: 0xf2f4,
  },
  {
    name: 'nf-fa-kit_medical',
    code: 0xed82,
  },
  {
    name: 'nf-fa-kiwi_bird',
    code: 0xedff,
  },
  {
    name: 'nf-fa-korvue',
    code: 0xed59,
  },
  {
    name: 'nf-fa-krw',
    code: 0xf159,
  },
  {
    name: 'nf-fa-landmark',
    code: 0xeed0,
  },
  {
    name: 'nf-fa-landmark_dome',
    code: 0xef22,
  },
  {
    name: 'nf-fa-language',
    code: 0xf1ab,
  },
  {
    name: 'nf-fa-laptop',
    code: 0xf109,
  },
  {
    name: 'nf-fa-laptop_code',
    code: 0xeea7,
  },
  {
    name: 'nf-fa-laptop_medical',
    code: 0xef89,
  },
  {
    name: 'nf-fa-laravel',
    code: 0xf2f7,
  },
  {
    name: 'nf-fa-lastfm',
    code: 0xf202,
  },
  {
    name: 'nf-fa-lastfm_square',
    code: 0xf203,
  },
  {
    name: 'nf-fa-layer_group',
    code: 0xeea8,
  },
  {
    name: 'nf-fa-leaf',
    code: 0xf06c,
  },
  {
    name: 'nf-fa-leanpub',
    code: 0xf212,
  },
  {
    name: 'nf-fa-left_long',
    code: 0xf04f,
  },
  {
    name: 'nf-fa-left_right',
    code: 0xf08f,
  },
  {
    name: 'nf-fa-legal',
    code: 0xf0e3,
  },
  {
    name: 'nf-fa-lemon',
    code: 0xf094,
  },
  {
    name: 'nf-fa-lemon_o',
    code: 0xf094,
  },
  {
    name: 'nf-fa-less',
    code: 0xed48,
  },
  {
    name: 'nf-fa-less_than',
    code: 0xefc3,
  },
  {
    name: 'nf-fa-less_than_equal',
    code: 0xefc4,
  },
  {
    name: 'nf-fa-level_down',
    code: 0xf149,
  },
  {
    name: 'nf-fa-level_up',
    code: 0xf148,
  },
  {
    name: 'nf-fa-life_bouy',
    code: 0xf1cd,
  },
  {
    name: 'nf-fa-life_buoy',
    code: 0xf1cd,
  },
  {
    name: 'nf-fa-life_ring',
    code: 0xf1cd,
  },
  {
    name: 'nf-fa-life_saver',
    code: 0xf1cd,
  },
  {
    name: 'nf-fa-lightbulb',
    code: 0xf0eb,
  },
  {
    name: 'nf-fa-lightbulb_o',
    code: 0xf0eb,
  },
  {
    name: 'nf-fa-line',
    code: 0xf2fb,
  },
  {
    name: 'nf-fa-line_chart',
    code: 0xf201,
  },
  {
    name: 'nf-fa-link',
    code: 0xf0c1,
  },
  {
    name: 'nf-fa-link_slash',
    code: 0xf127,
  },
  {
    name: 'nf-fa-linkedin',
    code: 0xf0e1,
  },
  {
    name: 'nf-fa-linkedin_in',
    code: 0xf0e1,
  },
  {
    name: 'nf-fa-linkedin_square',
    code: 0xf08c,
  },
  {
    name: 'nf-fa-linode',
    code: 0xf2b8,
  },
  {
    name: 'nf-fa-linux',
    code: 0xf17c,
  },
  {
    name: 'nf-fa-lira_sign',
    code: 0xf195,
  },
  {
    name: 'nf-fa-list',
    code: 0xf03a,
  },
  {
    name: 'nf-fa-list_alt',
    code: 0xf022,
  },
  {
    name: 'nf-fa-list_check',
    code: 0xf0ae,
  },
  {
    name: 'nf-fa-list_ol',
    code: 0xf0cb,
  },
  {
    name: 'nf-fa-list_ul',
    code: 0xf0ca,
  },
  {
    name: 'nf-fa-location_arrow',
    code: 0xf124,
  },
  {
    name: 'nf-fa-location_crosshairs',
    code: 0xeea9,
  },
  {
    name: 'nf-fa-location_dot',
    code: 0xed00,
  },
  {
    name: 'nf-fa-location_pin',
    code: 0xf041,
  },
  {
    name: 'nf-fa-lock',
    code: 0xf023,
  },
  {
    name: 'nf-fa-lock_open',
    code: 0xf2fc,
  },
  {
    name: 'nf-fa-long_arrow_down',
    code: 0xf175,
  },
  {
    name: 'nf-fa-long_arrow_left',
    code: 0xf177,
  },
  {
    name: 'nf-fa-long_arrow_right',
    code: 0xf178,
  },
  {
    name: 'nf-fa-long_arrow_up',
    code: 0xf176,
  },
  {
    name: 'nf-fa-low_vision',
    code: 0xf2a8,
  },
  {
    name: 'nf-fa-lungs',
    code: 0xeeaa,
  },
  {
    name: 'nf-fa-lyft',
    code: 0xf2fd,
  },
  {
    name: 'nf-fa-magento',
    code: 0xf2ff,
  },
  {
    name: 'nf-fa-magic',
    code: 0xf0d0,
  },
  {
    name: 'nf-fa-magnet',
    code: 0xf076,
  },
  {
    name: 'nf-fa-magnifying_glass',
    code: 0xf002,
  },
  {
    name: 'nf-fa-magnifying_glass_dollar',
    code: 0xeedd,
  },
  {
    name: 'nf-fa-magnifying_glass_location',
    code: 0xeede,
  },
  {
    name: 'nf-fa-magnifying_glass_minus',
    code: 0xf010,
  },
  {
    name: 'nf-fa-magnifying_glass_plus',
    code: 0xf00e,
  },
  {
    name: 'nf-fa-mail_forward',
    code: 0xf064,
  },
  {
    name: 'nf-fa-mail_reply',
    code: 0xf112,
  },
  {
    name: 'nf-fa-mail_reply_all',
    code: 0xf122,
  },
  {
    name: 'nf-fa-mailchimp',
    code: 0xee67,
  },
  {
    name: 'nf-fa-male',
    code: 0xf183,
  },
  {
    name: 'nf-fa-mandalorian',
    code: 0xedd9,
  },
  {
    name: 'nf-fa-map',
    code: 0xf279,
  },
  {
    name: 'nf-fa-map_location',
    code: 0xee68,
  },
  {
    name: 'nf-fa-map_location_dot',
    code: 0xee69,
  },
  {
    name: 'nf-fa-map_marker',
    code: 0xf041,
  },
  {
    name: 'nf-fa-map_o',
    code: 0xf278,
  },
  {
    name: 'nf-fa-map_pin',
    code: 0xf276,
  },
  {
    name: 'nf-fa-map_signs',
    code: 0xf277,
  },
  {
    name: 'nf-fa-markdown',
    code: 0xeeab,
  },
  {
    name: 'nf-fa-marker',
    code: 0xee6a,
  },
  {
    name: 'nf-fa-mars',
    code: 0xf222,
  },
  {
    name: 'nf-fa-mars_double',
    code: 0xf227,
  },
  {
    name: 'nf-fa-mars_stroke',
    code: 0xf229,
  },
  {
    name: 'nf-fa-mars_stroke_h',
    code: 0xf22b,
  },
  {
    name: 'nf-fa-mars_stroke_right',
    code: 0xf22b,
  },
  {
    name: 'nf-fa-mars_stroke_up',
    code: 0xf22a,
  },
  {
    name: 'nf-fa-mars_stroke_v',
    code: 0xf22a,
  },
  {
    name: 'nf-fa-martini_glass',
    code: 0xee44,
  },
  {
    name: 'nf-fa-martini_glass_citrus',
    code: 0xee2a,
  },
  {
    name: 'nf-fa-martini_glass_empty',
    code: 0xf000,
  },
  {
    name: 'nf-fa-mask',
    code: 0xef07,
  },
  {
    name: 'nf-fa-masks_theater',
    code: 0xeeb6,
  },
  {
    name: 'nf-fa-mastodon',
    code: 0xedc0,
  },
  {
    name: 'nf-fa-maxcdn',
    code: 0xf136,
  },
  {
    name: 'nf-fa-maximize',
    code: 0xf06f,
  },
  {
    name: 'nf-fa-mdb',
    code: 0xefb9,
  },
  {
    name: 'nf-fa-meanpath',
    code: 0xf20c,
  },
  {
    name: 'nf-fa-medal',
    code: 0xee6b,
  },
  {
    name: 'nf-fa-medapps',
    code: 0xed01,
  },
  {
    name: 'nf-fa-medium',
    code: 0xf23a,
  },
  {
    name: 'nf-fa-medkit',
    code: 0xf0fa,
  },
  {
    name: 'nf-fa-medrt',
    code: 0xed02,
  },
  {
    name: 'nf-fa-meetup',
    code: 0xf2e0,
  },
  {
    name: 'nf-fa-megaport',
    code: 0xee6c,
  },
  {
    name: 'nf-fa-meh_o',
    code: 0xf11a,
  },
  {
    name: 'nf-fa-memory',
    code: 0xefc5,
  },
  {
    name: 'nf-fa-mendeley',
    code: 0xef57,
  },
  {
    name: 'nf-fa-menorah',
    code: 0xeed2,
  },
  {
    name: 'nf-fa-mercury',
    code: 0xf223,
  },
  {
    name: 'nf-fa-message',
    code: 0xf27a,
  },
  {
    name: 'nf-fa-meteor',
    code: 0xef23,
  },
  {
    name: 'nf-fa-microchip',
    code: 0xf2db,
  },
  {
    name: 'nf-fa-microphone',
    code: 0xf130,
  },
  {
    name: 'nf-fa-microphone_lines',
    code: 0xed03,
  },
  {
    name: 'nf-fa-microphone_lines_slash',
    code: 0xefc6,
  },
  {
    name: 'nf-fa-microphone_slash',
    code: 0xf131,
  },
  {
    name: 'nf-fa-microscope',
    code: 0xeeac,
  },
  {
    name: 'nf-fa-microsoft',
    code: 0xed04,
  },
  {
    name: 'nf-fa-minimize',
    code: 0xef3e,
  },
  {
    name: 'nf-fa-minus',
    code: 0xf068,
  },
  {
    name: 'nf-fa-minus_circle',
    code: 0xf056,
  },
  {
    name: 'nf-fa-minus_square',
    code: 0xf146,
  },
  {
    name: 'nf-fa-minus_square_o',
    code: 0xf147,
  },
  {
    name: 'nf-fa-mitten',
    code: 0xef58,
  },
  {
    name: 'nf-fa-mix',
    code: 0xed05,
  },
  {
    name: 'nf-fa-mixcloud',
    code: 0xf289,
  },
  {
    name: 'nf-fa-mizuni',
    code: 0xed06,
  },
  {
    name: 'nf-fa-mobile',
    code: 0xed08,
  },
  {
    name: 'nf-fa-mobile_button',
    code: 0xed07,
  },
  {
    name: 'nf-fa-mobile_phone',
    code: 0xf10b,
  },
  {
    name: 'nf-fa-mobile_screen',
    code: 0xed09,
  },
  {
    name: 'nf-fa-mobile_screen_button',
    code: 0xf10b,
  },
  {
    name: 'nf-fa-modx',
    code: 0xf285,
  },
  {
    name: 'nf-fa-monero',
    code: 0xed0a,
  },
  {
    name: 'nf-fa-money',
    code: 0xf0d6,
  },
  {
    name: 'nf-fa-money_bill',
    code: 0xf0d6,
  },
  {
    name: 'nf-fa-money_bill_1',
    code: 0xed0b,
  },
  {
    name: 'nf-fa-money_bill_1_wave',
    code: 0xefc8,
  },
  {
    name: 'nf-fa-money_bill_wave',
    code: 0xefc7,
  },
  {
    name: 'nf-fa-money_check',
    code: 0xefc9,
  },
  {
    name: 'nf-fa-money_check_dollar',
    code: 0xefca,
  },
  {
    name: 'nf-fa-monument',
    code: 0xee6f,
  },
  {
    name: 'nf-fa-moon',
    code: 0xf186,
  },
  {
    name: 'nf-fa-moon_o',
    code: 0xf186,
  },
  {
    name: 'nf-fa-mortar_board',
    code: 0xf19d,
  },
  {
    name: 'nf-fa-mortar_pestle',
    code: 0xee70,
  },
  {
    name: 'nf-fa-mosque',
    code: 0xeed3,
  },
  {
    name: 'nf-fa-motorcycle',
    code: 0xf21c,
  },
  {
    name: 'nf-fa-mountain',
    code: 0xef08,
  },
  {
    name: 'nf-fa-mouse_pointer',
    code: 0xf245,
  },
  {
    name: 'nf-fa-mug_hot',
    code: 0xef59,
  },
  {
    name: 'nf-fa-mug_saucer',
    code: 0xf0f4,
  },
  {
    name: 'nf-fa-music',
    code: 0xf001,
  },
  {
    name: 'nf-fa-napster',
    code: 0xed0c,
  },
  {
    name: 'nf-fa-navicon',
    code: 0xf0c9,
  },
  {
    name: 'nf-fa-neos',
    code: 0xeead,
  },
  {
    name: 'nf-fa-network_wired',
    code: 0xef09,
  },
  {
    name: 'nf-fa-neuter',
    code: 0xf22c,
  },
  {
    name: 'nf-fa-newspaper',
    code: 0xf1ea,
  },
  {
    name: 'nf-fa-newspaper_o',
    code: 0xf1ea,
  },
  {
    name: 'nf-fa-nimblr',
    code: 0xee71,
  },
  {
    name: 'nf-fa-node',
    code: 0xed44,
  },
  {
    name: 'nf-fa-node_js',
    code: 0xed0d,
  },
  {
    name: 'nf-fa-not_equal',
    code: 0xefcb,
  },
  {
    name: 'nf-fa-note_sticky',
    code: 0xf249,
  },
  {
    name: 'nf-fa-notes_medical',
    code: 0xed85,
  },
  {
    name: 'nf-fa-npm',
    code: 0xed0e,
  },
  {
    name: 'nf-fa-ns8',
    code: 0xed0f,
  },
  {
    name: 'nf-fa-nutritionix',
    code: 0xed10,
  },
  {
    name: 'nf-fa-object_group',
    code: 0xf247,
  },
  {
    name: 'nf-fa-object_ungroup',
    code: 0xf248,
  },
  {
    name: 'nf-fa-odnoklassniki',
    code: 0xf263,
  },
  {
    name: 'nf-fa-odnoklassniki_square',
    code: 0xf264,
  },
  {
    name: 'nf-fa-oil_can',
    code: 0xeeae,
  },
  {
    name: 'nf-fa-ok_sign',
    code: 0xf058,
  },
  {
    name: 'nf-fa-old_republic',
    code: 0xedda,
  },
  {
    name: 'nf-fa-om',
    code: 0xeed4,
  },
  {
    name: 'nf-fa-opencart',
    code: 0xf23d,
  },
  {
    name: 'nf-fa-openid',
    code: 0xf19b,
  },
  {
    name: 'nf-fa-opera',
    code: 0xf26a,
  },
  {
    name: 'nf-fa-optin_monster',
    code: 0xf23c,
  },
  {
    name: 'nf-fa-orcid',
    code: 0xefbb,
  },
  {
    name: 'nf-fa-osi',
    code: 0xed45,
  },
  {
    name: 'nf-fa-otter',
    code: 0xef0a,
  },
  {
    name: 'nf-fa-outdent',
    code: 0xf03b,
  },
  {
    name: 'nf-fa-page4',
    code: 0xed11,
  },
  {
    name: 'nf-fa-pagelines',
    code: 0xf18c,
  },
  {
    name: 'nf-fa-pager',
    code: 0xef8a,
  },
  {
    name: 'nf-fa-paint_brush',
    code: 0xf1fc,
  },
  {
    name: 'nf-fa-paint_roller',
    code: 0xee72,
  },
  {
    name: 'nf-fa-paintbrush',
    code: 0xf1fc,
  },
  {
    name: 'nf-fa-palette',
    code: 0xefcc,
  },
  {
    name: 'nf-fa-palfed',
    code: 0xed12,
  },
  {
    name: 'nf-fa-pallet',
    code: 0xed86,
  },
  {
    name: 'nf-fa-paper_plane',
    code: 0xf1d8,
  },
  {
    name: 'nf-fa-paper_plane_o',
    code: 0xf1d9,
  },
  {
    name: 'nf-fa-paperclip',
    code: 0xf0c6,
  },
  {
    name: 'nf-fa-parachute_box',
    code: 0xeda1,
  },
  {
    name: 'nf-fa-paragraph',
    code: 0xf1dd,
  },
  {
    name: 'nf-fa-passport',
    code: 0xee73,
  },
  {
    name: 'nf-fa-paste',
    code: 0xf0ea,
  },
  {
    name: 'nf-fa-patreon',
    code: 0xed13,
  },
  {
    name: 'nf-fa-pause',
    code: 0xf04c,
  },
  {
    name: 'nf-fa-pause_circle',
    code: 0xf28b,
  },
  {
    name: 'nf-fa-pause_circle_o',
    code: 0xf28c,
  },
  {
    name: 'nf-fa-paw',
    code: 0xf1b0,
  },
  {
    name: 'nf-fa-paypal',
    code: 0xf1ed,
  },
  {
    name: 'nf-fa-peace',
    code: 0xeed6,
  },
  {
    name: 'nf-fa-pen',
    code: 0xf01f,
  },
  {
    name: 'nf-fa-pen_clip',
    code: 0xf020,
  },
  {
    name: 'nf-fa-pen_fancy',
    code: 0xee74,
  },
  {
    name: 'nf-fa-pen_nib',
    code: 0xee75,
  },
  {
    name: 'nf-fa-pen_ruler',
    code: 0xee76,
  },
  {
    name: 'nf-fa-pen_to_square',
    code: 0xf044,
  },
  {
    name: 'nf-fa-pencil',
    code: 0xf040,
  },
  {
    name: 'nf-fa-pencil_square',
    code: 0xf14b,
  },
  {
    name: 'nf-fa-pencil_square_o',
    code: 0xf044,
  },
  {
    name: 'nf-fa-people_carry_box',
    code: 0xeda2,
  },
  {
    name: 'nf-fa-pepper_hot',
    code: 0xef8b,
  },
  {
    name: 'nf-fa-percent',
    code: 0xf295,
  },
  {
    name: 'nf-fa-periscope',
    code: 0xed14,
  },
  {
    name: 'nf-fa-person',
    code: 0xf183,
  },
  {
    name: 'nf-fa-person_biking',
    code: 0xefa2,
  },
  {
    name: 'nf-fa-person_booth',
    code: 0xef24,
  },
  {
    name: 'nf-fa-person_digging',
    code: 0xefa6,
  },
  {
    name: 'nf-fa-person_dots_from_line',
    code: 0xed7c,
  },
  {
    name: 'nf-fa-person_dress',
    code: 0xf182,
  },
  {
    name: 'nf-fa-person_hiking',
    code: 0xef02,
  },
  {
    name: 'nf-fa-person_praying',
    code: 0xeeda,
  },
  {
    name: 'nf-fa-person_running',
    code: 0xef0c,
  },
  {
    name: 'nf-fa-person_skating',
    code: 0xef63,
  },
  {
    name: 'nf-fa-person_skiing',
    code: 0xef65,
  },
  {
    name: 'nf-fa-person_skiing_nordic',
    code: 0xef66,
  },
  {
    name: 'nf-fa-person_snowboarding',
    code: 0xef69,
  },
  {
    name: 'nf-fa-person_swimming',
    code: 0xee8b,
  },
  {
    name: 'nf-fa-person_walking',
    code: 0xee1d,
  },
  {
    name: 'nf-fa-person_walking_with_cane',
    code: 0xf29d,
  },
  {
    name: 'nf-fa-phabricator',
    code: 0xed15,
  },
  {
    name: 'nf-fa-phoenix_framework',
    code: 0xed16,
  },
  {
    name: 'nf-fa-phoenix_squadron',
    code: 0xeddb,
  },
  {
    name: 'nf-fa-phone',
    code: 0xf095,
  },
  {
    name: 'nf-fa-phone_flip',
    code: 0xefa9,
  },
  {
    name: 'nf-fa-phone_slash',
    code: 0xed17,
  },
  {
    name: 'nf-fa-phone_square',
    code: 0xf098,
  },
  {
    name: 'nf-fa-phone_volume',
    code: 0xf2a0,
  },
  {
    name: 'nf-fa-photo',
    code: 0xf03e,
  },
  {
    name: 'nf-fa-photo_film',
    code: 0xefab,
  },
  {
    name: 'nf-fa-php',
    code: 0xed6d,
  },
  {
    name: 'nf-fa-picture_o',
    code: 0xf03e,
  },
  {
    name: 'nf-fa-pie_chart',
    code: 0xf200,
  },
  {
    name: 'nf-fa-pied_piper',
    code: 0xf2ae,
  },
  {
    name: 'nf-fa-pied_piper_alt',
    code: 0xf1a8,
  },
  {
    name: 'nf-fa-pied_piper_hat',
    code: 0xedb0,
  },
  {
    name: 'nf-fa-pied_piper_pp',
    code: 0xf1a7,
  },
  {
    name: 'nf-fa-piggy_bank',
    code: 0xeda3,
  },
  {
    name: 'nf-fa-pills',
    code: 0xed87,
  },
  {
    name: 'nf-fa-pinterest',
    code: 0xf0d2,
  },
  {
    name: 'nf-fa-pinterest_p',
    code: 0xf231,
  },
  {
    name: 'nf-fa-pinterest_square',
    code: 0xf0d3,
  },
  {
    name: 'nf-fa-pizza_slice',
    code: 0xef8c,
  },
  {
    name: 'nf-fa-place_of_worship',
    code: 0xeed7,
  },
  {
    name: 'nf-fa-plane',
    code: 0xf072,
  },
  {
    name: 'nf-fa-plane_arrival',
    code: 0xee77,
  },
  {
    name: 'nf-fa-plane_departure',
    code: 0xee78,
  },
  {
    name: 'nf-fa-play',
    code: 0xf04b,
  },
  {
    name: 'nf-fa-play_circle',
    code: 0xf144,
  },
  {
    name: 'nf-fa-play_circle_o',
    code: 0xf01d,
  },
  {
    name: 'nf-fa-playstation',
    code: 0xed18,
  },
  {
    name: 'nf-fa-plug',
    code: 0xf1e6,
  },
  {
    name: 'nf-fa-plus',
    code: 0xf067,
  },
  {
    name: 'nf-fa-plus_circle',
    code: 0xf055,
  },
  {
    name: 'nf-fa-plus_square',
    code: 0xf0fe,
  },
  {
    name: 'nf-fa-plus_square_o',
    code: 0xf196,
  },
  {
    name: 'nf-fa-podcast',
    code: 0xf2ce,
  },
  {
    name: 'nf-fa-poo',
    code: 0xf2fe,
  },
  {
    name: 'nf-fa-poo_storm',
    code: 0xef25,
  },
  {
    name: 'nf-fa-poop',
    code: 0xeeaf,
  },
  {
    name: 'nf-fa-power_off',
    code: 0xf011,
  },
  {
    name: 'nf-fa-prescription',
    code: 0xee79,
  },
  {
    name: 'nf-fa-prescription_bottle',
    code: 0xed88,
  },
  {
    name: 'nf-fa-prescription_bottle_medical',
    code: 0xed89,
  },
  {
    name: 'nf-fa-print',
    code: 0xf02f,
  },
  {
    name: 'nf-fa-product_hunt',
    code: 0xf288,
  },
  {
    name: 'nf-fa-pushed',
    code: 0xed1a,
  },
  {
    name: 'nf-fa-puzzle_piece',
    code: 0xf12e,
  },
  {
    name: 'nf-fa-python',
    code: 0xed1b,
  },
  {
    name: 'nf-fa-qq',
    code: 0xf1d6,
  },
  {
    name: 'nf-fa-qrcode',
    code: 0xf029,
  },
  {
    name: 'nf-fa-question',
    code: 0xf128,
  },
  {
    name: 'nf-fa-question_circle',
    code: 0xf059,
  },
  {
    name: 'nf-fa-question_circle_o',
    code: 0xf29c,
  },
  {
    name: 'nf-fa-quinscape',
    code: 0xed6f,
  },
  {
    name: 'nf-fa-quora',
    code: 0xf2c4,
  },
  {
    name: 'nf-fa-quote_left',
    code: 0xf10d,
  },
  {
    name: 'nf-fa-quote_right',
    code: 0xf10e,
  },
  {
    name: 'nf-fa-r_project',
    code: 0xedc1,
  },
  {
    name: 'nf-fa-ra',
    code: 0xf1d0,
  },
  {
    name: 'nf-fa-radiation',
    code: 0xef5a,
  },
  {
    name: 'nf-fa-radio',
    code: 0xefbc,
  },
  {
    name: 'nf-fa-rainbow',
    code: 0xef26,
  },
  {
    name: 'nf-fa-random',
    code: 0xf074,
  },
  {
    name: 'nf-fa-raspberry_pi',
    code: 0xef5c,
  },
  {
    name: 'nf-fa-ravelry',
    code: 0xf2d9,
  },
  {
    name: 'nf-fa-react',
    code: 0xed46,
  },
  {
    name: 'nf-fa-reacteurope',
    code: 0xef27,
  },
  {
    name: 'nf-fa-readme',
    code: 0xeda4,
  },
  {
    name: 'nf-fa-rebel',
    code: 0xf1d0,
  },
  {
    name: 'nf-fa-receipt',
    code: 0xee0c,
  },
  {
    name: 'nf-fa-record_vinyl',
    code: 0xefbd,
  },
  {
    name: 'nf-fa-rectangle_ad',
    code: 0xeebb,
  },
  {
    name: 'nf-fa-rectangle_list',
    code: 0xf022,
  },
  {
    name: 'nf-fa-rectangle_xmark',
    code: 0xf2d4,
  },
  {
    name: 'nf-fa-recycle',
    code: 0xf1b8,
  },
  {
    name: 'nf-fa-red_river',
    code: 0xed1c,
  },
  {
    name: 'nf-fa-reddit',
    code: 0xf1a1,
  },
  {
    name: 'nf-fa-reddit_alien',
    code: 0xf281,
  },
  {
    name: 'nf-fa-reddit_square',
    code: 0xf1a2,
  },
  {
    name: 'nf-fa-redhat',
    code: 0xef5d,
  },
  {
    name: 'nf-fa-refresh',
    code: 0xf021,
  },
  {
    name: 'nf-fa-registered',
    code: 0xf25d,
  },
  {
    name: 'nf-fa-remove',
    code: 0xf00d,
  },
  {
    name: 'nf-fa-remove_sign',
    code: 0xf057,
  },
  {
    name: 'nf-fa-renren',
    code: 0xf18b,
  },
  {
    name: 'nf-fa-reorder',
    code: 0xf0c9,
  },
  {
    name: 'nf-fa-repeat',
    code: 0xf01e,
  },
  {
    name: 'nf-fa-repeat_alt',
    code: 0xf0b6,
  },
  {
    name: 'nf-fa-reply',
    code: 0xf112,
  },
  {
    name: 'nf-fa-reply_all',
    code: 0xf122,
  },
  {
    name: 'nf-fa-replyd',
    code: 0xed1e,
  },
  {
    name: 'nf-fa-republican',
    code: 0xef28,
  },
  {
    name: 'nf-fa-researchgate',
    code: 0xedc2,
  },
  {
    name: 'nf-fa-resistance',
    code: 0xf1d0,
  },
  {
    name: 'nf-fa-resolving',
    code: 0xed1f,
  },
  {
    name: 'nf-fa-restroom',
    code: 0xef5e,
  },
  {
    name: 'nf-fa-retweet',
    code: 0xf079,
  },
  {
    name: 'nf-fa-rev',
    code: 0xee7a,
  },
  {
    name: 'nf-fa-ribbon',
    code: 0xeda5,
  },
  {
    name: 'nf-fa-right_from_bracket',
    code: 0xf2f5,
  },
  {
    name: 'nf-fa-right_left',
    code: 0xf0b5,
  },
  {
    name: 'nf-fa-right_to_bracket',
    code: 0xf2f6,
  },
  {
    name: 'nf-fa-ring',
    code: 0xef0b,
  },
  {
    name: 'nf-fa-rmb',
    code: 0xf157,
  },
  {
    name: 'nf-fa-road',
    code: 0xf018,
  },
  {
    name: 'nf-fa-robot',
    code: 0xee0d,
  },
  {
    name: 'nf-fa-rocket',
    code: 0xf135,
  },
  {
    name: 'nf-fa-rocketchat',
    code: 0xed20,
  },
  {
    name: 'nf-fa-rockrms',
    code: 0xed21,
  },
  {
    name: 'nf-fa-rotate',
    code: 0xf2f1,
  },
  {
    name: 'nf-fa-rotate_left',
    code: 0xf2ea,
  },
  {
    name: 'nf-fa-rotate_right',
    code: 0xf2f9,
  },
  {
    name: 'nf-fa-rouble',
    code: 0xf158,
  },
  {
    name: 'nf-fa-route',
    code: 0xeda6,
  },
  {
    name: 'nf-fa-rss',
    code: 0xf09e,
  },
  {
    name: 'nf-fa-rss_square',
    code: 0xf143,
  },
  {
    name: 'nf-fa-rub',
    code: 0xf158,
  },
  {
    name: 'nf-fa-ruble',
    code: 0xf158,
  },
  {
    name: 'nf-fa-ruble_sign',
    code: 0xf158,
  },
  {
    name: 'nf-fa-ruler',
    code: 0xee0e,
  },
  {
    name: 'nf-fa-ruler_combined',
    code: 0xee0f,
  },
  {
    name: 'nf-fa-ruler_horizontal',
    code: 0xee10,
  },
  {
    name: 'nf-fa-ruler_vertical',
    code: 0xee11,
  },
  {
    name: 'nf-fa-rupee',
    code: 0xf156,
  },
  {
    name: 'nf-fa-rupee_sign',
    code: 0xf156,
  },
  {
    name: 'nf-fa-s15',
    code: 0xf2cd,
  },
  {
    name: 'nf-fa-sack_dollar',
    code: 0xef8d,
  },
  {
    name: 'nf-fa-safari',
    code: 0xf267,
  },
  {
    name: 'nf-fa-salesforce',
    code: 0xef9a,
  },
  {
    name: 'nf-fa-sass',
    code: 0xed49,
  },
  {
    name: 'nf-fa-satellite',
    code: 0xef5f,
  },
  {
    name: 'nf-fa-satellite_dish',
    code: 0xef60,
  },
  {
    name: 'nf-fa-save',
    code: 0xf0c7,
  },
  {
    name: 'nf-fa-scale_balanced',
    code: 0xf24e,
  },
  {
    name: 'nf-fa-scale_unbalanced',
    code: 0xeddf,
  },
  {
    name: 'nf-fa-scale_unbalanced_flip',
    code: 0xede0,
  },
  {
    name: 'nf-fa-schlix',
    code: 0xed22,
  },
  {
    name: 'nf-fa-school',
    code: 0xee12,
  },
  {
    name: 'nf-fa-scissors',
    code: 0xf0c4,
  },
  {
    name: 'nf-fa-screwdriver',
    code: 0xee13,
  },
  {
    name: 'nf-fa-screwdriver_wrench',
    code: 0xef70,
  },
  {
    name: 'nf-fa-scribd',
    code: 0xf28a,
  },
  {
    name: 'nf-fa-scroll',
    code: 0xef0d,
  },
  {
    name: 'nf-fa-scroll_torah',
    code: 0xeee5,
  },
  {
    name: 'nf-fa-sd_card',
    code: 0xef61,
  },
  {
    name: 'nf-fa-search',
    code: 0xf002,
  },
  {
    name: 'nf-fa-search_minus',
    code: 0xf010,
  },
  {
    name: 'nf-fa-search_plus',
    code: 0xf00e,
  },
  {
    name: 'nf-fa-searchengin',
    code: 0xed23,
  },
  {
    name: 'nf-fa-seedling',
    code: 0xeda7,
  },
  {
    name: 'nf-fa-sellcast',
    code: 0xf2da,
  },
  {
    name: 'nf-fa-sellsy',
    code: 0xf213,
  },
  {
    name: 'nf-fa-send',
    code: 0xf1d8,
  },
  {
    name: 'nf-fa-send_o',
    code: 0xf1d9,
  },
  {
    name: 'nf-fa-server',
    code: 0xf233,
  },
  {
    name: 'nf-fa-servicestack',
    code: 0xed24,
  },
  {
    name: 'nf-fa-shapes',
    code: 0xeeb0,
  },
  {
    name: 'nf-fa-share',
    code: 0xf064,
  },
  {
    name: 'nf-fa-share_alt',
    code: 0xf1e0,
  },
  {
    name: 'nf-fa-share_alt_square',
    code: 0xf1e1,
  },
  {
    name: 'nf-fa-share_from_square',
    code: 0xf14d,
  },
  {
    name: 'nf-fa-share_nodes',
    code: 0xf1e0,
  },
  {
    name: 'nf-fa-share_square',
    code: 0xf14d,
  },
  {
    name: 'nf-fa-share_square_o',
    code: 0xf045,
  },
  {
    name: 'nf-fa-shekel',
    code: 0xf20b,
  },
  {
    name: 'nf-fa-shekel_sign',
    code: 0xf20b,
  },
  {
    name: 'nf-fa-sheqel',
    code: 0xf20b,
  },
  {
    name: 'nf-fa-shield',
    code: 0xf132,
  },
  {
    name: 'nf-fa-shield_halved',
    code: 0xed25,
  },
  {
    name: 'nf-fa-ship',
    code: 0xf21a,
  },
  {
    name: 'nf-fa-shirt',
    code: 0xee1c,
  },
  {
    name: 'nf-fa-shirtsinbulk',
    code: 0xf214,
  },
  {
    name: 'nf-fa-shoe_prints',
    code: 0xee14,
  },
  {
    name: 'nf-fa-shop',
    code: 0xee18,
  },
  {
    name: 'nf-fa-shopping_bag',
    code: 0xf290,
  },
  {
    name: 'nf-fa-shopping_basket',
    code: 0xf291,
  },
  {
    name: 'nf-fa-shopping_cart',
    code: 0xf07a,
  },
  {
    name: 'nf-fa-shopware',
    code: 0xee7d,
  },
  {
    name: 'nf-fa-shower',
    code: 0xf2cc,
  },
  {
    name: 'nf-fa-shuffle',
    code: 0xf074,
  },
  {
    name: 'nf-fa-shuttle_space',
    code: 0xf197,
  },
  {
    name: 'nf-fa-sign_hanging',
    code: 0xeda8,
  },
  {
    name: 'nf-fa-sign_in',
    code: 0xf090,
  },
  {
    name: 'nf-fa-sign_language',
    code: 0xf2a7,
  },
  {
    name: 'nf-fa-sign_out',
    code: 0xf08b,
  },
  {
    name: 'nf-fa-signal',
    code: 0xf012,
  },
  {
    name: 'nf-fa-signature',
    code: 0xee7f,
  },
  {
    name: 'nf-fa-signing',
    code: 0xf2a7,
  },
  {
    name: 'nf-fa-signs_post',
    code: 0xf277,
  },
  {
    name: 'nf-fa-sim_card',
    code: 0xef62,
  },
  {
    name: 'nf-fa-simplybuilt',
    code: 0xf215,
  },
  {
    name: 'nf-fa-sistrix',
    code: 0xed26,
  },
  {
    name: 'nf-fa-sitemap',
    code: 0xf0e8,
  },
  {
    name: 'nf-fa-sith',
    code: 0xeddc,
  },
  {
    name: 'nf-fa-sketch',
    code: 0xef64,
  },
  {
    name: 'nf-fa-skull',
    code: 0xee15,
  },
  {
    name: 'nf-fa-skull_crossbones',
    code: 0xef0e,
  },
  {
    name: 'nf-fa-skyatlas',
    code: 0xf216,
  },
  {
    name: 'nf-fa-skype',
    code: 0xf17e,
  },
  {
    name: 'nf-fa-slack',
    code: 0xf198,
  },
  {
    name: 'nf-fa-slash',
    code: 0xef0f,
  },
  {
    name: 'nf-fa-sleigh',
    code: 0xef67,
  },
  {
    name: 'nf-fa-sliders',
    code: 0xf1de,
  },
  {
    name: 'nf-fa-slideshare',
    code: 0xf1e7,
  },
  {
    name: 'nf-fa-smile_o',
    code: 0xf118,
  },
  {
    name: 'nf-fa-smog',
    code: 0xef29,
  },
  {
    name: 'nf-fa-smoking',
    code: 0xed8c,
  },
  {
    name: 'nf-fa-snapchat',
    code: 0xf2ab,
  },
  {
    name: 'nf-fa-snapchat_ghost',
    code: 0xf2ac,
  },
  {
    name: 'nf-fa-snapchat_square',
    code: 0xf2ad,
  },
  {
    name: 'nf-fa-snowflake',
    code: 0xf2dc,
  },
  {
    name: 'nf-fa-snowflake_o',
    code: 0xf2dc,
  },
  {
    name: 'nf-fa-snowman',
    code: 0xef6a,
  },
  {
    name: 'nf-fa-snowplow',
    code: 0xef6b,
  },
  {
    name: 'nf-fa-soccer_ball_o',
    code: 0xf1e3,
  },
  {
    name: 'nf-fa-socks',
    code: 0xeedf,
  },
  {
    name: 'nf-fa-solar_panel',
    code: 0xee81,
  },
  {
    name: 'nf-fa-sort',
    code: 0xf0dc,
  },
  {
    name: 'nf-fa-sort_alpha_asc',
    code: 0xf15d,
  },
  {
    name: 'nf-fa-sort_alpha_desc',
    code: 0xf15e,
  },
  {
    name: 'nf-fa-sort_amount_asc',
    code: 0xf160,
  },
  {
    name: 'nf-fa-sort_amount_desc',
    code: 0xf161,
  },
  {
    name: 'nf-fa-sort_asc',
    code: 0xf0de,
  },
  {
    name: 'nf-fa-sort_desc',
    code: 0xf0dd,
  },
  {
    name: 'nf-fa-sort_down',
    code: 0xf0dd,
  },
  {
    name: 'nf-fa-sort_numeric_asc',
    code: 0xf162,
  },
  {
    name: 'nf-fa-sort_numeric_desc',
    code: 0xf163,
  },
  {
    name: 'nf-fa-sort_up',
    code: 0xf0de,
  },
  {
    name: 'nf-fa-soundcloud',
    code: 0xf1be,
  },
  {
    name: 'nf-fa-sourcetree',
    code: 0xef6c,
  },
  {
    name: 'nf-fa-spa',
    code: 0xee82,
  },
  {
    name: 'nf-fa-space_shuttle',
    code: 0xf197,
  },
  {
    name: 'nf-fa-spaghetti_monster_flying',
    code: 0xeed5,
  },
  {
    name: 'nf-fa-speakap',
    code: 0xed27,
  },
  {
    name: 'nf-fa-speaker_deck',
    code: 0xef9b,
  },
  {
    name: 'nf-fa-spell_check',
    code: 0xefb3,
  },
  {
    name: 'nf-fa-spider',
    code: 0xef10,
  },
  {
    name: 'nf-fa-spinner',
    code: 0xf110,
  },
  {
    name: 'nf-fa-splotch',
    code: 0xee83,
  },
  {
    name: 'nf-fa-spoon',
    code: 0xf1b1,
  },
  {
    name: 'nf-fa-spotify',
    code: 0xf1bc,
  },
  {
    name: 'nf-fa-spray_can',
    code: 0xee84,
  },
  {
    name: 'nf-fa-spray_can_sparkles',
    code: 0xee97,
  },
  {
    name: 'nf-fa-square',
    code: 0xf0c8,
  },
  {
    name: 'nf-fa-square_arrow_up_right',
    code: 0xf14c,
  },
  {
    name: 'nf-fa-square_behance',
    code: 0xf1b5,
  },
  {
    name: 'nf-fa-square_caret_down',
    code: 0xf150,
  },
  {
    name: 'nf-fa-square_caret_left',
    code: 0xf191,
  },
  {
    name: 'nf-fa-square_caret_right',
    code: 0xf152,
  },
  {
    name: 'nf-fa-square_caret_up',
    code: 0xf151,
  },
  {
    name: 'nf-fa-square_check',
    code: 0xf14a,
  },
  {
    name: 'nf-fa-square_dribbble',
    code: 0xf22e,
  },
  {
    name: 'nf-fa-square_envelope',
    code: 0xf199,
  },
  {
    name: 'nf-fa-square_facebook',
    code: 0xf082,
  },
  {
    name: 'nf-fa-square_font_awesome_stroke',
    code: 0xf0af,
  },
  {
    name: 'nf-fa-square_full',
    code: 0xed70,
  },
  {
    name: 'nf-fa-square_git',
    code: 0xf1d2,
  },
  {
    name: 'nf-fa-square_github',
    code: 0xf092,
  },
  {
    name: 'nf-fa-square_google_plus',
    code: 0xf0d4,
  },
  {
    name: 'nf-fa-square_h',
    code: 0xf0fd,
  },
  {
    name: 'nf-fa-square_hacker_news',
    code: 0xf2e5,
  },
  {
    name: 'nf-fa-square_js',
    code: 0xf2ef,
  },
  {
    name: 'nf-fa-square_lastfm',
    code: 0xf203,
  },
  {
    name: 'nf-fa-square_minus',
    code: 0xf146,
  },
  {
    name: 'nf-fa-square_o',
    code: 0xf096,
  },
  {
    name: 'nf-fa-square_odnoklassniki',
    code: 0xf264,
  },
  {
    name: 'nf-fa-square_parking',
    code: 0xefcd,
  },
  {
    name: 'nf-fa-square_pen',
    code: 0xf14b,
  },
  {
    name: 'nf-fa-square_phone',
    code: 0xf098,
  },
  {
    name: 'nf-fa-square_phone_flip',
    code: 0xefaa,
  },
  {
    name: 'nf-fa-square_pinterest',
    code: 0xf0d3,
  },
  {
    name: 'nf-fa-square_plus',
    code: 0xf0fe,
  },
  {
    name: 'nf-fa-square_poll_horizontal',
    code: 0xeed9,
  },
  {
    name: 'nf-fa-square_poll_vertical',
    code: 0xeed8,
  },
  {
    name: 'nf-fa-square_reddit',
    code: 0xf1a2,
  },
  {
    name: 'nf-fa-square_root_variable',
    code: 0xeee0,
  },
  {
    name: 'nf-fa-square_rss',
    code: 0xf143,
  },
  {
    name: 'nf-fa-square_share_nodes',
    code: 0xf1e1,
  },
  {
    name: 'nf-fa-square_snapchat',
    code: 0xf2ad,
  },
  {
    name: 'nf-fa-square_steam',
    code: 0xf1b7,
  },
  {
    name: 'nf-fa-square_tumblr',
    code: 0xf174,
  },
  {
    name: 'nf-fa-square_twitter',
    code: 0xf081,
  },
  {
    name: 'nf-fa-square_up_right',
    code: 0xf0b4,
  },
  {
    name: 'nf-fa-square_viadeo',
    code: 0xf2aa,
  },
  {
    name: 'nf-fa-square_vimeo',
    code: 0xf194,
  },
  {
    name: 'nf-fa-square_whatsapp',
    code: 0xed3b,
  },
  {
    name: 'nf-fa-square_xing',
    code: 0xf169,
  },
  {
    name: 'nf-fa-square_xmark',
    code: 0xf2d3,
  },
  {
    name: 'nf-fa-square_youtube',
    code: 0xf166,
  },
  {
    name: 'nf-fa-squarespace',
    code: 0xee85,
  },
  {
    name: 'nf-fa-stack_exchange',
    code: 0xf18d,
  },
  {
    name: 'nf-fa-stack_overflow',
    code: 0xf16c,
  },
  {
    name: 'nf-fa-stackpath',
    code: 0xefa1,
  },
  {
    name: 'nf-fa-stamp',
    code: 0xee86,
  },
  {
    name: 'nf-fa-star',
    code: 0xf005,
  },
  {
    name: 'nf-fa-star_and_crescent',
    code: 0xeee1,
  },
  {
    name: 'nf-fa-star_half',
    code: 0xf089,
  },
  {
    name: 'nf-fa-star_half_empty',
    code: 0xf123,
  },
  {
    name: 'nf-fa-star_half_full',
    code: 0xf123,
  },
  {
    name: 'nf-fa-star_half_o',
    code: 0xf123,
  },
  {
    name: 'nf-fa-star_half_stroke',
    code: 0xee87,
  },
  {
    name: 'nf-fa-star_o',
    code: 0xf006,
  },
  {
    name: 'nf-fa-star_of_david',
    code: 0xeee2,
  },
  {
    name: 'nf-fa-star_of_life',
    code: 0xeeb1,
  },
  {
    name: 'nf-fa-staylinked',
    code: 0xed28,
  },
  {
    name: 'nf-fa-steam',
    code: 0xf1b6,
  },
  {
    name: 'nf-fa-steam_square',
    code: 0xf1b7,
  },
  {
    name: 'nf-fa-steam_symbol',
    code: 0xed29,
  },
  {
    name: 'nf-fa-step_backward',
    code: 0xf048,
  },
  {
    name: 'nf-fa-step_forward',
    code: 0xf051,
  },
  {
    name: 'nf-fa-sterling_sign',
    code: 0xf154,
  },
  {
    name: 'nf-fa-stethoscope',
    code: 0xf0f1,
  },
  {
    name: 'nf-fa-sticker_mule',
    code: 0xed2a,
  },
  {
    name: 'nf-fa-sticky_note',
    code: 0xf249,
  },
  {
    name: 'nf-fa-sticky_note_o',
    code: 0xf24a,
  },
  {
    name: 'nf-fa-stop',
    code: 0xf04d,
  },
  {
    name: 'nf-fa-stop_circle',
    code: 0xf28d,
  },
  {
    name: 'nf-fa-stop_circle_o',
    code: 0xf28e,
  },
  {
    name: 'nf-fa-stopwatch',
    code: 0xf2f2,
  },
  {
    name: 'nf-fa-store',
    code: 0xee17,
  },
  {
    name: 'nf-fa-strava',
    code: 0xed52,
  },
  {
    name: 'nf-fa-street_view',
    code: 0xf21d,
  },
  {
    name: 'nf-fa-strikethrough',
    code: 0xf0cc,
  },
  {
    name: 'nf-fa-stripe',
    code: 0xed53,
  },
  {
    name: 'nf-fa-stripe_s',
    code: 0xed54,
  },
  {
    name: 'nf-fa-stroopwafel',
    code: 0xee1a,
  },
  {
    name: 'nf-fa-studiovinari',
    code: 0xed2b,
  },
  {
    name: 'nf-fa-stumbleupon',
    code: 0xf1a4,
  },
  {
    name: 'nf-fa-stumbleupon_circle',
    code: 0xf1a3,
  },
  {
    name: 'nf-fa-subscript',
    code: 0xf12c,
  },
  {
    name: 'nf-fa-subway',
    code: 0xf239,
  },
  {
    name: 'nf-fa-suitcase',
    code: 0xf0f2,
  },
  {
    name: 'nf-fa-suitcase_medical',
    code: 0xf0fa,
  },
  {
    name: 'nf-fa-suitcase_rolling',
    code: 0xee88,
  },
  {
    name: 'nf-fa-sun',
    code: 0xf185,
  },
  {
    name: 'nf-fa-sun_o',
    code: 0xf185,
  },
  {
    name: 'nf-fa-superpowers',
    code: 0xf2dd,
  },
  {
    name: 'nf-fa-superscript',
    code: 0xf12b,
  },
  {
    name: 'nf-fa-supple',
    code: 0xed2c,
  },
  {
    name: 'nf-fa-support',
    code: 0xf1cd,
  },
  {
    name: 'nf-fa-suse',
    code: 0xef6d,
  },
  {
    name: 'nf-fa-swatchbook',
    code: 0xee8a,
  },
  {
    name: 'nf-fa-swift',
    code: 0xefbe,
  },
  {
    name: 'nf-fa-symfony',
    code: 0xef9c,
  },
  {
    name: 'nf-fa-synagogue',
    code: 0xeee3,
  },
  {
    name: 'nf-fa-syringe',
    code: 0xed8d,
  },
  {
    name: 'nf-fa-table',
    code: 0xf0ce,
  },
  {
    name: 'nf-fa-table_cells',
    code: 0xf00a,
  },
  {
    name: 'nf-fa-table_cells_large',
    code: 0xf009,
  },
  {
    name: 'nf-fa-table_columns',
    code: 0xf0db,
  },
  {
    name: 'nf-fa-table_list',
    code: 0xf00b,
  },
  {
    name: 'nf-fa-table_tennis_paddle_ball',
    code: 0xed71,
  },
  {
    name: 'nf-fa-tablet',
    code: 0xed2e,
  },
  {
    name: 'nf-fa-tablet_button',
    code: 0xed2d,
  },
  {
    name: 'nf-fa-tablet_screen_button',
    code: 0xf10a,
  },
  {
    name: 'nf-fa-tablets',
    code: 0xed8e,
  },
  {
    name: 'nf-fa-tachograph_digital',
    code: 0xee2f,
  },
  {
    name: 'nf-fa-tachometer',
    code: 0xf0e4,
  },
  {
    name: 'nf-fa-tag',
    code: 0xf02b,
  },
  {
    name: 'nf-fa-tags',
    code: 0xf02c,
  },
  {
    name: 'nf-fa-tape',
    code: 0xedaa,
  },
  {
    name: 'nf-fa-tasks',
    code: 0xf0ae,
  },
  {
    name: 'nf-fa-taxi',
    code: 0xf1ba,
  },
  {
    name: 'nf-fa-teamspeak',
    code: 0xedc3,
  },
  {
    name: 'nf-fa-teeth',
    code: 0xeeb4,
  },
  {
    name: 'nf-fa-teeth_open',
    code: 0xeeb5,
  },
  {
    name: 'nf-fa-telegram',
    code: 0xf2c6,
  },
  {
    name: 'nf-fa-television',
    code: 0xf26c,
  },
  {
    name: 'nf-fa-temperature_empty',
    code: 0xf2cb,
  },
  {
    name: 'nf-fa-temperature_full',
    code: 0xf2c7,
  },
  {
    name: 'nf-fa-temperature_half',
    code: 0xf2c9,
  },
  {
    name: 'nf-fa-temperature_high',
    code: 0xef2a,
  },
  {
    name: 'nf-fa-temperature_low',
    code: 0xef2b,
  },
  {
    name: 'nf-fa-temperature_quarter',
    code: 0xf2ca,
  },
  {
    name: 'nf-fa-temperature_three_quarters',
    code: 0xf2c8,
  },
  {
    name: 'nf-fa-tencent_weibo',
    code: 0xf1d5,
  },
  {
    name: 'nf-fa-tenge_sign',
    code: 0xef6e,
  },
  {
    name: 'nf-fa-terminal',
    code: 0xf120,
  },
  {
    name: 'nf-fa-text_height',
    code: 0xf034,
  },
  {
    name: 'nf-fa-text_slash',
    code: 0xefac,
  },
  {
    name: 'nf-fa-text_width',
    code: 0xf035,
  },
  {
    name: 'nf-fa-th',
    code: 0xf00a,
  },
  {
    name: 'nf-fa-th_large',
    code: 0xf009,
  },
  {
    name: 'nf-fa-th_list',
    code: 0xf00b,
  },
  {
    name: 'nf-fa-the_red_yeti',
    code: 0xeee4,
  },
  {
    name: 'nf-fa-themeco',
    code: 0xee8d,
  },
  {
    name: 'nf-fa-themeisle',
    code: 0xf2b2,
  },
  {
    name: 'nf-fa-thermometer',
    code: 0xf2c7,
  },
  {
    name: 'nf-fa-thermometer_0',
    code: 0xf2cb,
  },
  {
    name: 'nf-fa-thermometer_1',
    code: 0xf2ca,
  },
  {
    name: 'nf-fa-thermometer_2',
    code: 0xf2c9,
  },
  {
    name: 'nf-fa-thermometer_3',
    code: 0xf2c8,
  },
  {
    name: 'nf-fa-thermometer_4',
    code: 0xf2c7,
  },
  {
    name: 'nf-fa-thermometer_alt',
    code: 0xed8f,
  },
  {
    name: 'nf-fa-thermometer_empty',
    code: 0xf2cb,
  },
  {
    name: 'nf-fa-thermometer_full',
    code: 0xf2c7,
  },
  {
    name: 'nf-fa-thermometer_half',
    code: 0xf2c9,
  },
  {
    name: 'nf-fa-thermometer_quarter',
    code: 0xf2ca,
  },
  {
    name: 'nf-fa-thermometer_three_quarters',
    code: 0xf2c8,
  },
  {
    name: 'nf-fa-think_peaks',
    code: 0xef19,
  },
  {
    name: 'nf-fa-thumb_tack',
    code: 0xf08d,
  },
  {
    name: 'nf-fa-thumbs_down',
    code: 0xf165,
  },
  {
    name: 'nf-fa-thumbs_o_down',
    code: 0xf088,
  },
  {
    name: 'nf-fa-thumbs_o_up',
    code: 0xf087,
  },
  {
    name: 'nf-fa-thumbs_up',
    code: 0xf164,
  },
  {
    name: 'nf-fa-thumbtack',
    code: 0xf08d,
  },
  {
    name: 'nf-fa-ticket',
    code: 0xf145,
  },
  {
    name: 'nf-fa-ticket_simple',
    code: 0xed30,
  },
  {
    name: 'nf-fa-times',
    code: 0xf00d,
  },
  {
    name: 'nf-fa-times_circle',
    code: 0xf057,
  },
  {
    name: 'nf-fa-times_circle_o',
    code: 0xf05c,
  },
  {
    name: 'nf-fa-times_rectangle',
    code: 0xf2d3,
  },
  {
    name: 'nf-fa-times_rectangle_o',
    code: 0xf2d4,
  },
  {
    name: 'nf-fa-tint',
    code: 0xf043,
  },
  {
    name: 'nf-fa-toggle_down',
    code: 0xf150,
  },
  {
    name: 'nf-fa-toggle_left',
    code: 0xf191,
  },
  {
    name: 'nf-fa-toggle_off',
    code: 0xf204,
  },
  {
    name: 'nf-fa-toggle_on',
    code: 0xf205,
  },
  {
    name: 'nf-fa-toggle_right',
    code: 0xf152,
  },
  {
    name: 'nf-fa-toggle_up',
    code: 0xf151,
  },
  {
    name: 'nf-fa-toilet',
    code: 0xef6f,
  },
  {
    name: 'nf-fa-toilet_paper',
    code: 0xef11,
  },
  {
    name: 'nf-fa-toolbox',
    code: 0xee1b,
  },
  {
    name: 'nf-fa-tooth',
    code: 0xee90,
  },
  {
    name: 'nf-fa-torii_gate',
    code: 0xeee6,
  },
  {
    name: 'nf-fa-tornado',
    code: 0xef2d,
  },
  {
    name: 'nf-fa-tower_broadcast',
    code: 0xede3,
  },
  {
    name: 'nf-fa-tractor',
    code: 0xef12,
  },
  {
    name: 'nf-fa-trade_federation',
    code: 0xeddd,
  },
  {
    name: 'nf-fa-trademark',
    code: 0xf25c,
  },
  {
    name: 'nf-fa-traffic_light',
    code: 0xeeb7,
  },
  {
    name: 'nf-fa-train',
    code: 0xf238,
  },
  {
    name: 'nf-fa-train_subway',
    code: 0xf239,
  },
  {
    name: 'nf-fa-transgender',
    code: 0xf224,
  },
  {
    name: 'nf-fa-transgender_alt',
    code: 0xf225,
  },
  {
    name: 'nf-fa-trash',
    code: 0xf1f8,
  },
  {
    name: 'nf-fa-trash_arrow_up',
    code: 0xef90,
  },
  {
    name: 'nf-fa-trash_can',
    code: 0xf014,
  },
  {
    name: 'nf-fa-trash_can_arrow_up',
    code: 0xef91,
  },
  {
    name: 'nf-fa-trash_o',
    code: 0xf014,
  },
  {
    name: 'nf-fa-tree',
    code: 0xf1bb,
  },
  {
    name: 'nf-fa-trello',
    code: 0xf181,
  },
  {
    name: 'nf-fa-triangle_exclamation',
    code: 0xf071,
  },
  {
    name: 'nf-fa-tripadvisor',
    code: 0xf262,
  },
  {
    name: 'nf-fa-trophy',
    code: 0xf091,
  },
  {
    name: 'nf-fa-truck',
    code: 0xf0d1,
  },
  {
    name: 'nf-fa-truck_fast',
    code: 0xed8b,
  },
  {
    name: 'nf-fa-truck_medical',
    code: 0xf0f9,
  },
  {
    name: 'nf-fa-truck_monster',
    code: 0xeeb8,
  },
  {
    name: 'nf-fa-truck_moving',
    code: 0xedac,
  },
  {
    name: 'nf-fa-truck_pickup',
    code: 0xeeb9,
  },
  {
    name: 'nf-fa-truck_ramp_box',
    code: 0xedab,
  },
  {
    name: 'nf-fa-try',
    code: 0xf195,
  },
  {
    name: 'nf-fa-tty',
    code: 0xf1e4,
  },
  {
    name: 'nf-fa-tumblr',
    code: 0xf173,
  },
  {
    name: 'nf-fa-tumblr_square',
    code: 0xf174,
  },
  {
    name: 'nf-fa-turkish_lira',
    code: 0xf195,
  },
  {
    name: 'nf-fa-turn_down',
    code: 0xf2f8,
  },
  {
    name: 'nf-fa-turn_up',
    code: 0xf2fa,
  },
  {
    name: 'nf-fa-tv',
    code: 0xf26c,
  },
  {
    name: 'nf-fa-twitch',
    code: 0xf1e8,
  },
  {
    name: 'nf-fa-twitter',
    code: 0xf099,
  },
  {
    name: 'nf-fa-twitter_square',
    code: 0xf081,
  },
  {
    name: 'nf-fa-typo3',
    code: 0xed55,
  },
  {
    name: 'nf-fa-uber',
    code: 0xed31,
  },
  {
    name: 'nf-fa-ubuntu',
    code: 0xef72,
  },
  {
    name: 'nf-fa-uikit',
    code: 0xed32,
  },
  {
    name: 'nf-fa-umbraco',
    code: 0xefbf,
  },
  {
    name: 'nf-fa-umbrella',
    code: 0xf0e9,
  },
  {
    name: 'nf-fa-umbrella_beach',
    code: 0xee91,
  },
  {
    name: 'nf-fa-underline',
    code: 0xf0cd,
  },
  {
    name: 'nf-fa-undo',
    code: 0xf0e2,
  },
  {
    name: 'nf-fa-uniregistry',
    code: 0xed33,
  },
  {
    name: 'nf-fa-universal_access',
    code: 0xf29a,
  },
  {
    name: 'nf-fa-university',
    code: 0xf19c,
  },
  {
    name: 'nf-fa-unlink',
    code: 0xf127,
  },
  {
    name: 'nf-fa-unlock',
    code: 0xf09c,
  },
  {
    name: 'nf-fa-unlock_alt',
    code: 0xf13e,
  },
  {
    name: 'nf-fa-unlock_keyhole',
    code: 0xf13e,
  },
  {
    name: 'nf-fa-unsorted',
    code: 0xf0dc,
  },
  {
    name: 'nf-fa-untappd',
    code: 0xed34,
  },
  {
    name: 'nf-fa-up_down',
    code: 0xf09f,
  },
  {
    name: 'nf-fa-up_down_left_right',
    code: 0xf0b2,
  },
  {
    name: 'nf-fa-up_right_and_down_left_from_center',
    code: 0xed4f,
  },
  {
    name: 'nf-fa-up_right_from_square',
    code: 0xf0b3,
  },
  {
    name: 'nf-fa-upload',
    code: 0xf093,
  },
  {
    name: 'nf-fa-ups',
    code: 0xef73,
  },
  {
    name: 'nf-fa-usb',
    code: 0xf287,
  },
  {
    name: 'nf-fa-usd',
    code: 0xf155,
  },
  {
    name: 'nf-fa-user',
    code: 0xf007,
  },
  {
    name: 'nf-fa-user_astronaut',
    code: 0xedc5,
  },
  {
    name: 'nf-fa-user_check',
    code: 0xedc6,
  },
  {
    name: 'nf-fa-user_circle',
    code: 0xf2bd,
  },
  {
    name: 'nf-fa-user_circle_o',
    code: 0xf2be,
  },
  {
    name: 'nf-fa-user_clock',
    code: 0xedc7,
  },
  {
    name: 'nf-fa-user_doctor',
    code: 0xf0f0,
  },
  {
    name: 'nf-fa-user_gear',
    code: 0xedc8,
  },
  {
    name: 'nf-fa-user_graduate',
    code: 0xedcb,
  },
  {
    name: 'nf-fa-user_group',
    code: 0xedca,
  },
  {
    name: 'nf-fa-user_injured',
    code: 0xef13,
  },
  {
    name: 'nf-fa-user_large',
    code: 0xed35,
  },
  {
    name: 'nf-fa-user_large_slash',
    code: 0xedc4,
  },
  {
    name: 'nf-fa-user_lock',
    code: 0xedcc,
  },
  {
    name: 'nf-fa-user_md',
    code: 0xf0f0,
  },
  {
    name: 'nf-fa-user_minus',
    code: 0xedcd,
  },
  {
    name: 'nf-fa-user_ninja',
    code: 0xedce,
  },
  {
    name: 'nf-fa-user_nurse',
    code: 0xef92,
  },
  {
    name: 'nf-fa-user_o',
    code: 0xf2c0,
  },
  {
    name: 'nf-fa-user_pen',
    code: 0xedc9,
  },
  {
    name: 'nf-fa-user_plus',
    code: 0xf234,
  },
  {
    name: 'nf-fa-user_secret',
    code: 0xf21b,
  },
  {
    name: 'nf-fa-user_shield',
    code: 0xedcf,
  },
  {
    name: 'nf-fa-user_slash',
    code: 0xedd0,
  },
  {
    name: 'nf-fa-user_tag',
    code: 0xedd1,
  },
  {
    name: 'nf-fa-user_tie',
    code: 0xedd2,
  },
  {
    name: 'nf-fa-user_times',
    code: 0xf235,
  },
  {
    name: 'nf-fa-user_xmark',
    code: 0xf235,
  },
  {
    name: 'nf-fa-users',
    code: 0xf0c0,
  },
  {
    name: 'nf-fa-users_gear',
    code: 0xedd3,
  },
  {
    name: 'nf-fa-usps',
    code: 0xef74,
  },
  {
    name: 'nf-fa-ussunnah',
    code: 0xed36,
  },
  {
    name: 'nf-fa-utensils',
    code: 0xf0f5,
  },
  {
    name: 'nf-fa-vaadin',
    code: 0xed37,
  },
  {
    name: 'nf-fa-van_shuttle',
    code: 0xee7e,
  },
  {
    name: 'nf-fa-vcard',
    code: 0xf2bb,
  },
  {
    name: 'nf-fa-vcard_o',
    code: 0xf2bc,
  },
  {
    name: 'nf-fa-vector_square',
    code: 0xee92,
  },
  {
    name: 'nf-fa-venus',
    code: 0xf221,
  },
  {
    name: 'nf-fa-venus_double',
    code: 0xf226,
  },
  {
    name: 'nf-fa-venus_mars',
    code: 0xf228,
  },
  {
    name: 'nf-fa-viacoin',
    code: 0xf237,
  },
  {
    name: 'nf-fa-viadeo',
    code: 0xf2a9,
  },
  {
    name: 'nf-fa-viadeo_square',
    code: 0xf2aa,
  },
  {
    name: 'nf-fa-vial',
    code: 0xed90,
  },
  {
    name: 'nf-fa-vials',
    code: 0xed91,
  },
  {
    name: 'nf-fa-viber',
    code: 0xed38,
  },
  {
    name: 'nf-fa-video',
    code: 0xf03d,
  },
  {
    name: 'nf-fa-video_camera',
    code: 0xf03d,
  },
  {
    name: 'nf-fa-video_slash',
    code: 0xedad,
  },
  {
    name: 'nf-fa-vihara',
    code: 0xeee7,
  },
  {
    name: 'nf-fa-vimeo',
    code: 0xed39,
  },
  {
    name: 'nf-fa-vimeo_square',
    code: 0xf194,
  },
  {
    name: 'nf-fa-vimeo_v',
    code: 0xf27d,
  },
  {
    name: 'nf-fa-vine',
    code: 0xf1ca,
  },
  {
    name: 'nf-fa-vk',
    code: 0xf189,
  },
  {
    name: 'nf-fa-vnv',
    code: 0xed3a,
  },
  {
    name: 'nf-fa-voicemail',
    code: 0xefb4,
  },
  {
    name: 'nf-fa-volcano',
    code: 0xef2e,
  },
  {
    name: 'nf-fa-volleyball',
    code: 0xed72,
  },
  {
    name: 'nf-fa-volume_control_phone',
    code: 0xf2a0,
  },
  {
    name: 'nf-fa-volume_down',
    code: 0xf027,
  },
  {
    name: 'nf-fa-volume_high',
    code: 0xf028,
  },
  {
    name: 'nf-fa-volume_low',
    code: 0xf027,
  },
  {
    name: 'nf-fa-volume_off',
    code: 0xf026,
  },
  {
    name: 'nf-fa-volume_up',
    code: 0xf028,
  },
  {
    name: 'nf-fa-volume_xmark',
    code: 0xeee8,
  },
  {
    name: 'nf-fa-vr_cardboard',
    code: 0xef14,
  },
  {
    name: 'nf-fa-vuejs',
    code: 0xed4a,
  },
  {
    name: 'nf-fa-walkie_talkie',
    code: 0xefc0,
  },
  {
    name: 'nf-fa-wallet',
    code: 0xee1e,
  },
  {
    name: 'nf-fa-wand_magic',
    code: 0xf0d0,
  },
  {
    name: 'nf-fa-wand_sparkles',
    code: 0xef15,
  },
  {
    name: 'nf-fa-warehouse',
    code: 0xed92,
  },
  {
    name: 'nf-fa-warning',
    code: 0xf071,
  },
  {
    name: 'nf-fa-water',
    code: 0xef30,
  },
  {
    name: 'nf-fa-water_ladder',
    code: 0xee8c,
  },
  {
    name: 'nf-fa-wave_square',
    code: 0xef9d,
  },
  {
    name: 'nf-fa-waze',
    code: 0xef9e,
  },
  {
    name: 'nf-fa-wechat',
    code: 0xf1d7,
  },
  {
    name: 'nf-fa-weebly',
    code: 0xee93,
  },
  {
    name: 'nf-fa-weibo',
    code: 0xf18a,
  },
  {
    name: 'nf-fa-weight_hanging',
    code: 0xee94,
  },
  {
    name: 'nf-fa-weight_scale',
    code: 0xed93,
  },
  {
    name: 'nf-fa-weixin',
    code: 0xf1d7,
  },
  {
    name: 'nf-fa-whatsapp',
    code: 0xf232,
  },
  {
    name: 'nf-fa-wheelchair',
    code: 0xf193,
  },
  {
    name: 'nf-fa-wheelchair_alt',
    code: 0xf29b,
  },
  {
    name: 'nf-fa-whiskey_glass',
    code: 0xef4a,
  },
  {
    name: 'nf-fa-whmcs',
    code: 0xed3c,
  },
  {
    name: 'nf-fa-wifi',
    code: 0xf1eb,
  },
  {
    name: 'nf-fa-wikipedia_w',
    code: 0xf266,
  },
  {
    name: 'nf-fa-wind',
    code: 0xef16,
  },
  {
    name: 'nf-fa-window_close',
    code: 0xf2d3,
  },
  {
    name: 'nf-fa-window_close_o',
    code: 0xf2d4,
  },
  {
    name: 'nf-fa-window_maximize',
    code: 0xf2d0,
  },
  {
    name: 'nf-fa-window_minimize',
    code: 0xf2d1,
  },
  {
    name: 'nf-fa-window_restore',
    code: 0xf2d2,
  },
  {
    name: 'nf-fa-windows',
    code: 0xf17a,
  },
  {
    name: 'nf-fa-wine_bottle',
    code: 0xef17,
  },
  {
    name: 'nf-fa-wine_glass',
    code: 0xedae,
  },
  {
    name: 'nf-fa-wine_glass_empty',
    code: 0xee95,
  },
  {
    name: 'nf-fa-wix',
    code: 0xee96,
  },
  {
    name: 'nf-fa-wizards_of_the_coast',
    code: 0xef18,
  },
  {
    name: 'nf-fa-wolf_pack_battalion',
    code: 0xedde,
  },
  {
    name: 'nf-fa-won',
    code: 0xf159,
  },
  {
    name: 'nf-fa-won_sign',
    code: 0xf159,
  },
  {
    name: 'nf-fa-wordpress',
    code: 0xf19a,
  },
  {
    name: 'nf-fa-wordpress_simple',
    code: 0xed3d,
  },
  {
    name: 'nf-fa-wpbeginner',
    code: 0xf297,
  },
  {
    name: 'nf-fa-wpexplorer',
    code: 0xf2de,
  },
  {
    name: 'nf-fa-wpforms',
    code: 0xf298,
  },
  {
    name: 'nf-fa-wpressr',
    code: 0xed1d,
  },
  {
    name: 'nf-fa-wrench',
    code: 0xf0ad,
  },
  {
    name: 'nf-fa-x_ray',
    code: 0xed94,
  },
  {
    name: 'nf-fa-xbox',
    code: 0xed3e,
  },
  {
    name: 'nf-fa-xing',
    code: 0xf168,
  },
  {
    name: 'nf-fa-xing_square',
    code: 0xf169,
  },
  {
    name: 'nf-fa-xmark',
    code: 0xf00d,
  },
  {
    name: 'nf-fa-y_combinator',
    code: 0xf23b,
  },
  {
    name: 'nf-fa-y_combinator_square',
    code: 0xf1d4,
  },
  {
    name: 'nf-fa-yahoo',
    code: 0xf19e,
  },
  {
    name: 'nf-fa-yammer',
    code: 0xef9f,
  },
  {
    name: 'nf-fa-yandex',
    code: 0xed3f,
  },
  {
    name: 'nf-fa-yandex_international',
    code: 0xed40,
  },
  {
    name: 'nf-fa-yarn',
    code: 0xef75,
  },
  {
    name: 'nf-fa-yc',
    code: 0xf23b,
  },
  {
    name: 'nf-fa-yc_square',
    code: 0xf1d4,
  },
  {
    name: 'nf-fa-yelp',
    code: 0xf1e9,
  },
  {
    name: 'nf-fa-yen',
    code: 0xf157,
  },
  {
    name: 'nf-fa-yen_sign',
    code: 0xf157,
  },
  {
    name: 'nf-fa-yin_yang',
    code: 0xeee9,
  },
  {
    name: 'nf-fa-yoast',
    code: 0xf2b1,
  },
  {
    name: 'nf-fa-youtube',
    code: 0xf16a,
  },
  {
    name: 'nf-fa-youtube_play',
    code: 0xf16a,
  },
  {
    name: 'nf-fa-youtube_square',
    code: 0xf166,
  },
  {
    name: 'nf-fa-zhihu',
    code: 0xeeba,
  },
  {
    name: 'nf-fae-apple_fruit',
    code: 0xe29e,
  },
  {
    name: 'nf-fae-atom',
    code: 0xe27f,
  },
  {
    name: 'nf-fae-bacteria',
    code: 0xe280,
  },
  {
    name: 'nf-fae-banana',
    code: 0xe281,
  },
  {
    name: 'nf-fae-bath',
    code: 0xe282,
  },
  {
    name: 'nf-fae-bed',
    code: 0xe283,
  },
  {
    name: 'nf-fae-benzene',
    code: 0xe284,
  },
  {
    name: 'nf-fae-bigger',
    code: 0xe285,
  },
  {
    name: 'nf-fae-biohazard',
    code: 0xe286,
  },
  {
    name: 'nf-fae-blogger_circle',
    code: 0xe287,
  },
  {
    name: 'nf-fae-blogger_square',
    code: 0xe288,
  },
  {
    name: 'nf-fae-bones',
    code: 0xe289,
  },
  {
    name: 'nf-fae-book_open',
    code: 0xe28a,
  },
  {
    name: 'nf-fae-book_open_o',
    code: 0xe28b,
  },
  {
    name: 'nf-fae-brain',
    code: 0xe28c,
  },
  {
    name: 'nf-fae-bread',
    code: 0xe28d,
  },
  {
    name: 'nf-fae-butterfly',
    code: 0xe28e,
  },
  {
    name: 'nf-fae-carot',
    code: 0xe28f,
  },
  {
    name: 'nf-fae-cc_by',
    code: 0xe290,
  },
  {
    name: 'nf-fae-cc_cc',
    code: 0xe291,
  },
  {
    name: 'nf-fae-cc_nc',
    code: 0xe292,
  },
  {
    name: 'nf-fae-cc_nc_eu',
    code: 0xe293,
  },
  {
    name: 'nf-fae-cc_nc_jp',
    code: 0xe294,
  },
  {
    name: 'nf-fae-cc_nd',
    code: 0xe295,
  },
  {
    name: 'nf-fae-cc_remix',
    code: 0xe296,
  },
  {
    name: 'nf-fae-cc_sa',
    code: 0xe297,
  },
  {
    name: 'nf-fae-cc_share',
    code: 0xe298,
  },
  {
    name: 'nf-fae-cc_zero',
    code: 0xe299,
  },
  {
    name: 'nf-fae-checklist_o',
    code: 0xe29a,
  },
  {
    name: 'nf-fae-cheese',
    code: 0xe264,
  },
  {
    name: 'nf-fae-cherry',
    code: 0xe29b,
  },
  {
    name: 'nf-fae-chess_bishop',
    code: 0xe29c,
  },
  {
    name: 'nf-fae-chess_horse',
    code: 0xe25f,
  },
  {
    name: 'nf-fae-chess_king',
    code: 0xe260,
  },
  {
    name: 'nf-fae-chess_pawn',
    code: 0xe261,
  },
  {
    name: 'nf-fae-chess_queen',
    code: 0xe262,
  },
  {
    name: 'nf-fae-chess_tower',
    code: 0xe263,
  },
  {
    name: 'nf-fae-chicken_thigh',
    code: 0xe29f,
  },
  {
    name: 'nf-fae-chilli',
    code: 0xe265,
  },
  {
    name: 'nf-fae-chip',
    code: 0xe266,
  },
  {
    name: 'nf-fae-cicling',
    code: 0xe267,
  },
  {
    name: 'nf-fae-cloud',
    code: 0xe268,
  },
  {
    name: 'nf-fae-cockroach',
    code: 0xe269,
  },
  {
    name: 'nf-fae-coffe_beans',
    code: 0xe26a,
  },
  {
    name: 'nf-fae-coins',
    code: 0xe26b,
  },
  {
    name: 'nf-fae-comb',
    code: 0xe26c,
  },
  {
    name: 'nf-fae-comet',
    code: 0xe26d,
  },
  {
    name: 'nf-fae-crown',
    code: 0xe26e,
  },
  {
    name: 'nf-fae-cup_coffe',
    code: 0xe26f,
  },
  {
    name: 'nf-fae-dice',
    code: 0xe270,
  },
  {
    name: 'nf-fae-disco',
    code: 0xe271,
  },
  {
    name: 'nf-fae-dna',
    code: 0xe272,
  },
  {
    name: 'nf-fae-donut',
    code: 0xe273,
  },
  {
    name: 'nf-fae-dress',
    code: 0xe274,
  },
  {
    name: 'nf-fae-drop',
    code: 0xe275,
  },
  {
    name: 'nf-fae-ello',
    code: 0xe276,
  },
  {
    name: 'nf-fae-envelope_open',
    code: 0xe277,
  },
  {
    name: 'nf-fae-envelope_open_o',
    code: 0xe278,
  },
  {
    name: 'nf-fae-equal',
    code: 0xe279,
  },
  {
    name: 'nf-fae-equal_bigger',
    code: 0xe27a,
  },
  {
    name: 'nf-fae-feedly',
    code: 0xe27b,
  },
  {
    name: 'nf-fae-file_export',
    code: 0xe27c,
  },
  {
    name: 'nf-fae-file_import',
    code: 0xe27d,
  },
  {
    name: 'nf-fae-fingerprint',
    code: 0xe23f,
  },
  {
    name: 'nf-fae-floppy',
    code: 0xe240,
  },
  {
    name: 'nf-fae-footprint',
    code: 0xe241,
  },
  {
    name: 'nf-fae-freecodecamp',
    code: 0xe242,
  },
  {
    name: 'nf-fae-galaxy',
    code: 0xe243,
  },
  {
    name: 'nf-fae-galery',
    code: 0xe244,
  },
  {
    name: 'nf-fae-gift_card',
    code: 0xe2a0,
  },
  {
    name: 'nf-fae-glass',
    code: 0xe245,
  },
  {
    name: 'nf-fae-google_drive',
    code: 0xe246,
  },
  {
    name: 'nf-fae-google_play',
    code: 0xe247,
  },
  {
    name: 'nf-fae-gps',
    code: 0xe248,
  },
  {
    name: 'nf-fae-grav',
    code: 0xe249,
  },
  {
    name: 'nf-fae-guitar',
    code: 0xe24a,
  },
  {
    name: 'nf-fae-gut',
    code: 0xe24b,
  },
  {
    name: 'nf-fae-halter',
    code: 0xe24c,
  },
  {
    name: 'nf-fae-hamburger',
    code: 0xe24d,
  },
  {
    name: 'nf-fae-hat',
    code: 0xe24e,
  },
  {
    name: 'nf-fae-hexagon',
    code: 0xe24f,
  },
  {
    name: 'nf-fae-high_heel',
    code: 0xe250,
  },
  {
    name: 'nf-fae-hotdog',
    code: 0xe251,
  },
  {
    name: 'nf-fae-ice_cream',
    code: 0xe252,
  },
  {
    name: 'nf-fae-id_card',
    code: 0xe253,
  },
  {
    name: 'nf-fae-imdb',
    code: 0xe254,
  },
  {
    name: 'nf-fae-infinity',
    code: 0xe255,
  },
  {
    name: 'nf-fae-injection',
    code: 0xe2a1,
  },
  {
    name: 'nf-fae-isle',
    code: 0xe2a2,
  },
  {
    name: 'nf-fae-java',
    code: 0xe256,
  },
  {
    name: 'nf-fae-layers',
    code: 0xe257,
  },
  {
    name: 'nf-fae-lips',
    code: 0xe258,
  },
  {
    name: 'nf-fae-lipstick',
    code: 0xe259,
  },
  {
    name: 'nf-fae-liver',
    code: 0xe25a,
  },
  {
    name: 'nf-fae-lollipop',
    code: 0xe2a3,
  },
  {
    name: 'nf-fae-loyalty_card',
    code: 0xe2a4,
  },
  {
    name: 'nf-fae-lung',
    code: 0xe25b,
  },
  {
    name: 'nf-fae-makeup_brushes',
    code: 0xe25c,
  },
  {
    name: 'nf-fae-maximize',
    code: 0xe25d,
  },
  {
    name: 'nf-fae-meat',
    code: 0xe2a5,
  },
  {
    name: 'nf-fae-medicine',
    code: 0xe221,
  },
  {
    name: 'nf-fae-microscope',
    code: 0xe222,
  },
  {
    name: 'nf-fae-milk_bottle',
    code: 0xe223,
  },
  {
    name: 'nf-fae-minimize',
    code: 0xe224,
  },
  {
    name: 'nf-fae-molecule',
    code: 0xe225,
  },
  {
    name: 'nf-fae-moon_cloud',
    code: 0xe226,
  },
  {
    name: 'nf-fae-mountains',
    code: 0xe2a6,
  },
  {
    name: 'nf-fae-mushroom',
    code: 0xe227,
  },
  {
    name: 'nf-fae-mustache',
    code: 0xe228,
  },
  {
    name: 'nf-fae-mysql',
    code: 0xe229,
  },
  {
    name: 'nf-fae-nintendo',
    code: 0xe22a,
  },
  {
    name: 'nf-fae-orange',
    code: 0xe2a7,
  },
  {
    name: 'nf-fae-palette_color',
    code: 0xe22b,
  },
  {
    name: 'nf-fae-peach',
    code: 0xe2a8,
  },
  {
    name: 'nf-fae-pear',
    code: 0xe2a9,
  },
  {
    name: 'nf-fae-pi',
    code: 0xe22c,
  },
  {
    name: 'nf-fae-pizza',
    code: 0xe22d,
  },
  {
    name: 'nf-fae-planet',
    code: 0xe22e,
  },
  {
    name: 'nf-fae-plant',
    code: 0xe22f,
  },
  {
    name: 'nf-fae-playstation',
    code: 0xe230,
  },
  {
    name: 'nf-fae-poison',
    code: 0xe231,
  },
  {
    name: 'nf-fae-popcorn',
    code: 0xe232,
  },
  {
    name: 'nf-fae-popsicle',
    code: 0xe233,
  },
  {
    name: 'nf-fae-pulse',
    code: 0xe234,
  },
  {
    name: 'nf-fae-python',
    code: 0xe235,
  },
  {
    name: 'nf-fae-quora_circle',
    code: 0xe236,
  },
  {
    name: 'nf-fae-quora_square',
    code: 0xe237,
  },
  {
    name: 'nf-fae-radioactive',
    code: 0xe238,
  },
  {
    name: 'nf-fae-raining',
    code: 0xe239,
  },
  {
    name: 'nf-fae-real_heart',
    code: 0xe23a,
  },
  {
    name: 'nf-fae-refrigerator',
    code: 0xe23b,
  },
  {
    name: 'nf-fae-restore',
    code: 0xe23c,
  },
  {
    name: 'nf-fae-ring',
    code: 0xe23d,
  },
  {
    name: 'nf-fae-ruby',
    code: 0xe23e,
  },
  {
    name: 'nf-fae-ruby_o',
    code: 0xe21e,
  },
  {
    name: 'nf-fae-ruler',
    code: 0xe21f,
  },
  {
    name: 'nf-fae-shirt',
    code: 0xe218,
  },
  {
    name: 'nf-fae-slash',
    code: 0xe216,
  },
  {
    name: 'nf-fae-smaller',
    code: 0xe200,
  },
  {
    name: 'nf-fae-snowing',
    code: 0xe201,
  },
  {
    name: 'nf-fae-soda',
    code: 0xe202,
  },
  {
    name: 'nf-fae-sofa',
    code: 0xe203,
  },
  {
    name: 'nf-fae-soup',
    code: 0xe204,
  },
  {
    name: 'nf-fae-spermatozoon',
    code: 0xe205,
  },
  {
    name: 'nf-fae-spin_double',
    code: 0xe206,
  },
  {
    name: 'nf-fae-stomach',
    code: 0xe207,
  },
  {
    name: 'nf-fae-storm',
    code: 0xe208,
  },
  {
    name: 'nf-fae-sun_cloud',
    code: 0xe21d,
  },
  {
    name: 'nf-fae-sushi',
    code: 0xe21a,
  },
  {
    name: 'nf-fae-tacos',
    code: 0xe219,
  },
  {
    name: 'nf-fae-telegram',
    code: 0xe217,
  },
  {
    name: 'nf-fae-telegram_circle',
    code: 0xe215,
  },
  {
    name: 'nf-fae-telescope',
    code: 0xe209,
  },
  {
    name: 'nf-fae-thermometer',
    code: 0xe20a,
  },
  {
    name: 'nf-fae-thermometer_high',
    code: 0xe20b,
  },
  {
    name: 'nf-fae-thermometer_low',
    code: 0xe20c,
  },
  {
    name: 'nf-fae-thin_close',
    code: 0xe20d,
  },
  {
    name: 'nf-fae-toilet',
    code: 0xe20e,
  },
  {
    name: 'nf-fae-tools',
    code: 0xe20f,
  },
  {
    name: 'nf-fae-tooth',
    code: 0xe210,
  },
  {
    name: 'nf-fae-tree',
    code: 0xe21c,
  },
  {
    name: 'nf-fae-triangle_ruler',
    code: 0xe21b,
  },
  {
    name: 'nf-fae-umbrella',
    code: 0xe220,
  },
  {
    name: 'nf-fae-uterus',
    code: 0xe211,
  },
  {
    name: 'nf-fae-virus',
    code: 0xe214,
  },
  {
    name: 'nf-fae-w3c',
    code: 0xe212,
  },
  {
    name: 'nf-fae-walking',
    code: 0xe213,
  },
  {
    name: 'nf-fae-wallet',
    code: 0xe25e,
  },
  {
    name: 'nf-fae-wind',
    code: 0xe27e,
  },
  {
    name: 'nf-fae-xbox',
    code: 0xe29d,
  },
  {
    name: 'nf-iec-power',
    code: 0x23fb,
  },
  {
    name: 'nf-iec-power_off',
    code: 0x2b58,
  },
  {
    name: 'nf-iec-power_on',
    code: 0x23fd,
  },
  {
    name: 'nf-iec-sleep_mode',
    code: 0x23fe,
  },
  {
    name: 'nf-iec-toggle_power',
    code: 0x23fc,
  },
  {
    name: 'nf-indent-dotted_guide',
    code: 0xe621,
  },
  {
    name: 'nf-indent-line',
    code: 0xe621,
  },
  {
    name: 'nf-indentation-line',
    code: 0xe621,
  },
  {
    name: 'nf-linux-almalinux',
    code: 0xf31d,
  },
  {
    name: 'nf-linux-alpine',
    code: 0xf300,
  },
  {
    name: 'nf-linux-aosc',
    code: 0xf301,
  },
  {
    name: 'nf-linux-apple',
    code: 0xf302,
  },
  {
    name: 'nf-linux-archcraft',
    code: 0xf345,
  },
  {
    name: 'nf-linux-archlabs',
    code: 0xf31e,
  },
  {
    name: 'nf-linux-archlinux',
    code: 0xf303,
  },
  {
    name: 'nf-linux-arcolinux',
    code: 0xf346,
  },
  {
    name: 'nf-linux-arduino',
    code: 0xf34b,
  },
  {
    name: 'nf-linux-artix',
    code: 0xf31f,
  },
  {
    name: 'nf-linux-awesome',
    code: 0xf354,
  },
  {
    name: 'nf-linux-biglinux',
    code: 0xf347,
  },
  {
    name: 'nf-linux-bspwm',
    code: 0xf355,
  },
  {
    name: 'nf-linux-budgie',
    code: 0xf320,
  },
  {
    name: 'nf-linux-centos',
    code: 0xf304,
  },
  {
    name: 'nf-linux-cinnamon',
    code: 0xf35f,
  },
  {
    name: 'nf-linux-codeberg',
    code: 0xf330,
  },
  {
    name: 'nf-linux-coreos',
    code: 0xf305,
  },
  {
    name: 'nf-linux-crystal',
    code: 0xf348,
  },
  {
    name: 'nf-linux-debian',
    code: 0xf306,
  },
  {
    name: 'nf-linux-deepin',
    code: 0xf321,
  },
  {
    name: 'nf-linux-devuan',
    code: 0xf307,
  },
  {
    name: 'nf-linux-docker',
    code: 0xf308,
  },
  {
    name: 'nf-linux-dwm',
    code: 0xf356,
  },
  {
    name: 'nf-linux-elementary',
    code: 0xf309,
  },
  {
    name: 'nf-linux-endeavour',
    code: 0xf322,
  },
  {
    name: 'nf-linux-enlightenment',
    code: 0xf357,
  },
  {
    name: 'nf-linux-fdroid',
    code: 0xf36a,
  },
  {
    name: 'nf-linux-fedora',
    code: 0xf30a,
  },
  {
    name: 'nf-linux-fedora_inverse',
    code: 0xf30b,
  },
  {
    name: 'nf-linux-ferris',
    code: 0xf323,
  },
  {
    name: 'nf-linux-flathub',
    code: 0xf324,
  },
  {
    name: 'nf-linux-fluxbox',
    code: 0xf358,
  },
  {
    name: 'nf-linux-forgejo',
    code: 0xf335,
  },
  {
    name: 'nf-linux-fosdem',
    code: 0xf36b,
  },
  {
    name: 'nf-linux-freebsd',
    code: 0xf30c,
  },
  {
    name: 'nf-linux-freecad',
    code: 0xf336,
  },
  {
    name: 'nf-linux-freedesktop',
    code: 0xf360,
  },
  {
    name: 'nf-linux-garuda',
    code: 0xf337,
  },
  {
    name: 'nf-linux-gentoo',
    code: 0xf30d,
  },
  {
    name: 'nf-linux-gimp',
    code: 0xf338,
  },
  {
    name: 'nf-linux-gitea',
    code: 0xf339,
  },
  {
    name: 'nf-linux-gnome',
    code: 0xf361,
  },
  {
    name: 'nf-linux-gnu_guix',
    code: 0xf325,
  },
  {
    name: 'nf-linux-gtk',
    code: 0xf362,
  },
  {
    name: 'nf-linux-hyperbola',
    code: 0xf33a,
  },
  {
    name: 'nf-linux-hyprland',
    code: 0xf359,
  },
  {
    name: 'nf-linux-i3',
    code: 0xf35a,
  },
  {
    name: 'nf-linux-illumos',
    code: 0xf326,
  },
  {
    name: 'nf-linux-inkscape',
    code: 0xf33b,
  },
  {
    name: 'nf-linux-jwm',
    code: 0xf35b,
  },
  {
    name: 'nf-linux-kali_linux',
    code: 0xf327,
  },
  {
    name: 'nf-linux-kde',
    code: 0xf373,
  },
  {
    name: 'nf-linux-kde_neon',
    code: 0xf331,
  },
  {
    name: 'nf-linux-kde_plasma',
    code: 0xf332,
  },
  {
    name: 'nf-linux-kdenlive',
    code: 0xf33c,
  },
  {
    name: 'nf-linux-kicad',
    code: 0xf34c,
  },
  {
    name: 'nf-linux-krita',
    code: 0xf33d,
  },
  {
    name: 'nf-linux-kubuntu',
    code: 0xf333,
  },
  {
    name: 'nf-linux-kubuntu_inverse',
    code: 0xf334,
  },
  {
    name: 'nf-linux-leap',
    code: 0xf37e,
  },
  {
    name: 'nf-linux-libreoffice',
    code: 0xf376,
  },
  {
    name: 'nf-linux-libreofficebase',
    code: 0xf377,
  },
  {
    name: 'nf-linux-libreofficecalc',
    code: 0xf378,
  },
  {
    name: 'nf-linux-libreofficedraw',
    code: 0xf379,
  },
  {
    name: 'nf-linux-libreofficeimpress',
    code: 0xf37a,
  },
  {
    name: 'nf-linux-libreofficemath',
    code: 0xf37b,
  },
  {
    name: 'nf-linux-libreofficewriter',
    code: 0xf37c,
  },
  {
    name: 'nf-linux-linuxmint',
    code: 0xf30e,
  },
  {
    name: 'nf-linux-linuxmint_inverse',
    code: 0xf30f,
  },
  {
    name: 'nf-linux-locos',
    code: 0xf349,
  },
  {
    name: 'nf-linux-lxde',
    code: 0xf363,
  },
  {
    name: 'nf-linux-lxle',
    code: 0xf33e,
  },
  {
    name: 'nf-linux-lxqt',
    code: 0xf364,
  },
  {
    name: 'nf-linux-mageia',
    code: 0xf310,
  },
  {
    name: 'nf-linux-mandriva',
    code: 0xf311,
  },
  {
    name: 'nf-linux-manjaro',
    code: 0xf312,
  },
  {
    name: 'nf-linux-mate',
    code: 0xf365,
  },
  {
    name: 'nf-linux-mpv',
    code: 0xf36e,
  },
  {
    name: 'nf-linux-mxlinux',
    code: 0xf33f,
  },
  {
    name: 'nf-linux-neovim',
    code: 0xf36f,
  },
  {
    name: 'nf-linux-nixos',
    code: 0xf313,
  },
  {
    name: 'nf-linux-nobara',
    code: 0xf380,
  },
  {
    name: 'nf-linux-octoprint',
    code: 0xf34d,
  },
  {
    name: 'nf-linux-openbsd',
    code: 0xf328,
  },
  {
    name: 'nf-linux-openscad',
    code: 0xf34e,
  },
  {
    name: 'nf-linux-opensuse',
    code: 0xf314,
  },
  {
    name: 'nf-linux-osh',
    code: 0xf34f,
  },
  {
    name: 'nf-linux-oshwa',
    code: 0xf350,
  },
  {
    name: 'nf-linux-osi',
    code: 0xf36c,
  },
  {
    name: 'nf-linux-parabola',
    code: 0xf340,
  },
  {
    name: 'nf-linux-parrot',
    code: 0xf329,
  },
  {
    name: 'nf-linux-pop_os',
    code: 0xf32a,
  },
  {
    name: 'nf-linux-postmarketos',
    code: 0xf374,
  },
  {
    name: 'nf-linux-prusaslicer',
    code: 0xf351,
  },
  {
    name: 'nf-linux-puppy',
    code: 0xf341,
  },
  {
    name: 'nf-linux-qt',
    code: 0xf375,
  },
  {
    name: 'nf-linux-qtile',
    code: 0xf35c,
  },
  {
    name: 'nf-linux-qubesos',
    code: 0xf342,
  },
  {
    name: 'nf-linux-raspberry_pi',
    code: 0xf315,
  },
  {
    name: 'nf-linux-redhat',
    code: 0xf316,
  },
  {
    name: 'nf-linux-reprap',
    code: 0xf352,
  },
  {
    name: 'nf-linux-riscv',
    code: 0xf353,
  },
  {
    name: 'nf-linux-river',
    code: 0xf381,
  },
  {
    name: 'nf-linux-rocky_linux',
    code: 0xf32b,
  },
  {
    name: 'nf-linux-sabayon',
    code: 0xf317,
  },
  {
    name: 'nf-linux-slackware',
    code: 0xf318,
  },
  {
    name: 'nf-linux-slackware_inverse',
    code: 0xf319,
  },
  {
    name: 'nf-linux-snappy',
    code: 0xf32c,
  },
  {
    name: 'nf-linux-solus',
    code: 0xf32d,
  },
  {
    name: 'nf-linux-sway',
    code: 0xf35d,
  },
  {
    name: 'nf-linux-tails',
    code: 0xf343,
  },
  {
    name: 'nf-linux-thunderbird',
    code: 0xf370,
  },
  {
    name: 'nf-linux-tor',
    code: 0xf371,
  },
  {
    name: 'nf-linux-trisquel',
    code: 0xf344,
  },
  {
    name: 'nf-linux-tumbleweed',
    code: 0xf37d,
  },
  {
    name: 'nf-linux-tux',
    code: 0xf31a,
  },
  {
    name: 'nf-linux-typst',
    code: 0xf37f,
  },
  {
    name: 'nf-linux-ubuntu',
    code: 0xf31b,
  },
  {
    name: 'nf-linux-ubuntu_inverse',
    code: 0xf31c,
  },
  {
    name: 'nf-linux-vanilla',
    code: 0xf366,
  },
  {
    name: 'nf-linux-void',
    code: 0xf32e,
  },
  {
    name: 'nf-linux-vscodium',
    code: 0xf372,
  },
  {
    name: 'nf-linux-wayland',
    code: 0xf367,
  },
  {
    name: 'nf-linux-wikimedia',
    code: 0xf36d,
  },
  {
    name: 'nf-linux-xerolinux',
    code: 0xf34a,
  },
  {
    name: 'nf-linux-xfce',
    code: 0xf368,
  },
  {
    name: 'nf-linux-xmonad',
    code: 0xf35e,
  },
  {
    name: 'nf-linux-xorg',
    code: 0xf369,
  },
  {
    name: 'nf-linux-zorin',
    code: 0xf32f,
  },
  {
    name: 'nf-md-ab_testing',
    code: 0xf01c9,
  },
  {
    name: 'nf-md-abacus',
    code: 0xf16e0,
  },
  {
    name: 'nf-md-abjad_arabic',
    code: 0xf1328,
  },
  {
    name: 'nf-md-abjad_hebrew',
    code: 0xf1329,
  },
  {
    name: 'nf-md-abugida_devanagari',
    code: 0xf132a,
  },
  {
    name: 'nf-md-abugida_thai',
    code: 0xf132b,
  },
  {
    name: 'nf-md-access_point',
    code: 0xf0003,
  },
  {
    name: 'nf-md-access_point_check',
    code: 0xf1538,
  },
  {
    name: 'nf-md-access_point_minus',
    code: 0xf1539,
  },
  {
    name: 'nf-md-access_point_network',
    code: 0xf0002,
  },
  {
    name: 'nf-md-access_point_network_off',
    code: 0xf0be1,
  },
  {
    name: 'nf-md-access_point_off',
    code: 0xf1511,
  },
  {
    name: 'nf-md-access_point_plus',
    code: 0xf153a,
  },
  {
    name: 'nf-md-access_point_remove',
    code: 0xf153b,
  },
  {
    name: 'nf-md-account',
    code: 0xf0004,
  },
  {
    name: 'nf-md-account_alert',
    code: 0xf0005,
  },
  {
    name: 'nf-md-account_alert_outline',
    code: 0xf0b50,
  },
  {
    name: 'nf-md-account_arrow_down',
    code: 0xf1868,
  },
  {
    name: 'nf-md-account_arrow_down_outline',
    code: 0xf1869,
  },
  {
    name: 'nf-md-account_arrow_left',
    code: 0xf0b51,
  },
  {
    name: 'nf-md-account_arrow_left_outline',
    code: 0xf0b52,
  },
  {
    name: 'nf-md-account_arrow_right',
    code: 0xf0b53,
  },
  {
    name: 'nf-md-account_arrow_right_outline',
    code: 0xf0b54,
  },
  {
    name: 'nf-md-account_arrow_up',
    code: 0xf1867,
  },
  {
    name: 'nf-md-account_arrow_up_outline',
    code: 0xf186a,
  },
  {
    name: 'nf-md-account_box',
    code: 0xf0006,
  },
  {
    name: 'nf-md-account_box_multiple',
    code: 0xf0934,
  },
  {
    name: 'nf-md-account_box_multiple_outline',
    code: 0xf100a,
  },
  {
    name: 'nf-md-account_box_outline',
    code: 0xf0007,
  },
  {
    name: 'nf-md-account_cancel',
    code: 0xf12df,
  },
  {
    name: 'nf-md-account_cancel_outline',
    code: 0xf12e0,
  },
  {
    name: 'nf-md-account_cash',
    code: 0xf1097,
  },
  {
    name: 'nf-md-account_cash_outline',
    code: 0xf1098,
  },
  {
    name: 'nf-md-account_check',
    code: 0xf0008,
  },
  {
    name: 'nf-md-account_check_outline',
    code: 0xf0be2,
  },
  {
    name: 'nf-md-account_child',
    code: 0xf0a89,
  },
  {
    name: 'nf-md-account_child_circle',
    code: 0xf0a8a,
  },
  {
    name: 'nf-md-account_child_outline',
    code: 0xf10c8,
  },
  {
    name: 'nf-md-account_circle',
    code: 0xf0009,
  },
  {
    name: 'nf-md-account_circle_outline',
    code: 0xf0b55,
  },
  {
    name: 'nf-md-account_clock',
    code: 0xf0b56,
  },
  {
    name: 'nf-md-account_clock_outline',
    code: 0xf0b57,
  },
  {
    name: 'nf-md-account_cog',
    code: 0xf1370,
  },
  {
    name: 'nf-md-account_cog_outline',
    code: 0xf1371,
  },
  {
    name: 'nf-md-account_convert',
    code: 0xf000a,
  },
  {
    name: 'nf-md-account_convert_outline',
    code: 0xf1301,
  },
  {
    name: 'nf-md-account_cowboy_hat',
    code: 0xf0e9b,
  },
  {
    name: 'nf-md-account_cowboy_hat_outline',
    code: 0xf17f3,
  },
  {
    name: 'nf-md-account_details',
    code: 0xf0631,
  },
  {
    name: 'nf-md-account_details_outline',
    code: 0xf1372,
  },
  {
    name: 'nf-md-account_edit',
    code: 0xf06bc,
  },
  {
    name: 'nf-md-account_edit_outline',
    code: 0xf0ffb,
  },
  {
    name: 'nf-md-account_eye',
    code: 0xf0420,
  },
  {
    name: 'nf-md-account_eye_outline',
    code: 0xf127b,
  },
  {
    name: 'nf-md-account_filter',
    code: 0xf0936,
  },
  {
    name: 'nf-md-account_filter_outline',
    code: 0xf0f9d,
  },
  {
    name: 'nf-md-account_group',
    code: 0xf0849,
  },
  {
    name: 'nf-md-account_group_outline',
    code: 0xf0b58,
  },
  {
    name: 'nf-md-account_hard_hat',
    code: 0xf05b5,
  },
  {
    name: 'nf-md-account_hard_hat_outline',
    code: 0xf1a1f,
  },
  {
    name: 'nf-md-account_heart',
    code: 0xf0899,
  },
  {
    name: 'nf-md-account_heart_outline',
    code: 0xf0be3,
  },
  {
    name: 'nf-md-account_injury',
    code: 0xf1815,
  },
  {
    name: 'nf-md-account_injury_outline',
    code: 0xf1816,
  },
  {
    name: 'nf-md-account_key',
    code: 0xf000b,
  },
  {
    name: 'nf-md-account_key_outline',
    code: 0xf0be4,
  },
  {
    name: 'nf-md-account_lock',
    code: 0xf115e,
  },
  {
    name: 'nf-md-account_lock_open',
    code: 0xf1960,
  },
  {
    name: 'nf-md-account_lock_open_outline',
    code: 0xf1961,
  },
  {
    name: 'nf-md-account_lock_outline',
    code: 0xf115f,
  },
  {
    name: 'nf-md-account_minus',
    code: 0xf000d,
  },
  {
    name: 'nf-md-account_minus_outline',
    code: 0xf0aec,
  },
  {
    name: 'nf-md-account_multiple',
    code: 0xf000e,
  },
  {
    name: 'nf-md-account_multiple_check',
    code: 0xf08c5,
  },
  {
    name: 'nf-md-account_multiple_check_outline',
    code: 0xf11fe,
  },
  {
    name: 'nf-md-account_multiple_minus',
    code: 0xf05d3,
  },
  {
    name: 'nf-md-account_multiple_minus_outline',
    code: 0xf0be5,
  },
  {
    name: 'nf-md-account_multiple_outline',
    code: 0xf000f,
  },
  {
    name: 'nf-md-account_multiple_plus',
    code: 0xf0010,
  },
  {
    name: 'nf-md-account_multiple_plus_outline',
    code: 0xf0800,
  },
  {
    name: 'nf-md-account_multiple_remove',
    code: 0xf120a,
  },
  {
    name: 'nf-md-account_multiple_remove_outline',
    code: 0xf120b,
  },
  {
    name: 'nf-md-account_music',
    code: 0xf0803,
  },
  {
    name: 'nf-md-account_music_outline',
    code: 0xf0ce9,
  },
  {
    name: 'nf-md-account_network',
    code: 0xf0011,
  },
  {
    name: 'nf-md-account_network_outline',
    code: 0xf0be6,
  },
  {
    name: 'nf-md-account_off',
    code: 0xf0012,
  },
  {
    name: 'nf-md-account_off_outline',
    code: 0xf0be7,
  },
  {
    name: 'nf-md-account_outline',
    code: 0xf0013,
  },
  {
    name: 'nf-md-account_plus',
    code: 0xf0014,
  },
  {
    name: 'nf-md-account_plus_outline',
    code: 0xf0801,
  },
  {
    name: 'nf-md-account_question',
    code: 0xf0b59,
  },
  {
    name: 'nf-md-account_question_outline',
    code: 0xf0b5a,
  },
  {
    name: 'nf-md-account_reactivate',
    code: 0xf152b,
  },
  {
    name: 'nf-md-account_reactivate_outline',
    code: 0xf152c,
  },
  {
    name: 'nf-md-account_remove',
    code: 0xf0015,
  },
  {
    name: 'nf-md-account_remove_outline',
    code: 0xf0aed,
  },
  {
    name: 'nf-md-account_school',
    code: 0xf1a20,
  },
  {
    name: 'nf-md-account_school_outline',
    code: 0xf1a21,
  },
  {
    name: 'nf-md-account_search',
    code: 0xf0016,
  },
  {
    name: 'nf-md-account_search_outline',
    code: 0xf0935,
  },
  {
    name: 'nf-md-account_settings',
    code: 0xf0630,
  },
  {
    name: 'nf-md-account_settings_outline',
    code: 0xf10c9,
  },
  {
    name: 'nf-md-account_star',
    code: 0xf0017,
  },
  {
    name: 'nf-md-account_star_outline',
    code: 0xf0be8,
  },
  {
    name: 'nf-md-account_supervisor',
    code: 0xf0a8b,
  },
  {
    name: 'nf-md-account_supervisor_circle',
    code: 0xf0a8c,
  },
  {
    name: 'nf-md-account_supervisor_circle_outline',
    code: 0xf14ec,
  },
  {
    name: 'nf-md-account_supervisor_outline',
    code: 0xf112d,
  },
  {
    name: 'nf-md-account_switch',
    code: 0xf0019,
  },
  {
    name: 'nf-md-account_switch_outline',
    code: 0xf04cb,
  },
  {
    name: 'nf-md-account_sync',
    code: 0xf191b,
  },
  {
    name: 'nf-md-account_sync_outline',
    code: 0xf191c,
  },
  {
    name: 'nf-md-account_tie',
    code: 0xf0ce3,
  },
  {
    name: 'nf-md-account_tie_hat',
    code: 0xf1898,
  },
  {
    name: 'nf-md-account_tie_hat_outline',
    code: 0xf1899,
  },
  {
    name: 'nf-md-account_tie_outline',
    code: 0xf10ca,
  },
  {
    name: 'nf-md-account_tie_voice',
    code: 0xf1308,
  },
  {
    name: 'nf-md-account_tie_voice_off',
    code: 0xf130a,
  },
  {
    name: 'nf-md-account_tie_voice_off_outline',
    code: 0xf130b,
  },
  {
    name: 'nf-md-account_tie_voice_outline',
    code: 0xf1309,
  },
  {
    name: 'nf-md-account_tie_woman',
    code: 0xf1a8c,
  },
  {
    name: 'nf-md-account_voice',
    code: 0xf05cb,
  },
  {
    name: 'nf-md-account_voice_off',
    code: 0xf0ed4,
  },
  {
    name: 'nf-md-account_wrench',
    code: 0xf189a,
  },
  {
    name: 'nf-md-account_wrench_outline',
    code: 0xf189b,
  },
  {
    name: 'nf-md-adjust',
    code: 0xf001a,
  },
  {
    name: 'nf-md-advertisements',
    code: 0xf192a,
  },
  {
    name: 'nf-md-advertisements_off',
    code: 0xf192b,
  },
  {
    name: 'nf-md-air_conditioner',
    code: 0xf001b,
  },
  {
    name: 'nf-md-air_filter',
    code: 0xf0d43,
  },
  {
    name: 'nf-md-air_horn',
    code: 0xf0dac,
  },
  {
    name: 'nf-md-air_humidifier',
    code: 0xf1099,
  },
  {
    name: 'nf-md-air_humidifier_off',
    code: 0xf1466,
  },
  {
    name: 'nf-md-air_purifier',
    code: 0xf0d44,
  },
  {
    name: 'nf-md-airbag',
    code: 0xf0be9,
  },
  {
    name: 'nf-md-airballoon',
    code: 0xf001c,
  },
  {
    name: 'nf-md-airballoon_outline',
    code: 0xf100b,
  },
  {
    name: 'nf-md-airplane',
    code: 0xf001d,
  },
  {
    name: 'nf-md-airplane_alert',
    code: 0xf187a,
  },
  {
    name: 'nf-md-airplane_check',
    code: 0xf187b,
  },
  {
    name: 'nf-md-airplane_clock',
    code: 0xf187c,
  },
  {
    name: 'nf-md-airplane_cog',
    code: 0xf187d,
  },
  {
    name: 'nf-md-airplane_edit',
    code: 0xf187e,
  },
  {
    name: 'nf-md-airplane_landing',
    code: 0xf05d4,
  },
  {
    name: 'nf-md-airplane_marker',
    code: 0xf187f,
  },
  {
    name: 'nf-md-airplane_minus',
    code: 0xf1880,
  },
  {
    name: 'nf-md-airplane_off',
    code: 0xf001e,
  },
  {
    name: 'nf-md-airplane_plus',
    code: 0xf1881,
  },
  {
    name: 'nf-md-airplane_remove',
    code: 0xf1882,
  },
  {
    name: 'nf-md-airplane_search',
    code: 0xf1883,
  },
  {
    name: 'nf-md-airplane_settings',
    code: 0xf1884,
  },
  {
    name: 'nf-md-airplane_takeoff',
    code: 0xf05d5,
  },
  {
    name: 'nf-md-airport',
    code: 0xf084b,
  },
  {
    name: 'nf-md-alarm',
    code: 0xf0020,
  },
  {
    name: 'nf-md-alarm_bell',
    code: 0xf078e,
  },
  {
    name: 'nf-md-alarm_check',
    code: 0xf0021,
  },
  {
    name: 'nf-md-alarm_light',
    code: 0xf078f,
  },
  {
    name: 'nf-md-alarm_light_off',
    code: 0xf171e,
  },
  {
    name: 'nf-md-alarm_light_off_outline',
    code: 0xf171f,
  },
  {
    name: 'nf-md-alarm_light_outline',
    code: 0xf0bea,
  },
  {
    name: 'nf-md-alarm_multiple',
    code: 0xf0022,
  },
  {
    name: 'nf-md-alarm_note',
    code: 0xf0e71,
  },
  {
    name: 'nf-md-alarm_note_off',
    code: 0xf0e72,
  },
  {
    name: 'nf-md-alarm_off',
    code: 0xf0023,
  },
  {
    name: 'nf-md-alarm_panel',
    code: 0xf15c4,
  },
  {
    name: 'nf-md-alarm_panel_outline',
    code: 0xf15c5,
  },
  {
    name: 'nf-md-alarm_plus',
    code: 0xf0024,
  },
  {
    name: 'nf-md-alarm_snooze',
    code: 0xf068e,
  },
  {
    name: 'nf-md-album',
    code: 0xf0025,
  },
  {
    name: 'nf-md-alert',
    code: 0xf0026,
  },
  {
    name: 'nf-md-alert_box',
    code: 0xf0027,
  },
  {
    name: 'nf-md-alert_box_outline',
    code: 0xf0ce4,
  },
  {
    name: 'nf-md-alert_circle',
    code: 0xf0028,
  },
  {
    name: 'nf-md-alert_circle_check',
    code: 0xf11ed,
  },
  {
    name: 'nf-md-alert_circle_check_outline',
    code: 0xf11ee,
  },
  {
    name: 'nf-md-alert_circle_outline',
    code: 0xf05d6,
  },
  {
    name: 'nf-md-alert_decagram',
    code: 0xf06bd,
  },
  {
    name: 'nf-md-alert_decagram_outline',
    code: 0xf0ce5,
  },
  {
    name: 'nf-md-alert_minus',
    code: 0xf14bb,
  },
  {
    name: 'nf-md-alert_minus_outline',
    code: 0xf14be,
  },
  {
    name: 'nf-md-alert_octagon',
    code: 0xf0029,
  },
  {
    name: 'nf-md-alert_octagon_outline',
    code: 0xf0ce6,
  },
  {
    name: 'nf-md-alert_octagram',
    code: 0xf0767,
  },
  {
    name: 'nf-md-alert_octagram_outline',
    code: 0xf0ce7,
  },
  {
    name: 'nf-md-alert_outline',
    code: 0xf002a,
  },
  {
    name: 'nf-md-alert_plus',
    code: 0xf14ba,
  },
  {
    name: 'nf-md-alert_plus_outline',
    code: 0xf14bd,
  },
  {
    name: 'nf-md-alert_remove',
    code: 0xf14bc,
  },
  {
    name: 'nf-md-alert_remove_outline',
    code: 0xf14bf,
  },
  {
    name: 'nf-md-alert_rhombus',
    code: 0xf11ce,
  },
  {
    name: 'nf-md-alert_rhombus_outline',
    code: 0xf11cf,
  },
  {
    name: 'nf-md-alien',
    code: 0xf089a,
  },
  {
    name: 'nf-md-alien_outline',
    code: 0xf10cb,
  },
  {
    name: 'nf-md-align_horizontal_center',
    code: 0xf11c3,
  },
  {
    name: 'nf-md-align_horizontal_distribute',
    code: 0xf1962,
  },
  {
    name: 'nf-md-align_horizontal_left',
    code: 0xf11c2,
  },
  {
    name: 'nf-md-align_horizontal_right',
    code: 0xf11c4,
  },
  {
    name: 'nf-md-align_vertical_bottom',
    code: 0xf11c5,
  },
  {
    name: 'nf-md-align_vertical_center',
    code: 0xf11c6,
  },
  {
    name: 'nf-md-align_vertical_distribute',
    code: 0xf1963,
  },
  {
    name: 'nf-md-align_vertical_top',
    code: 0xf11c7,
  },
  {
    name: 'nf-md-all_inclusive',
    code: 0xf06be,
  },
  {
    name: 'nf-md-all_inclusive_box',
    code: 0xf188d,
  },
  {
    name: 'nf-md-all_inclusive_box_outline',
    code: 0xf188e,
  },
  {
    name: 'nf-md-allergy',
    code: 0xf1258,
  },
  {
    name: 'nf-md-alpha',
    code: 0xf002b,
  },
  {
    name: 'nf-md-alpha_a',
    code: 0xf0aee,
  },
  {
    name: 'nf-md-alpha_a_box',
    code: 0xf0b08,
  },
  {
    name: 'nf-md-alpha_a_box_outline',
    code: 0xf0beb,
  },
  {
    name: 'nf-md-alpha_a_circle',
    code: 0xf0bec,
  },
  {
    name: 'nf-md-alpha_a_circle_outline',
    code: 0xf0bed,
  },
  {
    name: 'nf-md-alpha_b',
    code: 0xf0aef,
  },
  {
    name: 'nf-md-alpha_b_box',
    code: 0xf0b09,
  },
  {
    name: 'nf-md-alpha_b_box_outline',
    code: 0xf0bee,
  },
  {
    name: 'nf-md-alpha_b_circle',
    code: 0xf0bef,
  },
  {
    name: 'nf-md-alpha_b_circle_outline',
    code: 0xf0bf0,
  },
  {
    name: 'nf-md-alpha_c',
    code: 0xf0af0,
  },
  {
    name: 'nf-md-alpha_c_box',
    code: 0xf0b0a,
  },
  {
    name: 'nf-md-alpha_c_box_outline',
    code: 0xf0bf1,
  },
  {
    name: 'nf-md-alpha_c_circle',
    code: 0xf0bf2,
  },
  {
    name: 'nf-md-alpha_c_circle_outline',
    code: 0xf0bf3,
  },
  {
    name: 'nf-md-alpha_d',
    code: 0xf0af1,
  },
  {
    name: 'nf-md-alpha_d_box',
    code: 0xf0b0b,
  },
  {
    name: 'nf-md-alpha_d_box_outline',
    code: 0xf0bf4,
  },
  {
    name: 'nf-md-alpha_d_circle',
    code: 0xf0bf5,
  },
  {
    name: 'nf-md-alpha_d_circle_outline',
    code: 0xf0bf6,
  },
  {
    name: 'nf-md-alpha_e',
    code: 0xf0af2,
  },
  {
    name: 'nf-md-alpha_e_box',
    code: 0xf0b0c,
  },
  {
    name: 'nf-md-alpha_e_box_outline',
    code: 0xf0bf7,
  },
  {
    name: 'nf-md-alpha_e_circle',
    code: 0xf0bf8,
  },
  {
    name: 'nf-md-alpha_e_circle_outline',
    code: 0xf0bf9,
  },
  {
    name: 'nf-md-alpha_f',
    code: 0xf0af3,
  },
  {
    name: 'nf-md-alpha_f_box',
    code: 0xf0b0d,
  },
  {
    name: 'nf-md-alpha_f_box_outline',
    code: 0xf0bfa,
  },
  {
    name: 'nf-md-alpha_f_circle',
    code: 0xf0bfb,
  },
  {
    name: 'nf-md-alpha_f_circle_outline',
    code: 0xf0bfc,
  },
  {
    name: 'nf-md-alpha_g',
    code: 0xf0af4,
  },
  {
    name: 'nf-md-alpha_g_box',
    code: 0xf0b0e,
  },
  {
    name: 'nf-md-alpha_g_box_outline',
    code: 0xf0bfd,
  },
  {
    name: 'nf-md-alpha_g_circle',
    code: 0xf0bfe,
  },
  {
    name: 'nf-md-alpha_g_circle_outline',
    code: 0xf0bff,
  },
  {
    name: 'nf-md-alpha_h',
    code: 0xf0af5,
  },
  {
    name: 'nf-md-alpha_h_box',
    code: 0xf0b0f,
  },
  {
    name: 'nf-md-alpha_h_box_outline',
    code: 0xf0c00,
  },
  {
    name: 'nf-md-alpha_h_circle',
    code: 0xf0c01,
  },
  {
    name: 'nf-md-alpha_h_circle_outline',
    code: 0xf0c02,
  },
  {
    name: 'nf-md-alpha_i',
    code: 0xf0af6,
  },
  {
    name: 'nf-md-alpha_i_box',
    code: 0xf0b10,
  },
  {
    name: 'nf-md-alpha_i_box_outline',
    code: 0xf0c03,
  },
  {
    name: 'nf-md-alpha_i_circle',
    code: 0xf0c04,
  },
  {
    name: 'nf-md-alpha_i_circle_outline',
    code: 0xf0c05,
  },
  {
    name: 'nf-md-alpha_j',
    code: 0xf0af7,
  },
  {
    name: 'nf-md-alpha_j_box',
    code: 0xf0b11,
  },
  {
    name: 'nf-md-alpha_j_box_outline',
    code: 0xf0c06,
  },
  {
    name: 'nf-md-alpha_j_circle',
    code: 0xf0c07,
  },
  {
    name: 'nf-md-alpha_j_circle_outline',
    code: 0xf0c08,
  },
  {
    name: 'nf-md-alpha_k',
    code: 0xf0af8,
  },
  {
    name: 'nf-md-alpha_k_box',
    code: 0xf0b12,
  },
  {
    name: 'nf-md-alpha_k_box_outline',
    code: 0xf0c09,
  },
  {
    name: 'nf-md-alpha_k_circle',
    code: 0xf0c0a,
  },
  {
    name: 'nf-md-alpha_k_circle_outline',
    code: 0xf0c0b,
  },
  {
    name: 'nf-md-alpha_l',
    code: 0xf0af9,
  },
  {
    name: 'nf-md-alpha_l_box',
    code: 0xf0b13,
  },
  {
    name: 'nf-md-alpha_l_box_outline',
    code: 0xf0c0c,
  },
  {
    name: 'nf-md-alpha_l_circle',
    code: 0xf0c0d,
  },
  {
    name: 'nf-md-alpha_l_circle_outline',
    code: 0xf0c0e,
  },
  {
    name: 'nf-md-alpha_m',
    code: 0xf0afa,
  },
  {
    name: 'nf-md-alpha_m_box',
    code: 0xf0b14,
  },
  {
    name: 'nf-md-alpha_m_box_outline',
    code: 0xf0c0f,
  },
  {
    name: 'nf-md-alpha_m_circle',
    code: 0xf0c10,
  },
  {
    name: 'nf-md-alpha_m_circle_outline',
    code: 0xf0c11,
  },
  {
    name: 'nf-md-alpha_n',
    code: 0xf0afb,
  },
  {
    name: 'nf-md-alpha_n_box',
    code: 0xf0b15,
  },
  {
    name: 'nf-md-alpha_n_box_outline',
    code: 0xf0c12,
  },
  {
    name: 'nf-md-alpha_n_circle',
    code: 0xf0c13,
  },
  {
    name: 'nf-md-alpha_n_circle_outline',
    code: 0xf0c14,
  },
  {
    name: 'nf-md-alpha_o',
    code: 0xf0afc,
  },
  {
    name: 'nf-md-alpha_o_box',
    code: 0xf0b16,
  },
  {
    name: 'nf-md-alpha_o_box_outline',
    code: 0xf0c15,
  },
  {
    name: 'nf-md-alpha_o_circle',
    code: 0xf0c16,
  },
  {
    name: 'nf-md-alpha_o_circle_outline',
    code: 0xf0c17,
  },
  {
    name: 'nf-md-alpha_p',
    code: 0xf0afd,
  },
  {
    name: 'nf-md-alpha_p_box',
    code: 0xf0b17,
  },
  {
    name: 'nf-md-alpha_p_box_outline',
    code: 0xf0c18,
  },
  {
    name: 'nf-md-alpha_p_circle',
    code: 0xf0c19,
  },
  {
    name: 'nf-md-alpha_p_circle_outline',
    code: 0xf0c1a,
  },
  {
    name: 'nf-md-alpha_q',
    code: 0xf0afe,
  },
  {
    name: 'nf-md-alpha_q_box',
    code: 0xf0b18,
  },
  {
    name: 'nf-md-alpha_q_box_outline',
    code: 0xf0c1b,
  },
  {
    name: 'nf-md-alpha_q_circle',
    code: 0xf0c1c,
  },
  {
    name: 'nf-md-alpha_q_circle_outline',
    code: 0xf0c1d,
  },
  {
    name: 'nf-md-alpha_r',
    code: 0xf0aff,
  },
  {
    name: 'nf-md-alpha_r_box',
    code: 0xf0b19,
  },
  {
    name: 'nf-md-alpha_r_box_outline',
    code: 0xf0c1e,
  },
  {
    name: 'nf-md-alpha_r_circle',
    code: 0xf0c1f,
  },
  {
    name: 'nf-md-alpha_r_circle_outline',
    code: 0xf0c20,
  },
  {
    name: 'nf-md-alpha_s',
    code: 0xf0b00,
  },
  {
    name: 'nf-md-alpha_s_box',
    code: 0xf0b1a,
  },
  {
    name: 'nf-md-alpha_s_box_outline',
    code: 0xf0c21,
  },
  {
    name: 'nf-md-alpha_s_circle',
    code: 0xf0c22,
  },
  {
    name: 'nf-md-alpha_s_circle_outline',
    code: 0xf0c23,
  },
  {
    name: 'nf-md-alpha_t',
    code: 0xf0b01,
  },
  {
    name: 'nf-md-alpha_t_box',
    code: 0xf0b1b,
  },
  {
    name: 'nf-md-alpha_t_box_outline',
    code: 0xf0c24,
  },
  {
    name: 'nf-md-alpha_t_circle',
    code: 0xf0c25,
  },
  {
    name: 'nf-md-alpha_t_circle_outline',
    code: 0xf0c26,
  },
  {
    name: 'nf-md-alpha_u',
    code: 0xf0b02,
  },
  {
    name: 'nf-md-alpha_u_box',
    code: 0xf0b1c,
  },
  {
    name: 'nf-md-alpha_u_box_outline',
    code: 0xf0c27,
  },
  {
    name: 'nf-md-alpha_u_circle',
    code: 0xf0c28,
  },
  {
    name: 'nf-md-alpha_u_circle_outline',
    code: 0xf0c29,
  },
  {
    name: 'nf-md-alpha_v',
    code: 0xf0b03,
  },
  {
    name: 'nf-md-alpha_v_box',
    code: 0xf0b1d,
  },
  {
    name: 'nf-md-alpha_v_box_outline',
    code: 0xf0c2a,
  },
  {
    name: 'nf-md-alpha_v_circle',
    code: 0xf0c2b,
  },
  {
    name: 'nf-md-alpha_v_circle_outline',
    code: 0xf0c2c,
  },
  {
    name: 'nf-md-alpha_w',
    code: 0xf0b04,
  },
  {
    name: 'nf-md-alpha_w_box',
    code: 0xf0b1e,
  },
  {
    name: 'nf-md-alpha_w_box_outline',
    code: 0xf0c2d,
  },
  {
    name: 'nf-md-alpha_w_circle',
    code: 0xf0c2e,
  },
  {
    name: 'nf-md-alpha_w_circle_outline',
    code: 0xf0c2f,
  },
  {
    name: 'nf-md-alpha_x',
    code: 0xf0b05,
  },
  {
    name: 'nf-md-alpha_x_box',
    code: 0xf0b1f,
  },
  {
    name: 'nf-md-alpha_x_box_outline',
    code: 0xf0c30,
  },
  {
    name: 'nf-md-alpha_x_circle',
    code: 0xf0c31,
  },
  {
    name: 'nf-md-alpha_x_circle_outline',
    code: 0xf0c32,
  },
  {
    name: 'nf-md-alpha_y',
    code: 0xf0b06,
  },
  {
    name: 'nf-md-alpha_y_box',
    code: 0xf0b20,
  },
  {
    name: 'nf-md-alpha_y_box_outline',
    code: 0xf0c33,
  },
  {
    name: 'nf-md-alpha_y_circle',
    code: 0xf0c34,
  },
  {
    name: 'nf-md-alpha_y_circle_outline',
    code: 0xf0c35,
  },
  {
    name: 'nf-md-alpha_z',
    code: 0xf0b07,
  },
  {
    name: 'nf-md-alpha_z_box',
    code: 0xf0b21,
  },
  {
    name: 'nf-md-alpha_z_box_outline',
    code: 0xf0c36,
  },
  {
    name: 'nf-md-alpha_z_circle',
    code: 0xf0c37,
  },
  {
    name: 'nf-md-alpha_z_circle_outline',
    code: 0xf0c38,
  },
  {
    name: 'nf-md-alphabet_aurebesh',
    code: 0xf132c,
  },
  {
    name: 'nf-md-alphabet_cyrillic',
    code: 0xf132d,
  },
  {
    name: 'nf-md-alphabet_greek',
    code: 0xf132e,
  },
  {
    name: 'nf-md-alphabet_latin',
    code: 0xf132f,
  },
  {
    name: 'nf-md-alphabet_piqad',
    code: 0xf1330,
  },
  {
    name: 'nf-md-alphabet_tengwar',
    code: 0xf1337,
  },
  {
    name: 'nf-md-alphabetical',
    code: 0xf002c,
  },
  {
    name: 'nf-md-alphabetical_off',
    code: 0xf100c,
  },
  {
    name: 'nf-md-alphabetical_variant',
    code: 0xf100d,
  },
  {
    name: 'nf-md-alphabetical_variant_off',
    code: 0xf100e,
  },
  {
    name: 'nf-md-altimeter',
    code: 0xf05d7,
  },
  {
    name: 'nf-md-ambulance',
    code: 0xf002f,
  },
  {
    name: 'nf-md-ammunition',
    code: 0xf0ce8,
  },
  {
    name: 'nf-md-ampersand',
    code: 0xf0a8d,
  },
  {
    name: 'nf-md-amplifier',
    code: 0xf0030,
  },
  {
    name: 'nf-md-amplifier_off',
    code: 0xf11b5,
  },
  {
    name: 'nf-md-anchor',
    code: 0xf0031,
  },
  {
    name: 'nf-md-android',
    code: 0xf0032,
  },
  {
    name: 'nf-md-android_messages',
    code: 0xf0d45,
  },
  {
    name: 'nf-md-android_studio',
    code: 0xf0034,
  },
  {
    name: 'nf-md-angle_acute',
    code: 0xf0937,
  },
  {
    name: 'nf-md-angle_obtuse',
    code: 0xf0938,
  },
  {
    name: 'nf-md-angle_right',
    code: 0xf0939,
  },
  {
    name: 'nf-md-angular',
    code: 0xf06b2,
  },
  {
    name: 'nf-md-angularjs',
    code: 0xf06bf,
  },
  {
    name: 'nf-md-animation',
    code: 0xf05d8,
  },
  {
    name: 'nf-md-animation_outline',
    code: 0xf0a8f,
  },
  {
    name: 'nf-md-animation_play',
    code: 0xf093a,
  },
  {
    name: 'nf-md-animation_play_outline',
    code: 0xf0a90,
  },
  {
    name: 'nf-md-ansible',
    code: 0xf109a,
  },
  {
    name: 'nf-md-antenna',
    code: 0xf1119,
  },
  {
    name: 'nf-md-anvil',
    code: 0xf089b,
  },
  {
    name: 'nf-md-apache_kafka',
    code: 0xf100f,
  },
  {
    name: 'nf-md-api',
    code: 0xf109b,
  },
  {
    name: 'nf-md-api_off',
    code: 0xf1257,
  },
  {
    name: 'nf-md-apple',
    code: 0xf0035,
  },
  {
    name: 'nf-md-apple_finder',
    code: 0xf0036,
  },
  {
    name: 'nf-md-apple_icloud',
    code: 0xf0038,
  },
  {
    name: 'nf-md-apple_ios',
    code: 0xf0037,
  },
  {
    name: 'nf-md-apple_keyboard_caps',
    code: 0xf0632,
  },
  {
    name: 'nf-md-apple_keyboard_command',
    code: 0xf0633,
  },
  {
    name: 'nf-md-apple_keyboard_control',
    code: 0xf0634,
  },
  {
    name: 'nf-md-apple_keyboard_option',
    code: 0xf0635,
  },
  {
    name: 'nf-md-apple_keyboard_shift',
    code: 0xf0636,
  },
  {
    name: 'nf-md-apple_safari',
    code: 0xf0039,
  },
  {
    name: 'nf-md-application',
    code: 0xf08c6,
  },
  {
    name: 'nf-md-application_array',
    code: 0xf10f5,
  },
  {
    name: 'nf-md-application_array_outline',
    code: 0xf10f6,
  },
  {
    name: 'nf-md-application_braces',
    code: 0xf10f7,
  },
  {
    name: 'nf-md-application_braces_outline',
    code: 0xf10f8,
  },
  {
    name: 'nf-md-application_brackets',
    code: 0xf0c8b,
  },
  {
    name: 'nf-md-application_brackets_outline',
    code: 0xf0c8c,
  },
  {
    name: 'nf-md-application_cog',
    code: 0xf0675,
  },
  {
    name: 'nf-md-application_cog_outline',
    code: 0xf1577,
  },
  {
    name: 'nf-md-application_edit',
    code: 0xf00ae,
  },
  {
    name: 'nf-md-application_edit_outline',
    code: 0xf0619,
  },
  {
    name: 'nf-md-application_export',
    code: 0xf0dad,
  },
  {
    name: 'nf-md-application_import',
    code: 0xf0dae,
  },
  {
    name: 'nf-md-application_outline',
    code: 0xf0614,
  },
  {
    name: 'nf-md-application_parentheses',
    code: 0xf10f9,
  },
  {
    name: 'nf-md-application_parentheses_outline',
    code: 0xf10fa,
  },
  {
    name: 'nf-md-application_settings',
    code: 0xf0b60,
  },
  {
    name: 'nf-md-application_settings_outline',
    code: 0xf1555,
  },
  {
    name: 'nf-md-application_variable',
    code: 0xf10fb,
  },
  {
    name: 'nf-md-application_variable_outline',
    code: 0xf10fc,
  },
  {
    name: 'nf-md-approximately_equal',
    code: 0xf0f9e,
  },
  {
    name: 'nf-md-approximately_equal_box',
    code: 0xf0f9f,
  },
  {
    name: 'nf-md-apps',
    code: 0xf003b,
  },
  {
    name: 'nf-md-apps_box',
    code: 0xf0d46,
  },
  {
    name: 'nf-md-arch',
    code: 0xf08c7,
  },
  {
    name: 'nf-md-archive',
    code: 0xf003c,
  },
  {
    name: 'nf-md-archive_alert',
    code: 0xf14fd,
  },
  {
    name: 'nf-md-archive_alert_outline',
    code: 0xf14fe,
  },
  {
    name: 'nf-md-archive_arrow_down',
    code: 0xf1259,
  },
  {
    name: 'nf-md-archive_arrow_down_outline',
    code: 0xf125a,
  },
  {
    name: 'nf-md-archive_arrow_up',
    code: 0xf125b,
  },
  {
    name: 'nf-md-archive_arrow_up_outline',
    code: 0xf125c,
  },
  {
    name: 'nf-md-archive_cancel',
    code: 0xf174b,
  },
  {
    name: 'nf-md-archive_cancel_outline',
    code: 0xf174c,
  },
  {
    name: 'nf-md-archive_check',
    code: 0xf174d,
  },
  {
    name: 'nf-md-archive_check_outline',
    code: 0xf174e,
  },
  {
    name: 'nf-md-archive_clock',
    code: 0xf174f,
  },
  {
    name: 'nf-md-archive_clock_outline',
    code: 0xf1750,
  },
  {
    name: 'nf-md-archive_cog',
    code: 0xf1751,
  },
  {
    name: 'nf-md-archive_cog_outline',
    code: 0xf1752,
  },
  {
    name: 'nf-md-archive_edit',
    code: 0xf1753,
  },
  {
    name: 'nf-md-archive_edit_outline',
    code: 0xf1754,
  },
  {
    name: 'nf-md-archive_eye',
    code: 0xf1755,
  },
  {
    name: 'nf-md-archive_eye_outline',
    code: 0xf1756,
  },
  {
    name: 'nf-md-archive_lock',
    code: 0xf1757,
  },
  {
    name: 'nf-md-archive_lock_open',
    code: 0xf1758,
  },
  {
    name: 'nf-md-archive_lock_open_outline',
    code: 0xf1759,
  },
  {
    name: 'nf-md-archive_lock_outline',
    code: 0xf175a,
  },
  {
    name: 'nf-md-archive_marker',
    code: 0xf175b,
  },
  {
    name: 'nf-md-archive_marker_outline',
    code: 0xf175c,
  },
  {
    name: 'nf-md-archive_minus',
    code: 0xf175d,
  },
  {
    name: 'nf-md-archive_minus_outline',
    code: 0xf175e,
  },
  {
    name: 'nf-md-archive_music',
    code: 0xf175f,
  },
  {
    name: 'nf-md-archive_music_outline',
    code: 0xf1760,
  },
  {
    name: 'nf-md-archive_off',
    code: 0xf1761,
  },
  {
    name: 'nf-md-archive_off_outline',
    code: 0xf1762,
  },
  {
    name: 'nf-md-archive_outline',
    code: 0xf120e,
  },
  {
    name: 'nf-md-archive_plus',
    code: 0xf1763,
  },
  {
    name: 'nf-md-archive_plus_outline',
    code: 0xf1764,
  },
  {
    name: 'nf-md-archive_refresh',
    code: 0xf1765,
  },
  {
    name: 'nf-md-archive_refresh_outline',
    code: 0xf1766,
  },
  {
    name: 'nf-md-archive_remove',
    code: 0xf1767,
  },
  {
    name: 'nf-md-archive_remove_outline',
    code: 0xf1768,
  },
  {
    name: 'nf-md-archive_search',
    code: 0xf1769,
  },
  {
    name: 'nf-md-archive_search_outline',
    code: 0xf176a,
  },
  {
    name: 'nf-md-archive_settings',
    code: 0xf176b,
  },
  {
    name: 'nf-md-archive_settings_outline',
    code: 0xf176c,
  },
  {
    name: 'nf-md-archive_star',
    code: 0xf176d,
  },
  {
    name: 'nf-md-archive_star_outline',
    code: 0xf176e,
  },
  {
    name: 'nf-md-archive_sync',
    code: 0xf176f,
  },
  {
    name: 'nf-md-archive_sync_outline',
    code: 0xf1770,
  },
  {
    name: 'nf-md-arm_flex',
    code: 0xf0fd7,
  },
  {
    name: 'nf-md-arm_flex_outline',
    code: 0xf0fd6,
  },
  {
    name: 'nf-md-arrange_bring_forward',
    code: 0xf003d,
  },
  {
    name: 'nf-md-arrange_bring_to_front',
    code: 0xf003e,
  },
  {
    name: 'nf-md-arrange_send_backward',
    code: 0xf003f,
  },
  {
    name: 'nf-md-arrange_send_to_back',
    code: 0xf0040,
  },
  {
    name: 'nf-md-arrow_all',
    code: 0xf0041,
  },
  {
    name: 'nf-md-arrow_bottom_left',
    code: 0xf0042,
  },
  {
    name: 'nf-md-arrow_bottom_left_bold_box',
    code: 0xf1964,
  },
  {
    name: 'nf-md-arrow_bottom_left_bold_box_outline',
    code: 0xf1965,
  },
  {
    name: 'nf-md-arrow_bottom_left_bold_outline',
    code: 0xf09b7,
  },
  {
    name: 'nf-md-arrow_bottom_left_thick',
    code: 0xf09b8,
  },
  {
    name: 'nf-md-arrow_bottom_left_thin',
    code: 0xf19b6,
  },
  {
    name: 'nf-md-arrow_bottom_left_thin_circle_outline',
    code: 0xf1596,
  },
  {
    name: 'nf-md-arrow_bottom_right',
    code: 0xf0043,
  },
  {
    name: 'nf-md-arrow_bottom_right_bold_box',
    code: 0xf1966,
  },
  {
    name: 'nf-md-arrow_bottom_right_bold_box_outline',
    code: 0xf1967,
  },
  {
    name: 'nf-md-arrow_bottom_right_bold_outline',
    code: 0xf09b9,
  },
  {
    name: 'nf-md-arrow_bottom_right_thick',
    code: 0xf09ba,
  },
  {
    name: 'nf-md-arrow_bottom_right_thin',
    code: 0xf19b7,
  },
  {
    name: 'nf-md-arrow_bottom_right_thin_circle_outline',
    code: 0xf1595,
  },
  {
    name: 'nf-md-arrow_collapse',
    code: 0xf0615,
  },
  {
    name: 'nf-md-arrow_collapse_all',
    code: 0xf0044,
  },
  {
    name: 'nf-md-arrow_collapse_down',
    code: 0xf0792,
  },
  {
    name: 'nf-md-arrow_collapse_horizontal',
    code: 0xf084c,
  },
  {
    name: 'nf-md-arrow_collapse_left',
    code: 0xf0793,
  },
  {
    name: 'nf-md-arrow_collapse_right',
    code: 0xf0794,
  },
  {
    name: 'nf-md-arrow_collapse_up',
    code: 0xf0795,
  },
  {
    name: 'nf-md-arrow_collapse_vertical',
    code: 0xf084d,
  },
  {
    name: 'nf-md-arrow_decision',
    code: 0xf09bb,
  },
  {
    name: 'nf-md-arrow_decision_auto',
    code: 0xf09bc,
  },
  {
    name: 'nf-md-arrow_decision_auto_outline',
    code: 0xf09bd,
  },
  {
    name: 'nf-md-arrow_decision_outline',
    code: 0xf09be,
  },
  {
    name: 'nf-md-arrow_down',
    code: 0xf0045,
  },
  {
    name: 'nf-md-arrow_down_bold',
    code: 0xf072e,
  },
  {
    name: 'nf-md-arrow_down_bold_box',
    code: 0xf072f,
  },
  {
    name: 'nf-md-arrow_down_bold_box_outline',
    code: 0xf0730,
  },
  {
    name: 'nf-md-arrow_down_bold_circle',
    code: 0xf0047,
  },
  {
    name: 'nf-md-arrow_down_bold_circle_outline',
    code: 0xf0048,
  },
  {
    name: 'nf-md-arrow_down_bold_hexagon_outline',
    code: 0xf0049,
  },
  {
    name: 'nf-md-arrow_down_bold_outline',
    code: 0xf09bf,
  },
  {
    name: 'nf-md-arrow_down_box',
    code: 0xf06c0,
  },
  {
    name: 'nf-md-arrow_down_circle',
    code: 0xf0cdb,
  },
  {
    name: 'nf-md-arrow_down_circle_outline',
    code: 0xf0cdc,
  },
  {
    name: 'nf-md-arrow_down_drop_circle',
    code: 0xf004a,
  },
  {
    name: 'nf-md-arrow_down_drop_circle_outline',
    code: 0xf004b,
  },
  {
    name: 'nf-md-arrow_down_left',
    code: 0xf17a1,
  },
  {
    name: 'nf-md-arrow_down_left_bold',
    code: 0xf17a2,
  },
  {
    name: 'nf-md-arrow_down_right',
    code: 0xf17a3,
  },
  {
    name: 'nf-md-arrow_down_right_bold',
    code: 0xf17a4,
  },
  {
    name: 'nf-md-arrow_down_thick',
    code: 0xf0046,
  },
  {
    name: 'nf-md-arrow_down_thin',
    code: 0xf19b3,
  },
  {
    name: 'nf-md-arrow_down_thin_circle_outline',
    code: 0xf1599,
  },
  {
    name: 'nf-md-arrow_expand',
    code: 0xf0616,
  },
  {
    name: 'nf-md-arrow_expand_all',
    code: 0xf004c,
  },
  {
    name: 'nf-md-arrow_expand_down',
    code: 0xf0796,
  },
  {
    name: 'nf-md-arrow_expand_horizontal',
    code: 0xf084e,
  },
  {
    name: 'nf-md-arrow_expand_left',
    code: 0xf0797,
  },
  {
    name: 'nf-md-arrow_expand_right',
    code: 0xf0798,
  },
  {
    name: 'nf-md-arrow_expand_up',
    code: 0xf0799,
  },
  {
    name: 'nf-md-arrow_expand_vertical',
    code: 0xf084f,
  },
  {
    name: 'nf-md-arrow_horizontal_lock',
    code: 0xf115b,
  },
  {
    name: 'nf-md-arrow_left',
    code: 0xf004d,
  },
  {
    name: 'nf-md-arrow_left_bold',
    code: 0xf0731,
  },
  {
    name: 'nf-md-arrow_left_bold_box',
    code: 0xf0732,
  },
  {
    name: 'nf-md-arrow_left_bold_box_outline',
    code: 0xf0733,
  },
  {
    name: 'nf-md-arrow_left_bold_circle',
    code: 0xf004f,
  },
  {
    name: 'nf-md-arrow_left_bold_circle_outline',
    code: 0xf0050,
  },
  {
    name: 'nf-md-arrow_left_bold_hexagon_outline',
    code: 0xf0051,
  },
  {
    name: 'nf-md-arrow_left_bold_outline',
    code: 0xf09c0,
  },
  {
    name: 'nf-md-arrow_left_bottom',
    code: 0xf17a5,
  },
  {
    name: 'nf-md-arrow_left_bottom_bold',
    code: 0xf17a6,
  },
  {
    name: 'nf-md-arrow_left_box',
    code: 0xf06c1,
  },
  {
    name: 'nf-md-arrow_left_circle',
    code: 0xf0cdd,
  },
  {
    name: 'nf-md-arrow_left_circle_outline',
    code: 0xf0cde,
  },
  {
    name: 'nf-md-arrow_left_drop_circle',
    code: 0xf0052,
  },
  {
    name: 'nf-md-arrow_left_drop_circle_outline',
    code: 0xf0053,
  },
  {
    name: 'nf-md-arrow_left_right',
    code: 0xf0e73,
  },
  {
    name: 'nf-md-arrow_left_right_bold',
    code: 0xf0e74,
  },
  {
    name: 'nf-md-arrow_left_right_bold_outline',
    code: 0xf09c1,
  },
  {
    name: 'nf-md-arrow_left_thick',
    code: 0xf004e,
  },
  {
    name: 'nf-md-arrow_left_thin',
    code: 0xf19b1,
  },
  {
    name: 'nf-md-arrow_left_thin_circle_outline',
    code: 0xf159a,
  },
  {
    name: 'nf-md-arrow_left_top',
    code: 0xf17a7,
  },
  {
    name: 'nf-md-arrow_left_top_bold',
    code: 0xf17a8,
  },
  {
    name: 'nf-md-arrow_projectile',
    code: 0xf1840,
  },
  {
    name: 'nf-md-arrow_projectile_multiple',
    code: 0xf183f,
  },
  {
    name: 'nf-md-arrow_right',
    code: 0xf0054,
  },
  {
    name: 'nf-md-arrow_right_bold',
    code: 0xf0734,
  },
  {
    name: 'nf-md-arrow_right_bold_box',
    code: 0xf0735,
  },
  {
    name: 'nf-md-arrow_right_bold_box_outline',
    code: 0xf0736,
  },
  {
    name: 'nf-md-arrow_right_bold_circle',
    code: 0xf0056,
  },
  {
    name: 'nf-md-arrow_right_bold_circle_outline',
    code: 0xf0057,
  },
  {
    name: 'nf-md-arrow_right_bold_hexagon_outline',
    code: 0xf0058,
  },
  {
    name: 'nf-md-arrow_right_bold_outline',
    code: 0xf09c2,
  },
  {
    name: 'nf-md-arrow_right_bottom',
    code: 0xf17a9,
  },
  {
    name: 'nf-md-arrow_right_bottom_bold',
    code: 0xf17aa,
  },
  {
    name: 'nf-md-arrow_right_box',
    code: 0xf06c2,
  },
  {
    name: 'nf-md-arrow_right_circle',
    code: 0xf0cdf,
  },
  {
    name: 'nf-md-arrow_right_circle_outline',
    code: 0xf0ce0,
  },
  {
    name: 'nf-md-arrow_right_drop_circle',
    code: 0xf0059,
  },
  {
    name: 'nf-md-arrow_right_drop_circle_outline',
    code: 0xf005a,
  },
  {
    name: 'nf-md-arrow_right_thick',
    code: 0xf0055,
  },
  {
    name: 'nf-md-arrow_right_thin',
    code: 0xf19b0,
  },
  {
    name: 'nf-md-arrow_right_thin_circle_outline',
    code: 0xf1598,
  },
  {
    name: 'nf-md-arrow_right_top',
    code: 0xf17ab,
  },
  {
    name: 'nf-md-arrow_right_top_bold',
    code: 0xf17ac,
  },
  {
    name: 'nf-md-arrow_split_horizontal',
    code: 0xf093b,
  },
  {
    name: 'nf-md-arrow_split_vertical',
    code: 0xf093c,
  },
  {
    name: 'nf-md-arrow_top_left',
    code: 0xf005b,
  },
  {
    name: 'nf-md-arrow_top_left_bold_box',
    code: 0xf1968,
  },
  {
    name: 'nf-md-arrow_top_left_bold_box_outline',
    code: 0xf1969,
  },
  {
    name: 'nf-md-arrow_top_left_bold_outline',
    code: 0xf09c3,
  },
  {
    name: 'nf-md-arrow_top_left_bottom_right',
    code: 0xf0e75,
  },
  {
    name: 'nf-md-arrow_top_left_bottom_right_bold',
    code: 0xf0e76,
  },
  {
    name: 'nf-md-arrow_top_left_thick',
    code: 0xf09c4,
  },
  {
    name: 'nf-md-arrow_top_left_thin',
    code: 0xf19b5,
  },
  {
    name: 'nf-md-arrow_top_left_thin_circle_outline',
    code: 0xf1593,
  },
  {
    name: 'nf-md-arrow_top_right',
    code: 0xf005c,
  },
  {
    name: 'nf-md-arrow_top_right_bold_box',
    code: 0xf196a,
  },
  {
    name: 'nf-md-arrow_top_right_bold_box_outline',
    code: 0xf196b,
  },
  {
    name: 'nf-md-arrow_top_right_bold_outline',
    code: 0xf09c5,
  },
  {
    name: 'nf-md-arrow_top_right_bottom_left',
    code: 0xf0e77,
  },
  {
    name: 'nf-md-arrow_top_right_bottom_left_bold',
    code: 0xf0e78,
  },
  {
    name: 'nf-md-arrow_top_right_thick',
    code: 0xf09c6,
  },
  {
    name: 'nf-md-arrow_top_right_thin',
    code: 0xf19b4,
  },
  {
    name: 'nf-md-arrow_top_right_thin_circle_outline',
    code: 0xf1594,
  },
  {
    name: 'nf-md-arrow_u_down_left',
    code: 0xf17ad,
  },
  {
    name: 'nf-md-arrow_u_down_left_bold',
    code: 0xf17ae,
  },
  {
    name: 'nf-md-arrow_u_down_right',
    code: 0xf17af,
  },
  {
    name: 'nf-md-arrow_u_down_right_bold',
    code: 0xf17b0,
  },
  {
    name: 'nf-md-arrow_u_left_bottom',
    code: 0xf17b1,
  },
  {
    name: 'nf-md-arrow_u_left_bottom_bold',
    code: 0xf17b2,
  },
  {
    name: 'nf-md-arrow_u_left_top',
    code: 0xf17b3,
  },
  {
    name: 'nf-md-arrow_u_left_top_bold',
    code: 0xf17b4,
  },
  {
    name: 'nf-md-arrow_u_right_bottom',
    code: 0xf17b5,
  },
  {
    name: 'nf-md-arrow_u_right_bottom_bold',
    code: 0xf17b6,
  },
  {
    name: 'nf-md-arrow_u_right_top',
    code: 0xf17b7,
  },
  {
    name: 'nf-md-arrow_u_right_top_bold',
    code: 0xf17b8,
  },
  {
    name: 'nf-md-arrow_u_up_left',
    code: 0xf17b9,
  },
  {
    name: 'nf-md-arrow_u_up_left_bold',
    code: 0xf17ba,
  },
  {
    name: 'nf-md-arrow_u_up_right',
    code: 0xf17bb,
  },
  {
    name: 'nf-md-arrow_u_up_right_bold',
    code: 0xf17bc,
  },
  {
    name: 'nf-md-arrow_up',
    code: 0xf005d,
  },
  {
    name: 'nf-md-arrow_up_bold',
    code: 0xf0737,
  },
  {
    name: 'nf-md-arrow_up_bold_box',
    code: 0xf0738,
  },
  {
    name: 'nf-md-arrow_up_bold_box_outline',
    code: 0xf0739,
  },
  {
    name: 'nf-md-arrow_up_bold_circle',
    code: 0xf005f,
  },
  {
    name: 'nf-md-arrow_up_bold_circle_outline',
    code: 0xf0060,
  },
  {
    name: 'nf-md-arrow_up_bold_hexagon_outline',
    code: 0xf0061,
  },
  {
    name: 'nf-md-arrow_up_bold_outline',
    code: 0xf09c7,
  },
  {
    name: 'nf-md-arrow_up_box',
    code: 0xf06c3,
  },
  {
    name: 'nf-md-arrow_up_circle',
    code: 0xf0ce1,
  },
  {
    name: 'nf-md-arrow_up_circle_outline',
    code: 0xf0ce2,
  },
  {
    name: 'nf-md-arrow_up_down',
    code: 0xf0e79,
  },
  {
    name: 'nf-md-arrow_up_down_bold',
    code: 0xf0e7a,
  },
  {
    name: 'nf-md-arrow_up_down_bold_outline',
    code: 0xf09c8,
  },
  {
    name: 'nf-md-arrow_up_drop_circle',
    code: 0xf0062,
  },
  {
    name: 'nf-md-arrow_up_drop_circle_outline',
    code: 0xf0063,
  },
  {
    name: 'nf-md-arrow_up_left',
    code: 0xf17bd,
  },
  {
    name: 'nf-md-arrow_up_left_bold',
    code: 0xf17be,
  },
  {
    name: 'nf-md-arrow_up_right',
    code: 0xf17bf,
  },
  {
    name: 'nf-md-arrow_up_right_bold',
    code: 0xf17c0,
  },
  {
    name: 'nf-md-arrow_up_thick',
    code: 0xf005e,
  },
  {
    name: 'nf-md-arrow_up_thin',
    code: 0xf19b2,
  },
  {
    name: 'nf-md-arrow_up_thin_circle_outline',
    code: 0xf1597,
  },
  {
    name: 'nf-md-arrow_vertical_lock',
    code: 0xf115c,
  },
  {
    name: 'nf-md-artstation',
    code: 0xf0b5b,
  },
  {
    name: 'nf-md-aspect_ratio',
    code: 0xf0a24,
  },
  {
    name: 'nf-md-assistant',
    code: 0xf0064,
  },
  {
    name: 'nf-md-asterisk',
    code: 0xf06c4,
  },
  {
    name: 'nf-md-asterisk_circle_outline',
    code: 0xf1a27,
  },
  {
    name: 'nf-md-at',
    code: 0xf0065,
  },
  {
    name: 'nf-md-atlassian',
    code: 0xf0804,
  },
  {
    name: 'nf-md-atm',
    code: 0xf0d47,
  },
  {
    name: 'nf-md-atom',
    code: 0xf0768,
  },
  {
    name: 'nf-md-atom_variant',
    code: 0xf0e7b,
  },
  {
    name: 'nf-md-attachment',
    code: 0xf0066,
  },
  {
    name: 'nf-md-attachment_check',
    code: 0xf1ac1,
  },
  {
    name: 'nf-md-attachment_lock',
    code: 0xf19c4,
  },
  {
    name: 'nf-md-attachment_minus',
    code: 0xf1ac2,
  },
  {
    name: 'nf-md-attachment_off',
    code: 0xf1ac3,
  },
  {
    name: 'nf-md-attachment_plus',
    code: 0xf1ac4,
  },
  {
    name: 'nf-md-attachment_remove',
    code: 0xf1ac5,
  },
  {
    name: 'nf-md-audio_input_rca',
    code: 0xf186b,
  },
  {
    name: 'nf-md-audio_input_stereo_minijack',
    code: 0xf186c,
  },
  {
    name: 'nf-md-audio_input_xlr',
    code: 0xf186d,
  },
  {
    name: 'nf-md-audio_video',
    code: 0xf093d,
  },
  {
    name: 'nf-md-audio_video_off',
    code: 0xf11b6,
  },
  {
    name: 'nf-md-augmented_reality',
    code: 0xf0850,
  },
  {
    name: 'nf-md-auto_download',
    code: 0xf137e,
  },
  {
    name: 'nf-md-auto_fix',
    code: 0xf0068,
  },
  {
    name: 'nf-md-auto_upload',
    code: 0xf0069,
  },
  {
    name: 'nf-md-autorenew',
    code: 0xf006a,
  },
  {
    name: 'nf-md-autorenew_off',
    code: 0xf19e7,
  },
  {
    name: 'nf-md-av_timer',
    code: 0xf006b,
  },
  {
    name: 'nf-md-aws',
    code: 0xf0e0f,
  },
  {
    name: 'nf-md-axe',
    code: 0xf08c8,
  },
  {
    name: 'nf-md-axe_battle',
    code: 0xf1842,
  },
  {
    name: 'nf-md-axis',
    code: 0xf0d48,
  },
  {
    name: 'nf-md-axis_arrow',
    code: 0xf0d49,
  },
  {
    name: 'nf-md-axis_arrow_info',
    code: 0xf140e,
  },
  {
    name: 'nf-md-axis_arrow_lock',
    code: 0xf0d4a,
  },
  {
    name: 'nf-md-axis_lock',
    code: 0xf0d4b,
  },
  {
    name: 'nf-md-axis_x_arrow',
    code: 0xf0d4c,
  },
  {
    name: 'nf-md-axis_x_arrow_lock',
    code: 0xf0d4d,
  },
  {
    name: 'nf-md-axis_x_rotate_clockwise',
    code: 0xf0d4e,
  },
  {
    name: 'nf-md-axis_x_rotate_counterclockwise',
    code: 0xf0d4f,
  },
  {
    name: 'nf-md-axis_x_y_arrow_lock',
    code: 0xf0d50,
  },
  {
    name: 'nf-md-axis_y_arrow',
    code: 0xf0d51,
  },
  {
    name: 'nf-md-axis_y_arrow_lock',
    code: 0xf0d52,
  },
  {
    name: 'nf-md-axis_y_rotate_clockwise',
    code: 0xf0d53,
  },
  {
    name: 'nf-md-axis_y_rotate_counterclockwise',
    code: 0xf0d54,
  },
  {
    name: 'nf-md-axis_z_arrow',
    code: 0xf0d55,
  },
  {
    name: 'nf-md-axis_z_arrow_lock',
    code: 0xf0d56,
  },
  {
    name: 'nf-md-axis_z_rotate_clockwise',
    code: 0xf0d57,
  },
  {
    name: 'nf-md-axis_z_rotate_counterclockwise',
    code: 0xf0d58,
  },
  {
    name: 'nf-md-babel',
    code: 0xf0a25,
  },
  {
    name: 'nf-md-baby',
    code: 0xf006c,
  },
  {
    name: 'nf-md-baby_bottle',
    code: 0xf0f39,
  },
  {
    name: 'nf-md-baby_bottle_outline',
    code: 0xf0f3a,
  },
  {
    name: 'nf-md-baby_buggy',
    code: 0xf13e0,
  },
  {
    name: 'nf-md-baby_carriage',
    code: 0xf068f,
  },
  {
    name: 'nf-md-baby_carriage_off',
    code: 0xf0fa0,
  },
  {
    name: 'nf-md-baby_face',
    code: 0xf0e7c,
  },
  {
    name: 'nf-md-baby_face_outline',
    code: 0xf0e7d,
  },
  {
    name: 'nf-md-backburger',
    code: 0xf006d,
  },
  {
    name: 'nf-md-backspace',
    code: 0xf006e,
  },
  {
    name: 'nf-md-backspace_outline',
    code: 0xf0b5c,
  },
  {
    name: 'nf-md-backspace_reverse',
    code: 0xf0e7e,
  },
  {
    name: 'nf-md-backspace_reverse_outline',
    code: 0xf0e7f,
  },
  {
    name: 'nf-md-backup_restore',
    code: 0xf006f,
  },
  {
    name: 'nf-md-bacteria',
    code: 0xf0ed5,
  },
  {
    name: 'nf-md-bacteria_outline',
    code: 0xf0ed6,
  },
  {
    name: 'nf-md-badge_account',
    code: 0xf0da7,
  },
  {
    name: 'nf-md-badge_account_alert',
    code: 0xf0da8,
  },
  {
    name: 'nf-md-badge_account_alert_outline',
    code: 0xf0da9,
  },
  {
    name: 'nf-md-badge_account_horizontal',
    code: 0xf0e0d,
  },
  {
    name: 'nf-md-badge_account_horizontal_outline',
    code: 0xf0e0e,
  },
  {
    name: 'nf-md-badge_account_outline',
    code: 0xf0daa,
  },
  {
    name: 'nf-md-badminton',
    code: 0xf0851,
  },
  {
    name: 'nf-md-bag_carry_on',
    code: 0xf0f3b,
  },
  {
    name: 'nf-md-bag_carry_on_check',
    code: 0xf0d65,
  },
  {
    name: 'nf-md-bag_carry_on_off',
    code: 0xf0f3c,
  },
  {
    name: 'nf-md-bag_checked',
    code: 0xf0f3d,
  },
  {
    name: 'nf-md-bag_personal',
    code: 0xf0e10,
  },
  {
    name: 'nf-md-bag_personal_off',
    code: 0xf0e11,
  },
  {
    name: 'nf-md-bag_personal_off_outline',
    code: 0xf0e12,
  },
  {
    name: 'nf-md-bag_personal_outline',
    code: 0xf0e13,
  },
  {
    name: 'nf-md-bag_suitcase',
    code: 0xf158b,
  },
  {
    name: 'nf-md-bag_suitcase_off',
    code: 0xf158d,
  },
  {
    name: 'nf-md-bag_suitcase_off_outline',
    code: 0xf158e,
  },
  {
    name: 'nf-md-bag_suitcase_outline',
    code: 0xf158c,
  },
  {
    name: 'nf-md-baguette',
    code: 0xf0f3e,
  },
  {
    name: 'nf-md-balcony',
    code: 0xf1817,
  },
  {
    name: 'nf-md-balloon',
    code: 0xf0a26,
  },
  {
    name: 'nf-md-ballot',
    code: 0xf09c9,
  },
  {
    name: 'nf-md-ballot_outline',
    code: 0xf09ca,
  },
  {
    name: 'nf-md-ballot_recount',
    code: 0xf0c39,
  },
  {
    name: 'nf-md-ballot_recount_outline',
    code: 0xf0c3a,
  },
  {
    name: 'nf-md-bandage',
    code: 0xf0daf,
  },
  {
    name: 'nf-md-bank',
    code: 0xf0070,
  },
  {
    name: 'nf-md-bank_check',
    code: 0xf1655,
  },
  {
    name: 'nf-md-bank_minus',
    code: 0xf0db0,
  },
  {
    name: 'nf-md-bank_off',
    code: 0xf1656,
  },
  {
    name: 'nf-md-bank_off_outline',
    code: 0xf1657,
  },
  {
    name: 'nf-md-bank_outline',
    code: 0xf0e80,
  },
  {
    name: 'nf-md-bank_plus',
    code: 0xf0db1,
  },
  {
    name: 'nf-md-bank_remove',
    code: 0xf0db2,
  },
  {
    name: 'nf-md-bank_transfer',
    code: 0xf0a27,
  },
  {
    name: 'nf-md-bank_transfer_in',
    code: 0xf0a28,
  },
  {
    name: 'nf-md-bank_transfer_out',
    code: 0xf0a29,
  },
  {
    name: 'nf-md-barcode',
    code: 0xf0071,
  },
  {
    name: 'nf-md-barcode_off',
    code: 0xf1236,
  },
  {
    name: 'nf-md-barcode_scan',
    code: 0xf0072,
  },
  {
    name: 'nf-md-barley',
    code: 0xf0073,
  },
  {
    name: 'nf-md-barley_off',
    code: 0xf0b5d,
  },
  {
    name: 'nf-md-barn',
    code: 0xf0b5e,
  },
  {
    name: 'nf-md-barrel',
    code: 0xf0074,
  },
  {
    name: 'nf-md-barrel_outline',
    code: 0xf1a28,
  },
  {
    name: 'nf-md-baseball',
    code: 0xf0852,
  },
  {
    name: 'nf-md-baseball_bat',
    code: 0xf0853,
  },
  {
    name: 'nf-md-baseball_diamond',
    code: 0xf15ec,
  },
  {
    name: 'nf-md-baseball_diamond_outline',
    code: 0xf15ed,
  },
  {
    name: 'nf-md-bash',
    code: 0xf1183,
  },
  {
    name: 'nf-md-basket',
    code: 0xf0076,
  },
  {
    name: 'nf-md-basket_check',
    code: 0xf18e5,
  },
  {
    name: 'nf-md-basket_check_outline',
    code: 0xf18e6,
  },
  {
    name: 'nf-md-basket_fill',
    code: 0xf0077,
  },
  {
    name: 'nf-md-basket_minus',
    code: 0xf1523,
  },
  {
    name: 'nf-md-basket_minus_outline',
    code: 0xf1524,
  },
  {
    name: 'nf-md-basket_off',
    code: 0xf1525,
  },
  {
    name: 'nf-md-basket_off_outline',
    code: 0xf1526,
  },
  {
    name: 'nf-md-basket_outline',
    code: 0xf1181,
  },
  {
    name: 'nf-md-basket_plus',
    code: 0xf1527,
  },
  {
    name: 'nf-md-basket_plus_outline',
    code: 0xf1528,
  },
  {
    name: 'nf-md-basket_remove',
    code: 0xf1529,
  },
  {
    name: 'nf-md-basket_remove_outline',
    code: 0xf152a,
  },
  {
    name: 'nf-md-basket_unfill',
    code: 0xf0078,
  },
  {
    name: 'nf-md-basketball',
    code: 0xf0806,
  },
  {
    name: 'nf-md-basketball_hoop',
    code: 0xf0c3b,
  },
  {
    name: 'nf-md-basketball_hoop_outline',
    code: 0xf0c3c,
  },
  {
    name: 'nf-md-bat',
    code: 0xf0b5f,
  },
  {
    name: 'nf-md-bathtub',
    code: 0xf1818,
  },
  {
    name: 'nf-md-bathtub_outline',
    code: 0xf1819,
  },
  {
    name: 'nf-md-battery',
    code: 0xf0079,
  },
  {
    name: 'nf-md-battery_10',
    code: 0xf007a,
  },
  {
    name: 'nf-md-battery_10_bluetooth',
    code: 0xf093e,
  },
  {
    name: 'nf-md-battery_20',
    code: 0xf007b,
  },
  {
    name: 'nf-md-battery_20_bluetooth',
    code: 0xf093f,
  },
  {
    name: 'nf-md-battery_30',
    code: 0xf007c,
  },
  {
    name: 'nf-md-battery_30_bluetooth',
    code: 0xf0940,
  },
  {
    name: 'nf-md-battery_40',
    code: 0xf007d,
  },
  {
    name: 'nf-md-battery_40_bluetooth',
    code: 0xf0941,
  },
  {
    name: 'nf-md-battery_50',
    code: 0xf007e,
  },
  {
    name: 'nf-md-battery_50_bluetooth',
    code: 0xf0942,
  },
  {
    name: 'nf-md-battery_60',
    code: 0xf007f,
  },
  {
    name: 'nf-md-battery_60_bluetooth',
    code: 0xf0943,
  },
  {
    name: 'nf-md-battery_70',
    code: 0xf0080,
  },
  {
    name: 'nf-md-battery_70_bluetooth',
    code: 0xf0944,
  },
  {
    name: 'nf-md-battery_80',
    code: 0xf0081,
  },
  {
    name: 'nf-md-battery_80_bluetooth',
    code: 0xf0945,
  },
  {
    name: 'nf-md-battery_90',
    code: 0xf0082,
  },
  {
    name: 'nf-md-battery_90_bluetooth',
    code: 0xf0946,
  },
  {
    name: 'nf-md-battery_alert',
    code: 0xf0083,
  },
  {
    name: 'nf-md-battery_alert_bluetooth',
    code: 0xf0947,
  },
  {
    name: 'nf-md-battery_alert_variant',
    code: 0xf10cc,
  },
  {
    name: 'nf-md-battery_alert_variant_outline',
    code: 0xf10cd,
  },
  {
    name: 'nf-md-battery_arrow_down',
    code: 0xf17de,
  },
  {
    name: 'nf-md-battery_arrow_down_outline',
    code: 0xf17df,
  },
  {
    name: 'nf-md-battery_arrow_up',
    code: 0xf17e0,
  },
  {
    name: 'nf-md-battery_arrow_up_outline',
    code: 0xf17e1,
  },
  {
    name: 'nf-md-battery_bluetooth',
    code: 0xf0948,
  },
  {
    name: 'nf-md-battery_bluetooth_variant',
    code: 0xf0949,
  },
  {
    name: 'nf-md-battery_charging',
    code: 0xf0084,
  },
  {
    name: 'nf-md-battery_charging_10',
    code: 0xf089c,
  },
  {
    name: 'nf-md-battery_charging_100',
    code: 0xf0085,
  },
  {
    name: 'nf-md-battery_charging_20',
    code: 0xf0086,
  },
  {
    name: 'nf-md-battery_charging_30',
    code: 0xf0087,
  },
  {
    name: 'nf-md-battery_charging_40',
    code: 0xf0088,
  },
  {
    name: 'nf-md-battery_charging_50',
    code: 0xf089d,
  },
  {
    name: 'nf-md-battery_charging_60',
    code: 0xf0089,
  },
  {
    name: 'nf-md-battery_charging_70',
    code: 0xf089e,
  },
  {
    name: 'nf-md-battery_charging_80',
    code: 0xf008a,
  },
  {
    name: 'nf-md-battery_charging_90',
    code: 0xf008b,
  },
  {
    name: 'nf-md-battery_charging_high',
    code: 0xf12a6,
  },
  {
    name: 'nf-md-battery_charging_low',
    code: 0xf12a4,
  },
  {
    name: 'nf-md-battery_charging_medium',
    code: 0xf12a5,
  },
  {
    name: 'nf-md-battery_charging_outline',
    code: 0xf089f,
  },
  {
    name: 'nf-md-battery_charging_wireless',
    code: 0xf0807,
  },
  {
    name: 'nf-md-battery_charging_wireless_10',
    code: 0xf0808,
  },
  {
    name: 'nf-md-battery_charging_wireless_20',
    code: 0xf0809,
  },
  {
    name: 'nf-md-battery_charging_wireless_30',
    code: 0xf080a,
  },
  {
    name: 'nf-md-battery_charging_wireless_40',
    code: 0xf080b,
  },
  {
    name: 'nf-md-battery_charging_wireless_50',
    code: 0xf080c,
  },
  {
    name: 'nf-md-battery_charging_wireless_60',
    code: 0xf080d,
  },
  {
    name: 'nf-md-battery_charging_wireless_70',
    code: 0xf080e,
  },
  {
    name: 'nf-md-battery_charging_wireless_80',
    code: 0xf080f,
  },
  {
    name: 'nf-md-battery_charging_wireless_90',
    code: 0xf0810,
  },
  {
    name: 'nf-md-battery_charging_wireless_alert',
    code: 0xf0811,
  },
  {
    name: 'nf-md-battery_charging_wireless_outline',
    code: 0xf0812,
  },
  {
    name: 'nf-md-battery_check',
    code: 0xf17e2,
  },
  {
    name: 'nf-md-battery_check_outline',
    code: 0xf17e3,
  },
  {
    name: 'nf-md-battery_clock',
    code: 0xf19e5,
  },
  {
    name: 'nf-md-battery_clock_outline',
    code: 0xf19e6,
  },
  {
    name: 'nf-md-battery_heart',
    code: 0xf120f,
  },
  {
    name: 'nf-md-battery_heart_outline',
    code: 0xf1210,
  },
  {
    name: 'nf-md-battery_heart_variant',
    code: 0xf1211,
  },
  {
    name: 'nf-md-battery_high',
    code: 0xf12a3,
  },
  {
    name: 'nf-md-battery_lock',
    code: 0xf179c,
  },
  {
    name: 'nf-md-battery_lock_open',
    code: 0xf179d,
  },
  {
    name: 'nf-md-battery_low',
    code: 0xf12a1,
  },
  {
    name: 'nf-md-battery_medium',
    code: 0xf12a2,
  },
  {
    name: 'nf-md-battery_minus',
    code: 0xf17e4,
  },
  {
    name: 'nf-md-battery_minus_outline',
    code: 0xf17e5,
  },
  {
    name: 'nf-md-battery_minus_variant',
    code: 0xf008c,
  },
  {
    name: 'nf-md-battery_negative',
    code: 0xf008d,
  },
  {
    name: 'nf-md-battery_off',
    code: 0xf125d,
  },
  {
    name: 'nf-md-battery_off_outline',
    code: 0xf125e,
  },
  {
    name: 'nf-md-battery_outline',
    code: 0xf008e,
  },
  {
    name: 'nf-md-battery_plus',
    code: 0xf17e6,
  },
  {
    name: 'nf-md-battery_plus_outline',
    code: 0xf17e7,
  },
  {
    name: 'nf-md-battery_plus_variant',
    code: 0xf008f,
  },
  {
    name: 'nf-md-battery_positive',
    code: 0xf0090,
  },
  {
    name: 'nf-md-battery_remove',
    code: 0xf17e8,
  },
  {
    name: 'nf-md-battery_remove_outline',
    code: 0xf17e9,
  },
  {
    name: 'nf-md-battery_sync',
    code: 0xf1834,
  },
  {
    name: 'nf-md-battery_sync_outline',
    code: 0xf1835,
  },
  {
    name: 'nf-md-battery_unknown',
    code: 0xf0091,
  },
  {
    name: 'nf-md-battery_unknown_bluetooth',
    code: 0xf094a,
  },
  {
    name: 'nf-md-beach',
    code: 0xf0092,
  },
  {
    name: 'nf-md-beaker',
    code: 0xf0cea,
  },
  {
    name: 'nf-md-beaker_alert',
    code: 0xf1229,
  },
  {
    name: 'nf-md-beaker_alert_outline',
    code: 0xf122a,
  },
  {
    name: 'nf-md-beaker_check',
    code: 0xf122b,
  },
  {
    name: 'nf-md-beaker_check_outline',
    code: 0xf122c,
  },
  {
    name: 'nf-md-beaker_minus',
    code: 0xf122d,
  },
  {
    name: 'nf-md-beaker_minus_outline',
    code: 0xf122e,
  },
  {
    name: 'nf-md-beaker_outline',
    code: 0xf0690,
  },
  {
    name: 'nf-md-beaker_plus',
    code: 0xf122f,
  },
  {
    name: 'nf-md-beaker_plus_outline',
    code: 0xf1230,
  },
  {
    name: 'nf-md-beaker_question',
    code: 0xf1231,
  },
  {
    name: 'nf-md-beaker_question_outline',
    code: 0xf1232,
  },
  {
    name: 'nf-md-beaker_remove',
    code: 0xf1233,
  },
  {
    name: 'nf-md-beaker_remove_outline',
    code: 0xf1234,
  },
  {
    name: 'nf-md-bed',
    code: 0xf02e3,
  },
  {
    name: 'nf-md-bed_double',
    code: 0xf0fd4,
  },
  {
    name: 'nf-md-bed_double_outline',
    code: 0xf0fd3,
  },
  {
    name: 'nf-md-bed_empty',
    code: 0xf08a0,
  },
  {
    name: 'nf-md-bed_king',
    code: 0xf0fd2,
  },
  {
    name: 'nf-md-bed_king_outline',
    code: 0xf0fd1,
  },
  {
    name: 'nf-md-bed_outline',
    code: 0xf0099,
  },
  {
    name: 'nf-md-bed_queen',
    code: 0xf0fd0,
  },
  {
    name: 'nf-md-bed_queen_outline',
    code: 0xf0fdb,
  },
  {
    name: 'nf-md-bed_single',
    code: 0xf106d,
  },
  {
    name: 'nf-md-bed_single_outline',
    code: 0xf106e,
  },
  {
    name: 'nf-md-bee',
    code: 0xf0fa1,
  },
  {
    name: 'nf-md-bee_flower',
    code: 0xf0fa2,
  },
  {
    name: 'nf-md-beehive_off_outline',
    code: 0xf13ed,
  },
  {
    name: 'nf-md-beehive_outline',
    code: 0xf10ce,
  },
  {
    name: 'nf-md-beekeeper',
    code: 0xf14e2,
  },
  {
    name: 'nf-md-beer',
    code: 0xf0098,
  },
  {
    name: 'nf-md-beer_outline',
    code: 0xf130c,
  },
  {
    name: 'nf-md-bell',
    code: 0xf009a,
  },
  {
    name: 'nf-md-bell_alert',
    code: 0xf0d59,
  },
  {
    name: 'nf-md-bell_alert_outline',
    code: 0xf0e81,
  },
  {
    name: 'nf-md-bell_badge',
    code: 0xf116b,
  },
  {
    name: 'nf-md-bell_badge_outline',
    code: 0xf0178,
  },
  {
    name: 'nf-md-bell_cancel',
    code: 0xf13e7,
  },
  {
    name: 'nf-md-bell_cancel_outline',
    code: 0xf13e8,
  },
  {
    name: 'nf-md-bell_check',
    code: 0xf11e5,
  },
  {
    name: 'nf-md-bell_check_outline',
    code: 0xf11e6,
  },
  {
    name: 'nf-md-bell_circle',
    code: 0xf0d5a,
  },
  {
    name: 'nf-md-bell_circle_outline',
    code: 0xf0d5b,
  },
  {
    name: 'nf-md-bell_cog',
    code: 0xf1a29,
  },
  {
    name: 'nf-md-bell_cog_outline',
    code: 0xf1a2a,
  },
  {
    name: 'nf-md-bell_minus',
    code: 0xf13e9,
  },
  {
    name: 'nf-md-bell_minus_outline',
    code: 0xf13ea,
  },
  {
    name: 'nf-md-bell_off',
    code: 0xf009b,
  },
  {
    name: 'nf-md-bell_off_outline',
    code: 0xf0a91,
  },
  {
    name: 'nf-md-bell_outline',
    code: 0xf009c,
  },
  {
    name: 'nf-md-bell_plus',
    code: 0xf009d,
  },
  {
    name: 'nf-md-bell_plus_outline',
    code: 0xf0a92,
  },
  {
    name: 'nf-md-bell_remove',
    code: 0xf13eb,
  },
  {
    name: 'nf-md-bell_remove_outline',
    code: 0xf13ec,
  },
  {
    name: 'nf-md-bell_ring',
    code: 0xf009e,
  },
  {
    name: 'nf-md-bell_ring_outline',
    code: 0xf009f,
  },
  {
    name: 'nf-md-bell_sleep',
    code: 0xf00a0,
  },
  {
    name: 'nf-md-bell_sleep_outline',
    code: 0xf0a93,
  },
  {
    name: 'nf-md-beta',
    code: 0xf00a1,
  },
  {
    name: 'nf-md-betamax',
    code: 0xf09cb,
  },
  {
    name: 'nf-md-biathlon',
    code: 0xf0e14,
  },
  {
    name: 'nf-md-bicycle',
    code: 0xf109c,
  },
  {
    name: 'nf-md-bicycle_basket',
    code: 0xf1235,
  },
  {
    name: 'nf-md-bicycle_cargo',
    code: 0xf189c,
  },
  {
    name: 'nf-md-bicycle_electric',
    code: 0xf15b4,
  },
  {
    name: 'nf-md-bicycle_penny_farthing',
    code: 0xf15e9,
  },
  {
    name: 'nf-md-bike',
    code: 0xf00a3,
  },
  {
    name: 'nf-md-bike_fast',
    code: 0xf111f,
  },
  {
    name: 'nf-md-billboard',
    code: 0xf1010,
  },
  {
    name: 'nf-md-billiards',
    code: 0xf0b61,
  },
  {
    name: 'nf-md-billiards_rack',
    code: 0xf0b62,
  },
  {
    name: 'nf-md-binoculars',
    code: 0xf00a5,
  },
  {
    name: 'nf-md-bio',
    code: 0xf00a6,
  },
  {
    name: 'nf-md-biohazard',
    code: 0xf00a7,
  },
  {
    name: 'nf-md-bird',
    code: 0xf15c6,
  },
  {
    name: 'nf-md-bitbucket',
    code: 0xf00a8,
  },
  {
    name: 'nf-md-bitcoin',
    code: 0xf0813,
  },
  {
    name: 'nf-md-black_mesa',
    code: 0xf00a9,
  },
  {
    name: 'nf-md-blender',
    code: 0xf0ceb,
  },
  {
    name: 'nf-md-blender_outline',
    code: 0xf181a,
  },
  {
    name: 'nf-md-blender_software',
    code: 0xf00ab,
  },
  {
    name: 'nf-md-blinds',
    code: 0xf00ac,
  },
  {
    name: 'nf-md-blinds_horizontal',
    code: 0xf1a2b,
  },
  {
    name: 'nf-md-blinds_horizontal_closed',
    code: 0xf1a2c,
  },
  {
    name: 'nf-md-blinds_open',
    code: 0xf1011,
  },
  {
    name: 'nf-md-blinds_vertical',
    code: 0xf1a2d,
  },
  {
    name: 'nf-md-blinds_vertical_closed',
    code: 0xf1a2e,
  },
  {
    name: 'nf-md-block_helper',
    code: 0xf00ad,
  },
  {
    name: 'nf-md-blood_bag',
    code: 0xf0cec,
  },
  {
    name: 'nf-md-bluetooth',
    code: 0xf00af,
  },
  {
    name: 'nf-md-bluetooth_audio',
    code: 0xf00b0,
  },
  {
    name: 'nf-md-bluetooth_connect',
    code: 0xf00b1,
  },
  {
    name: 'nf-md-bluetooth_off',
    code: 0xf00b2,
  },
  {
    name: 'nf-md-bluetooth_settings',
    code: 0xf00b3,
  },
  {
    name: 'nf-md-bluetooth_transfer',
    code: 0xf00b4,
  },
  {
    name: 'nf-md-blur',
    code: 0xf00b5,
  },
  {
    name: 'nf-md-blur_linear',
    code: 0xf00b6,
  },
  {
    name: 'nf-md-blur_off',
    code: 0xf00b7,
  },
  {
    name: 'nf-md-blur_radial',
    code: 0xf00b8,
  },
  {
    name: 'nf-md-bolt',
    code: 0xf0db3,
  },
  {
    name: 'nf-md-bomb',
    code: 0xf0691,
  },
  {
    name: 'nf-md-bomb_off',
    code: 0xf06c5,
  },
  {
    name: 'nf-md-bone',
    code: 0xf00b9,
  },
  {
    name: 'nf-md-bone_off',
    code: 0xf19e0,
  },
  {
    name: 'nf-md-book',
    code: 0xf00ba,
  },
  {
    name: 'nf-md-book_account',
    code: 0xf13ad,
  },
  {
    name: 'nf-md-book_account_outline',
    code: 0xf13ae,
  },
  {
    name: 'nf-md-book_alert',
    code: 0xf167c,
  },
  {
    name: 'nf-md-book_alert_outline',
    code: 0xf167d,
  },
  {
    name: 'nf-md-book_alphabet',
    code: 0xf061d,
  },
  {
    name: 'nf-md-book_arrow_down',
    code: 0xf167e,
  },
  {
    name: 'nf-md-book_arrow_down_outline',
    code: 0xf167f,
  },
  {
    name: 'nf-md-book_arrow_left',
    code: 0xf1680,
  },
  {
    name: 'nf-md-book_arrow_left_outline',
    code: 0xf1681,
  },
  {
    name: 'nf-md-book_arrow_right',
    code: 0xf1682,
  },
  {
    name: 'nf-md-book_arrow_right_outline',
    code: 0xf1683,
  },
  {
    name: 'nf-md-book_arrow_up',
    code: 0xf1684,
  },
  {
    name: 'nf-md-book_arrow_up_outline',
    code: 0xf1685,
  },
  {
    name: 'nf-md-book_cancel',
    code: 0xf1686,
  },
  {
    name: 'nf-md-book_cancel_outline',
    code: 0xf1687,
  },
  {
    name: 'nf-md-book_check',
    code: 0xf14f3,
  },
  {
    name: 'nf-md-book_check_outline',
    code: 0xf14f4,
  },
  {
    name: 'nf-md-book_clock',
    code: 0xf1688,
  },
  {
    name: 'nf-md-book_clock_outline',
    code: 0xf1689,
  },
  {
    name: 'nf-md-book_cog',
    code: 0xf168a,
  },
  {
    name: 'nf-md-book_cog_outline',
    code: 0xf168b,
  },
  {
    name: 'nf-md-book_cross',
    code: 0xf00a2,
  },
  {
    name: 'nf-md-book_edit',
    code: 0xf168c,
  },
  {
    name: 'nf-md-book_edit_outline',
    code: 0xf168d,
  },
  {
    name: 'nf-md-book_education',
    code: 0xf16c9,
  },
  {
    name: 'nf-md-book_education_outline',
    code: 0xf16ca,
  },
  {
    name: 'nf-md-book_heart',
    code: 0xf1a1d,
  },
  {
    name: 'nf-md-book_heart_outline',
    code: 0xf1a1e,
  },
  {
    name: 'nf-md-book_information_variant',
    code: 0xf106f,
  },
  {
    name: 'nf-md-book_lock',
    code: 0xf079a,
  },
  {
    name: 'nf-md-book_lock_open',
    code: 0xf079b,
  },
  {
    name: 'nf-md-book_lock_open_outline',
    code: 0xf168e,
  },
  {
    name: 'nf-md-book_lock_outline',
    code: 0xf168f,
  },
  {
    name: 'nf-md-book_marker',
    code: 0xf1690,
  },
  {
    name: 'nf-md-book_marker_outline',
    code: 0xf1691,
  },
  {
    name: 'nf-md-book_minus',
    code: 0xf05d9,
  },
  {
    name: 'nf-md-book_minus_multiple',
    code: 0xf0a94,
  },
  {
    name: 'nf-md-book_minus_multiple_outline',
    code: 0xf090b,
  },
  {
    name: 'nf-md-book_minus_outline',
    code: 0xf1692,
  },
  {
    name: 'nf-md-book_multiple',
    code: 0xf00bb,
  },
  {
    name: 'nf-md-book_multiple_outline',
    code: 0xf0436,
  },
  {
    name: 'nf-md-book_music',
    code: 0xf0067,
  },
  {
    name: 'nf-md-book_music_outline',
    code: 0xf1693,
  },
  {
    name: 'nf-md-book_off',
    code: 0xf1694,
  },
  {
    name: 'nf-md-book_off_outline',
    code: 0xf1695,
  },
  {
    name: 'nf-md-book_open',
    code: 0xf00bd,
  },
  {
    name: 'nf-md-book_open_blank_variant',
    code: 0xf00be,
  },
  {
    name: 'nf-md-book_open_outline',
    code: 0xf0b63,
  },
  {
    name: 'nf-md-book_open_page_variant',
    code: 0xf05da,
  },
  {
    name: 'nf-md-book_open_page_variant_outline',
    code: 0xf15d6,
  },
  {
    name: 'nf-md-book_open_variant',
    code: 0xf14f7,
  },
  {
    name: 'nf-md-book_outline',
    code: 0xf0b64,
  },
  {
    name: 'nf-md-book_play',
    code: 0xf0e82,
  },
  {
    name: 'nf-md-book_play_outline',
    code: 0xf0e83,
  },
  {
    name: 'nf-md-book_plus',
    code: 0xf05db,
  },
  {
    name: 'nf-md-book_plus_multiple',
    code: 0xf0a95,
  },
  {
    name: 'nf-md-book_plus_multiple_outline',
    code: 0xf0ade,
  },
  {
    name: 'nf-md-book_plus_outline',
    code: 0xf1696,
  },
  {
    name: 'nf-md-book_refresh',
    code: 0xf1697,
  },
  {
    name: 'nf-md-book_refresh_outline',
    code: 0xf1698,
  },
  {
    name: 'nf-md-book_remove',
    code: 0xf0a97,
  },
  {
    name: 'nf-md-book_remove_multiple',
    code: 0xf0a96,
  },
  {
    name: 'nf-md-book_remove_multiple_outline',
    code: 0xf04ca,
  },
  {
    name: 'nf-md-book_remove_outline',
    code: 0xf1699,
  },
  {
    name: 'nf-md-book_search',
    code: 0xf0e84,
  },
  {
    name: 'nf-md-book_search_outline',
    code: 0xf0e85,
  },
  {
    name: 'nf-md-book_settings',
    code: 0xf169a,
  },
  {
    name: 'nf-md-book_settings_outline',
    code: 0xf169b,
  },
  {
    name: 'nf-md-book_sync',
    code: 0xf169c,
  },
  {
    name: 'nf-md-book_sync_outline',
    code: 0xf16c8,
  },
  {
    name: 'nf-md-book_variant',
    code: 0xf00bf,
  },
  {
    name: 'nf-md-book_variant_multiple',
    code: 0xf00bc,
  },
  {
    name: 'nf-md-bookmark',
    code: 0xf00c0,
  },
  {
    name: 'nf-md-bookmark_box_multiple',
    code: 0xf196c,
  },
  {
    name: 'nf-md-bookmark_box_multiple_outline',
    code: 0xf196d,
  },
  {
    name: 'nf-md-bookmark_check',
    code: 0xf00c1,
  },
  {
    name: 'nf-md-bookmark_check_outline',
    code: 0xf137b,
  },
  {
    name: 'nf-md-bookmark_minus',
    code: 0xf09cc,
  },
  {
    name: 'nf-md-bookmark_minus_outline',
    code: 0xf09cd,
  },
  {
    name: 'nf-md-bookmark_multiple',
    code: 0xf0e15,
  },
  {
    name: 'nf-md-bookmark_multiple_outline',
    code: 0xf0e16,
  },
  {
    name: 'nf-md-bookmark_music',
    code: 0xf00c2,
  },
  {
    name: 'nf-md-bookmark_music_outline',
    code: 0xf1379,
  },
  {
    name: 'nf-md-bookmark_off',
    code: 0xf09ce,
  },
  {
    name: 'nf-md-bookmark_off_outline',
    code: 0xf09cf,
  },
  {
    name: 'nf-md-bookmark_outline',
    code: 0xf00c3,
  },
  {
    name: 'nf-md-bookmark_plus',
    code: 0xf00c5,
  },
  {
    name: 'nf-md-bookmark_plus_outline',
    code: 0xf00c4,
  },
  {
    name: 'nf-md-bookmark_remove',
    code: 0xf00c6,
  },
  {
    name: 'nf-md-bookmark_remove_outline',
    code: 0xf137a,
  },
  {
    name: 'nf-md-bookshelf',
    code: 0xf125f,
  },
  {
    name: 'nf-md-boom_gate',
    code: 0xf0e86,
  },
  {
    name: 'nf-md-boom_gate_alert',
    code: 0xf0e87,
  },
  {
    name: 'nf-md-boom_gate_alert_outline',
    code: 0xf0e88,
  },
  {
    name: 'nf-md-boom_gate_arrow_down',
    code: 0xf0e89,
  },
  {
    name: 'nf-md-boom_gate_arrow_down_outline',
    code: 0xf0e8a,
  },
  {
    name: 'nf-md-boom_gate_arrow_up',
    code: 0xf0e8c,
  },
  {
    name: 'nf-md-boom_gate_arrow_up_outline',
    code: 0xf0e8d,
  },
  {
    name: 'nf-md-boom_gate_outline',
    code: 0xf0e8b,
  },
  {
    name: 'nf-md-boom_gate_up',
    code: 0xf17f9,
  },
  {
    name: 'nf-md-boom_gate_up_outline',
    code: 0xf17fa,
  },
  {
    name: 'nf-md-boombox',
    code: 0xf05dc,
  },
  {
    name: 'nf-md-boomerang',
    code: 0xf10cf,
  },
  {
    name: 'nf-md-bootstrap',
    code: 0xf06c6,
  },
  {
    name: 'nf-md-border_all',
    code: 0xf00c7,
  },
  {
    name: 'nf-md-border_all_variant',
    code: 0xf08a1,
  },
  {
    name: 'nf-md-border_bottom',
    code: 0xf00c8,
  },
  {
    name: 'nf-md-border_bottom_variant',
    code: 0xf08a2,
  },
  {
    name: 'nf-md-border_color',
    code: 0xf00c9,
  },
  {
    name: 'nf-md-border_horizontal',
    code: 0xf00ca,
  },
  {
    name: 'nf-md-border_inside',
    code: 0xf00cb,
  },
  {
    name: 'nf-md-border_left',
    code: 0xf00cc,
  },
  {
    name: 'nf-md-border_left_variant',
    code: 0xf08a3,
  },
  {
    name: 'nf-md-border_none',
    code: 0xf00cd,
  },
  {
    name: 'nf-md-border_none_variant',
    code: 0xf08a4,
  },
  {
    name: 'nf-md-border_outside',
    code: 0xf00ce,
  },
  {
    name: 'nf-md-border_right',
    code: 0xf00cf,
  },
  {
    name: 'nf-md-border_right_variant',
    code: 0xf08a5,
  },
  {
    name: 'nf-md-border_style',
    code: 0xf00d0,
  },
  {
    name: 'nf-md-border_top',
    code: 0xf00d1,
  },
  {
    name: 'nf-md-border_top_variant',
    code: 0xf08a6,
  },
  {
    name: 'nf-md-border_vertical',
    code: 0xf00d2,
  },
  {
    name: 'nf-md-bottle_soda',
    code: 0xf1070,
  },
  {
    name: 'nf-md-bottle_soda_classic',
    code: 0xf1071,
  },
  {
    name: 'nf-md-bottle_soda_classic_outline',
    code: 0xf1363,
  },
  {
    name: 'nf-md-bottle_soda_outline',
    code: 0xf1072,
  },
  {
    name: 'nf-md-bottle_tonic',
    code: 0xf112e,
  },
  {
    name: 'nf-md-bottle_tonic_outline',
    code: 0xf112f,
  },
  {
    name: 'nf-md-bottle_tonic_plus',
    code: 0xf1130,
  },
  {
    name: 'nf-md-bottle_tonic_plus_outline',
    code: 0xf1131,
  },
  {
    name: 'nf-md-bottle_tonic_skull',
    code: 0xf1132,
  },
  {
    name: 'nf-md-bottle_tonic_skull_outline',
    code: 0xf1133,
  },
  {
    name: 'nf-md-bottle_wine',
    code: 0xf0854,
  },
  {
    name: 'nf-md-bottle_wine_outline',
    code: 0xf1310,
  },
  {
    name: 'nf-md-bow_arrow',
    code: 0xf1841,
  },
  {
    name: 'nf-md-bow_tie',
    code: 0xf0678,
  },
  {
    name: 'nf-md-bowl',
    code: 0xf028e,
  },
  {
    name: 'nf-md-bowl_mix',
    code: 0xf0617,
  },
  {
    name: 'nf-md-bowl_mix_outline',
    code: 0xf02e4,
  },
  {
    name: 'nf-md-bowl_outline',
    code: 0xf02a9,
  },
  {
    name: 'nf-md-bowling',
    code: 0xf00d3,
  },
  {
    name: 'nf-md-box',
    code: 0xf00d4,
  },
  {
    name: 'nf-md-box_cutter',
    code: 0xf00d5,
  },
  {
    name: 'nf-md-box_cutter_off',
    code: 0xf0b4a,
  },
  {
    name: 'nf-md-box_shadow',
    code: 0xf0637,
  },
  {
    name: 'nf-md-boxing_glove',
    code: 0xf0b65,
  },
  {
    name: 'nf-md-braille',
    code: 0xf09d0,
  },
  {
    name: 'nf-md-brain',
    code: 0xf09d1,
  },
  {
    name: 'nf-md-bread_slice',
    code: 0xf0cee,
  },
  {
    name: 'nf-md-bread_slice_outline',
    code: 0xf0cef,
  },
  {
    name: 'nf-md-bridge',
    code: 0xf0618,
  },
  {
    name: 'nf-md-briefcase',
    code: 0xf00d6,
  },
  {
    name: 'nf-md-briefcase_account',
    code: 0xf0cf0,
  },
  {
    name: 'nf-md-briefcase_account_outline',
    code: 0xf0cf1,
  },
  {
    name: 'nf-md-briefcase_arrow_left_right',
    code: 0xf1a8d,
  },
  {
    name: 'nf-md-briefcase_arrow_left_right_outline',
    code: 0xf1a8e,
  },
  {
    name: 'nf-md-briefcase_arrow_up_down',
    code: 0xf1a8f,
  },
  {
    name: 'nf-md-briefcase_arrow_up_down_outline',
    code: 0xf1a90,
  },
  {
    name: 'nf-md-briefcase_check',
    code: 0xf00d7,
  },
  {
    name: 'nf-md-briefcase_check_outline',
    code: 0xf131e,
  },
  {
    name: 'nf-md-briefcase_clock',
    code: 0xf10d0,
  },
  {
    name: 'nf-md-briefcase_clock_outline',
    code: 0xf10d1,
  },
  {
    name: 'nf-md-briefcase_download',
    code: 0xf00d8,
  },
  {
    name: 'nf-md-briefcase_download_outline',
    code: 0xf0c3d,
  },
  {
    name: 'nf-md-briefcase_edit',
    code: 0xf0a98,
  },
  {
    name: 'nf-md-briefcase_edit_outline',
    code: 0xf0c3e,
  },
  {
    name: 'nf-md-briefcase_eye',
    code: 0xf17d9,
  },
  {
    name: 'nf-md-briefcase_eye_outline',
    code: 0xf17da,
  },
  {
    name: 'nf-md-briefcase_minus',
    code: 0xf0a2a,
  },
  {
    name: 'nf-md-briefcase_minus_outline',
    code: 0xf0c3f,
  },
  {
    name: 'nf-md-briefcase_off',
    code: 0xf1658,
  },
  {
    name: 'nf-md-briefcase_off_outline',
    code: 0xf1659,
  },
  {
    name: 'nf-md-briefcase_outline',
    code: 0xf0814,
  },
  {
    name: 'nf-md-briefcase_plus',
    code: 0xf0a2b,
  },
  {
    name: 'nf-md-briefcase_plus_outline',
    code: 0xf0c40,
  },
  {
    name: 'nf-md-briefcase_remove',
    code: 0xf0a2c,
  },
  {
    name: 'nf-md-briefcase_remove_outline',
    code: 0xf0c41,
  },
  {
    name: 'nf-md-briefcase_search',
    code: 0xf0a2d,
  },
  {
    name: 'nf-md-briefcase_search_outline',
    code: 0xf0c42,
  },
  {
    name: 'nf-md-briefcase_upload',
    code: 0xf00d9,
  },
  {
    name: 'nf-md-briefcase_upload_outline',
    code: 0xf0c43,
  },
  {
    name: 'nf-md-briefcase_variant',
    code: 0xf1494,
  },
  {
    name: 'nf-md-briefcase_variant_off',
    code: 0xf165a,
  },
  {
    name: 'nf-md-briefcase_variant_off_outline',
    code: 0xf165b,
  },
  {
    name: 'nf-md-briefcase_variant_outline',
    code: 0xf1495,
  },
  {
    name: 'nf-md-brightness_1',
    code: 0xf00da,
  },
  {
    name: 'nf-md-brightness_2',
    code: 0xf00db,
  },
  {
    name: 'nf-md-brightness_3',
    code: 0xf00dc,
  },
  {
    name: 'nf-md-brightness_4',
    code: 0xf00dd,
  },
  {
    name: 'nf-md-brightness_5',
    code: 0xf00de,
  },
  {
    name: 'nf-md-brightness_6',
    code: 0xf00df,
  },
  {
    name: 'nf-md-brightness_7',
    code: 0xf00e0,
  },
  {
    name: 'nf-md-brightness_auto',
    code: 0xf00e1,
  },
  {
    name: 'nf-md-brightness_percent',
    code: 0xf0cf2,
  },
  {
    name: 'nf-md-broadcast',
    code: 0xf1720,
  },
  {
    name: 'nf-md-broadcast_off',
    code: 0xf1721,
  },
  {
    name: 'nf-md-broom',
    code: 0xf00e2,
  },
  {
    name: 'nf-md-brush',
    code: 0xf00e3,
  },
  {
    name: 'nf-md-brush_off',
    code: 0xf1771,
  },
  {
    name: 'nf-md-brush_outline',
    code: 0xf1a0d,
  },
  {
    name: 'nf-md-brush_variant',
    code: 0xf1813,
  },
  {
    name: 'nf-md-bucket',
    code: 0xf1415,
  },
  {
    name: 'nf-md-bucket_outline',
    code: 0xf1416,
  },
  {
    name: 'nf-md-buffet',
    code: 0xf0578,
  },
  {
    name: 'nf-md-bug',
    code: 0xf00e4,
  },
  {
    name: 'nf-md-bug_check',
    code: 0xf0a2e,
  },
  {
    name: 'nf-md-bug_check_outline',
    code: 0xf0a2f,
  },
  {
    name: 'nf-md-bug_outline',
    code: 0xf0a30,
  },
  {
    name: 'nf-md-bugle',
    code: 0xf0db4,
  },
  {
    name: 'nf-md-bulkhead_light',
    code: 0xf1a2f,
  },
  {
    name: 'nf-md-bulldozer',
    code: 0xf0b22,
  },
  {
    name: 'nf-md-bullet',
    code: 0xf0cf3,
  },
  {
    name: 'nf-md-bulletin_board',
    code: 0xf00e5,
  },
  {
    name: 'nf-md-bullhorn',
    code: 0xf00e6,
  },
  {
    name: 'nf-md-bullhorn_outline',
    code: 0xf0b23,
  },
  {
    name: 'nf-md-bullhorn_variant',
    code: 0xf196e,
  },
  {
    name: 'nf-md-bullhorn_variant_outline',
    code: 0xf196f,
  },
  {
    name: 'nf-md-bullseye',
    code: 0xf05dd,
  },
  {
    name: 'nf-md-bullseye_arrow',
    code: 0xf08c9,
  },
  {
    name: 'nf-md-bulma',
    code: 0xf12e7,
  },
  {
    name: 'nf-md-bunk_bed',
    code: 0xf1302,
  },
  {
    name: 'nf-md-bunk_bed_outline',
    code: 0xf0097,
  },
  {
    name: 'nf-md-bus',
    code: 0xf00e7,
  },
  {
    name: 'nf-md-bus_alert',
    code: 0xf0a99,
  },
  {
    name: 'nf-md-bus_articulated_end',
    code: 0xf079c,
  },
  {
    name: 'nf-md-bus_articulated_front',
    code: 0xf079d,
  },
  {
    name: 'nf-md-bus_clock',
    code: 0xf08ca,
  },
  {
    name: 'nf-md-bus_double_decker',
    code: 0xf079e,
  },
  {
    name: 'nf-md-bus_electric',
    code: 0xf191d,
  },
  {
    name: 'nf-md-bus_marker',
    code: 0xf1212,
  },
  {
    name: 'nf-md-bus_multiple',
    code: 0xf0f3f,
  },
  {
    name: 'nf-md-bus_school',
    code: 0xf079f,
  },
  {
    name: 'nf-md-bus_side',
    code: 0xf07a0,
  },
  {
    name: 'nf-md-bus_stop',
    code: 0xf1012,
  },
  {
    name: 'nf-md-bus_stop_covered',
    code: 0xf1013,
  },
  {
    name: 'nf-md-bus_stop_uncovered',
    code: 0xf1014,
  },
  {
    name: 'nf-md-butterfly',
    code: 0xf1589,
  },
  {
    name: 'nf-md-butterfly_outline',
    code: 0xf158a,
  },
  {
    name: 'nf-md-cabin_a_frame',
    code: 0xf188c,
  },
  {
    name: 'nf-md-cable_data',
    code: 0xf1394,
  },
  {
    name: 'nf-md-cached',
    code: 0xf00e8,
  },
  {
    name: 'nf-md-cactus',
    code: 0xf0db5,
  },
  {
    name: 'nf-md-cake',
    code: 0xf00e9,
  },
  {
    name: 'nf-md-cake_layered',
    code: 0xf00ea,
  },
  {
    name: 'nf-md-cake_variant',
    code: 0xf00eb,
  },
  {
    name: 'nf-md-cake_variant_outline',
    code: 0xf17f0,
  },
  {
    name: 'nf-md-calculator',
    code: 0xf00ec,
  },
  {
    name: 'nf-md-calculator_variant',
    code: 0xf0a9a,
  },
  {
    name: 'nf-md-calculator_variant_outline',
    code: 0xf15a6,
  },
  {
    name: 'nf-md-calendar',
    code: 0xf00ed,
  },
  {
    name: 'nf-md-calendar_account',
    code: 0xf0ed7,
  },
  {
    name: 'nf-md-calendar_account_outline',
    code: 0xf0ed8,
  },
  {
    name: 'nf-md-calendar_alert',
    code: 0xf0a31,
  },
  {
    name: 'nf-md-calendar_arrow_left',
    code: 0xf1134,
  },
  {
    name: 'nf-md-calendar_arrow_right',
    code: 0xf1135,
  },
  {
    name: 'nf-md-calendar_blank',
    code: 0xf00ee,
  },
  {
    name: 'nf-md-calendar_blank_multiple',
    code: 0xf1073,
  },
  {
    name: 'nf-md-calendar_blank_outline',
    code: 0xf0b66,
  },
  {
    name: 'nf-md-calendar_check',
    code: 0xf00ef,
  },
  {
    name: 'nf-md-calendar_check_outline',
    code: 0xf0c44,
  },
  {
    name: 'nf-md-calendar_clock',
    code: 0xf00f0,
  },
  {
    name: 'nf-md-calendar_clock_outline',
    code: 0xf16e1,
  },
  {
    name: 'nf-md-calendar_collapse_horizontal',
    code: 0xf189d,
  },
  {
    name: 'nf-md-calendar_cursor',
    code: 0xf157b,
  },
  {
    name: 'nf-md-calendar_edit',
    code: 0xf08a7,
  },
  {
    name: 'nf-md-calendar_end',
    code: 0xf166c,
  },
  {
    name: 'nf-md-calendar_expand_horizontal',
    code: 0xf189e,
  },
  {
    name: 'nf-md-calendar_export',
    code: 0xf0b24,
  },
  {
    name: 'nf-md-calendar_heart',
    code: 0xf09d2,
  },
  {
    name: 'nf-md-calendar_import',
    code: 0xf0b25,
  },
  {
    name: 'nf-md-calendar_lock',
    code: 0xf1641,
  },
  {
    name: 'nf-md-calendar_lock_outline',
    code: 0xf1642,
  },
  {
    name: 'nf-md-calendar_minus',
    code: 0xf0d5c,
  },
  {
    name: 'nf-md-calendar_month',
    code: 0xf0e17,
  },
  {
    name: 'nf-md-calendar_month_outline',
    code: 0xf0e18,
  },
  {
    name: 'nf-md-calendar_multiple',
    code: 0xf00f1,
  },
  {
    name: 'nf-md-calendar_multiple_check',
    code: 0xf00f2,
  },
  {
    name: 'nf-md-calendar_multiselect',
    code: 0xf0a32,
  },
  {
    name: 'nf-md-calendar_outline',
    code: 0xf0b67,
  },
  {
    name: 'nf-md-calendar_plus',
    code: 0xf00f3,
  },
  {
    name: 'nf-md-calendar_question',
    code: 0xf0692,
  },
  {
    name: 'nf-md-calendar_range',
    code: 0xf0679,
  },
  {
    name: 'nf-md-calendar_range_outline',
    code: 0xf0b68,
  },
  {
    name: 'nf-md-calendar_refresh',
    code: 0xf01e1,
  },
  {
    name: 'nf-md-calendar_refresh_outline',
    code: 0xf0203,
  },
  {
    name: 'nf-md-calendar_remove',
    code: 0xf00f4,
  },
  {
    name: 'nf-md-calendar_remove_outline',
    code: 0xf0c45,
  },
  {
    name: 'nf-md-calendar_search',
    code: 0xf094c,
  },
  {
    name: 'nf-md-calendar_star',
    code: 0xf09d3,
  },
  {
    name: 'nf-md-calendar_start',
    code: 0xf166d,
  },
  {
    name: 'nf-md-calendar_sync',
    code: 0xf0e8e,
  },
  {
    name: 'nf-md-calendar_sync_outline',
    code: 0xf0e8f,
  },
  {
    name: 'nf-md-calendar_text',
    code: 0xf00f5,
  },
  {
    name: 'nf-md-calendar_text_outline',
    code: 0xf0c46,
  },
  {
    name: 'nf-md-calendar_today',
    code: 0xf00f6,
  },
  {
    name: 'nf-md-calendar_today_outline',
    code: 0xf1a30,
  },
  {
    name: 'nf-md-calendar_week',
    code: 0xf0a33,
  },
  {
    name: 'nf-md-calendar_week_begin',
    code: 0xf0a34,
  },
  {
    name: 'nf-md-calendar_week_begin_outline',
    code: 0xf1a31,
  },
  {
    name: 'nf-md-calendar_week_end',
    code: 0xf1a32,
  },
  {
    name: 'nf-md-calendar_week_end_outline',
    code: 0xf1a33,
  },
  {
    name: 'nf-md-calendar_week_outline',
    code: 0xf1a34,
  },
  {
    name: 'nf-md-calendar_weekend',
    code: 0xf0ed9,
  },
  {
    name: 'nf-md-calendar_weekend_outline',
    code: 0xf0eda,
  },
  {
    name: 'nf-md-call_made',
    code: 0xf00f7,
  },
  {
    name: 'nf-md-call_merge',
    code: 0xf00f8,
  },
  {
    name: 'nf-md-call_missed',
    code: 0xf00f9,
  },
  {
    name: 'nf-md-call_received',
    code: 0xf00fa,
  },
  {
    name: 'nf-md-call_split',
    code: 0xf00fb,
  },
  {
    name: 'nf-md-camcorder',
    code: 0xf00fc,
  },
  {
    name: 'nf-md-camcorder_off',
    code: 0xf00ff,
  },
  {
    name: 'nf-md-camera',
    code: 0xf0100,
  },
  {
    name: 'nf-md-camera_account',
    code: 0xf08cb,
  },
  {
    name: 'nf-md-camera_burst',
    code: 0xf0693,
  },
  {
    name: 'nf-md-camera_control',
    code: 0xf0b69,
  },
  {
    name: 'nf-md-camera_document',
    code: 0xf1871,
  },
  {
    name: 'nf-md-camera_document_off',
    code: 0xf1872,
  },
  {
    name: 'nf-md-camera_enhance',
    code: 0xf0101,
  },
  {
    name: 'nf-md-camera_enhance_outline',
    code: 0xf0b6a,
  },
  {
    name: 'nf-md-camera_flip',
    code: 0xf15d9,
  },
  {
    name: 'nf-md-camera_flip_outline',
    code: 0xf15da,
  },
  {
    name: 'nf-md-camera_front',
    code: 0xf0102,
  },
  {
    name: 'nf-md-camera_front_variant',
    code: 0xf0103,
  },
  {
    name: 'nf-md-camera_gopro',
    code: 0xf07a1,
  },
  {
    name: 'nf-md-camera_image',
    code: 0xf08cc,
  },
  {
    name: 'nf-md-camera_iris',
    code: 0xf0104,
  },
  {
    name: 'nf-md-camera_lock',
    code: 0xf1a14,
  },
  {
    name: 'nf-md-camera_lock_outline',
    code: 0xf1a15,
  },
  {
    name: 'nf-md-camera_marker',
    code: 0xf19a7,
  },
  {
    name: 'nf-md-camera_marker_outline',
    code: 0xf19a8,
  },
  {
    name: 'nf-md-camera_metering_center',
    code: 0xf07a2,
  },
  {
    name: 'nf-md-camera_metering_matrix',
    code: 0xf07a3,
  },
  {
    name: 'nf-md-camera_metering_partial',
    code: 0xf07a4,
  },
  {
    name: 'nf-md-camera_metering_spot',
    code: 0xf07a5,
  },
  {
    name: 'nf-md-camera_off',
    code: 0xf05df,
  },
  {
    name: 'nf-md-camera_off_outline',
    code: 0xf19bf,
  },
  {
    name: 'nf-md-camera_outline',
    code: 0xf0d5d,
  },
  {
    name: 'nf-md-camera_party_mode',
    code: 0xf0105,
  },
  {
    name: 'nf-md-camera_plus',
    code: 0xf0edb,
  },
  {
    name: 'nf-md-camera_plus_outline',
    code: 0xf0edc,
  },
  {
    name: 'nf-md-camera_rear',
    code: 0xf0106,
  },
  {
    name: 'nf-md-camera_rear_variant',
    code: 0xf0107,
  },
  {
    name: 'nf-md-camera_retake',
    code: 0xf0e19,
  },
  {
    name: 'nf-md-camera_retake_outline',
    code: 0xf0e1a,
  },
  {
    name: 'nf-md-camera_switch',
    code: 0xf0108,
  },
  {
    name: 'nf-md-camera_switch_outline',
    code: 0xf084a,
  },
  {
    name: 'nf-md-camera_timer',
    code: 0xf0109,
  },
  {
    name: 'nf-md-camera_wireless',
    code: 0xf0db6,
  },
  {
    name: 'nf-md-camera_wireless_outline',
    code: 0xf0db7,
  },
  {
    name: 'nf-md-campfire',
    code: 0xf0edd,
  },
  {
    name: 'nf-md-cancel',
    code: 0xf073a,
  },
  {
    name: 'nf-md-candelabra',
    code: 0xf17d2,
  },
  {
    name: 'nf-md-candelabra_fire',
    code: 0xf17d3,
  },
  {
    name: 'nf-md-candle',
    code: 0xf05e2,
  },
  {
    name: 'nf-md-candy',
    code: 0xf1970,
  },
  {
    name: 'nf-md-candy_off',
    code: 0xf1971,
  },
  {
    name: 'nf-md-candy_off_outline',
    code: 0xf1972,
  },
  {
    name: 'nf-md-candy_outline',
    code: 0xf1973,
  },
  {
    name: 'nf-md-candycane',
    code: 0xf010a,
  },
  {
    name: 'nf-md-cannabis',
    code: 0xf07a6,
  },
  {
    name: 'nf-md-cannabis_off',
    code: 0xf166e,
  },
  {
    name: 'nf-md-caps_lock',
    code: 0xf0a9b,
  },
  {
    name: 'nf-md-car',
    code: 0xf010b,
  },
  {
    name: 'nf-md-car_2_plus',
    code: 0xf1015,
  },
  {
    name: 'nf-md-car_3_plus',
    code: 0xf1016,
  },
  {
    name: 'nf-md-car_arrow_left',
    code: 0xf13b2,
  },
  {
    name: 'nf-md-car_arrow_right',
    code: 0xf13b3,
  },
  {
    name: 'nf-md-car_back',
    code: 0xf0e1b,
  },
  {
    name: 'nf-md-car_battery',
    code: 0xf010c,
  },
  {
    name: 'nf-md-car_brake_abs',
    code: 0xf0c47,
  },
  {
    name: 'nf-md-car_brake_alert',
    code: 0xf0c48,
  },
  {
    name: 'nf-md-car_brake_fluid_level',
    code: 0xf1909,
  },
  {
    name: 'nf-md-car_brake_hold',
    code: 0xf0d5e,
  },
  {
    name: 'nf-md-car_brake_low_pressure',
    code: 0xf190a,
  },
  {
    name: 'nf-md-car_brake_parking',
    code: 0xf0d5f,
  },
  {
    name: 'nf-md-car_brake_retarder',
    code: 0xf1017,
  },
  {
    name: 'nf-md-car_brake_temperature',
    code: 0xf190b,
  },
  {
    name: 'nf-md-car_brake_worn_linings',
    code: 0xf190c,
  },
  {
    name: 'nf-md-car_child_seat',
    code: 0xf0fa3,
  },
  {
    name: 'nf-md-car_clock',
    code: 0xf1974,
  },
  {
    name: 'nf-md-car_clutch',
    code: 0xf1018,
  },
  {
    name: 'nf-md-car_cog',
    code: 0xf13cc,
  },
  {
    name: 'nf-md-car_connected',
    code: 0xf010d,
  },
  {
    name: 'nf-md-car_convertible',
    code: 0xf07a7,
  },
  {
    name: 'nf-md-car_coolant_level',
    code: 0xf1019,
  },
  {
    name: 'nf-md-car_cruise_control',
    code: 0xf0d60,
  },
  {
    name: 'nf-md-car_defrost_front',
    code: 0xf0d61,
  },
  {
    name: 'nf-md-car_defrost_rear',
    code: 0xf0d62,
  },
  {
    name: 'nf-md-car_door',
    code: 0xf0b6b,
  },
  {
    name: 'nf-md-car_door_lock',
    code: 0xf109d,
  },
  {
    name: 'nf-md-car_electric',
    code: 0xf0b6c,
  },
  {
    name: 'nf-md-car_electric_outline',
    code: 0xf15b5,
  },
  {
    name: 'nf-md-car_emergency',
    code: 0xf160f,
  },
  {
    name: 'nf-md-car_esp',
    code: 0xf0c49,
  },
  {
    name: 'nf-md-car_estate',
    code: 0xf07a8,
  },
  {
    name: 'nf-md-car_hatchback',
    code: 0xf07a9,
  },
  {
    name: 'nf-md-car_info',
    code: 0xf11be,
  },
  {
    name: 'nf-md-car_key',
    code: 0xf0b6d,
  },
  {
    name: 'nf-md-car_lifted_pickup',
    code: 0xf152d,
  },
  {
    name: 'nf-md-car_light_alert',
    code: 0xf190d,
  },
  {
    name: 'nf-md-car_light_dimmed',
    code: 0xf0c4a,
  },
  {
    name: 'nf-md-car_light_fog',
    code: 0xf0c4b,
  },
  {
    name: 'nf-md-car_light_high',
    code: 0xf0c4c,
  },
  {
    name: 'nf-md-car_limousine',
    code: 0xf08cd,
  },
  {
    name: 'nf-md-car_multiple',
    code: 0xf0b6e,
  },
  {
    name: 'nf-md-car_off',
    code: 0xf0e1c,
  },
  {
    name: 'nf-md-car_outline',
    code: 0xf14ed,
  },
  {
    name: 'nf-md-car_parking_lights',
    code: 0xf0d63,
  },
  {
    name: 'nf-md-car_pickup',
    code: 0xf07aa,
  },
  {
    name: 'nf-md-car_seat',
    code: 0xf0fa4,
  },
  {
    name: 'nf-md-car_seat_cooler',
    code: 0xf0fa5,
  },
  {
    name: 'nf-md-car_seat_heater',
    code: 0xf0fa6,
  },
  {
    name: 'nf-md-car_select',
    code: 0xf1879,
  },
  {
    name: 'nf-md-car_settings',
    code: 0xf13cd,
  },
  {
    name: 'nf-md-car_shift_pattern',
    code: 0xf0f40,
  },
  {
    name: 'nf-md-car_side',
    code: 0xf07ab,
  },
  {
    name: 'nf-md-car_speed_limiter',
    code: 0xf190e,
  },
  {
    name: 'nf-md-car_sports',
    code: 0xf07ac,
  },
  {
    name: 'nf-md-car_tire_alert',
    code: 0xf0c4d,
  },
  {
    name: 'nf-md-car_traction_control',
    code: 0xf0d64,
  },
  {
    name: 'nf-md-car_turbocharger',
    code: 0xf101a,
  },
  {
    name: 'nf-md-car_wash',
    code: 0xf010e,
  },
  {
    name: 'nf-md-car_windshield',
    code: 0xf101b,
  },
  {
    name: 'nf-md-car_windshield_outline',
    code: 0xf101c,
  },
  {
    name: 'nf-md-car_wireless',
    code: 0xf1878,
  },
  {
    name: 'nf-md-car_wrench',
    code: 0xf1814,
  },
  {
    name: 'nf-md-carabiner',
    code: 0xf14c0,
  },
  {
    name: 'nf-md-caravan',
    code: 0xf07ad,
  },
  {
    name: 'nf-md-card',
    code: 0xf0b6f,
  },
  {
    name: 'nf-md-card_account_details',
    code: 0xf05d2,
  },
  {
    name: 'nf-md-card_account_details_outline',
    code: 0xf0dab,
  },
  {
    name: 'nf-md-card_account_details_star',
    code: 0xf02a3,
  },
  {
    name: 'nf-md-card_account_details_star_outline',
    code: 0xf06db,
  },
  {
    name: 'nf-md-card_account_mail',
    code: 0xf018e,
  },
  {
    name: 'nf-md-card_account_mail_outline',
    code: 0xf0e98,
  },
  {
    name: 'nf-md-card_account_phone',
    code: 0xf0e99,
  },
  {
    name: 'nf-md-card_account_phone_outline',
    code: 0xf0e9a,
  },
  {
    name: 'nf-md-card_bulleted',
    code: 0xf0b70,
  },
  {
    name: 'nf-md-card_bulleted_off',
    code: 0xf0b71,
  },
  {
    name: 'nf-md-card_bulleted_off_outline',
    code: 0xf0b72,
  },
  {
    name: 'nf-md-card_bulleted_outline',
    code: 0xf0b73,
  },
  {
    name: 'nf-md-card_bulleted_settings',
    code: 0xf0b74,
  },
  {
    name: 'nf-md-card_bulleted_settings_outline',
    code: 0xf0b75,
  },
  {
    name: 'nf-md-card_minus',
    code: 0xf1600,
  },
  {
    name: 'nf-md-card_minus_outline',
    code: 0xf1601,
  },
  {
    name: 'nf-md-card_multiple',
    code: 0xf17f1,
  },
  {
    name: 'nf-md-card_multiple_outline',
    code: 0xf17f2,
  },
  {
    name: 'nf-md-card_off',
    code: 0xf1602,
  },
  {
    name: 'nf-md-card_off_outline',
    code: 0xf1603,
  },
  {
    name: 'nf-md-card_outline',
    code: 0xf0b76,
  },
  {
    name: 'nf-md-card_plus',
    code: 0xf11ff,
  },
  {
    name: 'nf-md-card_plus_outline',
    code: 0xf1200,
  },
  {
    name: 'nf-md-card_remove',
    code: 0xf1604,
  },
  {
    name: 'nf-md-card_remove_outline',
    code: 0xf1605,
  },
  {
    name: 'nf-md-card_search',
    code: 0xf1074,
  },
  {
    name: 'nf-md-card_search_outline',
    code: 0xf1075,
  },
  {
    name: 'nf-md-card_text',
    code: 0xf0b77,
  },
  {
    name: 'nf-md-card_text_outline',
    code: 0xf0b78,
  },
  {
    name: 'nf-md-cards',
    code: 0xf0638,
  },
  {
    name: 'nf-md-cards_club',
    code: 0xf08ce,
  },
  {
    name: 'nf-md-cards_club_outline',
    code: 0xf189f,
  },
  {
    name: 'nf-md-cards_diamond',
    code: 0xf08cf,
  },
  {
    name: 'nf-md-cards_diamond_outline',
    code: 0xf101d,
  },
  {
    name: 'nf-md-cards_outline',
    code: 0xf0639,
  },
  {
    name: 'nf-md-cards_playing',
    code: 0xf18a1,
  },
  {
    name: 'nf-md-cards_playing_club',
    code: 0xf18a2,
  },
  {
    name: 'nf-md-cards_playing_club_multiple',
    code: 0xf18a3,
  },
  {
    name: 'nf-md-cards_playing_club_multiple_outline',
    code: 0xf18a4,
  },
  {
    name: 'nf-md-cards_playing_club_outline',
    code: 0xf18a5,
  },
  {
    name: 'nf-md-cards_playing_diamond',
    code: 0xf18a6,
  },
  {
    name: 'nf-md-cards_playing_diamond_multiple',
    code: 0xf18a7,
  },
  {
    name: 'nf-md-cards_playing_diamond_multiple_outline',
    code: 0xf18a8,
  },
  {
    name: 'nf-md-cards_playing_diamond_outline',
    code: 0xf18a9,
  },
  {
    name: 'nf-md-cards_playing_heart',
    code: 0xf18aa,
  },
  {
    name: 'nf-md-cards_playing_heart_multiple',
    code: 0xf18ab,
  },
  {
    name: 'nf-md-cards_playing_heart_multiple_outline',
    code: 0xf18ac,
  },
  {
    name: 'nf-md-cards_playing_heart_outline',
    code: 0xf18ad,
  },
  {
    name: 'nf-md-cards_playing_outline',
    code: 0xf063a,
  },
  {
    name: 'nf-md-cards_playing_spade',
    code: 0xf18ae,
  },
  {
    name: 'nf-md-cards_playing_spade_multiple',
    code: 0xf18af,
  },
  {
    name: 'nf-md-cards_playing_spade_multiple_outline',
    code: 0xf18b0,
  },
  {
    name: 'nf-md-cards_playing_spade_outline',
    code: 0xf18b1,
  },
  {
    name: 'nf-md-cards_spade',
    code: 0xf08d1,
  },
  {
    name: 'nf-md-cards_spade_outline',
    code: 0xf18b2,
  },
  {
    name: 'nf-md-cards_variant',
    code: 0xf06c7,
  },
  {
    name: 'nf-md-carrot',
    code: 0xf010f,
  },
  {
    name: 'nf-md-cart',
    code: 0xf0110,
  },
  {
    name: 'nf-md-cart_arrow_down',
    code: 0xf0d66,
  },
  {
    name: 'nf-md-cart_arrow_right',
    code: 0xf0c4e,
  },
  {
    name: 'nf-md-cart_arrow_up',
    code: 0xf0d67,
  },
  {
    name: 'nf-md-cart_check',
    code: 0xf15ea,
  },
  {
    name: 'nf-md-cart_heart',
    code: 0xf18e0,
  },
  {
    name: 'nf-md-cart_minus',
    code: 0xf0d68,
  },
  {
    name: 'nf-md-cart_off',
    code: 0xf066b,
  },
  {
    name: 'nf-md-cart_outline',
    code: 0xf0111,
  },
  {
    name: 'nf-md-cart_plus',
    code: 0xf0112,
  },
  {
    name: 'nf-md-cart_remove',
    code: 0xf0d69,
  },
  {
    name: 'nf-md-cart_variant',
    code: 0xf15eb,
  },
  {
    name: 'nf-md-case_sensitive_alt',
    code: 0xf0113,
  },
  {
    name: 'nf-md-cash',
    code: 0xf0114,
  },
  {
    name: 'nf-md-cash_100',
    code: 0xf0115,
  },
  {
    name: 'nf-md-cash_check',
    code: 0xf14ee,
  },
  {
    name: 'nf-md-cash_clock',
    code: 0xf1a91,
  },
  {
    name: 'nf-md-cash_fast',
    code: 0xf185c,
  },
  {
    name: 'nf-md-cash_lock',
    code: 0xf14ea,
  },
  {
    name: 'nf-md-cash_lock_open',
    code: 0xf14eb,
  },
  {
    name: 'nf-md-cash_marker',
    code: 0xf0db8,
  },
  {
    name: 'nf-md-cash_minus',
    code: 0xf1260,
  },
  {
    name: 'nf-md-cash_multiple',
    code: 0xf0116,
  },
  {
    name: 'nf-md-cash_plus',
    code: 0xf1261,
  },
  {
    name: 'nf-md-cash_refund',
    code: 0xf0a9c,
  },
  {
    name: 'nf-md-cash_register',
    code: 0xf0cf4,
  },
  {
    name: 'nf-md-cash_remove',
    code: 0xf1262,
  },
  {
    name: 'nf-md-cash_sync',
    code: 0xf1a92,
  },
  {
    name: 'nf-md-cassette',
    code: 0xf09d4,
  },
  {
    name: 'nf-md-cast',
    code: 0xf0118,
  },
  {
    name: 'nf-md-cast_audio',
    code: 0xf101e,
  },
  {
    name: 'nf-md-cast_audio_variant',
    code: 0xf1749,
  },
  {
    name: 'nf-md-cast_connected',
    code: 0xf0119,
  },
  {
    name: 'nf-md-cast_education',
    code: 0xf0e1d,
  },
  {
    name: 'nf-md-cast_off',
    code: 0xf078a,
  },
  {
    name: 'nf-md-cast_variant',
    code: 0xf001f,
  },
  {
    name: 'nf-md-castle',
    code: 0xf011a,
  },
  {
    name: 'nf-md-cat',
    code: 0xf011b,
  },
  {
    name: 'nf-md-cctv',
    code: 0xf07ae,
  },
  {
    name: 'nf-md-cctv_off',
    code: 0xf185f,
  },
  {
    name: 'nf-md-ceiling_fan',
    code: 0xf1797,
  },
  {
    name: 'nf-md-ceiling_fan_light',
    code: 0xf1798,
  },
  {
    name: 'nf-md-ceiling_light',
    code: 0xf0769,
  },
  {
    name: 'nf-md-ceiling_light_multiple',
    code: 0xf18dd,
  },
  {
    name: 'nf-md-ceiling_light_multiple_outline',
    code: 0xf18de,
  },
  {
    name: 'nf-md-ceiling_light_outline',
    code: 0xf17c7,
  },
  {
    name: 'nf-md-cellphone',
    code: 0xf011c,
  },
  {
    name: 'nf-md-cellphone_arrow_down',
    code: 0xf09d5,
  },
  {
    name: 'nf-md-cellphone_arrow_down_variant',
    code: 0xf19c5,
  },
  {
    name: 'nf-md-cellphone_basic',
    code: 0xf011e,
  },
  {
    name: 'nf-md-cellphone_charging',
    code: 0xf1397,
  },
  {
    name: 'nf-md-cellphone_check',
    code: 0xf17fd,
  },
  {
    name: 'nf-md-cellphone_cog',
    code: 0xf0951,
  },
  {
    name: 'nf-md-cellphone_dock',
    code: 0xf011f,
  },
  {
    name: 'nf-md-cellphone_information',
    code: 0xf0f41,
  },
  {
    name: 'nf-md-cellphone_key',
    code: 0xf094e,
  },
  {
    name: 'nf-md-cellphone_link',
    code: 0xf0121,
  },
  {
    name: 'nf-md-cellphone_link_off',
    code: 0xf0122,
  },
  {
    name: 'nf-md-cellphone_lock',
    code: 0xf094f,
  },
  {
    name: 'nf-md-cellphone_marker',
    code: 0xf183a,
  },
  {
    name: 'nf-md-cellphone_message',
    code: 0xf08d3,
  },
  {
    name: 'nf-md-cellphone_message_off',
    code: 0xf10d2,
  },
  {
    name: 'nf-md-cellphone_nfc',
    code: 0xf0e90,
  },
  {
    name: 'nf-md-cellphone_nfc_off',
    code: 0xf12d8,
  },
  {
    name: 'nf-md-cellphone_off',
    code: 0xf0950,
  },
  {
    name: 'nf-md-cellphone_play',
    code: 0xf101f,
  },
  {
    name: 'nf-md-cellphone_remove',
    code: 0xf094d,
  },
  {
    name: 'nf-md-cellphone_screenshot',
    code: 0xf0a35,
  },
  {
    name: 'nf-md-cellphone_settings',
    code: 0xf0123,
  },
  {
    name: 'nf-md-cellphone_sound',
    code: 0xf0952,
  },
  {
    name: 'nf-md-cellphone_text',
    code: 0xf08d2,
  },
  {
    name: 'nf-md-cellphone_wireless',
    code: 0xf0815,
  },
  {
    name: 'nf-md-centos',
    code: 0xf111a,
  },
  {
    name: 'nf-md-certificate',
    code: 0xf0124,
  },
  {
    name: 'nf-md-certificate_outline',
    code: 0xf1188,
  },
  {
    name: 'nf-md-chair_rolling',
    code: 0xf0f48,
  },
  {
    name: 'nf-md-chair_school',
    code: 0xf0125,
  },
  {
    name: 'nf-md-chandelier',
    code: 0xf1793,
  },
  {
    name: 'nf-md-charity',
    code: 0xf0c4f,
  },
  {
    name: 'nf-md-chart_arc',
    code: 0xf0126,
  },
  {
    name: 'nf-md-chart_areaspline',
    code: 0xf0127,
  },
  {
    name: 'nf-md-chart_areaspline_variant',
    code: 0xf0e91,
  },
  {
    name: 'nf-md-chart_bar',
    code: 0xf0128,
  },
  {
    name: 'nf-md-chart_bar_stacked',
    code: 0xf076a,
  },
  {
    name: 'nf-md-chart_bell_curve',
    code: 0xf0c50,
  },
  {
    name: 'nf-md-chart_bell_curve_cumulative',
    code: 0xf0fa7,
  },
  {
    name: 'nf-md-chart_box',
    code: 0xf154d,
  },
  {
    name: 'nf-md-chart_box_outline',
    code: 0xf154e,
  },
  {
    name: 'nf-md-chart_box_plus_outline',
    code: 0xf154f,
  },
  {
    name: 'nf-md-chart_bubble',
    code: 0xf05e3,
  },
  {
    name: 'nf-md-chart_donut',
    code: 0xf07af,
  },
  {
    name: 'nf-md-chart_donut_variant',
    code: 0xf07b0,
  },
  {
    name: 'nf-md-chart_gantt',
    code: 0xf066c,
  },
  {
    name: 'nf-md-chart_histogram',
    code: 0xf0129,
  },
  {
    name: 'nf-md-chart_line',
    code: 0xf012a,
  },
  {
    name: 'nf-md-chart_line_stacked',
    code: 0xf076b,
  },
  {
    name: 'nf-md-chart_line_variant',
    code: 0xf07b1,
  },
  {
    name: 'nf-md-chart_multiline',
    code: 0xf08d4,
  },
  {
    name: 'nf-md-chart_multiple',
    code: 0xf1213,
  },
  {
    name: 'nf-md-chart_pie',
    code: 0xf012b,
  },
  {
    name: 'nf-md-chart_ppf',
    code: 0xf1380,
  },
  {
    name: 'nf-md-chart_sankey',
    code: 0xf11df,
  },
  {
    name: 'nf-md-chart_sankey_variant',
    code: 0xf11e0,
  },
  {
    name: 'nf-md-chart_scatter_plot',
    code: 0xf0e92,
  },
  {
    name: 'nf-md-chart_scatter_plot_hexbin',
    code: 0xf066d,
  },
  {
    name: 'nf-md-chart_timeline',
    code: 0xf066e,
  },
  {
    name: 'nf-md-chart_timeline_variant',
    code: 0xf0e93,
  },
  {
    name: 'nf-md-chart_timeline_variant_shimmer',
    code: 0xf15b6,
  },
  {
    name: 'nf-md-chart_tree',
    code: 0xf0e94,
  },
  {
    name: 'nf-md-chart_waterfall',
    code: 0xf1918,
  },
  {
    name: 'nf-md-chat',
    code: 0xf0b79,
  },
  {
    name: 'nf-md-chat_alert',
    code: 0xf0b7a,
  },
  {
    name: 'nf-md-chat_alert_outline',
    code: 0xf12c9,
  },
  {
    name: 'nf-md-chat_minus',
    code: 0xf1410,
  },
  {
    name: 'nf-md-chat_minus_outline',
    code: 0xf1413,
  },
  {
    name: 'nf-md-chat_outline',
    code: 0xf0ede,
  },
  {
    name: 'nf-md-chat_plus',
    code: 0xf140f,
  },
  {
    name: 'nf-md-chat_plus_outline',
    code: 0xf1412,
  },
  {
    name: 'nf-md-chat_processing',
    code: 0xf0b7b,
  },
  {
    name: 'nf-md-chat_processing_outline',
    code: 0xf12ca,
  },
  {
    name: 'nf-md-chat_question',
    code: 0xf1738,
  },
  {
    name: 'nf-md-chat_question_outline',
    code: 0xf1739,
  },
  {
    name: 'nf-md-chat_remove',
    code: 0xf1411,
  },
  {
    name: 'nf-md-chat_remove_outline',
    code: 0xf1414,
  },
  {
    name: 'nf-md-chat_sleep',
    code: 0xf12d1,
  },
  {
    name: 'nf-md-chat_sleep_outline',
    code: 0xf12d2,
  },
  {
    name: 'nf-md-check',
    code: 0xf012c,
  },
  {
    name: 'nf-md-check_all',
    code: 0xf012d,
  },
  {
    name: 'nf-md-check_bold',
    code: 0xf0e1e,
  },
  {
    name: 'nf-md-check_circle',
    code: 0xf05e0,
  },
  {
    name: 'nf-md-check_circle_outline',
    code: 0xf05e1,
  },
  {
    name: 'nf-md-check_decagram',
    code: 0xf0791,
  },
  {
    name: 'nf-md-check_decagram_outline',
    code: 0xf1740,
  },
  {
    name: 'nf-md-check_network',
    code: 0xf0c53,
  },
  {
    name: 'nf-md-check_network_outline',
    code: 0xf0c54,
  },
  {
    name: 'nf-md-check_outline',
    code: 0xf0855,
  },
  {
    name: 'nf-md-check_underline',
    code: 0xf0e1f,
  },
  {
    name: 'nf-md-check_underline_circle',
    code: 0xf0e20,
  },
  {
    name: 'nf-md-check_underline_circle_outline',
    code: 0xf0e21,
  },
  {
    name: 'nf-md-checkbook',
    code: 0xf0a9d,
  },
  {
    name: 'nf-md-checkbox_blank',
    code: 0xf012e,
  },
  {
    name: 'nf-md-checkbox_blank_badge',
    code: 0xf1176,
  },
  {
    name: 'nf-md-checkbox_blank_badge_outline',
    code: 0xf0117,
  },
  {
    name: 'nf-md-checkbox_blank_circle',
    code: 0xf012f,
  },
  {
    name: 'nf-md-checkbox_blank_circle_outline',
    code: 0xf0130,
  },
  {
    name: 'nf-md-checkbox_blank_off',
    code: 0xf12ec,
  },
  {
    name: 'nf-md-checkbox_blank_off_outline',
    code: 0xf12ed,
  },
  {
    name: 'nf-md-checkbox_blank_outline',
    code: 0xf0131,
  },
  {
    name: 'nf-md-checkbox_intermediate',
    code: 0xf0856,
  },
  {
    name: 'nf-md-checkbox_marked',
    code: 0xf0132,
  },
  {
    name: 'nf-md-checkbox_marked_circle',
    code: 0xf0133,
  },
  {
    name: 'nf-md-checkbox_marked_circle_outline',
    code: 0xf0134,
  },
  {
    name: 'nf-md-checkbox_marked_circle_plus_outline',
    code: 0xf1927,
  },
  {
    name: 'nf-md-checkbox_marked_outline',
    code: 0xf0135,
  },
  {
    name: 'nf-md-checkbox_multiple_blank',
    code: 0xf0136,
  },
  {
    name: 'nf-md-checkbox_multiple_blank_circle',
    code: 0xf063b,
  },
  {
    name: 'nf-md-checkbox_multiple_blank_circle_outline',
    code: 0xf063c,
  },
  {
    name: 'nf-md-checkbox_multiple_blank_outline',
    code: 0xf0137,
  },
  {
    name: 'nf-md-checkbox_multiple_marked',
    code: 0xf0138,
  },
  {
    name: 'nf-md-checkbox_multiple_marked_circle',
    code: 0xf063d,
  },
  {
    name: 'nf-md-checkbox_multiple_marked_circle_outline',
    code: 0xf063e,
  },
  {
    name: 'nf-md-checkbox_multiple_marked_outline',
    code: 0xf0139,
  },
  {
    name: 'nf-md-checkbox_multiple_outline',
    code: 0xf0c51,
  },
  {
    name: 'nf-md-checkbox_outline',
    code: 0xf0c52,
  },
  {
    name: 'nf-md-checkerboard',
    code: 0xf013a,
  },
  {
    name: 'nf-md-checkerboard_minus',
    code: 0xf1202,
  },
  {
    name: 'nf-md-checkerboard_plus',
    code: 0xf1201,
  },
  {
    name: 'nf-md-checkerboard_remove',
    code: 0xf1203,
  },
  {
    name: 'nf-md-cheese',
    code: 0xf12b9,
  },
  {
    name: 'nf-md-cheese_off',
    code: 0xf13ee,
  },
  {
    name: 'nf-md-chef_hat',
    code: 0xf0b7c,
  },
  {
    name: 'nf-md-chemical_weapon',
    code: 0xf013b,
  },
  {
    name: 'nf-md-chess_bishop',
    code: 0xf085c,
  },
  {
    name: 'nf-md-chess_king',
    code: 0xf0857,
  },
  {
    name: 'nf-md-chess_knight',
    code: 0xf0858,
  },
  {
    name: 'nf-md-chess_pawn',
    code: 0xf0859,
  },
  {
    name: 'nf-md-chess_queen',
    code: 0xf085a,
  },
  {
    name: 'nf-md-chess_rook',
    code: 0xf085b,
  },
  {
    name: 'nf-md-chevron_double_down',
    code: 0xf013c,
  },
  {
    name: 'nf-md-chevron_double_left',
    code: 0xf013d,
  },
  {
    name: 'nf-md-chevron_double_right',
    code: 0xf013e,
  },
  {
    name: 'nf-md-chevron_double_up',
    code: 0xf013f,
  },
  {
    name: 'nf-md-chevron_down',
    code: 0xf0140,
  },
  {
    name: 'nf-md-chevron_down_box',
    code: 0xf09d6,
  },
  {
    name: 'nf-md-chevron_down_box_outline',
    code: 0xf09d7,
  },
  {
    name: 'nf-md-chevron_down_circle',
    code: 0xf0b26,
  },
  {
    name: 'nf-md-chevron_down_circle_outline',
    code: 0xf0b27,
  },
  {
    name: 'nf-md-chevron_left',
    code: 0xf0141,
  },
  {
    name: 'nf-md-chevron_left_box',
    code: 0xf09d8,
  },
  {
    name: 'nf-md-chevron_left_box_outline',
    code: 0xf09d9,
  },
  {
    name: 'nf-md-chevron_left_circle',
    code: 0xf0b28,
  },
  {
    name: 'nf-md-chevron_left_circle_outline',
    code: 0xf0b29,
  },
  {
    name: 'nf-md-chevron_right',
    code: 0xf0142,
  },
  {
    name: 'nf-md-chevron_right_box',
    code: 0xf09da,
  },
  {
    name: 'nf-md-chevron_right_box_outline',
    code: 0xf09db,
  },
  {
    name: 'nf-md-chevron_right_circle',
    code: 0xf0b2a,
  },
  {
    name: 'nf-md-chevron_right_circle_outline',
    code: 0xf0b2b,
  },
  {
    name: 'nf-md-chevron_triple_down',
    code: 0xf0db9,
  },
  {
    name: 'nf-md-chevron_triple_left',
    code: 0xf0dba,
  },
  {
    name: 'nf-md-chevron_triple_right',
    code: 0xf0dbb,
  },
  {
    name: 'nf-md-chevron_triple_up',
    code: 0xf0dbc,
  },
  {
    name: 'nf-md-chevron_up',
    code: 0xf0143,
  },
  {
    name: 'nf-md-chevron_up_box',
    code: 0xf09dc,
  },
  {
    name: 'nf-md-chevron_up_box_outline',
    code: 0xf09dd,
  },
  {
    name: 'nf-md-chevron_up_circle',
    code: 0xf0b2c,
  },
  {
    name: 'nf-md-chevron_up_circle_outline',
    code: 0xf0b2d,
  },
  {
    name: 'nf-md-chili_alert',
    code: 0xf17ea,
  },
  {
    name: 'nf-md-chili_alert_outline',
    code: 0xf17eb,
  },
  {
    name: 'nf-md-chili_hot',
    code: 0xf07b2,
  },
  {
    name: 'nf-md-chili_hot_outline',
    code: 0xf17ec,
  },
  {
    name: 'nf-md-chili_medium',
    code: 0xf07b3,
  },
  {
    name: 'nf-md-chili_medium_outline',
    code: 0xf17ed,
  },
  {
    name: 'nf-md-chili_mild',
    code: 0xf07b4,
  },
  {
    name: 'nf-md-chili_mild_outline',
    code: 0xf17ee,
  },
  {
    name: 'nf-md-chili_off',
    code: 0xf1467,
  },
  {
    name: 'nf-md-chili_off_outline',
    code: 0xf17ef,
  },
  {
    name: 'nf-md-chip',
    code: 0xf061a,
  },
  {
    name: 'nf-md-church',
    code: 0xf0144,
  },
  {
    name: 'nf-md-cigar',
    code: 0xf1189,
  },
  {
    name: 'nf-md-cigar_off',
    code: 0xf141b,
  },
  {
    name: 'nf-md-circle_box',
    code: 0xf15dc,
  },
  {
    name: 'nf-md-circle_box_outline',
    code: 0xf15dd,
  },
  {
    name: 'nf-md-circle_double',
    code: 0xf0e95,
  },
  {
    name: 'nf-md-circle_edit_outline',
    code: 0xf08d5,
  },
  {
    name: 'nf-md-circle_expand',
    code: 0xf0e96,
  },
  {
    name: 'nf-md-circle_half',
    code: 0xf1395,
  },
  {
    name: 'nf-md-circle_half_full',
    code: 0xf1396,
  },
  {
    name: 'nf-md-circle_medium',
    code: 0xf09de,
  },
  {
    name: 'nf-md-circle_multiple',
    code: 0xf0b38,
  },
  {
    name: 'nf-md-circle_multiple_outline',
    code: 0xf0695,
  },
  {
    name: 'nf-md-circle_off_outline',
    code: 0xf10d3,
  },
  {
    name: 'nf-md-circle_opacity',
    code: 0xf1853,
  },
  {
    name: 'nf-md-circle_slice_1',
    code: 0xf0a9e,
  },
  {
    name: 'nf-md-circle_slice_2',
    code: 0xf0a9f,
  },
  {
    name: 'nf-md-circle_slice_3',
    code: 0xf0aa0,
  },
  {
    name: 'nf-md-circle_slice_4',
    code: 0xf0aa1,
  },
  {
    name: 'nf-md-circle_slice_5',
    code: 0xf0aa2,
  },
  {
    name: 'nf-md-circle_slice_6',
    code: 0xf0aa3,
  },
  {
    name: 'nf-md-circle_slice_7',
    code: 0xf0aa4,
  },
  {
    name: 'nf-md-circle_slice_8',
    code: 0xf0aa5,
  },
  {
    name: 'nf-md-circle_small',
    code: 0xf09df,
  },
  {
    name: 'nf-md-circular_saw',
    code: 0xf0e22,
  },
  {
    name: 'nf-md-city',
    code: 0xf0146,
  },
  {
    name: 'nf-md-city_variant',
    code: 0xf0a36,
  },
  {
    name: 'nf-md-city_variant_outline',
    code: 0xf0a37,
  },
  {
    name: 'nf-md-clipboard',
    code: 0xf0147,
  },
  {
    name: 'nf-md-clipboard_account',
    code: 0xf0148,
  },
  {
    name: 'nf-md-clipboard_account_outline',
    code: 0xf0c55,
  },
  {
    name: 'nf-md-clipboard_alert',
    code: 0xf0149,
  },
  {
    name: 'nf-md-clipboard_alert_outline',
    code: 0xf0cf7,
  },
  {
    name: 'nf-md-clipboard_arrow_down',
    code: 0xf014a,
  },
  {
    name: 'nf-md-clipboard_arrow_down_outline',
    code: 0xf0c56,
  },
  {
    name: 'nf-md-clipboard_arrow_left',
    code: 0xf014b,
  },
  {
    name: 'nf-md-clipboard_arrow_left_outline',
    code: 0xf0cf8,
  },
  {
    name: 'nf-md-clipboard_arrow_right',
    code: 0xf0cf9,
  },
  {
    name: 'nf-md-clipboard_arrow_right_outline',
    code: 0xf0cfa,
  },
  {
    name: 'nf-md-clipboard_arrow_up',
    code: 0xf0c57,
  },
  {
    name: 'nf-md-clipboard_arrow_up_outline',
    code: 0xf0c58,
  },
  {
    name: 'nf-md-clipboard_check',
    code: 0xf014e,
  },
  {
    name: 'nf-md-clipboard_check_multiple',
    code: 0xf1263,
  },
  {
    name: 'nf-md-clipboard_check_multiple_outline',
    code: 0xf1264,
  },
  {
    name: 'nf-md-clipboard_check_outline',
    code: 0xf08a8,
  },
  {
    name: 'nf-md-clipboard_clock',
    code: 0xf16e2,
  },
  {
    name: 'nf-md-clipboard_clock_outline',
    code: 0xf16e3,
  },
  {
    name: 'nf-md-clipboard_edit',
    code: 0xf14e5,
  },
  {
    name: 'nf-md-clipboard_edit_outline',
    code: 0xf14e6,
  },
  {
    name: 'nf-md-clipboard_file',
    code: 0xf1265,
  },
  {
    name: 'nf-md-clipboard_file_outline',
    code: 0xf1266,
  },
  {
    name: 'nf-md-clipboard_flow',
    code: 0xf06c8,
  },
  {
    name: 'nf-md-clipboard_flow_outline',
    code: 0xf1117,
  },
  {
    name: 'nf-md-clipboard_list',
    code: 0xf10d4,
  },
  {
    name: 'nf-md-clipboard_list_outline',
    code: 0xf10d5,
  },
  {
    name: 'nf-md-clipboard_minus',
    code: 0xf1618,
  },
  {
    name: 'nf-md-clipboard_minus_outline',
    code: 0xf1619,
  },
  {
    name: 'nf-md-clipboard_multiple',
    code: 0xf1267,
  },
  {
    name: 'nf-md-clipboard_multiple_outline',
    code: 0xf1268,
  },
  {
    name: 'nf-md-clipboard_off',
    code: 0xf161a,
  },
  {
    name: 'nf-md-clipboard_off_outline',
    code: 0xf161b,
  },
  {
    name: 'nf-md-clipboard_outline',
    code: 0xf014c,
  },
  {
    name: 'nf-md-clipboard_play',
    code: 0xf0c59,
  },
  {
    name: 'nf-md-clipboard_play_multiple',
    code: 0xf1269,
  },
  {
    name: 'nf-md-clipboard_play_multiple_outline',
    code: 0xf126a,
  },
  {
    name: 'nf-md-clipboard_play_outline',
    code: 0xf0c5a,
  },
  {
    name: 'nf-md-clipboard_plus',
    code: 0xf0751,
  },
  {
    name: 'nf-md-clipboard_plus_outline',
    code: 0xf131f,
  },
  {
    name: 'nf-md-clipboard_pulse',
    code: 0xf085d,
  },
  {
    name: 'nf-md-clipboard_pulse_outline',
    code: 0xf085e,
  },
  {
    name: 'nf-md-clipboard_remove',
    code: 0xf161c,
  },
  {
    name: 'nf-md-clipboard_remove_outline',
    code: 0xf161d,
  },
  {
    name: 'nf-md-clipboard_search',
    code: 0xf161e,
  },
  {
    name: 'nf-md-clipboard_search_outline',
    code: 0xf161f,
  },
  {
    name: 'nf-md-clipboard_text',
    code: 0xf014d,
  },
  {
    name: 'nf-md-clipboard_text_clock',
    code: 0xf18f9,
  },
  {
    name: 'nf-md-clipboard_text_clock_outline',
    code: 0xf18fa,
  },
  {
    name: 'nf-md-clipboard_text_multiple',
    code: 0xf126b,
  },
  {
    name: 'nf-md-clipboard_text_multiple_outline',
    code: 0xf126c,
  },
  {
    name: 'nf-md-clipboard_text_off',
    code: 0xf1620,
  },
  {
    name: 'nf-md-clipboard_text_off_outline',
    code: 0xf1621,
  },
  {
    name: 'nf-md-clipboard_text_outline',
    code: 0xf0a38,
  },
  {
    name: 'nf-md-clipboard_text_play',
    code: 0xf0c5b,
  },
  {
    name: 'nf-md-clipboard_text_play_outline',
    code: 0xf0c5c,
  },
  {
    name: 'nf-md-clipboard_text_search',
    code: 0xf1622,
  },
  {
    name: 'nf-md-clipboard_text_search_outline',
    code: 0xf1623,
  },
  {
    name: 'nf-md-clippy',
    code: 0xf014f,
  },
  {
    name: 'nf-md-clock',
    code: 0xf0954,
  },
  {
    name: 'nf-md-clock_alert',
    code: 0xf0955,
  },
  {
    name: 'nf-md-clock_alert_outline',
    code: 0xf05ce,
  },
  {
    name: 'nf-md-clock_check',
    code: 0xf0fa8,
  },
  {
    name: 'nf-md-clock_check_outline',
    code: 0xf0fa9,
  },
  {
    name: 'nf-md-clock_digital',
    code: 0xf0e97,
  },
  {
    name: 'nf-md-clock_edit',
    code: 0xf19ba,
  },
  {
    name: 'nf-md-clock_edit_outline',
    code: 0xf19bb,
  },
  {
    name: 'nf-md-clock_end',
    code: 0xf0151,
  },
  {
    name: 'nf-md-clock_fast',
    code: 0xf0152,
  },
  {
    name: 'nf-md-clock_in',
    code: 0xf0153,
  },
  {
    name: 'nf-md-clock_minus',
    code: 0xf1863,
  },
  {
    name: 'nf-md-clock_minus_outline',
    code: 0xf1864,
  },
  {
    name: 'nf-md-clock_out',
    code: 0xf0154,
  },
  {
    name: 'nf-md-clock_outline',
    code: 0xf0150,
  },
  {
    name: 'nf-md-clock_plus',
    code: 0xf1861,
  },
  {
    name: 'nf-md-clock_plus_outline',
    code: 0xf1862,
  },
  {
    name: 'nf-md-clock_remove',
    code: 0xf1865,
  },
  {
    name: 'nf-md-clock_remove_outline',
    code: 0xf1866,
  },
  {
    name: 'nf-md-clock_start',
    code: 0xf0155,
  },
  {
    name: 'nf-md-clock_time_eight',
    code: 0xf1446,
  },
  {
    name: 'nf-md-clock_time_eight_outline',
    code: 0xf1452,
  },
  {
    name: 'nf-md-clock_time_eleven',
    code: 0xf1449,
  },
  {
    name: 'nf-md-clock_time_eleven_outline',
    code: 0xf1455,
  },
  {
    name: 'nf-md-clock_time_five',
    code: 0xf1443,
  },
  {
    name: 'nf-md-clock_time_five_outline',
    code: 0xf144f,
  },
  {
    name: 'nf-md-clock_time_four',
    code: 0xf1442,
  },
  {
    name: 'nf-md-clock_time_four_outline',
    code: 0xf144e,
  },
  {
    name: 'nf-md-clock_time_nine',
    code: 0xf1447,
  },
  {
    name: 'nf-md-clock_time_nine_outline',
    code: 0xf1453,
  },
  {
    name: 'nf-md-clock_time_one',
    code: 0xf143f,
  },
  {
    name: 'nf-md-clock_time_one_outline',
    code: 0xf144b,
  },
  {
    name: 'nf-md-clock_time_seven',
    code: 0xf1445,
  },
  {
    name: 'nf-md-clock_time_seven_outline',
    code: 0xf1451,
  },
  {
    name: 'nf-md-clock_time_six',
    code: 0xf1444,
  },
  {
    name: 'nf-md-clock_time_six_outline',
    code: 0xf1450,
  },
  {
    name: 'nf-md-clock_time_ten',
    code: 0xf1448,
  },
  {
    name: 'nf-md-clock_time_ten_outline',
    code: 0xf1454,
  },
  {
    name: 'nf-md-clock_time_three',
    code: 0xf1441,
  },
  {
    name: 'nf-md-clock_time_three_outline',
    code: 0xf144d,
  },
  {
    name: 'nf-md-clock_time_twelve',
    code: 0xf144a,
  },
  {
    name: 'nf-md-clock_time_twelve_outline',
    code: 0xf1456,
  },
  {
    name: 'nf-md-clock_time_two',
    code: 0xf1440,
  },
  {
    name: 'nf-md-clock_time_two_outline',
    code: 0xf144c,
  },
  {
    name: 'nf-md-close',
    code: 0xf0156,
  },
  {
    name: 'nf-md-close_box',
    code: 0xf0157,
  },
  {
    name: 'nf-md-close_box_multiple',
    code: 0xf0c5d,
  },
  {
    name: 'nf-md-close_box_multiple_outline',
    code: 0xf0c5e,
  },
  {
    name: 'nf-md-close_box_outline',
    code: 0xf0158,
  },
  {
    name: 'nf-md-close_circle',
    code: 0xf0159,
  },
  {
    name: 'nf-md-close_circle_multiple',
    code: 0xf062a,
  },
  {
    name: 'nf-md-close_circle_multiple_outline',
    code: 0xf0883,
  },
  {
    name: 'nf-md-close_circle_outline',
    code: 0xf015a,
  },
  {
    name: 'nf-md-close_network',
    code: 0xf015b,
  },
  {
    name: 'nf-md-close_network_outline',
    code: 0xf0c5f,
  },
  {
    name: 'nf-md-close_octagon',
    code: 0xf015c,
  },
  {
    name: 'nf-md-close_octagon_outline',
    code: 0xf015d,
  },
  {
    name: 'nf-md-close_outline',
    code: 0xf06c9,
  },
  {
    name: 'nf-md-close_thick',
    code: 0xf1398,
  },
  {
    name: 'nf-md-closed_caption',
    code: 0xf015e,
  },
  {
    name: 'nf-md-closed_caption_outline',
    code: 0xf0dbd,
  },
  {
    name: 'nf-md-cloud',
    code: 0xf015f,
  },
  {
    name: 'nf-md-cloud_alert',
    code: 0xf09e0,
  },
  {
    name: 'nf-md-cloud_braces',
    code: 0xf07b5,
  },
  {
    name: 'nf-md-cloud_check',
    code: 0xf0160,
  },
  {
    name: 'nf-md-cloud_check_outline',
    code: 0xf12cc,
  },
  {
    name: 'nf-md-cloud_circle',
    code: 0xf0161,
  },
  {
    name: 'nf-md-cloud_download',
    code: 0xf0162,
  },
  {
    name: 'nf-md-cloud_download_outline',
    code: 0xf0b7d,
  },
  {
    name: 'nf-md-cloud_lock',
    code: 0xf11f1,
  },
  {
    name: 'nf-md-cloud_lock_outline',
    code: 0xf11f2,
  },
  {
    name: 'nf-md-cloud_off_outline',
    code: 0xf0164,
  },
  {
    name: 'nf-md-cloud_outline',
    code: 0xf0163,
  },
  {
    name: 'nf-md-cloud_percent',
    code: 0xf1a35,
  },
  {
    name: 'nf-md-cloud_percent_outline',
    code: 0xf1a36,
  },
  {
    name: 'nf-md-cloud_print',
    code: 0xf0165,
  },
  {
    name: 'nf-md-cloud_print_outline',
    code: 0xf0166,
  },
  {
    name: 'nf-md-cloud_question',
    code: 0xf0a39,
  },
  {
    name: 'nf-md-cloud_refresh',
    code: 0xf052a,
  },
  {
    name: 'nf-md-cloud_search',
    code: 0xf0956,
  },
  {
    name: 'nf-md-cloud_search_outline',
    code: 0xf0957,
  },
  {
    name: 'nf-md-cloud_sync',
    code: 0xf063f,
  },
  {
    name: 'nf-md-cloud_sync_outline',
    code: 0xf12d6,
  },
  {
    name: 'nf-md-cloud_tags',
    code: 0xf07b6,
  },
  {
    name: 'nf-md-cloud_upload',
    code: 0xf0167,
  },
  {
    name: 'nf-md-cloud_upload_outline',
    code: 0xf0b7e,
  },
  {
    name: 'nf-md-clover',
    code: 0xf0816,
  },
  {
    name: 'nf-md-coach_lamp',
    code: 0xf1020,
  },
  {
    name: 'nf-md-coach_lamp_variant',
    code: 0xf1a37,
  },
  {
    name: 'nf-md-coat_rack',
    code: 0xf109e,
  },
  {
    name: 'nf-md-code_array',
    code: 0xf0168,
  },
  {
    name: 'nf-md-code_braces',
    code: 0xf0169,
  },
  {
    name: 'nf-md-code_braces_box',
    code: 0xf10d6,
  },
  {
    name: 'nf-md-code_brackets',
    code: 0xf016a,
  },
  {
    name: 'nf-md-code_equal',
    code: 0xf016b,
  },
  {
    name: 'nf-md-code_greater_than',
    code: 0xf016c,
  },
  {
    name: 'nf-md-code_greater_than_or_equal',
    code: 0xf016d,
  },
  {
    name: 'nf-md-code_json',
    code: 0xf0626,
  },
  {
    name: 'nf-md-code_less_than',
    code: 0xf016e,
  },
  {
    name: 'nf-md-code_less_than_or_equal',
    code: 0xf016f,
  },
  {
    name: 'nf-md-code_not_equal',
    code: 0xf0170,
  },
  {
    name: 'nf-md-code_not_equal_variant',
    code: 0xf0171,
  },
  {
    name: 'nf-md-code_parentheses',
    code: 0xf0172,
  },
  {
    name: 'nf-md-code_parentheses_box',
    code: 0xf10d7,
  },
  {
    name: 'nf-md-code_string',
    code: 0xf0173,
  },
  {
    name: 'nf-md-code_tags',
    code: 0xf0174,
  },
  {
    name: 'nf-md-code_tags_check',
    code: 0xf0694,
  },
  {
    name: 'nf-md-codepen',
    code: 0xf0175,
  },
  {
    name: 'nf-md-coffee',
    code: 0xf0176,
  },
  {
    name: 'nf-md-coffee_maker',
    code: 0xf109f,
  },
  {
    name: 'nf-md-coffee_maker_check',
    code: 0xf1931,
  },
  {
    name: 'nf-md-coffee_maker_check_outline',
    code: 0xf1932,
  },
  {
    name: 'nf-md-coffee_maker_outline',
    code: 0xf181b,
  },
  {
    name: 'nf-md-coffee_off',
    code: 0xf0faa,
  },
  {
    name: 'nf-md-coffee_off_outline',
    code: 0xf0fab,
  },
  {
    name: 'nf-md-coffee_outline',
    code: 0xf06ca,
  },
  {
    name: 'nf-md-coffee_to_go',
    code: 0xf0177,
  },
  {
    name: 'nf-md-coffee_to_go_outline',
    code: 0xf130e,
  },
  {
    name: 'nf-md-coffin',
    code: 0xf0b7f,
  },
  {
    name: 'nf-md-cog',
    code: 0xf0493,
  },
  {
    name: 'nf-md-cog_box',
    code: 0xf0494,
  },
  {
    name: 'nf-md-cog_clockwise',
    code: 0xf11dd,
  },
  {
    name: 'nf-md-cog_counterclockwise',
    code: 0xf11de,
  },
  {
    name: 'nf-md-cog_off',
    code: 0xf13ce,
  },
  {
    name: 'nf-md-cog_off_outline',
    code: 0xf13cf,
  },
  {
    name: 'nf-md-cog_outline',
    code: 0xf08bb,
  },
  {
    name: 'nf-md-cog_pause',
    code: 0xf1933,
  },
  {
    name: 'nf-md-cog_pause_outline',
    code: 0xf1934,
  },
  {
    name: 'nf-md-cog_play',
    code: 0xf1935,
  },
  {
    name: 'nf-md-cog_play_outline',
    code: 0xf1936,
  },
  {
    name: 'nf-md-cog_refresh',
    code: 0xf145e,
  },
  {
    name: 'nf-md-cog_refresh_outline',
    code: 0xf145f,
  },
  {
    name: 'nf-md-cog_stop',
    code: 0xf1937,
  },
  {
    name: 'nf-md-cog_stop_outline',
    code: 0xf1938,
  },
  {
    name: 'nf-md-cog_sync',
    code: 0xf1460,
  },
  {
    name: 'nf-md-cog_sync_outline',
    code: 0xf1461,
  },
  {
    name: 'nf-md-cog_transfer',
    code: 0xf105b,
  },
  {
    name: 'nf-md-cog_transfer_outline',
    code: 0xf105c,
  },
  {
    name: 'nf-md-cogs',
    code: 0xf08d6,
  },
  {
    name: 'nf-md-collage',
    code: 0xf0640,
  },
  {
    name: 'nf-md-collapse_all',
    code: 0xf0aa6,
  },
  {
    name: 'nf-md-collapse_all_outline',
    code: 0xf0aa7,
  },
  {
    name: 'nf-md-color_helper',
    code: 0xf0179,
  },
  {
    name: 'nf-md-comma',
    code: 0xf0e23,
  },
  {
    name: 'nf-md-comma_box',
    code: 0xf0e2b,
  },
  {
    name: 'nf-md-comma_box_outline',
    code: 0xf0e24,
  },
  {
    name: 'nf-md-comma_circle',
    code: 0xf0e25,
  },
  {
    name: 'nf-md-comma_circle_outline',
    code: 0xf0e26,
  },
  {
    name: 'nf-md-comment',
    code: 0xf017a,
  },
  {
    name: 'nf-md-comment_account',
    code: 0xf017b,
  },
  {
    name: 'nf-md-comment_account_outline',
    code: 0xf017c,
  },
  {
    name: 'nf-md-comment_alert',
    code: 0xf017d,
  },
  {
    name: 'nf-md-comment_alert_outline',
    code: 0xf017e,
  },
  {
    name: 'nf-md-comment_arrow_left',
    code: 0xf09e1,
  },
  {
    name: 'nf-md-comment_arrow_left_outline',
    code: 0xf09e2,
  },
  {
    name: 'nf-md-comment_arrow_right',
    code: 0xf09e3,
  },
  {
    name: 'nf-md-comment_arrow_right_outline',
    code: 0xf09e4,
  },
  {
    name: 'nf-md-comment_bookmark',
    code: 0xf15ae,
  },
  {
    name: 'nf-md-comment_bookmark_outline',
    code: 0xf15af,
  },
  {
    name: 'nf-md-comment_check',
    code: 0xf017f,
  },
  {
    name: 'nf-md-comment_check_outline',
    code: 0xf0180,
  },
  {
    name: 'nf-md-comment_edit',
    code: 0xf11bf,
  },
  {
    name: 'nf-md-comment_edit_outline',
    code: 0xf12c4,
  },
  {
    name: 'nf-md-comment_eye',
    code: 0xf0a3a,
  },
  {
    name: 'nf-md-comment_eye_outline',
    code: 0xf0a3b,
  },
  {
    name: 'nf-md-comment_flash',
    code: 0xf15b0,
  },
  {
    name: 'nf-md-comment_flash_outline',
    code: 0xf15b1,
  },
  {
    name: 'nf-md-comment_minus',
    code: 0xf15df,
  },
  {
    name: 'nf-md-comment_minus_outline',
    code: 0xf15e0,
  },
  {
    name: 'nf-md-comment_multiple',
    code: 0xf085f,
  },
  {
    name: 'nf-md-comment_multiple_outline',
    code: 0xf0181,
  },
  {
    name: 'nf-md-comment_off',
    code: 0xf15e1,
  },
  {
    name: 'nf-md-comment_off_outline',
    code: 0xf15e2,
  },
  {
    name: 'nf-md-comment_outline',
    code: 0xf0182,
  },
  {
    name: 'nf-md-comment_plus',
    code: 0xf09e5,
  },
  {
    name: 'nf-md-comment_plus_outline',
    code: 0xf0183,
  },
  {
    name: 'nf-md-comment_processing',
    code: 0xf0184,
  },
  {
    name: 'nf-md-comment_processing_outline',
    code: 0xf0185,
  },
  {
    name: 'nf-md-comment_question',
    code: 0xf0817,
  },
  {
    name: 'nf-md-comment_question_outline',
    code: 0xf0186,
  },
  {
    name: 'nf-md-comment_quote',
    code: 0xf1021,
  },
  {
    name: 'nf-md-comment_quote_outline',
    code: 0xf1022,
  },
  {
    name: 'nf-md-comment_remove',
    code: 0xf05de,
  },
  {
    name: 'nf-md-comment_remove_outline',
    code: 0xf0187,
  },
  {
    name: 'nf-md-comment_search',
    code: 0xf0a3c,
  },
  {
    name: 'nf-md-comment_search_outline',
    code: 0xf0a3d,
  },
  {
    name: 'nf-md-comment_text',
    code: 0xf0188,
  },
  {
    name: 'nf-md-comment_text_multiple',
    code: 0xf0860,
  },
  {
    name: 'nf-md-comment_text_multiple_outline',
    code: 0xf0861,
  },
  {
    name: 'nf-md-comment_text_outline',
    code: 0xf0189,
  },
  {
    name: 'nf-md-compare',
    code: 0xf018a,
  },
  {
    name: 'nf-md-compare_horizontal',
    code: 0xf1492,
  },
  {
    name: 'nf-md-compare_remove',
    code: 0xf18b3,
  },
  {
    name: 'nf-md-compare_vertical',
    code: 0xf1493,
  },
  {
    name: 'nf-md-compass',
    code: 0xf018b,
  },
  {
    name: 'nf-md-compass_off',
    code: 0xf0b80,
  },
  {
    name: 'nf-md-compass_off_outline',
    code: 0xf0b81,
  },
  {
    name: 'nf-md-compass_outline',
    code: 0xf018c,
  },
  {
    name: 'nf-md-compass_rose',
    code: 0xf1382,
  },
  {
    name: 'nf-md-compost',
    code: 0xf1a38,
  },
  {
    name: 'nf-md-cone',
    code: 0xf194c,
  },
  {
    name: 'nf-md-cone_off',
    code: 0xf194d,
  },
  {
    name: 'nf-md-connection',
    code: 0xf1616,
  },
  {
    name: 'nf-md-console',
    code: 0xf018d,
  },
  {
    name: 'nf-md-console_line',
    code: 0xf07b7,
  },
  {
    name: 'nf-md-console_network',
    code: 0xf08a9,
  },
  {
    name: 'nf-md-console_network_outline',
    code: 0xf0c60,
  },
  {
    name: 'nf-md-consolidate',
    code: 0xf10d8,
  },
  {
    name: 'nf-md-contactless_payment',
    code: 0xf0d6a,
  },
  {
    name: 'nf-md-contactless_payment_circle',
    code: 0xf0321,
  },
  {
    name: 'nf-md-contactless_payment_circle_outline',
    code: 0xf0408,
  },
  {
    name: 'nf-md-contacts',
    code: 0xf06cb,
  },
  {
    name: 'nf-md-contacts_outline',
    code: 0xf05b8,
  },
  {
    name: 'nf-md-contain',
    code: 0xf0a3e,
  },
  {
    name: 'nf-md-contain_end',
    code: 0xf0a3f,
  },
  {
    name: 'nf-md-contain_start',
    code: 0xf0a40,
  },
  {
    name: 'nf-md-content_copy',
    code: 0xf018f,
  },
  {
    name: 'nf-md-content_cut',
    code: 0xf0190,
  },
  {
    name: 'nf-md-content_duplicate',
    code: 0xf0191,
  },
  {
    name: 'nf-md-content_paste',
    code: 0xf0192,
  },
  {
    name: 'nf-md-content_save',
    code: 0xf0193,
  },
  {
    name: 'nf-md-content_save_alert',
    code: 0xf0f42,
  },
  {
    name: 'nf-md-content_save_alert_outline',
    code: 0xf0f43,
  },
  {
    name: 'nf-md-content_save_all',
    code: 0xf0194,
  },
  {
    name: 'nf-md-content_save_all_outline',
    code: 0xf0f44,
  },
  {
    name: 'nf-md-content_save_check',
    code: 0xf18ea,
  },
  {
    name: 'nf-md-content_save_check_outline',
    code: 0xf18eb,
  },
  {
    name: 'nf-md-content_save_cog',
    code: 0xf145b,
  },
  {
    name: 'nf-md-content_save_cog_outline',
    code: 0xf145c,
  },
  {
    name: 'nf-md-content_save_edit',
    code: 0xf0cfb,
  },
  {
    name: 'nf-md-content_save_edit_outline',
    code: 0xf0cfc,
  },
  {
    name: 'nf-md-content_save_move',
    code: 0xf0e27,
  },
  {
    name: 'nf-md-content_save_move_outline',
    code: 0xf0e28,
  },
  {
    name: 'nf-md-content_save_off',
    code: 0xf1643,
  },
  {
    name: 'nf-md-content_save_off_outline',
    code: 0xf1644,
  },
  {
    name: 'nf-md-content_save_outline',
    code: 0xf0818,
  },
  {
    name: 'nf-md-content_save_settings',
    code: 0xf061b,
  },
  {
    name: 'nf-md-content_save_settings_outline',
    code: 0xf0b2e,
  },
  {
    name: 'nf-md-contrast',
    code: 0xf0195,
  },
  {
    name: 'nf-md-contrast_box',
    code: 0xf0196,
  },
  {
    name: 'nf-md-contrast_circle',
    code: 0xf0197,
  },
  {
    name: 'nf-md-controller_classic',
    code: 0xf0b82,
  },
  {
    name: 'nf-md-controller_classic_outline',
    code: 0xf0b83,
  },
  {
    name: 'nf-md-cookie',
    code: 0xf0198,
  },
  {
    name: 'nf-md-cookie_alert',
    code: 0xf16d0,
  },
  {
    name: 'nf-md-cookie_alert_outline',
    code: 0xf16d1,
  },
  {
    name: 'nf-md-cookie_check',
    code: 0xf16d2,
  },
  {
    name: 'nf-md-cookie_check_outline',
    code: 0xf16d3,
  },
  {
    name: 'nf-md-cookie_clock',
    code: 0xf16e4,
  },
  {
    name: 'nf-md-cookie_clock_outline',
    code: 0xf16e5,
  },
  {
    name: 'nf-md-cookie_cog',
    code: 0xf16d4,
  },
  {
    name: 'nf-md-cookie_cog_outline',
    code: 0xf16d5,
  },
  {
    name: 'nf-md-cookie_edit',
    code: 0xf16e6,
  },
  {
    name: 'nf-md-cookie_edit_outline',
    code: 0xf16e7,
  },
  {
    name: 'nf-md-cookie_lock',
    code: 0xf16e8,
  },
  {
    name: 'nf-md-cookie_lock_outline',
    code: 0xf16e9,
  },
  {
    name: 'nf-md-cookie_minus',
    code: 0xf16da,
  },
  {
    name: 'nf-md-cookie_minus_outline',
    code: 0xf16db,
  },
  {
    name: 'nf-md-cookie_off',
    code: 0xf16ea,
  },
  {
    name: 'nf-md-cookie_off_outline',
    code: 0xf16eb,
  },
  {
    name: 'nf-md-cookie_outline',
    code: 0xf16de,
  },
  {
    name: 'nf-md-cookie_plus',
    code: 0xf16d6,
  },
  {
    name: 'nf-md-cookie_plus_outline',
    code: 0xf16d7,
  },
  {
    name: 'nf-md-cookie_refresh',
    code: 0xf16ec,
  },
  {
    name: 'nf-md-cookie_refresh_outline',
    code: 0xf16ed,
  },
  {
    name: 'nf-md-cookie_remove',
    code: 0xf16d8,
  },
  {
    name: 'nf-md-cookie_remove_outline',
    code: 0xf16d9,
  },
  {
    name: 'nf-md-cookie_settings',
    code: 0xf16dc,
  },
  {
    name: 'nf-md-cookie_settings_outline',
    code: 0xf16dd,
  },
  {
    name: 'nf-md-coolant_temperature',
    code: 0xf03c8,
  },
  {
    name: 'nf-md-copyleft',
    code: 0xf1939,
  },
  {
    name: 'nf-md-copyright',
    code: 0xf05e6,
  },
  {
    name: 'nf-md-cordova',
    code: 0xf0958,
  },
  {
    name: 'nf-md-corn',
    code: 0xf07b8,
  },
  {
    name: 'nf-md-corn_off',
    code: 0xf13ef,
  },
  {
    name: 'nf-md-cosine_wave',
    code: 0xf1479,
  },
  {
    name: 'nf-md-counter',
    code: 0xf0199,
  },
  {
    name: 'nf-md-countertop',
    code: 0xf181c,
  },
  {
    name: 'nf-md-countertop_outline',
    code: 0xf181d,
  },
  {
    name: 'nf-md-cow',
    code: 0xf019a,
  },
  {
    name: 'nf-md-cow_off',
    code: 0xf18fc,
  },
  {
    name: 'nf-md-cpu_32_bit',
    code: 0xf0edf,
  },
  {
    name: 'nf-md-cpu_64_bit',
    code: 0xf0ee0,
  },
  {
    name: 'nf-md-cradle',
    code: 0xf198b,
  },
  {
    name: 'nf-md-cradle_outline',
    code: 0xf1991,
  },
  {
    name: 'nf-md-crane',
    code: 0xf0862,
  },
  {
    name: 'nf-md-creation',
    code: 0xf0674,
  },
  {
    name: 'nf-md-creative_commons',
    code: 0xf0d6b,
  },
  {
    name: 'nf-md-credit_card',
    code: 0xf0fef,
  },
  {
    name: 'nf-md-credit_card_check',
    code: 0xf13d0,
  },
  {
    name: 'nf-md-credit_card_check_outline',
    code: 0xf13d1,
  },
  {
    name: 'nf-md-credit_card_chip',
    code: 0xf190f,
  },
  {
    name: 'nf-md-credit_card_chip_outline',
    code: 0xf1910,
  },
  {
    name: 'nf-md-credit_card_clock',
    code: 0xf0ee1,
  },
  {
    name: 'nf-md-credit_card_clock_outline',
    code: 0xf0ee2,
  },
  {
    name: 'nf-md-credit_card_edit',
    code: 0xf17d7,
  },
  {
    name: 'nf-md-credit_card_edit_outline',
    code: 0xf17d8,
  },
  {
    name: 'nf-md-credit_card_fast',
    code: 0xf1911,
  },
  {
    name: 'nf-md-credit_card_fast_outline',
    code: 0xf1912,
  },
  {
    name: 'nf-md-credit_card_lock',
    code: 0xf18e7,
  },
  {
    name: 'nf-md-credit_card_lock_outline',
    code: 0xf18e8,
  },
  {
    name: 'nf-md-credit_card_marker',
    code: 0xf06a8,
  },
  {
    name: 'nf-md-credit_card_marker_outline',
    code: 0xf0dbe,
  },
  {
    name: 'nf-md-credit_card_minus',
    code: 0xf0fac,
  },
  {
    name: 'nf-md-credit_card_minus_outline',
    code: 0xf0fad,
  },
  {
    name: 'nf-md-credit_card_multiple',
    code: 0xf0ff0,
  },
  {
    name: 'nf-md-credit_card_multiple_outline',
    code: 0xf019c,
  },
  {
    name: 'nf-md-credit_card_off',
    code: 0xf0ff1,
  },
  {
    name: 'nf-md-credit_card_off_outline',
    code: 0xf05e4,
  },
  {
    name: 'nf-md-credit_card_outline',
    code: 0xf019b,
  },
  {
    name: 'nf-md-credit_card_plus',
    code: 0xf0ff2,
  },
  {
    name: 'nf-md-credit_card_plus_outline',
    code: 0xf0676,
  },
  {
    name: 'nf-md-credit_card_refresh',
    code: 0xf1645,
  },
  {
    name: 'nf-md-credit_card_refresh_outline',
    code: 0xf1646,
  },
  {
    name: 'nf-md-credit_card_refund',
    code: 0xf0ff3,
  },
  {
    name: 'nf-md-credit_card_refund_outline',
    code: 0xf0aa8,
  },
  {
    name: 'nf-md-credit_card_remove',
    code: 0xf0fae,
  },
  {
    name: 'nf-md-credit_card_remove_outline',
    code: 0xf0faf,
  },
  {
    name: 'nf-md-credit_card_scan',
    code: 0xf0ff4,
  },
  {
    name: 'nf-md-credit_card_scan_outline',
    code: 0xf019d,
  },
  {
    name: 'nf-md-credit_card_search',
    code: 0xf1647,
  },
  {
    name: 'nf-md-credit_card_search_outline',
    code: 0xf1648,
  },
  {
    name: 'nf-md-credit_card_settings',
    code: 0xf0ff5,
  },
  {
    name: 'nf-md-credit_card_settings_outline',
    code: 0xf08d7,
  },
  {
    name: 'nf-md-credit_card_sync',
    code: 0xf1649,
  },
  {
    name: 'nf-md-credit_card_sync_outline',
    code: 0xf164a,
  },
  {
    name: 'nf-md-credit_card_wireless',
    code: 0xf0802,
  },
  {
    name: 'nf-md-credit_card_wireless_off',
    code: 0xf057a,
  },
  {
    name: 'nf-md-credit_card_wireless_off_outline',
    code: 0xf057b,
  },
  {
    name: 'nf-md-credit_card_wireless_outline',
    code: 0xf0d6c,
  },
  {
    name: 'nf-md-cricket',
    code: 0xf0d6d,
  },
  {
    name: 'nf-md-crop',
    code: 0xf019e,
  },
  {
    name: 'nf-md-crop_free',
    code: 0xf019f,
  },
  {
    name: 'nf-md-crop_landscape',
    code: 0xf01a0,
  },
  {
    name: 'nf-md-crop_portrait',
    code: 0xf01a1,
  },
  {
    name: 'nf-md-crop_rotate',
    code: 0xf0696,
  },
  {
    name: 'nf-md-crop_square',
    code: 0xf01a2,
  },
  {
    name: 'nf-md-cross',
    code: 0xf0953,
  },
  {
    name: 'nf-md-cross_bolnisi',
    code: 0xf0ced,
  },
  {
    name: 'nf-md-cross_celtic',
    code: 0xf0cf5,
  },
  {
    name: 'nf-md-cross_outline',
    code: 0xf0cf6,
  },
  {
    name: 'nf-md-crosshairs',
    code: 0xf01a3,
  },
  {
    name: 'nf-md-crosshairs_gps',
    code: 0xf01a4,
  },
  {
    name: 'nf-md-crosshairs_off',
    code: 0xf0f45,
  },
  {
    name: 'nf-md-crosshairs_question',
    code: 0xf1136,
  },
  {
    name: 'nf-md-crowd',
    code: 0xf1975,
  },
  {
    name: 'nf-md-crown',
    code: 0xf01a5,
  },
  {
    name: 'nf-md-crown_circle',
    code: 0xf17dc,
  },
  {
    name: 'nf-md-crown_circle_outline',
    code: 0xf17dd,
  },
  {
    name: 'nf-md-crown_outline',
    code: 0xf11d0,
  },
  {
    name: 'nf-md-cryengine',
    code: 0xf0959,
  },
  {
    name: 'nf-md-crystal_ball',
    code: 0xf0b2f,
  },
  {
    name: 'nf-md-cube',
    code: 0xf01a6,
  },
  {
    name: 'nf-md-cube_off',
    code: 0xf141c,
  },
  {
    name: 'nf-md-cube_off_outline',
    code: 0xf141d,
  },
  {
    name: 'nf-md-cube_outline',
    code: 0xf01a7,
  },
  {
    name: 'nf-md-cube_scan',
    code: 0xf0b84,
  },
  {
    name: 'nf-md-cube_send',
    code: 0xf01a8,
  },
  {
    name: 'nf-md-cube_unfolded',
    code: 0xf01a9,
  },
  {
    name: 'nf-md-cup',
    code: 0xf01aa,
  },
  {
    name: 'nf-md-cup_off',
    code: 0xf05e5,
  },
  {
    name: 'nf-md-cup_off_outline',
    code: 0xf137d,
  },
  {
    name: 'nf-md-cup_outline',
    code: 0xf130f,
  },
  {
    name: 'nf-md-cup_water',
    code: 0xf01ab,
  },
  {
    name: 'nf-md-cupboard',
    code: 0xf0f46,
  },
  {
    name: 'nf-md-cupboard_outline',
    code: 0xf0f47,
  },
  {
    name: 'nf-md-cupcake',
    code: 0xf095a,
  },
  {
    name: 'nf-md-curling',
    code: 0xf0863,
  },
  {
    name: 'nf-md-currency_bdt',
    code: 0xf0864,
  },
  {
    name: 'nf-md-currency_brl',
    code: 0xf0b85,
  },
  {
    name: 'nf-md-currency_btc',
    code: 0xf01ac,
  },
  {
    name: 'nf-md-currency_cny',
    code: 0xf07ba,
  },
  {
    name: 'nf-md-currency_eth',
    code: 0xf07bb,
  },
  {
    name: 'nf-md-currency_eur',
    code: 0xf01ad,
  },
  {
    name: 'nf-md-currency_eur_off',
    code: 0xf1315,
  },
  {
    name: 'nf-md-currency_fra',
    code: 0xf1a39,
  },
  {
    name: 'nf-md-currency_gbp',
    code: 0xf01ae,
  },
  {
    name: 'nf-md-currency_ils',
    code: 0xf0c61,
  },
  {
    name: 'nf-md-currency_inr',
    code: 0xf01af,
  },
  {
    name: 'nf-md-currency_jpy',
    code: 0xf07bc,
  },
  {
    name: 'nf-md-currency_krw',
    code: 0xf07bd,
  },
  {
    name: 'nf-md-currency_kzt',
    code: 0xf0865,
  },
  {
    name: 'nf-md-currency_mnt',
    code: 0xf1512,
  },
  {
    name: 'nf-md-currency_ngn',
    code: 0xf01b0,
  },
  {
    name: 'nf-md-currency_php',
    code: 0xf09e6,
  },
  {
    name: 'nf-md-currency_rial',
    code: 0xf0e9c,
  },
  {
    name: 'nf-md-currency_rub',
    code: 0xf01b1,
  },
  {
    name: 'nf-md-currency_rupee',
    code: 0xf1976,
  },
  {
    name: 'nf-md-currency_sign',
    code: 0xf07be,
  },
  {
    name: 'nf-md-currency_try',
    code: 0xf01b2,
  },
  {
    name: 'nf-md-currency_twd',
    code: 0xf07bf,
  },
  {
    name: 'nf-md-currency_usd',
    code: 0xf01c1,
  },
  {
    name: 'nf-md-currency_usd_off',
    code: 0xf067a,
  },
  {
    name: 'nf-md-current_ac',
    code: 0xf1480,
  },
  {
    name: 'nf-md-current_dc',
    code: 0xf095c,
  },
  {
    name: 'nf-md-cursor_default',
    code: 0xf01c0,
  },
  {
    name: 'nf-md-cursor_default_click',
    code: 0xf0cfd,
  },
  {
    name: 'nf-md-cursor_default_click_outline',
    code: 0xf0cfe,
  },
  {
    name: 'nf-md-cursor_default_gesture',
    code: 0xf1127,
  },
  {
    name: 'nf-md-cursor_default_gesture_outline',
    code: 0xf1128,
  },
  {
    name: 'nf-md-cursor_default_outline',
    code: 0xf01bf,
  },
  {
    name: 'nf-md-cursor_move',
    code: 0xf01be,
  },
  {
    name: 'nf-md-cursor_pointer',
    code: 0xf01bd,
  },
  {
    name: 'nf-md-cursor_text',
    code: 0xf05e7,
  },
  {
    name: 'nf-md-curtains',
    code: 0xf1846,
  },
  {
    name: 'nf-md-curtains_closed',
    code: 0xf1847,
  },
  {
    name: 'nf-md-cylinder',
    code: 0xf194e,
  },
  {
    name: 'nf-md-cylinder_off',
    code: 0xf194f,
  },
  {
    name: 'nf-md-dance_ballroom',
    code: 0xf15fb,
  },
  {
    name: 'nf-md-dance_pole',
    code: 0xf1578,
  },
  {
    name: 'nf-md-data_matrix',
    code: 0xf153c,
  },
  {
    name: 'nf-md-data_matrix_edit',
    code: 0xf153d,
  },
  {
    name: 'nf-md-data_matrix_minus',
    code: 0xf153e,
  },
  {
    name: 'nf-md-data_matrix_plus',
    code: 0xf153f,
  },
  {
    name: 'nf-md-data_matrix_remove',
    code: 0xf1540,
  },
  {
    name: 'nf-md-data_matrix_scan',
    code: 0xf1541,
  },
  {
    name: 'nf-md-database',
    code: 0xf01bc,
  },
  {
    name: 'nf-md-database_alert',
    code: 0xf163a,
  },
  {
    name: 'nf-md-database_alert_outline',
    code: 0xf1624,
  },
  {
    name: 'nf-md-database_arrow_down',
    code: 0xf163b,
  },
  {
    name: 'nf-md-database_arrow_down_outline',
    code: 0xf1625,
  },
  {
    name: 'nf-md-database_arrow_left',
    code: 0xf163c,
  },
  {
    name: 'nf-md-database_arrow_left_outline',
    code: 0xf1626,
  },
  {
    name: 'nf-md-database_arrow_right',
    code: 0xf163d,
  },
  {
    name: 'nf-md-database_arrow_right_outline',
    code: 0xf1627,
  },
  {
    name: 'nf-md-database_arrow_up',
    code: 0xf163e,
  },
  {
    name: 'nf-md-database_arrow_up_outline',
    code: 0xf1628,
  },
  {
    name: 'nf-md-database_check',
    code: 0xf0aa9,
  },
  {
    name: 'nf-md-database_check_outline',
    code: 0xf1629,
  },
  {
    name: 'nf-md-database_clock',
    code: 0xf163f,
  },
  {
    name: 'nf-md-database_clock_outline',
    code: 0xf162a,
  },
  {
    name: 'nf-md-database_cog',
    code: 0xf164b,
  },
  {
    name: 'nf-md-database_cog_outline',
    code: 0xf164c,
  },
  {
    name: 'nf-md-database_edit',
    code: 0xf0b86,
  },
  {
    name: 'nf-md-database_edit_outline',
    code: 0xf162b,
  },
  {
    name: 'nf-md-database_export',
    code: 0xf095e,
  },
  {
    name: 'nf-md-database_export_outline',
    code: 0xf162c,
  },
  {
    name: 'nf-md-database_eye',
    code: 0xf191f,
  },
  {
    name: 'nf-md-database_eye_off',
    code: 0xf1920,
  },
  {
    name: 'nf-md-database_eye_off_outline',
    code: 0xf1921,
  },
  {
    name: 'nf-md-database_eye_outline',
    code: 0xf1922,
  },
  {
    name: 'nf-md-database_import',
    code: 0xf095d,
  },
  {
    name: 'nf-md-database_import_outline',
    code: 0xf162d,
  },
  {
    name: 'nf-md-database_lock',
    code: 0xf0aaa,
  },
  {
    name: 'nf-md-database_lock_outline',
    code: 0xf162e,
  },
  {
    name: 'nf-md-database_marker',
    code: 0xf12f6,
  },
  {
    name: 'nf-md-database_marker_outline',
    code: 0xf162f,
  },
  {
    name: 'nf-md-database_minus',
    code: 0xf01bb,
  },
  {
    name: 'nf-md-database_minus_outline',
    code: 0xf1630,
  },
  {
    name: 'nf-md-database_off',
    code: 0xf1640,
  },
  {
    name: 'nf-md-database_off_outline',
    code: 0xf1631,
  },
  {
    name: 'nf-md-database_outline',
    code: 0xf1632,
  },
  {
    name: 'nf-md-database_plus',
    code: 0xf01ba,
  },
  {
    name: 'nf-md-database_plus_outline',
    code: 0xf1633,
  },
  {
    name: 'nf-md-database_refresh',
    code: 0xf05c2,
  },
  {
    name: 'nf-md-database_refresh_outline',
    code: 0xf1634,
  },
  {
    name: 'nf-md-database_remove',
    code: 0xf0d00,
  },
  {
    name: 'nf-md-database_remove_outline',
    code: 0xf1635,
  },
  {
    name: 'nf-md-database_search',
    code: 0xf0866,
  },
  {
    name: 'nf-md-database_search_outline',
    code: 0xf1636,
  },
  {
    name: 'nf-md-database_settings',
    code: 0xf0d01,
  },
  {
    name: 'nf-md-database_settings_outline',
    code: 0xf1637,
  },
  {
    name: 'nf-md-database_sync',
    code: 0xf0cff,
  },
  {
    name: 'nf-md-database_sync_outline',
    code: 0xf1638,
  },
  {
    name: 'nf-md-death_star',
    code: 0xf08d8,
  },
  {
    name: 'nf-md-death_star_variant',
    code: 0xf08d9,
  },
  {
    name: 'nf-md-deathly_hallows',
    code: 0xf0b87,
  },
  {
    name: 'nf-md-debian',
    code: 0xf08da,
  },
  {
    name: 'nf-md-debug_step_into',
    code: 0xf01b9,
  },
  {
    name: 'nf-md-debug_step_out',
    code: 0xf01b8,
  },
  {
    name: 'nf-md-debug_step_over',
    code: 0xf01b7,
  },
  {
    name: 'nf-md-decagram',
    code: 0xf076c,
  },
  {
    name: 'nf-md-decagram_outline',
    code: 0xf076d,
  },
  {
    name: 'nf-md-decimal',
    code: 0xf10a1,
  },
  {
    name: 'nf-md-decimal_comma',
    code: 0xf10a2,
  },
  {
    name: 'nf-md-decimal_comma_decrease',
    code: 0xf10a3,
  },
  {
    name: 'nf-md-decimal_comma_increase',
    code: 0xf10a4,
  },
  {
    name: 'nf-md-decimal_decrease',
    code: 0xf01b6,
  },
  {
    name: 'nf-md-decimal_increase',
    code: 0xf01b5,
  },
  {
    name: 'nf-md-delete',
    code: 0xf01b4,
  },
  {
    name: 'nf-md-delete_alert',
    code: 0xf10a5,
  },
  {
    name: 'nf-md-delete_alert_outline',
    code: 0xf10a6,
  },
  {
    name: 'nf-md-delete_circle',
    code: 0xf0683,
  },
  {
    name: 'nf-md-delete_circle_outline',
    code: 0xf0b88,
  },
  {
    name: 'nf-md-delete_clock',
    code: 0xf1556,
  },
  {
    name: 'nf-md-delete_clock_outline',
    code: 0xf1557,
  },
  {
    name: 'nf-md-delete_empty',
    code: 0xf06cc,
  },
  {
    name: 'nf-md-delete_empty_outline',
    code: 0xf0e9d,
  },
  {
    name: 'nf-md-delete_forever',
    code: 0xf05e8,
  },
  {
    name: 'nf-md-delete_forever_outline',
    code: 0xf0b89,
  },
  {
    name: 'nf-md-delete_off',
    code: 0xf10a7,
  },
  {
    name: 'nf-md-delete_off_outline',
    code: 0xf10a8,
  },
  {
    name: 'nf-md-delete_outline',
    code: 0xf09e7,
  },
  {
    name: 'nf-md-delete_restore',
    code: 0xf0819,
  },
  {
    name: 'nf-md-delete_sweep',
    code: 0xf05e9,
  },
  {
    name: 'nf-md-delete_sweep_outline',
    code: 0xf0c62,
  },
  {
    name: 'nf-md-delete_variant',
    code: 0xf01b3,
  },
  {
    name: 'nf-md-delta',
    code: 0xf01c2,
  },
  {
    name: 'nf-md-desk',
    code: 0xf1239,
  },
  {
    name: 'nf-md-desk_lamp',
    code: 0xf095f,
  },
  {
    name: 'nf-md-deskphone',
    code: 0xf01c3,
  },
  {
    name: 'nf-md-desktop_classic',
    code: 0xf07c0,
  },
  {
    name: 'nf-md-desktop_mac',
    code: 0xf01c4,
  },
  {
    name: 'nf-md-desktop_mac_dashboard',
    code: 0xf09e8,
  },
  {
    name: 'nf-md-desktop_tower',
    code: 0xf01c5,
  },
  {
    name: 'nf-md-desktop_tower_monitor',
    code: 0xf0aab,
  },
  {
    name: 'nf-md-details',
    code: 0xf01c6,
  },
  {
    name: 'nf-md-dev_to',
    code: 0xf0d6e,
  },
  {
    name: 'nf-md-developer_board',
    code: 0xf0697,
  },
  {
    name: 'nf-md-deviantart',
    code: 0xf01c7,
  },
  {
    name: 'nf-md-devices',
    code: 0xf0fb0,
  },
  {
    name: 'nf-md-dharmachakra',
    code: 0xf094b,
  },
  {
    name: 'nf-md-diabetes',
    code: 0xf1126,
  },
  {
    name: 'nf-md-dialpad',
    code: 0xf061c,
  },
  {
    name: 'nf-md-diameter',
    code: 0xf0c63,
  },
  {
    name: 'nf-md-diameter_outline',
    code: 0xf0c64,
  },
  {
    name: 'nf-md-diameter_variant',
    code: 0xf0c65,
  },
  {
    name: 'nf-md-diamond',
    code: 0xf0b8a,
  },
  {
    name: 'nf-md-diamond_outline',
    code: 0xf0b8b,
  },
  {
    name: 'nf-md-diamond_stone',
    code: 0xf01c8,
  },
  {
    name: 'nf-md-dice_1',
    code: 0xf01ca,
  },
  {
    name: 'nf-md-dice_1_outline',
    code: 0xf114a,
  },
  {
    name: 'nf-md-dice_2',
    code: 0xf01cb,
  },
  {
    name: 'nf-md-dice_2_outline',
    code: 0xf114b,
  },
  {
    name: 'nf-md-dice_3',
    code: 0xf01cc,
  },
  {
    name: 'nf-md-dice_3_outline',
    code: 0xf114c,
  },
  {
    name: 'nf-md-dice_4',
    code: 0xf01cd,
  },
  {
    name: 'nf-md-dice_4_outline',
    code: 0xf114d,
  },
  {
    name: 'nf-md-dice_5',
    code: 0xf01ce,
  },
  {
    name: 'nf-md-dice_5_outline',
    code: 0xf114e,
  },
  {
    name: 'nf-md-dice_6',
    code: 0xf01cf,
  },
  {
    name: 'nf-md-dice_6_outline',
    code: 0xf114f,
  },
  {
    name: 'nf-md-dice_d10',
    code: 0xf1153,
  },
  {
    name: 'nf-md-dice_d10_outline',
    code: 0xf076f,
  },
  {
    name: 'nf-md-dice_d12',
    code: 0xf1154,
  },
  {
    name: 'nf-md-dice_d12_outline',
    code: 0xf0867,
  },
  {
    name: 'nf-md-dice_d20',
    code: 0xf1155,
  },
  {
    name: 'nf-md-dice_d20_outline',
    code: 0xf05ea,
  },
  {
    name: 'nf-md-dice_d4',
    code: 0xf1150,
  },
  {
    name: 'nf-md-dice_d4_outline',
    code: 0xf05eb,
  },
  {
    name: 'nf-md-dice_d6',
    code: 0xf1151,
  },
  {
    name: 'nf-md-dice_d6_outline',
    code: 0xf05ed,
  },
  {
    name: 'nf-md-dice_d8',
    code: 0xf1152,
  },
  {
    name: 'nf-md-dice_d8_outline',
    code: 0xf05ec,
  },
  {
    name: 'nf-md-dice_multiple',
    code: 0xf076e,
  },
  {
    name: 'nf-md-dice_multiple_outline',
    code: 0xf1156,
  },
  {
    name: 'nf-md-digital_ocean',
    code: 0xf1237,
  },
  {
    name: 'nf-md-dip_switch',
    code: 0xf07c1,
  },
  {
    name: 'nf-md-directions',
    code: 0xf01d0,
  },
  {
    name: 'nf-md-directions_fork',
    code: 0xf0641,
  },
  {
    name: 'nf-md-disc',
    code: 0xf05ee,
  },
  {
    name: 'nf-md-disc_alert',
    code: 0xf01d1,
  },
  {
    name: 'nf-md-disc_player',
    code: 0xf0960,
  },
  {
    name: 'nf-md-discord',
    code: 0xf066f,
  },
  {
    name: 'nf-md-dishwasher',
    code: 0xf0aac,
  },
  {
    name: 'nf-md-dishwasher_alert',
    code: 0xf11b8,
  },
  {
    name: 'nf-md-dishwasher_off',
    code: 0xf11b9,
  },
  {
    name: 'nf-md-disqus',
    code: 0xf01d2,
  },
  {
    name: 'nf-md-distribute_horizontal_center',
    code: 0xf11c9,
  },
  {
    name: 'nf-md-distribute_horizontal_left',
    code: 0xf11c8,
  },
  {
    name: 'nf-md-distribute_horizontal_right',
    code: 0xf11ca,
  },
  {
    name: 'nf-md-distribute_vertical_bottom',
    code: 0xf11cb,
  },
  {
    name: 'nf-md-distribute_vertical_center',
    code: 0xf11cc,
  },
  {
    name: 'nf-md-distribute_vertical_top',
    code: 0xf11cd,
  },
  {
    name: 'nf-md-diversify',
    code: 0xf1877,
  },
  {
    name: 'nf-md-diving',
    code: 0xf1977,
  },
  {
    name: 'nf-md-diving_flippers',
    code: 0xf0dbf,
  },
  {
    name: 'nf-md-diving_helmet',
    code: 0xf0dc0,
  },
  {
    name: 'nf-md-diving_scuba',
    code: 0xf0dc1,
  },
  {
    name: 'nf-md-diving_scuba_flag',
    code: 0xf0dc2,
  },
  {
    name: 'nf-md-diving_scuba_tank',
    code: 0xf0dc3,
  },
  {
    name: 'nf-md-diving_scuba_tank_multiple',
    code: 0xf0dc4,
  },
  {
    name: 'nf-md-diving_snorkel',
    code: 0xf0dc5,
  },
  {
    name: 'nf-md-division',
    code: 0xf01d4,
  },
  {
    name: 'nf-md-division_box',
    code: 0xf01d5,
  },
  {
    name: 'nf-md-dlna',
    code: 0xf0a41,
  },
  {
    name: 'nf-md-dna',
    code: 0xf0684,
  },
  {
    name: 'nf-md-dns',
    code: 0xf01d6,
  },
  {
    name: 'nf-md-dns_outline',
    code: 0xf0b8c,
  },
  {
    name: 'nf-md-dock_bottom',
    code: 0xf10a9,
  },
  {
    name: 'nf-md-dock_left',
    code: 0xf10aa,
  },
  {
    name: 'nf-md-dock_right',
    code: 0xf10ab,
  },
  {
    name: 'nf-md-dock_top',
    code: 0xf1513,
  },
  {
    name: 'nf-md-dock_window',
    code: 0xf10ac,
  },
  {
    name: 'nf-md-docker',
    code: 0xf0868,
  },
  {
    name: 'nf-md-doctor',
    code: 0xf0a42,
  },
  {
    name: 'nf-md-dog',
    code: 0xf0a43,
  },
  {
    name: 'nf-md-dog_service',
    code: 0xf0aad,
  },
  {
    name: 'nf-md-dog_side',
    code: 0xf0a44,
  },
  {
    name: 'nf-md-dog_side_off',
    code: 0xf16ee,
  },
  {
    name: 'nf-md-dolby',
    code: 0xf06b3,
  },
  {
    name: 'nf-md-dolly',
    code: 0xf0e9e,
  },
  {
    name: 'nf-md-dolphin',
    code: 0xf18b4,
  },
  {
    name: 'nf-md-domain',
    code: 0xf01d7,
  },
  {
    name: 'nf-md-domain_off',
    code: 0xf0d6f,
  },
  {
    name: 'nf-md-domain_plus',
    code: 0xf10ad,
  },
  {
    name: 'nf-md-domain_remove',
    code: 0xf10ae,
  },
  {
    name: 'nf-md-dome_light',
    code: 0xf141e,
  },
  {
    name: 'nf-md-domino_mask',
    code: 0xf1023,
  },
  {
    name: 'nf-md-donkey',
    code: 0xf07c2,
  },
  {
    name: 'nf-md-door',
    code: 0xf081a,
  },
  {
    name: 'nf-md-door_closed',
    code: 0xf081b,
  },
  {
    name: 'nf-md-door_closed_lock',
    code: 0xf10af,
  },
  {
    name: 'nf-md-door_open',
    code: 0xf081c,
  },
  {
    name: 'nf-md-door_sliding',
    code: 0xf181e,
  },
  {
    name: 'nf-md-door_sliding_lock',
    code: 0xf181f,
  },
  {
    name: 'nf-md-door_sliding_open',
    code: 0xf1820,
  },
  {
    name: 'nf-md-doorbell',
    code: 0xf12e6,
  },
  {
    name: 'nf-md-doorbell_video',
    code: 0xf0869,
  },
  {
    name: 'nf-md-dot_net',
    code: 0xf0aae,
  },
  {
    name: 'nf-md-dots_circle',
    code: 0xf1978,
  },
  {
    name: 'nf-md-dots_grid',
    code: 0xf15fc,
  },
  {
    name: 'nf-md-dots_hexagon',
    code: 0xf15ff,
  },
  {
    name: 'nf-md-dots_horizontal',
    code: 0xf01d8,
  },
  {
    name: 'nf-md-dots_horizontal_circle',
    code: 0xf07c3,
  },
  {
    name: 'nf-md-dots_horizontal_circle_outline',
    code: 0xf0b8d,
  },
  {
    name: 'nf-md-dots_square',
    code: 0xf15fd,
  },
  {
    name: 'nf-md-dots_triangle',
    code: 0xf15fe,
  },
  {
    name: 'nf-md-dots_vertical',
    code: 0xf01d9,
  },
  {
    name: 'nf-md-dots_vertical_circle',
    code: 0xf07c4,
  },
  {
    name: 'nf-md-dots_vertical_circle_outline',
    code: 0xf0b8e,
  },
  {
    name: 'nf-md-download',
    code: 0xf01da,
  },
  {
    name: 'nf-md-download_box',
    code: 0xf1462,
  },
  {
    name: 'nf-md-download_box_outline',
    code: 0xf1463,
  },
  {
    name: 'nf-md-download_circle',
    code: 0xf1464,
  },
  {
    name: 'nf-md-download_circle_outline',
    code: 0xf1465,
  },
  {
    name: 'nf-md-download_lock',
    code: 0xf1320,
  },
  {
    name: 'nf-md-download_lock_outline',
    code: 0xf1321,
  },
  {
    name: 'nf-md-download_multiple',
    code: 0xf09e9,
  },
  {
    name: 'nf-md-download_network',
    code: 0xf06f4,
  },
  {
    name: 'nf-md-download_network_outline',
    code: 0xf0c66,
  },
  {
    name: 'nf-md-download_off',
    code: 0xf10b0,
  },
  {
    name: 'nf-md-download_off_outline',
    code: 0xf10b1,
  },
  {
    name: 'nf-md-download_outline',
    code: 0xf0b8f,
  },
  {
    name: 'nf-md-drag',
    code: 0xf01db,
  },
  {
    name: 'nf-md-drag_horizontal',
    code: 0xf01dc,
  },
  {
    name: 'nf-md-drag_horizontal_variant',
    code: 0xf12f0,
  },
  {
    name: 'nf-md-drag_variant',
    code: 0xf0b90,
  },
  {
    name: 'nf-md-drag_vertical',
    code: 0xf01dd,
  },
  {
    name: 'nf-md-drag_vertical_variant',
    code: 0xf12f1,
  },
  {
    name: 'nf-md-drama_masks',
    code: 0xf0d02,
  },
  {
    name: 'nf-md-draw',
    code: 0xf0f49,
  },
  {
    name: 'nf-md-draw_pen',
    code: 0xf19b9,
  },
  {
    name: 'nf-md-drawing',
    code: 0xf01de,
  },
  {
    name: 'nf-md-drawing_box',
    code: 0xf01df,
  },
  {
    name: 'nf-md-dresser',
    code: 0xf0f4a,
  },
  {
    name: 'nf-md-dresser_outline',
    code: 0xf0f4b,
  },
  {
    name: 'nf-md-drone',
    code: 0xf01e2,
  },
  {
    name: 'nf-md-dropbox',
    code: 0xf01e3,
  },
  {
    name: 'nf-md-drupal',
    code: 0xf01e4,
  },
  {
    name: 'nf-md-duck',
    code: 0xf01e5,
  },
  {
    name: 'nf-md-dumbbell',
    code: 0xf01e6,
  },
  {
    name: 'nf-md-dump_truck',
    code: 0xf0c67,
  },
  {
    name: 'nf-md-ear_hearing',
    code: 0xf07c5,
  },
  {
    name: 'nf-md-ear_hearing_loop',
    code: 0xf1aee,
  },
  {
    name: 'nf-md-ear_hearing_off',
    code: 0xf0a45,
  },
  {
    name: 'nf-md-earbuds',
    code: 0xf184f,
  },
  {
    name: 'nf-md-earbuds_off',
    code: 0xf1850,
  },
  {
    name: 'nf-md-earbuds_off_outline',
    code: 0xf1851,
  },
  {
    name: 'nf-md-earbuds_outline',
    code: 0xf1852,
  },
  {
    name: 'nf-md-earth',
    code: 0xf01e7,
  },
  {
    name: 'nf-md-earth_arrow_right',
    code: 0xf1311,
  },
  {
    name: 'nf-md-earth_box',
    code: 0xf06cd,
  },
  {
    name: 'nf-md-earth_box_minus',
    code: 0xf1407,
  },
  {
    name: 'nf-md-earth_box_off',
    code: 0xf06ce,
  },
  {
    name: 'nf-md-earth_box_plus',
    code: 0xf1406,
  },
  {
    name: 'nf-md-earth_box_remove',
    code: 0xf1408,
  },
  {
    name: 'nf-md-earth_minus',
    code: 0xf1404,
  },
  {
    name: 'nf-md-earth_off',
    code: 0xf01e8,
  },
  {
    name: 'nf-md-earth_plus',
    code: 0xf1403,
  },
  {
    name: 'nf-md-earth_remove',
    code: 0xf1405,
  },
  {
    name: 'nf-md-egg',
    code: 0xf0aaf,
  },
  {
    name: 'nf-md-egg_easter',
    code: 0xf0ab0,
  },
  {
    name: 'nf-md-egg_fried',
    code: 0xf184a,
  },
  {
    name: 'nf-md-egg_off',
    code: 0xf13f0,
  },
  {
    name: 'nf-md-egg_off_outline',
    code: 0xf13f1,
  },
  {
    name: 'nf-md-egg_outline',
    code: 0xf13f2,
  },
  {
    name: 'nf-md-eiffel_tower',
    code: 0xf156b,
  },
  {
    name: 'nf-md-eight_track',
    code: 0xf09ea,
  },
  {
    name: 'nf-md-eject',
    code: 0xf01ea,
  },
  {
    name: 'nf-md-eject_outline',
    code: 0xf0b91,
  },
  {
    name: 'nf-md-electric_switch',
    code: 0xf0e9f,
  },
  {
    name: 'nf-md-electric_switch_closed',
    code: 0xf10d9,
  },
  {
    name: 'nf-md-electron_framework',
    code: 0xf1024,
  },
  {
    name: 'nf-md-elephant',
    code: 0xf07c6,
  },
  {
    name: 'nf-md-elevation_decline',
    code: 0xf01eb,
  },
  {
    name: 'nf-md-elevation_rise',
    code: 0xf01ec,
  },
  {
    name: 'nf-md-elevator',
    code: 0xf01ed,
  },
  {
    name: 'nf-md-elevator_down',
    code: 0xf12c2,
  },
  {
    name: 'nf-md-elevator_passenger',
    code: 0xf1381,
  },
  {
    name: 'nf-md-elevator_passenger_off',
    code: 0xf1979,
  },
  {
    name: 'nf-md-elevator_passenger_off_outline',
    code: 0xf197a,
  },
  {
    name: 'nf-md-elevator_passenger_outline',
    code: 0xf197b,
  },
  {
    name: 'nf-md-elevator_up',
    code: 0xf12c1,
  },
  {
    name: 'nf-md-ellipse',
    code: 0xf0ea0,
  },
  {
    name: 'nf-md-ellipse_outline',
    code: 0xf0ea1,
  },
  {
    name: 'nf-md-email',
    code: 0xf01ee,
  },
  {
    name: 'nf-md-email_alert',
    code: 0xf06cf,
  },
  {
    name: 'nf-md-email_alert_outline',
    code: 0xf0d42,
  },
  {
    name: 'nf-md-email_box',
    code: 0xf0d03,
  },
  {
    name: 'nf-md-email_check',
    code: 0xf0ab1,
  },
  {
    name: 'nf-md-email_check_outline',
    code: 0xf0ab2,
  },
  {
    name: 'nf-md-email_edit',
    code: 0xf0ee3,
  },
  {
    name: 'nf-md-email_edit_outline',
    code: 0xf0ee4,
  },
  {
    name: 'nf-md-email_fast',
    code: 0xf186f,
  },
  {
    name: 'nf-md-email_fast_outline',
    code: 0xf1870,
  },
  {
    name: 'nf-md-email_lock',
    code: 0xf01f1,
  },
  {
    name: 'nf-md-email_mark_as_unread',
    code: 0xf0b92,
  },
  {
    name: 'nf-md-email_minus',
    code: 0xf0ee5,
  },
  {
    name: 'nf-md-email_minus_outline',
    code: 0xf0ee6,
  },
  {
    name: 'nf-md-email_multiple',
    code: 0xf0ee7,
  },
  {
    name: 'nf-md-email_multiple_outline',
    code: 0xf0ee8,
  },
  {
    name: 'nf-md-email_newsletter',
    code: 0xf0fb1,
  },
  {
    name: 'nf-md-email_off',
    code: 0xf13e3,
  },
  {
    name: 'nf-md-email_off_outline',
    code: 0xf13e4,
  },
  {
    name: 'nf-md-email_open',
    code: 0xf01ef,
  },
  {
    name: 'nf-md-email_open_multiple',
    code: 0xf0ee9,
  },
  {
    name: 'nf-md-email_open_multiple_outline',
    code: 0xf0eea,
  },
  {
    name: 'nf-md-email_open_outline',
    code: 0xf05ef,
  },
  {
    name: 'nf-md-email_outline',
    code: 0xf01f0,
  },
  {
    name: 'nf-md-email_plus',
    code: 0xf09eb,
  },
  {
    name: 'nf-md-email_plus_outline',
    code: 0xf09ec,
  },
  {
    name: 'nf-md-email_receive',
    code: 0xf10da,
  },
  {
    name: 'nf-md-email_receive_outline',
    code: 0xf10db,
  },
  {
    name: 'nf-md-email_remove',
    code: 0xf1661,
  },
  {
    name: 'nf-md-email_remove_outline',
    code: 0xf1662,
  },
  {
    name: 'nf-md-email_seal',
    code: 0xf195b,
  },
  {
    name: 'nf-md-email_seal_outline',
    code: 0xf195c,
  },
  {
    name: 'nf-md-email_search',
    code: 0xf0961,
  },
  {
    name: 'nf-md-email_search_outline',
    code: 0xf0962,
  },
  {
    name: 'nf-md-email_send',
    code: 0xf10dc,
  },
  {
    name: 'nf-md-email_send_outline',
    code: 0xf10dd,
  },
  {
    name: 'nf-md-email_sync',
    code: 0xf12c7,
  },
  {
    name: 'nf-md-email_sync_outline',
    code: 0xf12c8,
  },
  {
    name: 'nf-md-email_variant',
    code: 0xf05f0,
  },
  {
    name: 'nf-md-ember',
    code: 0xf0b30,
  },
  {
    name: 'nf-md-emby',
    code: 0xf06b4,
  },
  {
    name: 'nf-md-emoticon',
    code: 0xf0c68,
  },
  {
    name: 'nf-md-emoticon_angry',
    code: 0xf0c69,
  },
  {
    name: 'nf-md-emoticon_angry_outline',
    code: 0xf0c6a,
  },
  {
    name: 'nf-md-emoticon_confused',
    code: 0xf10de,
  },
  {
    name: 'nf-md-emoticon_confused_outline',
    code: 0xf10df,
  },
  {
    name: 'nf-md-emoticon_cool',
    code: 0xf0c6b,
  },
  {
    name: 'nf-md-emoticon_cool_outline',
    code: 0xf01f3,
  },
  {
    name: 'nf-md-emoticon_cry',
    code: 0xf0c6c,
  },
  {
    name: 'nf-md-emoticon_cry_outline',
    code: 0xf0c6d,
  },
  {
    name: 'nf-md-emoticon_dead',
    code: 0xf0c6e,
  },
  {
    name: 'nf-md-emoticon_dead_outline',
    code: 0xf069b,
  },
  {
    name: 'nf-md-emoticon_devil',
    code: 0xf0c6f,
  },
  {
    name: 'nf-md-emoticon_devil_outline',
    code: 0xf01f4,
  },
  {
    name: 'nf-md-emoticon_excited',
    code: 0xf0c70,
  },
  {
    name: 'nf-md-emoticon_excited_outline',
    code: 0xf069c,
  },
  {
    name: 'nf-md-emoticon_frown',
    code: 0xf0f4c,
  },
  {
    name: 'nf-md-emoticon_frown_outline',
    code: 0xf0f4d,
  },
  {
    name: 'nf-md-emoticon_happy',
    code: 0xf0c71,
  },
  {
    name: 'nf-md-emoticon_happy_outline',
    code: 0xf01f5,
  },
  {
    name: 'nf-md-emoticon_kiss',
    code: 0xf0c72,
  },
  {
    name: 'nf-md-emoticon_kiss_outline',
    code: 0xf0c73,
  },
  {
    name: 'nf-md-emoticon_lol',
    code: 0xf1214,
  },
  {
    name: 'nf-md-emoticon_lol_outline',
    code: 0xf1215,
  },
  {
    name: 'nf-md-emoticon_neutral',
    code: 0xf0c74,
  },
  {
    name: 'nf-md-emoticon_neutral_outline',
    code: 0xf01f6,
  },
  {
    name: 'nf-md-emoticon_outline',
    code: 0xf01f2,
  },
  {
    name: 'nf-md-emoticon_poop',
    code: 0xf01f7,
  },
  {
    name: 'nf-md-emoticon_poop_outline',
    code: 0xf0c75,
  },
  {
    name: 'nf-md-emoticon_sad',
    code: 0xf0c76,
  },
  {
    name: 'nf-md-emoticon_sad_outline',
    code: 0xf01f8,
  },
  {
    name: 'nf-md-emoticon_sick',
    code: 0xf157c,
  },
  {
    name: 'nf-md-emoticon_sick_outline',
    code: 0xf157d,
  },
  {
    name: 'nf-md-emoticon_tongue',
    code: 0xf01f9,
  },
  {
    name: 'nf-md-emoticon_tongue_outline',
    code: 0xf0c77,
  },
  {
    name: 'nf-md-emoticon_wink',
    code: 0xf0c78,
  },
  {
    name: 'nf-md-emoticon_wink_outline',
    code: 0xf0c79,
  },
  {
    name: 'nf-md-engine',
    code: 0xf01fa,
  },
  {
    name: 'nf-md-engine_off',
    code: 0xf0a46,
  },
  {
    name: 'nf-md-engine_off_outline',
    code: 0xf0a47,
  },
  {
    name: 'nf-md-engine_outline',
    code: 0xf01fb,
  },
  {
    name: 'nf-md-epsilon',
    code: 0xf10e0,
  },
  {
    name: 'nf-md-equal',
    code: 0xf01fc,
  },
  {
    name: 'nf-md-equal_box',
    code: 0xf01fd,
  },
  {
    name: 'nf-md-equalizer',
    code: 0xf0ea2,
  },
  {
    name: 'nf-md-equalizer_outline',
    code: 0xf0ea3,
  },
  {
    name: 'nf-md-eraser',
    code: 0xf01fe,
  },
  {
    name: 'nf-md-eraser_variant',
    code: 0xf0642,
  },
  {
    name: 'nf-md-escalator',
    code: 0xf01ff,
  },
  {
    name: 'nf-md-escalator_box',
    code: 0xf1399,
  },
  {
    name: 'nf-md-escalator_down',
    code: 0xf12c0,
  },
  {
    name: 'nf-md-escalator_up',
    code: 0xf12bf,
  },
  {
    name: 'nf-md-eslint',
    code: 0xf0c7a,
  },
  {
    name: 'nf-md-et',
    code: 0xf0ab3,
  },
  {
    name: 'nf-md-ethereum',
    code: 0xf086a,
  },
  {
    name: 'nf-md-ethernet',
    code: 0xf0200,
  },
  {
    name: 'nf-md-ethernet_cable',
    code: 0xf0201,
  },
  {
    name: 'nf-md-ethernet_cable_off',
    code: 0xf0202,
  },
  {
    name: 'nf-md-ev_plug_ccs1',
    code: 0xf1519,
  },
  {
    name: 'nf-md-ev_plug_ccs2',
    code: 0xf151a,
  },
  {
    name: 'nf-md-ev_plug_chademo',
    code: 0xf151b,
  },
  {
    name: 'nf-md-ev_plug_tesla',
    code: 0xf151c,
  },
  {
    name: 'nf-md-ev_plug_type1',
    code: 0xf151d,
  },
  {
    name: 'nf-md-ev_plug_type2',
    code: 0xf151e,
  },
  {
    name: 'nf-md-ev_station',
    code: 0xf05f1,
  },
  {
    name: 'nf-md-evernote',
    code: 0xf0204,
  },
  {
    name: 'nf-md-excavator',
    code: 0xf1025,
  },
  {
    name: 'nf-md-exclamation',
    code: 0xf0205,
  },
  {
    name: 'nf-md-exclamation_thick',
    code: 0xf1238,
  },
  {
    name: 'nf-md-exit_run',
    code: 0xf0a48,
  },
  {
    name: 'nf-md-exit_to_app',
    code: 0xf0206,
  },
  {
    name: 'nf-md-expand_all',
    code: 0xf0ab4,
  },
  {
    name: 'nf-md-expand_all_outline',
    code: 0xf0ab5,
  },
  {
    name: 'nf-md-expansion_card',
    code: 0xf08ae,
  },
  {
    name: 'nf-md-expansion_card_variant',
    code: 0xf0fb2,
  },
  {
    name: 'nf-md-exponent',
    code: 0xf0963,
  },
  {
    name: 'nf-md-exponent_box',
    code: 0xf0964,
  },
  {
    name: 'nf-md-export',
    code: 0xf0207,
  },
  {
    name: 'nf-md-export_variant',
    code: 0xf0b93,
  },
  {
    name: 'nf-md-eye',
    code: 0xf0208,
  },
  {
    name: 'nf-md-eye_arrow_left',
    code: 0xf18fd,
  },
  {
    name: 'nf-md-eye_arrow_left_outline',
    code: 0xf18fe,
  },
  {
    name: 'nf-md-eye_arrow_right',
    code: 0xf18ff,
  },
  {
    name: 'nf-md-eye_arrow_right_outline',
    code: 0xf1900,
  },
  {
    name: 'nf-md-eye_check',
    code: 0xf0d04,
  },
  {
    name: 'nf-md-eye_check_outline',
    code: 0xf0d05,
  },
  {
    name: 'nf-md-eye_circle',
    code: 0xf0b94,
  },
  {
    name: 'nf-md-eye_circle_outline',
    code: 0xf0b95,
  },
  {
    name: 'nf-md-eye_minus',
    code: 0xf1026,
  },
  {
    name: 'nf-md-eye_minus_outline',
    code: 0xf1027,
  },
  {
    name: 'nf-md-eye_off',
    code: 0xf0209,
  },
  {
    name: 'nf-md-eye_off_outline',
    code: 0xf06d1,
  },
  {
    name: 'nf-md-eye_outline',
    code: 0xf06d0,
  },
  {
    name: 'nf-md-eye_plus',
    code: 0xf086b,
  },
  {
    name: 'nf-md-eye_plus_outline',
    code: 0xf086c,
  },
  {
    name: 'nf-md-eye_refresh',
    code: 0xf197c,
  },
  {
    name: 'nf-md-eye_refresh_outline',
    code: 0xf197d,
  },
  {
    name: 'nf-md-eye_remove',
    code: 0xf15e3,
  },
  {
    name: 'nf-md-eye_remove_outline',
    code: 0xf15e4,
  },
  {
    name: 'nf-md-eye_settings',
    code: 0xf086d,
  },
  {
    name: 'nf-md-eye_settings_outline',
    code: 0xf086e,
  },
  {
    name: 'nf-md-eyedropper',
    code: 0xf020a,
  },
  {
    name: 'nf-md-eyedropper_minus',
    code: 0xf13dd,
  },
  {
    name: 'nf-md-eyedropper_off',
    code: 0xf13df,
  },
  {
    name: 'nf-md-eyedropper_plus',
    code: 0xf13dc,
  },
  {
    name: 'nf-md-eyedropper_remove',
    code: 0xf13de,
  },
  {
    name: 'nf-md-eyedropper_variant',
    code: 0xf020b,
  },
  {
    name: 'nf-md-face_agent',
    code: 0xf0d70,
  },
  {
    name: 'nf-md-face_man',
    code: 0xf0643,
  },
  {
    name: 'nf-md-face_man_outline',
    code: 0xf0b96,
  },
  {
    name: 'nf-md-face_man_profile',
    code: 0xf0644,
  },
  {
    name: 'nf-md-face_man_shimmer',
    code: 0xf15cc,
  },
  {
    name: 'nf-md-face_man_shimmer_outline',
    code: 0xf15cd,
  },
  {
    name: 'nf-md-face_mask',
    code: 0xf1586,
  },
  {
    name: 'nf-md-face_mask_outline',
    code: 0xf1587,
  },
  {
    name: 'nf-md-face_recognition',
    code: 0xf0c7b,
  },
  {
    name: 'nf-md-face_woman',
    code: 0xf1077,
  },
  {
    name: 'nf-md-face_woman_outline',
    code: 0xf1078,
  },
  {
    name: 'nf-md-face_woman_profile',
    code: 0xf1076,
  },
  {
    name: 'nf-md-face_woman_shimmer',
    code: 0xf15ce,
  },
  {
    name: 'nf-md-face_woman_shimmer_outline',
    code: 0xf15cf,
  },
  {
    name: 'nf-md-facebook',
    code: 0xf020c,
  },
  {
    name: 'nf-md-facebook_gaming',
    code: 0xf07dd,
  },
  {
    name: 'nf-md-facebook_messenger',
    code: 0xf020e,
  },
  {
    name: 'nf-md-facebook_workplace',
    code: 0xf0b31,
  },
  {
    name: 'nf-md-factory',
    code: 0xf020f,
  },
  {
    name: 'nf-md-family_tree',
    code: 0xf160e,
  },
  {
    name: 'nf-md-fan',
    code: 0xf0210,
  },
  {
    name: 'nf-md-fan_alert',
    code: 0xf146c,
  },
  {
    name: 'nf-md-fan_auto',
    code: 0xf171d,
  },
  {
    name: 'nf-md-fan_chevron_down',
    code: 0xf146d,
  },
  {
    name: 'nf-md-fan_chevron_up',
    code: 0xf146e,
  },
  {
    name: 'nf-md-fan_clock',
    code: 0xf1a3a,
  },
  {
    name: 'nf-md-fan_minus',
    code: 0xf1470,
  },
  {
    name: 'nf-md-fan_off',
    code: 0xf081d,
  },
  {
    name: 'nf-md-fan_plus',
    code: 0xf146f,
  },
  {
    name: 'nf-md-fan_remove',
    code: 0xf1471,
  },
  {
    name: 'nf-md-fan_speed_1',
    code: 0xf1472,
  },
  {
    name: 'nf-md-fan_speed_2',
    code: 0xf1473,
  },
  {
    name: 'nf-md-fan_speed_3',
    code: 0xf1474,
  },
  {
    name: 'nf-md-fast_forward',
    code: 0xf0211,
  },
  {
    name: 'nf-md-fast_forward_10',
    code: 0xf0d71,
  },
  {
    name: 'nf-md-fast_forward_15',
    code: 0xf193a,
  },
  {
    name: 'nf-md-fast_forward_30',
    code: 0xf0d06,
  },
  {
    name: 'nf-md-fast_forward_5',
    code: 0xf11f8,
  },
  {
    name: 'nf-md-fast_forward_60',
    code: 0xf160b,
  },
  {
    name: 'nf-md-fast_forward_outline',
    code: 0xf06d2,
  },
  {
    name: 'nf-md-fax',
    code: 0xf0212,
  },
  {
    name: 'nf-md-feather',
    code: 0xf06d3,
  },
  {
    name: 'nf-md-feature_search',
    code: 0xf0a49,
  },
  {
    name: 'nf-md-feature_search_outline',
    code: 0xf0a4a,
  },
  {
    name: 'nf-md-fedora',
    code: 0xf08db,
  },
  {
    name: 'nf-md-fence',
    code: 0xf179a,
  },
  {
    name: 'nf-md-fence_electric',
    code: 0xf17f6,
  },
  {
    name: 'nf-md-fencing',
    code: 0xf14c1,
  },
  {
    name: 'nf-md-ferris_wheel',
    code: 0xf0ea4,
  },
  {
    name: 'nf-md-ferry',
    code: 0xf0213,
  },
  {
    name: 'nf-md-file',
    code: 0xf0214,
  },
  {
    name: 'nf-md-file_account',
    code: 0xf073b,
  },
  {
    name: 'nf-md-file_account_outline',
    code: 0xf1028,
  },
  {
    name: 'nf-md-file_alert',
    code: 0xf0a4b,
  },
  {
    name: 'nf-md-file_alert_outline',
    code: 0xf0a4c,
  },
  {
    name: 'nf-md-file_arrow_left_right',
    code: 0xf1a93,
  },
  {
    name: 'nf-md-file_arrow_left_right_outline',
    code: 0xf1a94,
  },
  {
    name: 'nf-md-file_arrow_up_down',
    code: 0xf1a95,
  },
  {
    name: 'nf-md-file_arrow_up_down_outline',
    code: 0xf1a96,
  },
  {
    name: 'nf-md-file_cabinet',
    code: 0xf0ab6,
  },
  {
    name: 'nf-md-file_cad',
    code: 0xf0eeb,
  },
  {
    name: 'nf-md-file_cad_box',
    code: 0xf0eec,
  },
  {
    name: 'nf-md-file_cancel',
    code: 0xf0dc6,
  },
  {
    name: 'nf-md-file_cancel_outline',
    code: 0xf0dc7,
  },
  {
    name: 'nf-md-file_certificate',
    code: 0xf1186,
  },
  {
    name: 'nf-md-file_certificate_outline',
    code: 0xf1187,
  },
  {
    name: 'nf-md-file_chart',
    code: 0xf0215,
  },
  {
    name: 'nf-md-file_chart_check',
    code: 0xf19c6,
  },
  {
    name: 'nf-md-file_chart_check_outline',
    code: 0xf19c7,
  },
  {
    name: 'nf-md-file_chart_outline',
    code: 0xf1029,
  },
  {
    name: 'nf-md-file_check',
    code: 0xf0216,
  },
  {
    name: 'nf-md-file_check_outline',
    code: 0xf0e29,
  },
  {
    name: 'nf-md-file_clock',
    code: 0xf12e1,
  },
  {
    name: 'nf-md-file_clock_outline',
    code: 0xf12e2,
  },
  {
    name: 'nf-md-file_cloud',
    code: 0xf0217,
  },
  {
    name: 'nf-md-file_cloud_outline',
    code: 0xf102a,
  },
  {
    name: 'nf-md-file_code',
    code: 0xf022e,
  },
  {
    name: 'nf-md-file_code_outline',
    code: 0xf102b,
  },
  {
    name: 'nf-md-file_cog',
    code: 0xf107b,
  },
  {
    name: 'nf-md-file_cog_outline',
    code: 0xf107c,
  },
  {
    name: 'nf-md-file_compare',
    code: 0xf08aa,
  },
  {
    name: 'nf-md-file_delimited',
    code: 0xf0218,
  },
  {
    name: 'nf-md-file_delimited_outline',
    code: 0xf0ea5,
  },
  {
    name: 'nf-md-file_document',
    code: 0xf0219,
  },
  {
    name: 'nf-md-file_document_alert',
    code: 0xf1a97,
  },
  {
    name: 'nf-md-file_document_alert_outline',
    code: 0xf1a98,
  },
  {
    name: 'nf-md-file_document_check',
    code: 0xf1a99,
  },
  {
    name: 'nf-md-file_document_check_outline',
    code: 0xf1a9a,
  },
  {
    name: 'nf-md-file_document_edit',
    code: 0xf0dc8,
  },
  {
    name: 'nf-md-file_document_edit_outline',
    code: 0xf0dc9,
  },
  {
    name: 'nf-md-file_document_minus',
    code: 0xf1a9b,
  },
  {
    name: 'nf-md-file_document_minus_outline',
    code: 0xf1a9c,
  },
  {
    name: 'nf-md-file_document_multiple',
    code: 0xf1517,
  },
  {
    name: 'nf-md-file_document_multiple_outline',
    code: 0xf1518,
  },
  {
    name: 'nf-md-file_document_outline',
    code: 0xf09ee,
  },
  {
    name: 'nf-md-file_document_plus',
    code: 0xf1a9d,
  },
  {
    name: 'nf-md-file_document_plus_outline',
    code: 0xf1a9e,
  },
  {
    name: 'nf-md-file_document_remove',
    code: 0xf1a9f,
  },
  {
    name: 'nf-md-file_document_remove_outline',
    code: 0xf1aa0,
  },
  {
    name: 'nf-md-file_download',
    code: 0xf0965,
  },
  {
    name: 'nf-md-file_download_outline',
    code: 0xf0966,
  },
  {
    name: 'nf-md-file_edit',
    code: 0xf11e7,
  },
  {
    name: 'nf-md-file_edit_outline',
    code: 0xf11e8,
  },
  {
    name: 'nf-md-file_excel',
    code: 0xf021b,
  },
  {
    name: 'nf-md-file_excel_box',
    code: 0xf021c,
  },
  {
    name: 'nf-md-file_excel_box_outline',
    code: 0xf102c,
  },
  {
    name: 'nf-md-file_excel_outline',
    code: 0xf102d,
  },
  {
    name: 'nf-md-file_export',
    code: 0xf021d,
  },
  {
    name: 'nf-md-file_export_outline',
    code: 0xf102e,
  },
  {
    name: 'nf-md-file_eye',
    code: 0xf0dca,
  },
  {
    name: 'nf-md-file_eye_outline',
    code: 0xf0dcb,
  },
  {
    name: 'nf-md-file_find',
    code: 0xf021e,
  },
  {
    name: 'nf-md-file_find_outline',
    code: 0xf0b97,
  },
  {
    name: 'nf-md-file_gif_box',
    code: 0xf0d78,
  },
  {
    name: 'nf-md-file_hidden',
    code: 0xf0613,
  },
  {
    name: 'nf-md-file_image',
    code: 0xf021f,
  },
  {
    name: 'nf-md-file_image_marker',
    code: 0xf1772,
  },
  {
    name: 'nf-md-file_image_marker_outline',
    code: 0xf1773,
  },
  {
    name: 'nf-md-file_image_minus',
    code: 0xf193b,
  },
  {
    name: 'nf-md-file_image_minus_outline',
    code: 0xf193c,
  },
  {
    name: 'nf-md-file_image_outline',
    code: 0xf0eb0,
  },
  {
    name: 'nf-md-file_image_plus',
    code: 0xf193d,
  },
  {
    name: 'nf-md-file_image_plus_outline',
    code: 0xf193e,
  },
  {
    name: 'nf-md-file_image_remove',
    code: 0xf193f,
  },
  {
    name: 'nf-md-file_image_remove_outline',
    code: 0xf1940,
  },
  {
    name: 'nf-md-file_import',
    code: 0xf0220,
  },
  {
    name: 'nf-md-file_import_outline',
    code: 0xf102f,
  },
  {
    name: 'nf-md-file_jpg_box',
    code: 0xf0225,
  },
  {
    name: 'nf-md-file_key',
    code: 0xf1184,
  },
  {
    name: 'nf-md-file_key_outline',
    code: 0xf1185,
  },
  {
    name: 'nf-md-file_link',
    code: 0xf1177,
  },
  {
    name: 'nf-md-file_link_outline',
    code: 0xf1178,
  },
  {
    name: 'nf-md-file_lock',
    code: 0xf0221,
  },
  {
    name: 'nf-md-file_lock_open',
    code: 0xf19c8,
  },
  {
    name: 'nf-md-file_lock_open_outline',
    code: 0xf19c9,
  },
  {
    name: 'nf-md-file_lock_outline',
    code: 0xf1030,
  },
  {
    name: 'nf-md-file_marker',
    code: 0xf1774,
  },
  {
    name: 'nf-md-file_marker_outline',
    code: 0xf1775,
  },
  {
    name: 'nf-md-file_minus',
    code: 0xf1aa1,
  },
  {
    name: 'nf-md-file_minus_outline',
    code: 0xf1aa2,
  },
  {
    name: 'nf-md-file_move',
    code: 0xf0ab9,
  },
  {
    name: 'nf-md-file_move_outline',
    code: 0xf1031,
  },
  {
    name: 'nf-md-file_multiple',
    code: 0xf0222,
  },
  {
    name: 'nf-md-file_multiple_outline',
    code: 0xf1032,
  },
  {
    name: 'nf-md-file_music',
    code: 0xf0223,
  },
  {
    name: 'nf-md-file_music_outline',
    code: 0xf0e2a,
  },
  {
    name: 'nf-md-file_outline',
    code: 0xf0224,
  },
  {
    name: 'nf-md-file_pdf_box',
    code: 0xf0226,
  },
  {
    name: 'nf-md-file_percent',
    code: 0xf081e,
  },
  {
    name: 'nf-md-file_percent_outline',
    code: 0xf1033,
  },
  {
    name: 'nf-md-file_phone',
    code: 0xf1179,
  },
  {
    name: 'nf-md-file_phone_outline',
    code: 0xf117a,
  },
  {
    name: 'nf-md-file_plus',
    code: 0xf0752,
  },
  {
    name: 'nf-md-file_plus_outline',
    code: 0xf0eed,
  },
  {
    name: 'nf-md-file_png_box',
    code: 0xf0e2d,
  },
  {
    name: 'nf-md-file_powerpoint',
    code: 0xf0227,
  },
  {
    name: 'nf-md-file_powerpoint_box',
    code: 0xf0228,
  },
  {
    name: 'nf-md-file_powerpoint_box_outline',
    code: 0xf1034,
  },
  {
    name: 'nf-md-file_powerpoint_outline',
    code: 0xf1035,
  },
  {
    name: 'nf-md-file_presentation_box',
    code: 0xf0229,
  },
  {
    name: 'nf-md-file_question',
    code: 0xf086f,
  },
  {
    name: 'nf-md-file_question_outline',
    code: 0xf1036,
  },
  {
    name: 'nf-md-file_refresh',
    code: 0xf0918,
  },
  {
    name: 'nf-md-file_refresh_outline',
    code: 0xf0541,
  },
  {
    name: 'nf-md-file_remove',
    code: 0xf0b98,
  },
  {
    name: 'nf-md-file_remove_outline',
    code: 0xf1037,
  },
  {
    name: 'nf-md-file_replace',
    code: 0xf0b32,
  },
  {
    name: 'nf-md-file_replace_outline',
    code: 0xf0b33,
  },
  {
    name: 'nf-md-file_restore',
    code: 0xf0670,
  },
  {
    name: 'nf-md-file_restore_outline',
    code: 0xf1038,
  },
  {
    name: 'nf-md-file_rotate_left',
    code: 0xf1a3b,
  },
  {
    name: 'nf-md-file_rotate_left_outline',
    code: 0xf1a3c,
  },
  {
    name: 'nf-md-file_rotate_right',
    code: 0xf1a3d,
  },
  {
    name: 'nf-md-file_rotate_right_outline',
    code: 0xf1a3e,
  },
  {
    name: 'nf-md-file_search',
    code: 0xf0c7c,
  },
  {
    name: 'nf-md-file_search_outline',
    code: 0xf0c7d,
  },
  {
    name: 'nf-md-file_send',
    code: 0xf022a,
  },
  {
    name: 'nf-md-file_send_outline',
    code: 0xf1039,
  },
  {
    name: 'nf-md-file_settings',
    code: 0xf1079,
  },
  {
    name: 'nf-md-file_settings_outline',
    code: 0xf107a,
  },
  {
    name: 'nf-md-file_sign',
    code: 0xf19c3,
  },
  {
    name: 'nf-md-file_star',
    code: 0xf103a,
  },
  {
    name: 'nf-md-file_star_outline',
    code: 0xf103b,
  },
  {
    name: 'nf-md-file_swap',
    code: 0xf0fb4,
  },
  {
    name: 'nf-md-file_swap_outline',
    code: 0xf0fb5,
  },
  {
    name: 'nf-md-file_sync',
    code: 0xf1216,
  },
  {
    name: 'nf-md-file_sync_outline',
    code: 0xf1217,
  },
  {
    name: 'nf-md-file_table',
    code: 0xf0c7e,
  },
  {
    name: 'nf-md-file_table_box',
    code: 0xf10e1,
  },
  {
    name: 'nf-md-file_table_box_multiple',
    code: 0xf10e2,
  },
  {
    name: 'nf-md-file_table_box_multiple_outline',
    code: 0xf10e3,
  },
  {
    name: 'nf-md-file_table_box_outline',
    code: 0xf10e4,
  },
  {
    name: 'nf-md-file_table_outline',
    code: 0xf0c7f,
  },
  {
    name: 'nf-md-file_tree',
    code: 0xf0645,
  },
  {
    name: 'nf-md-file_tree_outline',
    code: 0xf13d2,
  },
  {
    name: 'nf-md-file_undo',
    code: 0xf08dc,
  },
  {
    name: 'nf-md-file_undo_outline',
    code: 0xf103c,
  },
  {
    name: 'nf-md-file_upload',
    code: 0xf0a4d,
  },
  {
    name: 'nf-md-file_upload_outline',
    code: 0xf0a4e,
  },
  {
    name: 'nf-md-file_video',
    code: 0xf022b,
  },
  {
    name: 'nf-md-file_video_outline',
    code: 0xf0e2c,
  },
  {
    name: 'nf-md-file_word',
    code: 0xf022c,
  },
  {
    name: 'nf-md-file_word_box',
    code: 0xf022d,
  },
  {
    name: 'nf-md-file_word_box_outline',
    code: 0xf103d,
  },
  {
    name: 'nf-md-file_word_outline',
    code: 0xf103e,
  },
  {
    name: 'nf-md-film',
    code: 0xf022f,
  },
  {
    name: 'nf-md-filmstrip',
    code: 0xf0230,
  },
  {
    name: 'nf-md-filmstrip_box',
    code: 0xf0332,
  },
  {
    name: 'nf-md-filmstrip_box_multiple',
    code: 0xf0d18,
  },
  {
    name: 'nf-md-filmstrip_off',
    code: 0xf0231,
  },
  {
    name: 'nf-md-filter',
    code: 0xf0232,
  },
  {
    name: 'nf-md-filter_check',
    code: 0xf18ec,
  },
  {
    name: 'nf-md-filter_check_outline',
    code: 0xf18ed,
  },
  {
    name: 'nf-md-filter_cog',
    code: 0xf1aa3,
  },
  {
    name: 'nf-md-filter_cog_outline',
    code: 0xf1aa4,
  },
  {
    name: 'nf-md-filter_menu',
    code: 0xf10e5,
  },
  {
    name: 'nf-md-filter_menu_outline',
    code: 0xf10e6,
  },
  {
    name: 'nf-md-filter_minus',
    code: 0xf0eee,
  },
  {
    name: 'nf-md-filter_minus_outline',
    code: 0xf0eef,
  },
  {
    name: 'nf-md-filter_multiple',
    code: 0xf1a3f,
  },
  {
    name: 'nf-md-filter_multiple_outline',
    code: 0xf1a40,
  },
  {
    name: 'nf-md-filter_off',
    code: 0xf14ef,
  },
  {
    name: 'nf-md-filter_off_outline',
    code: 0xf14f0,
  },
  {
    name: 'nf-md-filter_outline',
    code: 0xf0233,
  },
  {
    name: 'nf-md-filter_plus',
    code: 0xf0ef0,
  },
  {
    name: 'nf-md-filter_plus_outline',
    code: 0xf0ef1,
  },
  {
    name: 'nf-md-filter_remove',
    code: 0xf0234,
  },
  {
    name: 'nf-md-filter_remove_outline',
    code: 0xf0235,
  },
  {
    name: 'nf-md-filter_settings',
    code: 0xf1aa5,
  },
  {
    name: 'nf-md-filter_settings_outline',
    code: 0xf1aa6,
  },
  {
    name: 'nf-md-filter_variant',
    code: 0xf0236,
  },
  {
    name: 'nf-md-filter_variant_minus',
    code: 0xf1112,
  },
  {
    name: 'nf-md-filter_variant_plus',
    code: 0xf1113,
  },
  {
    name: 'nf-md-filter_variant_remove',
    code: 0xf103f,
  },
  {
    name: 'nf-md-finance',
    code: 0xf081f,
  },
  {
    name: 'nf-md-find_replace',
    code: 0xf06d4,
  },
  {
    name: 'nf-md-fingerprint',
    code: 0xf0237,
  },
  {
    name: 'nf-md-fingerprint_off',
    code: 0xf0eb1,
  },
  {
    name: 'nf-md-fire',
    code: 0xf0238,
  },
  {
    name: 'nf-md-fire_alert',
    code: 0xf15d7,
  },
  {
    name: 'nf-md-fire_circle',
    code: 0xf1807,
  },
  {
    name: 'nf-md-fire_extinguisher',
    code: 0xf0ef2,
  },
  {
    name: 'nf-md-fire_hydrant',
    code: 0xf1137,
  },
  {
    name: 'nf-md-fire_hydrant_alert',
    code: 0xf1138,
  },
  {
    name: 'nf-md-fire_hydrant_off',
    code: 0xf1139,
  },
  {
    name: 'nf-md-fire_off',
    code: 0xf1722,
  },
  {
    name: 'nf-md-fire_truck',
    code: 0xf08ab,
  },
  {
    name: 'nf-md-firebase',
    code: 0xf0967,
  },
  {
    name: 'nf-md-firefox',
    code: 0xf0239,
  },
  {
    name: 'nf-md-fireplace',
    code: 0xf0e2e,
  },
  {
    name: 'nf-md-fireplace_off',
    code: 0xf0e2f,
  },
  {
    name: 'nf-md-firewire',
    code: 0xf05be,
  },
  {
    name: 'nf-md-firework',
    code: 0xf0e30,
  },
  {
    name: 'nf-md-firework_off',
    code: 0xf1723,
  },
  {
    name: 'nf-md-fish',
    code: 0xf023a,
  },
  {
    name: 'nf-md-fish_off',
    code: 0xf13f3,
  },
  {
    name: 'nf-md-fishbowl',
    code: 0xf0ef3,
  },
  {
    name: 'nf-md-fishbowl_outline',
    code: 0xf0ef4,
  },
  {
    name: 'nf-md-fit_to_page',
    code: 0xf0ef5,
  },
  {
    name: 'nf-md-fit_to_page_outline',
    code: 0xf0ef6,
  },
  {
    name: 'nf-md-fit_to_screen',
    code: 0xf18f4,
  },
  {
    name: 'nf-md-fit_to_screen_outline',
    code: 0xf18f5,
  },
  {
    name: 'nf-md-flag',
    code: 0xf023b,
  },
  {
    name: 'nf-md-flag_checkered',
    code: 0xf023c,
  },
  {
    name: 'nf-md-flag_minus',
    code: 0xf0b99,
  },
  {
    name: 'nf-md-flag_minus_outline',
    code: 0xf10b2,
  },
  {
    name: 'nf-md-flag_off',
    code: 0xf18ee,
  },
  {
    name: 'nf-md-flag_off_outline',
    code: 0xf18ef,
  },
  {
    name: 'nf-md-flag_outline',
    code: 0xf023d,
  },
  {
    name: 'nf-md-flag_plus',
    code: 0xf0b9a,
  },
  {
    name: 'nf-md-flag_plus_outline',
    code: 0xf10b3,
  },
  {
    name: 'nf-md-flag_remove',
    code: 0xf0b9b,
  },
  {
    name: 'nf-md-flag_remove_outline',
    code: 0xf10b4,
  },
  {
    name: 'nf-md-flag_triangle',
    code: 0xf023f,
  },
  {
    name: 'nf-md-flag_variant',
    code: 0xf0240,
  },
  {
    name: 'nf-md-flag_variant_outline',
    code: 0xf023e,
  },
  {
    name: 'nf-md-flare',
    code: 0xf0d72,
  },
  {
    name: 'nf-md-flash',
    code: 0xf0241,
  },
  {
    name: 'nf-md-flash_alert',
    code: 0xf0ef7,
  },
  {
    name: 'nf-md-flash_alert_outline',
    code: 0xf0ef8,
  },
  {
    name: 'nf-md-flash_auto',
    code: 0xf0242,
  },
  {
    name: 'nf-md-flash_off',
    code: 0xf0243,
  },
  {
    name: 'nf-md-flash_outline',
    code: 0xf06d5,
  },
  {
    name: 'nf-md-flash_red_eye',
    code: 0xf067b,
  },
  {
    name: 'nf-md-flashlight',
    code: 0xf0244,
  },
  {
    name: 'nf-md-flashlight_off',
    code: 0xf0245,
  },
  {
    name: 'nf-md-flask',
    code: 0xf0093,
  },
  {
    name: 'nf-md-flask_empty',
    code: 0xf0094,
  },
  {
    name: 'nf-md-flask_empty_minus',
    code: 0xf123a,
  },
  {
    name: 'nf-md-flask_empty_minus_outline',
    code: 0xf123b,
  },
  {
    name: 'nf-md-flask_empty_off',
    code: 0xf13f4,
  },
  {
    name: 'nf-md-flask_empty_off_outline',
    code: 0xf13f5,
  },
  {
    name: 'nf-md-flask_empty_outline',
    code: 0xf0095,
  },
  {
    name: 'nf-md-flask_empty_plus',
    code: 0xf123c,
  },
  {
    name: 'nf-md-flask_empty_plus_outline',
    code: 0xf123d,
  },
  {
    name: 'nf-md-flask_empty_remove',
    code: 0xf123e,
  },
  {
    name: 'nf-md-flask_empty_remove_outline',
    code: 0xf123f,
  },
  {
    name: 'nf-md-flask_minus',
    code: 0xf1240,
  },
  {
    name: 'nf-md-flask_minus_outline',
    code: 0xf1241,
  },
  {
    name: 'nf-md-flask_off',
    code: 0xf13f6,
  },
  {
    name: 'nf-md-flask_off_outline',
    code: 0xf13f7,
  },
  {
    name: 'nf-md-flask_outline',
    code: 0xf0096,
  },
  {
    name: 'nf-md-flask_plus',
    code: 0xf1242,
  },
  {
    name: 'nf-md-flask_plus_outline',
    code: 0xf1243,
  },
  {
    name: 'nf-md-flask_remove',
    code: 0xf1244,
  },
  {
    name: 'nf-md-flask_remove_outline',
    code: 0xf1245,
  },
  {
    name: 'nf-md-flask_round_bottom',
    code: 0xf124b,
  },
  {
    name: 'nf-md-flask_round_bottom_empty',
    code: 0xf124c,
  },
  {
    name: 'nf-md-flask_round_bottom_empty_outline',
    code: 0xf124d,
  },
  {
    name: 'nf-md-flask_round_bottom_outline',
    code: 0xf124e,
  },
  {
    name: 'nf-md-fleur_de_lis',
    code: 0xf1303,
  },
  {
    name: 'nf-md-flip_horizontal',
    code: 0xf10e7,
  },
  {
    name: 'nf-md-flip_to_back',
    code: 0xf0247,
  },
  {
    name: 'nf-md-flip_to_front',
    code: 0xf0248,
  },
  {
    name: 'nf-md-flip_vertical',
    code: 0xf10e8,
  },
  {
    name: 'nf-md-floor_lamp',
    code: 0xf08dd,
  },
  {
    name: 'nf-md-floor_lamp_dual',
    code: 0xf1040,
  },
  {
    name: 'nf-md-floor_lamp_dual_outline',
    code: 0xf17ce,
  },
  {
    name: 'nf-md-floor_lamp_outline',
    code: 0xf17c8,
  },
  {
    name: 'nf-md-floor_lamp_torchiere',
    code: 0xf1747,
  },
  {
    name: 'nf-md-floor_lamp_torchiere_outline',
    code: 0xf17d6,
  },
  {
    name: 'nf-md-floor_lamp_torchiere_variant',
    code: 0xf1041,
  },
  {
    name: 'nf-md-floor_lamp_torchiere_variant_outline',
    code: 0xf17cf,
  },
  {
    name: 'nf-md-floor_plan',
    code: 0xf0821,
  },
  {
    name: 'nf-md-floppy',
    code: 0xf0249,
  },
  {
    name: 'nf-md-floppy_variant',
    code: 0xf09ef,
  },
  {
    name: 'nf-md-flower',
    code: 0xf024a,
  },
  {
    name: 'nf-md-flower_outline',
    code: 0xf09f0,
  },
  {
    name: 'nf-md-flower_pollen',
    code: 0xf1885,
  },
  {
    name: 'nf-md-flower_pollen_outline',
    code: 0xf1886,
  },
  {
    name: 'nf-md-flower_poppy',
    code: 0xf0d08,
  },
  {
    name: 'nf-md-flower_tulip',
    code: 0xf09f1,
  },
  {
    name: 'nf-md-flower_tulip_outline',
    code: 0xf09f2,
  },
  {
    name: 'nf-md-focus_auto',
    code: 0xf0f4e,
  },
  {
    name: 'nf-md-focus_field',
    code: 0xf0f4f,
  },
  {
    name: 'nf-md-focus_field_horizontal',
    code: 0xf0f50,
  },
  {
    name: 'nf-md-focus_field_vertical',
    code: 0xf0f51,
  },
  {
    name: 'nf-md-folder',
    code: 0xf024b,
  },
  {
    name: 'nf-md-folder_account',
    code: 0xf024c,
  },
  {
    name: 'nf-md-folder_account_outline',
    code: 0xf0b9c,
  },
  {
    name: 'nf-md-folder_alert',
    code: 0xf0dcc,
  },
  {
    name: 'nf-md-folder_alert_outline',
    code: 0xf0dcd,
  },
  {
    name: 'nf-md-folder_arrow_down',
    code: 0xf19e8,
  },
  {
    name: 'nf-md-folder_arrow_down_outline',
    code: 0xf19e9,
  },
  {
    name: 'nf-md-folder_arrow_left',
    code: 0xf19ea,
  },
  {
    name: 'nf-md-folder_arrow_left_outline',
    code: 0xf19eb,
  },
  {
    name: 'nf-md-folder_arrow_left_right',
    code: 0xf19ec,
  },
  {
    name: 'nf-md-folder_arrow_left_right_outline',
    code: 0xf19ed,
  },
  {
    name: 'nf-md-folder_arrow_right',
    code: 0xf19ee,
  },
  {
    name: 'nf-md-folder_arrow_right_outline',
    code: 0xf19ef,
  },
  {
    name: 'nf-md-folder_arrow_up',
    code: 0xf19f0,
  },
  {
    name: 'nf-md-folder_arrow_up_down',
    code: 0xf19f1,
  },
  {
    name: 'nf-md-folder_arrow_up_down_outline',
    code: 0xf19f2,
  },
  {
    name: 'nf-md-folder_arrow_up_outline',
    code: 0xf19f3,
  },
  {
    name: 'nf-md-folder_cancel',
    code: 0xf19f4,
  },
  {
    name: 'nf-md-folder_cancel_outline',
    code: 0xf19f5,
  },
  {
    name: 'nf-md-folder_check',
    code: 0xf197e,
  },
  {
    name: 'nf-md-folder_check_outline',
    code: 0xf197f,
  },
  {
    name: 'nf-md-folder_clock',
    code: 0xf0aba,
  },
  {
    name: 'nf-md-folder_clock_outline',
    code: 0xf0abb,
  },
  {
    name: 'nf-md-folder_cog',
    code: 0xf107f,
  },
  {
    name: 'nf-md-folder_cog_outline',
    code: 0xf1080,
  },
  {
    name: 'nf-md-folder_download',
    code: 0xf024d,
  },
  {
    name: 'nf-md-folder_download_outline',
    code: 0xf10e9,
  },
  {
    name: 'nf-md-folder_edit',
    code: 0xf08de,
  },
  {
    name: 'nf-md-folder_edit_outline',
    code: 0xf0dce,
  },
  {
    name: 'nf-md-folder_eye',
    code: 0xf178a,
  },
  {
    name: 'nf-md-folder_eye_outline',
    code: 0xf178b,
  },
  {
    name: 'nf-md-folder_file',
    code: 0xf19f6,
  },
  {
    name: 'nf-md-folder_file_outline',
    code: 0xf19f7,
  },
  {
    name: 'nf-md-folder_google_drive',
    code: 0xf024e,
  },
  {
    name: 'nf-md-folder_heart',
    code: 0xf10ea,
  },
  {
    name: 'nf-md-folder_heart_outline',
    code: 0xf10eb,
  },
  {
    name: 'nf-md-folder_hidden',
    code: 0xf179e,
  },
  {
    name: 'nf-md-folder_home',
    code: 0xf10b5,
  },
  {
    name: 'nf-md-folder_home_outline',
    code: 0xf10b6,
  },
  {
    name: 'nf-md-folder_image',
    code: 0xf024f,
  },
  {
    name: 'nf-md-folder_information',
    code: 0xf10b7,
  },
  {
    name: 'nf-md-folder_information_outline',
    code: 0xf10b8,
  },
  {
    name: 'nf-md-folder_key',
    code: 0xf08ac,
  },
  {
    name: 'nf-md-folder_key_network',
    code: 0xf08ad,
  },
  {
    name: 'nf-md-folder_key_network_outline',
    code: 0xf0c80,
  },
  {
    name: 'nf-md-folder_key_outline',
    code: 0xf10ec,
  },
  {
    name: 'nf-md-folder_lock',
    code: 0xf0250,
  },
  {
    name: 'nf-md-folder_lock_open',
    code: 0xf0251,
  },
  {
    name: 'nf-md-folder_lock_open_outline',
    code: 0xf1aa7,
  },
  {
    name: 'nf-md-folder_lock_outline',
    code: 0xf1aa8,
  },
  {
    name: 'nf-md-folder_marker',
    code: 0xf126d,
  },
  {
    name: 'nf-md-folder_marker_outline',
    code: 0xf126e,
  },
  {
    name: 'nf-md-folder_move',
    code: 0xf0252,
  },
  {
    name: 'nf-md-folder_move_outline',
    code: 0xf1246,
  },
  {
    name: 'nf-md-folder_multiple',
    code: 0xf0253,
  },
  {
    name: 'nf-md-folder_multiple_image',
    code: 0xf0254,
  },
  {
    name: 'nf-md-folder_multiple_outline',
    code: 0xf0255,
  },
  {
    name: 'nf-md-folder_multiple_plus',
    code: 0xf147e,
  },
  {
    name: 'nf-md-folder_multiple_plus_outline',
    code: 0xf147f,
  },
  {
    name: 'nf-md-folder_music',
    code: 0xf1359,
  },
  {
    name: 'nf-md-folder_music_outline',
    code: 0xf135a,
  },
  {
    name: 'nf-md-folder_network',
    code: 0xf0870,
  },
  {
    name: 'nf-md-folder_network_outline',
    code: 0xf0c81,
  },
  {
    name: 'nf-md-folder_off',
    code: 0xf19f8,
  },
  {
    name: 'nf-md-folder_off_outline',
    code: 0xf19f9,
  },
  {
    name: 'nf-md-folder_open',
    code: 0xf0770,
  },
  {
    name: 'nf-md-folder_open_outline',
    code: 0xf0dcf,
  },
  {
    name: 'nf-md-folder_outline',
    code: 0xf0256,
  },
  {
    name: 'nf-md-folder_play',
    code: 0xf19fa,
  },
  {
    name: 'nf-md-folder_play_outline',
    code: 0xf19fb,
  },
  {
    name: 'nf-md-folder_plus',
    code: 0xf0257,
  },
  {
    name: 'nf-md-folder_plus_outline',
    code: 0xf0b9d,
  },
  {
    name: 'nf-md-folder_pound',
    code: 0xf0d09,
  },
  {
    name: 'nf-md-folder_pound_outline',
    code: 0xf0d0a,
  },
  {
    name: 'nf-md-folder_question',
    code: 0xf19ca,
  },
  {
    name: 'nf-md-folder_question_outline',
    code: 0xf19cb,
  },
  {
    name: 'nf-md-folder_refresh',
    code: 0xf0749,
  },
  {
    name: 'nf-md-folder_refresh_outline',
    code: 0xf0542,
  },
  {
    name: 'nf-md-folder_remove',
    code: 0xf0258,
  },
  {
    name: 'nf-md-folder_remove_outline',
    code: 0xf0b9e,
  },
  {
    name: 'nf-md-folder_search',
    code: 0xf0968,
  },
  {
    name: 'nf-md-folder_search_outline',
    code: 0xf0969,
  },
  {
    name: 'nf-md-folder_settings',
    code: 0xf107d,
  },
  {
    name: 'nf-md-folder_settings_outline',
    code: 0xf107e,
  },
  {
    name: 'nf-md-folder_star',
    code: 0xf069d,
  },
  {
    name: 'nf-md-folder_star_multiple',
    code: 0xf13d3,
  },
  {
    name: 'nf-md-folder_star_multiple_outline',
    code: 0xf13d4,
  },
  {
    name: 'nf-md-folder_star_outline',
    code: 0xf0b9f,
  },
  {
    name: 'nf-md-folder_swap',
    code: 0xf0fb6,
  },
  {
    name: 'nf-md-folder_swap_outline',
    code: 0xf0fb7,
  },
  {
    name: 'nf-md-folder_sync',
    code: 0xf0d0b,
  },
  {
    name: 'nf-md-folder_sync_outline',
    code: 0xf0d0c,
  },
  {
    name: 'nf-md-folder_table',
    code: 0xf12e3,
  },
  {
    name: 'nf-md-folder_table_outline',
    code: 0xf12e4,
  },
  {
    name: 'nf-md-folder_text',
    code: 0xf0c82,
  },
  {
    name: 'nf-md-folder_text_outline',
    code: 0xf0c83,
  },
  {
    name: 'nf-md-folder_upload',
    code: 0xf0259,
  },
  {
    name: 'nf-md-folder_upload_outline',
    code: 0xf10ed,
  },
  {
    name: 'nf-md-folder_wrench',
    code: 0xf19fc,
  },
  {
    name: 'nf-md-folder_wrench_outline',
    code: 0xf19fd,
  },
  {
    name: 'nf-md-folder_zip',
    code: 0xf06eb,
  },
  {
    name: 'nf-md-folder_zip_outline',
    code: 0xf07b9,
  },
  {
    name: 'nf-md-font_awesome',
    code: 0xf003a,
  },
  {
    name: 'nf-md-food',
    code: 0xf025a,
  },
  {
    name: 'nf-md-food_apple',
    code: 0xf025b,
  },
  {
    name: 'nf-md-food_apple_outline',
    code: 0xf0c84,
  },
  {
    name: 'nf-md-food_croissant',
    code: 0xf07c8,
  },
  {
    name: 'nf-md-food_drumstick',
    code: 0xf141f,
  },
  {
    name: 'nf-md-food_drumstick_off',
    code: 0xf1468,
  },
  {
    name: 'nf-md-food_drumstick_off_outline',
    code: 0xf1469,
  },
  {
    name: 'nf-md-food_drumstick_outline',
    code: 0xf1420,
  },
  {
    name: 'nf-md-food_fork_drink',
    code: 0xf05f2,
  },
  {
    name: 'nf-md-food_halal',
    code: 0xf1572,
  },
  {
    name: 'nf-md-food_hot_dog',
    code: 0xf184b,
  },
  {
    name: 'nf-md-food_kosher',
    code: 0xf1573,
  },
  {
    name: 'nf-md-food_off',
    code: 0xf05f3,
  },
  {
    name: 'nf-md-food_off_outline',
    code: 0xf1915,
  },
  {
    name: 'nf-md-food_outline',
    code: 0xf1916,
  },
  {
    name: 'nf-md-food_steak',
    code: 0xf146a,
  },
  {
    name: 'nf-md-food_steak_off',
    code: 0xf146b,
  },
  {
    name: 'nf-md-food_takeout_box',
    code: 0xf1836,
  },
  {
    name: 'nf-md-food_takeout_box_outline',
    code: 0xf1837,
  },
  {
    name: 'nf-md-food_turkey',
    code: 0xf171c,
  },
  {
    name: 'nf-md-food_variant',
    code: 0xf025c,
  },
  {
    name: 'nf-md-food_variant_off',
    code: 0xf13e5,
  },
  {
    name: 'nf-md-foot_print',
    code: 0xf0f52,
  },
  {
    name: 'nf-md-football',
    code: 0xf025d,
  },
  {
    name: 'nf-md-football_australian',
    code: 0xf025e,
  },
  {
    name: 'nf-md-football_helmet',
    code: 0xf025f,
  },
  {
    name: 'nf-md-forest',
    code: 0xf1897,
  },
  {
    name: 'nf-md-forklift',
    code: 0xf07c9,
  },
  {
    name: 'nf-md-form_dropdown',
    code: 0xf1400,
  },
  {
    name: 'nf-md-form_select',
    code: 0xf1401,
  },
  {
    name: 'nf-md-form_textarea',
    code: 0xf1095,
  },
  {
    name: 'nf-md-form_textbox',
    code: 0xf060e,
  },
  {
    name: 'nf-md-form_textbox_lock',
    code: 0xf135d,
  },
  {
    name: 'nf-md-form_textbox_password',
    code: 0xf07f5,
  },
  {
    name: 'nf-md-format_align_bottom',
    code: 0xf0753,
  },
  {
    name: 'nf-md-format_align_center',
    code: 0xf0260,
  },
  {
    name: 'nf-md-format_align_justify',
    code: 0xf0261,
  },
  {
    name: 'nf-md-format_align_left',
    code: 0xf0262,
  },
  {
    name: 'nf-md-format_align_middle',
    code: 0xf0754,
  },
  {
    name: 'nf-md-format_align_right',
    code: 0xf0263,
  },
  {
    name: 'nf-md-format_align_top',
    code: 0xf0755,
  },
  {
    name: 'nf-md-format_annotation_minus',
    code: 0xf0abc,
  },
  {
    name: 'nf-md-format_annotation_plus',
    code: 0xf0646,
  },
  {
    name: 'nf-md-format_bold',
    code: 0xf0264,
  },
  {
    name: 'nf-md-format_clear',
    code: 0xf0265,
  },
  {
    name: 'nf-md-format_color_fill',
    code: 0xf0266,
  },
  {
    name: 'nf-md-format_color_highlight',
    code: 0xf0e31,
  },
  {
    name: 'nf-md-format_color_marker_cancel',
    code: 0xf1313,
  },
  {
    name: 'nf-md-format_color_text',
    code: 0xf069e,
  },
  {
    name: 'nf-md-format_columns',
    code: 0xf08df,
  },
  {
    name: 'nf-md-format_float_center',
    code: 0xf0267,
  },
  {
    name: 'nf-md-format_float_left',
    code: 0xf0268,
  },
  {
    name: 'nf-md-format_float_none',
    code: 0xf0269,
  },
  {
    name: 'nf-md-format_float_right',
    code: 0xf026a,
  },
  {
    name: 'nf-md-format_font',
    code: 0xf06d6,
  },
  {
    name: 'nf-md-format_font_size_decrease',
    code: 0xf09f3,
  },
  {
    name: 'nf-md-format_font_size_increase',
    code: 0xf09f4,
  },
  {
    name: 'nf-md-format_header_1',
    code: 0xf026b,
  },
  {
    name: 'nf-md-format_header_2',
    code: 0xf026c,
  },
  {
    name: 'nf-md-format_header_3',
    code: 0xf026d,
  },
  {
    name: 'nf-md-format_header_4',
    code: 0xf026e,
  },
  {
    name: 'nf-md-format_header_5',
    code: 0xf026f,
  },
  {
    name: 'nf-md-format_header_6',
    code: 0xf0270,
  },
  {
    name: 'nf-md-format_header_decrease',
    code: 0xf0271,
  },
  {
    name: 'nf-md-format_header_equal',
    code: 0xf0272,
  },
  {
    name: 'nf-md-format_header_increase',
    code: 0xf0273,
  },
  {
    name: 'nf-md-format_header_pound',
    code: 0xf0274,
  },
  {
    name: 'nf-md-format_horizontal_align_center',
    code: 0xf061e,
  },
  {
    name: 'nf-md-format_horizontal_align_left',
    code: 0xf061f,
  },
  {
    name: 'nf-md-format_horizontal_align_right',
    code: 0xf0620,
  },
  {
    name: 'nf-md-format_indent_decrease',
    code: 0xf0275,
  },
  {
    name: 'nf-md-format_indent_increase',
    code: 0xf0276,
  },
  {
    name: 'nf-md-format_italic',
    code: 0xf0277,
  },
  {
    name: 'nf-md-format_letter_case',
    code: 0xf0b34,
  },
  {
    name: 'nf-md-format_letter_case_lower',
    code: 0xf0b35,
  },
  {
    name: 'nf-md-format_letter_case_upper',
    code: 0xf0b36,
  },
  {
    name: 'nf-md-format_letter_ends_with',
    code: 0xf0fb8,
  },
  {
    name: 'nf-md-format_letter_matches',
    code: 0xf0fb9,
  },
  {
    name: 'nf-md-format_letter_spacing',
    code: 0xf1956,
  },
  {
    name: 'nf-md-format_letter_starts_with',
    code: 0xf0fba,
  },
  {
    name: 'nf-md-format_line_spacing',
    code: 0xf0278,
  },
  {
    name: 'nf-md-format_line_style',
    code: 0xf05c8,
  },
  {
    name: 'nf-md-format_line_weight',
    code: 0xf05c9,
  },
  {
    name: 'nf-md-format_list_bulleted',
    code: 0xf0279,
  },
  {
    name: 'nf-md-format_list_bulleted_square',
    code: 0xf0dd0,
  },
  {
    name: 'nf-md-format_list_bulleted_triangle',
    code: 0xf0eb2,
  },
  {
    name: 'nf-md-format_list_bulleted_type',
    code: 0xf027a,
  },
  {
    name: 'nf-md-format_list_checkbox',
    code: 0xf096a,
  },
  {
    name: 'nf-md-format_list_checks',
    code: 0xf0756,
  },
  {
    name: 'nf-md-format_list_group',
    code: 0xf1860,
  },
  {
    name: 'nf-md-format_list_numbered',
    code: 0xf027b,
  },
  {
    name: 'nf-md-format_list_numbered_rtl',
    code: 0xf0d0d,
  },
  {
    name: 'nf-md-format_list_text',
    code: 0xf126f,
  },
  {
    name: 'nf-md-format_overline',
    code: 0xf0eb3,
  },
  {
    name: 'nf-md-format_page_break',
    code: 0xf06d7,
  },
  {
    name: 'nf-md-format_page_split',
    code: 0xf1917,
  },
  {
    name: 'nf-md-format_paint',
    code: 0xf027c,
  },
  {
    name: 'nf-md-format_paragraph',
    code: 0xf027d,
  },
  {
    name: 'nf-md-format_pilcrow',
    code: 0xf06d8,
  },
  {
    name: 'nf-md-format_quote_close',
    code: 0xf027e,
  },
  {
    name: 'nf-md-format_quote_close_outline',
    code: 0xf11a8,
  },
  {
    name: 'nf-md-format_quote_open',
    code: 0xf0757,
  },
  {
    name: 'nf-md-format_quote_open_outline',
    code: 0xf11a7,
  },
  {
    name: 'nf-md-format_rotate_90',
    code: 0xf06aa,
  },
  {
    name: 'nf-md-format_section',
    code: 0xf069f,
  },
  {
    name: 'nf-md-format_size',
    code: 0xf027f,
  },
  {
    name: 'nf-md-format_strikethrough',
    code: 0xf0280,
  },
  {
    name: 'nf-md-format_strikethrough_variant',
    code: 0xf0281,
  },
  {
    name: 'nf-md-format_subscript',
    code: 0xf0282,
  },
  {
    name: 'nf-md-format_superscript',
    code: 0xf0283,
  },
  {
    name: 'nf-md-format_text',
    code: 0xf0284,
  },
  {
    name: 'nf-md-format_text_rotation_angle_down',
    code: 0xf0fbb,
  },
  {
    name: 'nf-md-format_text_rotation_angle_up',
    code: 0xf0fbc,
  },
  {
    name: 'nf-md-format_text_rotation_down',
    code: 0xf0d73,
  },
  {
    name: 'nf-md-format_text_rotation_down_vertical',
    code: 0xf0fbd,
  },
  {
    name: 'nf-md-format_text_rotation_none',
    code: 0xf0d74,
  },
  {
    name: 'nf-md-format_text_rotation_up',
    code: 0xf0fbe,
  },
  {
    name: 'nf-md-format_text_rotation_vertical',
    code: 0xf0fbf,
  },
  {
    name: 'nf-md-format_text_variant',
    code: 0xf0e32,
  },
  {
    name: 'nf-md-format_text_variant_outline',
    code: 0xf150f,
  },
  {
    name: 'nf-md-format_text_wrapping_clip',
    code: 0xf0d0e,
  },
  {
    name: 'nf-md-format_text_wrapping_overflow',
    code: 0xf0d0f,
  },
  {
    name: 'nf-md-format_text_wrapping_wrap',
    code: 0xf0d10,
  },
  {
    name: 'nf-md-format_textbox',
    code: 0xf0d11,
  },
  {
    name: 'nf-md-format_textdirection_l_to_r',
    code: 0xf0285,
  },
  {
    name: 'nf-md-format_textdirection_r_to_l',
    code: 0xf0286,
  },
  {
    name: 'nf-md-format_title',
    code: 0xf05f4,
  },
  {
    name: 'nf-md-format_underline',
    code: 0xf0287,
  },
  {
    name: 'nf-md-format_underline_wavy',
    code: 0xf18e9,
  },
  {
    name: 'nf-md-format_vertical_align_bottom',
    code: 0xf0621,
  },
  {
    name: 'nf-md-format_vertical_align_center',
    code: 0xf0622,
  },
  {
    name: 'nf-md-format_vertical_align_top',
    code: 0xf0623,
  },
  {
    name: 'nf-md-format_wrap_inline',
    code: 0xf0288,
  },
  {
    name: 'nf-md-format_wrap_square',
    code: 0xf0289,
  },
  {
    name: 'nf-md-format_wrap_tight',
    code: 0xf028a,
  },
  {
    name: 'nf-md-format_wrap_top_bottom',
    code: 0xf028b,
  },
  {
    name: 'nf-md-forum',
    code: 0xf028c,
  },
  {
    name: 'nf-md-forum_minus',
    code: 0xf1aa9,
  },
  {
    name: 'nf-md-forum_minus_outline',
    code: 0xf1aaa,
  },
  {
    name: 'nf-md-forum_outline',
    code: 0xf0822,
  },
  {
    name: 'nf-md-forum_plus',
    code: 0xf1aab,
  },
  {
    name: 'nf-md-forum_plus_outline',
    code: 0xf1aac,
  },
  {
    name: 'nf-md-forum_remove',
    code: 0xf1aad,
  },
  {
    name: 'nf-md-forum_remove_outline',
    code: 0xf1aae,
  },
  {
    name: 'nf-md-forward',
    code: 0xf028d,
  },
  {
    name: 'nf-md-forwardburger',
    code: 0xf0d75,
  },
  {
    name: 'nf-md-fountain',
    code: 0xf096b,
  },
  {
    name: 'nf-md-fountain_pen',
    code: 0xf0d12,
  },
  {
    name: 'nf-md-fountain_pen_tip',
    code: 0xf0d13,
  },
  {
    name: 'nf-md-fraction_one_half',
    code: 0xf1992,
  },
  {
    name: 'nf-md-freebsd',
    code: 0xf08e0,
  },
  {
    name: 'nf-md-french_fries',
    code: 0xf1957,
  },
  {
    name: 'nf-md-frequently_asked_questions',
    code: 0xf0eb4,
  },
  {
    name: 'nf-md-fridge',
    code: 0xf0290,
  },
  {
    name: 'nf-md-fridge_alert',
    code: 0xf11b1,
  },
  {
    name: 'nf-md-fridge_alert_outline',
    code: 0xf11b2,
  },
  {
    name: 'nf-md-fridge_bottom',
    code: 0xf0292,
  },
  {
    name: 'nf-md-fridge_industrial',
    code: 0xf15ee,
  },
  {
    name: 'nf-md-fridge_industrial_alert',
    code: 0xf15ef,
  },
  {
    name: 'nf-md-fridge_industrial_alert_outline',
    code: 0xf15f0,
  },
  {
    name: 'nf-md-fridge_industrial_off',
    code: 0xf15f1,
  },
  {
    name: 'nf-md-fridge_industrial_off_outline',
    code: 0xf15f2,
  },
  {
    name: 'nf-md-fridge_industrial_outline',
    code: 0xf15f3,
  },
  {
    name: 'nf-md-fridge_off',
    code: 0xf11af,
  },
  {
    name: 'nf-md-fridge_off_outline',
    code: 0xf11b0,
  },
  {
    name: 'nf-md-fridge_outline',
    code: 0xf028f,
  },
  {
    name: 'nf-md-fridge_top',
    code: 0xf0291,
  },
  {
    name: 'nf-md-fridge_variant',
    code: 0xf15f4,
  },
  {
    name: 'nf-md-fridge_variant_alert',
    code: 0xf15f5,
  },
  {
    name: 'nf-md-fridge_variant_alert_outline',
    code: 0xf15f6,
  },
  {
    name: 'nf-md-fridge_variant_off',
    code: 0xf15f7,
  },
  {
    name: 'nf-md-fridge_variant_off_outline',
    code: 0xf15f8,
  },
  {
    name: 'nf-md-fridge_variant_outline',
    code: 0xf15f9,
  },
  {
    name: 'nf-md-fruit_cherries',
    code: 0xf1042,
  },
  {
    name: 'nf-md-fruit_cherries_off',
    code: 0xf13f8,
  },
  {
    name: 'nf-md-fruit_citrus',
    code: 0xf1043,
  },
  {
    name: 'nf-md-fruit_citrus_off',
    code: 0xf13f9,
  },
  {
    name: 'nf-md-fruit_grapes',
    code: 0xf1044,
  },
  {
    name: 'nf-md-fruit_grapes_outline',
    code: 0xf1045,
  },
  {
    name: 'nf-md-fruit_pear',
    code: 0xf1a0e,
  },
  {
    name: 'nf-md-fruit_pineapple',
    code: 0xf1046,
  },
  {
    name: 'nf-md-fruit_watermelon',
    code: 0xf1047,
  },
  {
    name: 'nf-md-fuel',
    code: 0xf07ca,
  },
  {
    name: 'nf-md-fuel_cell',
    code: 0xf18b5,
  },
  {
    name: 'nf-md-fullscreen',
    code: 0xf0293,
  },
  {
    name: 'nf-md-fullscreen_exit',
    code: 0xf0294,
  },
  {
    name: 'nf-md-function',
    code: 0xf0295,
  },
  {
    name: 'nf-md-function_variant',
    code: 0xf0871,
  },
  {
    name: 'nf-md-furigana_horizontal',
    code: 0xf1081,
  },
  {
    name: 'nf-md-furigana_vertical',
    code: 0xf1082,
  },
  {
    name: 'nf-md-fuse',
    code: 0xf0c85,
  },
  {
    name: 'nf-md-fuse_alert',
    code: 0xf142d,
  },
  {
    name: 'nf-md-fuse_blade',
    code: 0xf0c86,
  },
  {
    name: 'nf-md-fuse_off',
    code: 0xf142c,
  },
  {
    name: 'nf-md-gamepad',
    code: 0xf0296,
  },
  {
    name: 'nf-md-gamepad_circle',
    code: 0xf0e33,
  },
  {
    name: 'nf-md-gamepad_circle_down',
    code: 0xf0e34,
  },
  {
    name: 'nf-md-gamepad_circle_left',
    code: 0xf0e35,
  },
  {
    name: 'nf-md-gamepad_circle_outline',
    code: 0xf0e36,
  },
  {
    name: 'nf-md-gamepad_circle_right',
    code: 0xf0e37,
  },
  {
    name: 'nf-md-gamepad_circle_up',
    code: 0xf0e38,
  },
  {
    name: 'nf-md-gamepad_down',
    code: 0xf0e39,
  },
  {
    name: 'nf-md-gamepad_left',
    code: 0xf0e3a,
  },
  {
    name: 'nf-md-gamepad_outline',
    code: 0xf1919,
  },
  {
    name: 'nf-md-gamepad_right',
    code: 0xf0e3b,
  },
  {
    name: 'nf-md-gamepad_round',
    code: 0xf0e3c,
  },
  {
    name: 'nf-md-gamepad_round_down',
    code: 0xf0e3d,
  },
  {
    name: 'nf-md-gamepad_round_left',
    code: 0xf0e3e,
  },
  {
    name: 'nf-md-gamepad_round_outline',
    code: 0xf0e3f,
  },
  {
    name: 'nf-md-gamepad_round_right',
    code: 0xf0e40,
  },
  {
    name: 'nf-md-gamepad_round_up',
    code: 0xf0e41,
  },
  {
    name: 'nf-md-gamepad_square',
    code: 0xf0eb5,
  },
  {
    name: 'nf-md-gamepad_square_outline',
    code: 0xf0eb6,
  },
  {
    name: 'nf-md-gamepad_up',
    code: 0xf0e42,
  },
  {
    name: 'nf-md-gamepad_variant',
    code: 0xf0297,
  },
  {
    name: 'nf-md-gamepad_variant_outline',
    code: 0xf0eb7,
  },
  {
    name: 'nf-md-gamma',
    code: 0xf10ee,
  },
  {
    name: 'nf-md-gantry_crane',
    code: 0xf0dd1,
  },
  {
    name: 'nf-md-garage',
    code: 0xf06d9,
  },
  {
    name: 'nf-md-garage_alert',
    code: 0xf0872,
  },
  {
    name: 'nf-md-garage_alert_variant',
    code: 0xf12d5,
  },
  {
    name: 'nf-md-garage_lock',
    code: 0xf17fb,
  },
  {
    name: 'nf-md-garage_open',
    code: 0xf06da,
  },
  {
    name: 'nf-md-garage_open_variant',
    code: 0xf12d4,
  },
  {
    name: 'nf-md-garage_variant',
    code: 0xf12d3,
  },
  {
    name: 'nf-md-garage_variant_lock',
    code: 0xf17fc,
  },
  {
    name: 'nf-md-gas_burner',
    code: 0xf1a1b,
  },
  {
    name: 'nf-md-gas_cylinder',
    code: 0xf0647,
  },
  {
    name: 'nf-md-gas_station',
    code: 0xf0298,
  },
  {
    name: 'nf-md-gas_station_off',
    code: 0xf1409,
  },
  {
    name: 'nf-md-gas_station_off_outline',
    code: 0xf140a,
  },
  {
    name: 'nf-md-gas_station_outline',
    code: 0xf0eb8,
  },
  {
    name: 'nf-md-gate',
    code: 0xf0299,
  },
  {
    name: 'nf-md-gate_alert',
    code: 0xf17f8,
  },
  {
    name: 'nf-md-gate_and',
    code: 0xf08e1,
  },
  {
    name: 'nf-md-gate_arrow_left',
    code: 0xf17f7,
  },
  {
    name: 'nf-md-gate_arrow_right',
    code: 0xf1169,
  },
  {
    name: 'nf-md-gate_nand',
    code: 0xf08e2,
  },
  {
    name: 'nf-md-gate_nor',
    code: 0xf08e3,
  },
  {
    name: 'nf-md-gate_not',
    code: 0xf08e4,
  },
  {
    name: 'nf-md-gate_open',
    code: 0xf116a,
  },
  {
    name: 'nf-md-gate_or',
    code: 0xf08e5,
  },
  {
    name: 'nf-md-gate_xnor',
    code: 0xf08e6,
  },
  {
    name: 'nf-md-gate_xor',
    code: 0xf08e7,
  },
  {
    name: 'nf-md-gatsby',
    code: 0xf0e43,
  },
  {
    name: 'nf-md-gauge',
    code: 0xf029a,
  },
  {
    name: 'nf-md-gauge_empty',
    code: 0xf0873,
  },
  {
    name: 'nf-md-gauge_full',
    code: 0xf0874,
  },
  {
    name: 'nf-md-gauge_low',
    code: 0xf0875,
  },
  {
    name: 'nf-md-gavel',
    code: 0xf029b,
  },
  {
    name: 'nf-md-gender_female',
    code: 0xf029c,
  },
  {
    name: 'nf-md-gender_male',
    code: 0xf029d,
  },
  {
    name: 'nf-md-gender_male_female',
    code: 0xf029e,
  },
  {
    name: 'nf-md-gender_male_female_variant',
    code: 0xf113f,
  },
  {
    name: 'nf-md-gender_non_binary',
    code: 0xf1140,
  },
  {
    name: 'nf-md-gender_transgender',
    code: 0xf029f,
  },
  {
    name: 'nf-md-gentoo',
    code: 0xf08e8,
  },
  {
    name: 'nf-md-gesture',
    code: 0xf07cb,
  },
  {
    name: 'nf-md-gesture_double_tap',
    code: 0xf073c,
  },
  {
    name: 'nf-md-gesture_pinch',
    code: 0xf0abd,
  },
  {
    name: 'nf-md-gesture_spread',
    code: 0xf0abe,
  },
  {
    name: 'nf-md-gesture_swipe',
    code: 0xf0d76,
  },
  {
    name: 'nf-md-gesture_swipe_down',
    code: 0xf073d,
  },
  {
    name: 'nf-md-gesture_swipe_horizontal',
    code: 0xf0abf,
  },
  {
    name: 'nf-md-gesture_swipe_left',
    code: 0xf073e,
  },
  {
    name: 'nf-md-gesture_swipe_right',
    code: 0xf073f,
  },
  {
    name: 'nf-md-gesture_swipe_up',
    code: 0xf0740,
  },
  {
    name: 'nf-md-gesture_swipe_vertical',
    code: 0xf0ac0,
  },
  {
    name: 'nf-md-gesture_tap',
    code: 0xf0741,
  },
  {
    name: 'nf-md-gesture_tap_box',
    code: 0xf12a9,
  },
  {
    name: 'nf-md-gesture_tap_button',
    code: 0xf12a8,
  },
  {
    name: 'nf-md-gesture_tap_hold',
    code: 0xf0d77,
  },
  {
    name: 'nf-md-gesture_two_double_tap',
    code: 0xf0742,
  },
  {
    name: 'nf-md-gesture_two_tap',
    code: 0xf0743,
  },
  {
    name: 'nf-md-ghost',
    code: 0xf02a0,
  },
  {
    name: 'nf-md-ghost_off',
    code: 0xf09f5,
  },
  {
    name: 'nf-md-ghost_off_outline',
    code: 0xf165c,
  },
  {
    name: 'nf-md-ghost_outline',
    code: 0xf165d,
  },
  {
    name: 'nf-md-gift',
    code: 0xf0e44,
  },
  {
    name: 'nf-md-gift_off',
    code: 0xf16ef,
  },
  {
    name: 'nf-md-gift_off_outline',
    code: 0xf16f0,
  },
  {
    name: 'nf-md-gift_open',
    code: 0xf16f1,
  },
  {
    name: 'nf-md-gift_open_outline',
    code: 0xf16f2,
  },
  {
    name: 'nf-md-gift_outline',
    code: 0xf02a1,
  },
  {
    name: 'nf-md-git',
    code: 0xf02a2,
  },
  {
    name: 'nf-md-github',
    code: 0xf02a4,
  },
  {
    name: 'nf-md-gitlab',
    code: 0xf0ba0,
  },
  {
    name: 'nf-md-glass_cocktail',
    code: 0xf0356,
  },
  {
    name: 'nf-md-glass_cocktail_off',
    code: 0xf15e6,
  },
  {
    name: 'nf-md-glass_flute',
    code: 0xf02a5,
  },
  {
    name: 'nf-md-glass_fragile',
    code: 0xf1873,
  },
  {
    name: 'nf-md-glass_mug',
    code: 0xf02a6,
  },
  {
    name: 'nf-md-glass_mug_off',
    code: 0xf15e7,
  },
  {
    name: 'nf-md-glass_mug_variant',
    code: 0xf1116,
  },
  {
    name: 'nf-md-glass_mug_variant_off',
    code: 0xf15e8,
  },
  {
    name: 'nf-md-glass_pint_outline',
    code: 0xf130d,
  },
  {
    name: 'nf-md-glass_stange',
    code: 0xf02a7,
  },
  {
    name: 'nf-md-glass_tulip',
    code: 0xf02a8,
  },
  {
    name: 'nf-md-glass_wine',
    code: 0xf0876,
  },
  {
    name: 'nf-md-glasses',
    code: 0xf02aa,
  },
  {
    name: 'nf-md-globe_light',
    code: 0xf12d7,
  },
  {
    name: 'nf-md-globe_model',
    code: 0xf08e9,
  },
  {
    name: 'nf-md-gmail',
    code: 0xf02ab,
  },
  {
    name: 'nf-md-gnome',
    code: 0xf02ac,
  },
  {
    name: 'nf-md-go_kart',
    code: 0xf0d79,
  },
  {
    name: 'nf-md-go_kart_track',
    code: 0xf0d7a,
  },
  {
    name: 'nf-md-gog',
    code: 0xf0ba1,
  },
  {
    name: 'nf-md-gold',
    code: 0xf124f,
  },
  {
    name: 'nf-md-golf',
    code: 0xf0823,
  },
  {
    name: 'nf-md-golf_cart',
    code: 0xf11a4,
  },
  {
    name: 'nf-md-golf_tee',
    code: 0xf1083,
  },
  {
    name: 'nf-md-gondola',
    code: 0xf0686,
  },
  {
    name: 'nf-md-goodreads',
    code: 0xf0d7b,
  },
  {
    name: 'nf-md-google',
    code: 0xf02ad,
  },
  {
    name: 'nf-md-google_ads',
    code: 0xf0c87,
  },
  {
    name: 'nf-md-google_analytics',
    code: 0xf07cc,
  },
  {
    name: 'nf-md-google_assistant',
    code: 0xf07cd,
  },
  {
    name: 'nf-md-google_cardboard',
    code: 0xf02ae,
  },
  {
    name: 'nf-md-google_chrome',
    code: 0xf02af,
  },
  {
    name: 'nf-md-google_circles',
    code: 0xf02b0,
  },
  {
    name: 'nf-md-google_circles_communities',
    code: 0xf02b1,
  },
  {
    name: 'nf-md-google_circles_extended',
    code: 0xf02b2,
  },
  {
    name: 'nf-md-google_circles_group',
    code: 0xf02b3,
  },
  {
    name: 'nf-md-google_classroom',
    code: 0xf02c0,
  },
  {
    name: 'nf-md-google_cloud',
    code: 0xf11f6,
  },
  {
    name: 'nf-md-google_controller',
    code: 0xf02b4,
  },
  {
    name: 'nf-md-google_controller_off',
    code: 0xf02b5,
  },
  {
    name: 'nf-md-google_downasaur',
    code: 0xf1362,
  },
  {
    name: 'nf-md-google_drive',
    code: 0xf02b6,
  },
  {
    name: 'nf-md-google_earth',
    code: 0xf02b7,
  },
  {
    name: 'nf-md-google_fit',
    code: 0xf096c,
  },
  {
    name: 'nf-md-google_glass',
    code: 0xf02b8,
  },
  {
    name: 'nf-md-google_hangouts',
    code: 0xf02c9,
  },
  {
    name: 'nf-md-google_home',
    code: 0xf0824,
  },
  {
    name: 'nf-md-google_keep',
    code: 0xf06dc,
  },
  {
    name: 'nf-md-google_lens',
    code: 0xf09f6,
  },
  {
    name: 'nf-md-google_maps',
    code: 0xf05f5,
  },
  {
    name: 'nf-md-google_my_business',
    code: 0xf1048,
  },
  {
    name: 'nf-md-google_nearby',
    code: 0xf02b9,
  },
  {
    name: 'nf-md-google_play',
    code: 0xf02bc,
  },
  {
    name: 'nf-md-google_plus',
    code: 0xf02bd,
  },
  {
    name: 'nf-md-google_podcast',
    code: 0xf0eb9,
  },
  {
    name: 'nf-md-google_spreadsheet',
    code: 0xf09f7,
  },
  {
    name: 'nf-md-google_street_view',
    code: 0xf0c88,
  },
  {
    name: 'nf-md-google_translate',
    code: 0xf02bf,
  },
  {
    name: 'nf-md-gradient_horizontal',
    code: 0xf174a,
  },
  {
    name: 'nf-md-gradient_vertical',
    code: 0xf06a0,
  },
  {
    name: 'nf-md-grain',
    code: 0xf0d7c,
  },
  {
    name: 'nf-md-graph',
    code: 0xf1049,
  },
  {
    name: 'nf-md-graph_outline',
    code: 0xf104a,
  },
  {
    name: 'nf-md-graphql',
    code: 0xf0877,
  },
  {
    name: 'nf-md-grass',
    code: 0xf1510,
  },
  {
    name: 'nf-md-grave_stone',
    code: 0xf0ba2,
  },
  {
    name: 'nf-md-grease_pencil',
    code: 0xf0648,
  },
  {
    name: 'nf-md-greater_than',
    code: 0xf096d,
  },
  {
    name: 'nf-md-greater_than_or_equal',
    code: 0xf096e,
  },
  {
    name: 'nf-md-greenhouse',
    code: 0xf002d,
  },
  {
    name: 'nf-md-grid',
    code: 0xf02c1,
  },
  {
    name: 'nf-md-grid_large',
    code: 0xf0758,
  },
  {
    name: 'nf-md-grid_off',
    code: 0xf02c2,
  },
  {
    name: 'nf-md-grill',
    code: 0xf0e45,
  },
  {
    name: 'nf-md-grill_outline',
    code: 0xf118a,
  },
  {
    name: 'nf-md-group',
    code: 0xf02c3,
  },
  {
    name: 'nf-md-guitar_acoustic',
    code: 0xf0771,
  },
  {
    name: 'nf-md-guitar_electric',
    code: 0xf02c4,
  },
  {
    name: 'nf-md-guitar_pick',
    code: 0xf02c5,
  },
  {
    name: 'nf-md-guitar_pick_outline',
    code: 0xf02c6,
  },
  {
    name: 'nf-md-guy_fawkes_mask',
    code: 0xf0825,
  },
  {
    name: 'nf-md-gymnastics',
    code: 0xf1a41,
  },
  {
    name: 'nf-md-hail',
    code: 0xf0ac1,
  },
  {
    name: 'nf-md-hair_dryer',
    code: 0xf10ef,
  },
  {
    name: 'nf-md-hair_dryer_outline',
    code: 0xf10f0,
  },
  {
    name: 'nf-md-halloween',
    code: 0xf0ba3,
  },
  {
    name: 'nf-md-hamburger',
    code: 0xf0685,
  },
  {
    name: 'nf-md-hamburger_check',
    code: 0xf1776,
  },
  {
    name: 'nf-md-hamburger_minus',
    code: 0xf1777,
  },
  {
    name: 'nf-md-hamburger_off',
    code: 0xf1778,
  },
  {
    name: 'nf-md-hamburger_plus',
    code: 0xf1779,
  },
  {
    name: 'nf-md-hamburger_remove',
    code: 0xf177a,
  },
  {
    name: 'nf-md-hammer',
    code: 0xf08ea,
  },
  {
    name: 'nf-md-hammer_screwdriver',
    code: 0xf1322,
  },
  {
    name: 'nf-md-hammer_sickle',
    code: 0xf1887,
  },
  {
    name: 'nf-md-hammer_wrench',
    code: 0xf1323,
  },
  {
    name: 'nf-md-hand_back_left',
    code: 0xf0e46,
  },
  {
    name: 'nf-md-hand_back_left_off',
    code: 0xf1830,
  },
  {
    name: 'nf-md-hand_back_left_off_outline',
    code: 0xf1832,
  },
  {
    name: 'nf-md-hand_back_left_outline',
    code: 0xf182c,
  },
  {
    name: 'nf-md-hand_back_right',
    code: 0xf0e47,
  },
  {
    name: 'nf-md-hand_back_right_off',
    code: 0xf1831,
  },
  {
    name: 'nf-md-hand_back_right_off_outline',
    code: 0xf1833,
  },
  {
    name: 'nf-md-hand_back_right_outline',
    code: 0xf182d,
  },
  {
    name: 'nf-md-hand_clap',
    code: 0xf194b,
  },
  {
    name: 'nf-md-hand_clap_off',
    code: 0xf1a42,
  },
  {
    name: 'nf-md-hand_coin',
    code: 0xf188f,
  },
  {
    name: 'nf-md-hand_coin_outline',
    code: 0xf1890,
  },
  {
    name: 'nf-md-hand_extended',
    code: 0xf18b6,
  },
  {
    name: 'nf-md-hand_extended_outline',
    code: 0xf18b7,
  },
  {
    name: 'nf-md-hand_front_left',
    code: 0xf182b,
  },
  {
    name: 'nf-md-hand_front_left_outline',
    code: 0xf182e,
  },
  {
    name: 'nf-md-hand_front_right',
    code: 0xf0a4f,
  },
  {
    name: 'nf-md-hand_front_right_outline',
    code: 0xf182f,
  },
  {
    name: 'nf-md-hand_heart',
    code: 0xf10f1,
  },
  {
    name: 'nf-md-hand_heart_outline',
    code: 0xf157e,
  },
  {
    name: 'nf-md-hand_okay',
    code: 0xf0a50,
  },
  {
    name: 'nf-md-hand_peace',
    code: 0xf0a51,
  },
  {
    name: 'nf-md-hand_peace_variant',
    code: 0xf0a52,
  },
  {
    name: 'nf-md-hand_pointing_down',
    code: 0xf0a53,
  },
  {
    name: 'nf-md-hand_pointing_left',
    code: 0xf0a54,
  },
  {
    name: 'nf-md-hand_pointing_right',
    code: 0xf02c7,
  },
  {
    name: 'nf-md-hand_pointing_up',
    code: 0xf0a55,
  },
  {
    name: 'nf-md-hand_saw',
    code: 0xf0e48,
  },
  {
    name: 'nf-md-hand_wash',
    code: 0xf157f,
  },
  {
    name: 'nf-md-hand_wash_outline',
    code: 0xf1580,
  },
  {
    name: 'nf-md-hand_water',
    code: 0xf139f,
  },
  {
    name: 'nf-md-hand_wave',
    code: 0xf1821,
  },
  {
    name: 'nf-md-hand_wave_outline',
    code: 0xf1822,
  },
  {
    name: 'nf-md-handball',
    code: 0xf0f53,
  },
  {
    name: 'nf-md-handcuffs',
    code: 0xf113e,
  },
  {
    name: 'nf-md-hands_pray',
    code: 0xf0579,
  },
  {
    name: 'nf-md-handshake',
    code: 0xf1218,
  },
  {
    name: 'nf-md-handshake_outline',
    code: 0xf15a1,
  },
  {
    name: 'nf-md-hanger',
    code: 0xf02c8,
  },
  {
    name: 'nf-md-hard_hat',
    code: 0xf096f,
  },
  {
    name: 'nf-md-harddisk',
    code: 0xf02ca,
  },
  {
    name: 'nf-md-harddisk_plus',
    code: 0xf104b,
  },
  {
    name: 'nf-md-harddisk_remove',
    code: 0xf104c,
  },
  {
    name: 'nf-md-hat_fedora',
    code: 0xf0ba4,
  },
  {
    name: 'nf-md-hazard_lights',
    code: 0xf0c89,
  },
  {
    name: 'nf-md-hdr',
    code: 0xf0d7d,
  },
  {
    name: 'nf-md-hdr_off',
    code: 0xf0d7e,
  },
  {
    name: 'nf-md-head',
    code: 0xf135e,
  },
  {
    name: 'nf-md-head_alert',
    code: 0xf1338,
  },
  {
    name: 'nf-md-head_alert_outline',
    code: 0xf1339,
  },
  {
    name: 'nf-md-head_check',
    code: 0xf133a,
  },
  {
    name: 'nf-md-head_check_outline',
    code: 0xf133b,
  },
  {
    name: 'nf-md-head_cog',
    code: 0xf133c,
  },
  {
    name: 'nf-md-head_cog_outline',
    code: 0xf133d,
  },
  {
    name: 'nf-md-head_dots_horizontal',
    code: 0xf133e,
  },
  {
    name: 'nf-md-head_dots_horizontal_outline',
    code: 0xf133f,
  },
  {
    name: 'nf-md-head_flash',
    code: 0xf1340,
  },
  {
    name: 'nf-md-head_flash_outline',
    code: 0xf1341,
  },
  {
    name: 'nf-md-head_heart',
    code: 0xf1342,
  },
  {
    name: 'nf-md-head_heart_outline',
    code: 0xf1343,
  },
  {
    name: 'nf-md-head_lightbulb',
    code: 0xf1344,
  },
  {
    name: 'nf-md-head_lightbulb_outline',
    code: 0xf1345,
  },
  {
    name: 'nf-md-head_minus',
    code: 0xf1346,
  },
  {
    name: 'nf-md-head_minus_outline',
    code: 0xf1347,
  },
  {
    name: 'nf-md-head_outline',
    code: 0xf135f,
  },
  {
    name: 'nf-md-head_plus',
    code: 0xf1348,
  },
  {
    name: 'nf-md-head_plus_outline',
    code: 0xf1349,
  },
  {
    name: 'nf-md-head_question',
    code: 0xf134a,
  },
  {
    name: 'nf-md-head_question_outline',
    code: 0xf134b,
  },
  {
    name: 'nf-md-head_remove',
    code: 0xf134c,
  },
  {
    name: 'nf-md-head_remove_outline',
    code: 0xf134d,
  },
  {
    name: 'nf-md-head_snowflake',
    code: 0xf134e,
  },
  {
    name: 'nf-md-head_snowflake_outline',
    code: 0xf134f,
  },
  {
    name: 'nf-md-head_sync',
    code: 0xf1350,
  },
  {
    name: 'nf-md-head_sync_outline',
    code: 0xf1351,
  },
  {
    name: 'nf-md-headphones',
    code: 0xf02cb,
  },
  {
    name: 'nf-md-headphones_bluetooth',
    code: 0xf0970,
  },
  {
    name: 'nf-md-headphones_box',
    code: 0xf02cc,
  },
  {
    name: 'nf-md-headphones_off',
    code: 0xf07ce,
  },
  {
    name: 'nf-md-headphones_settings',
    code: 0xf02cd,
  },
  {
    name: 'nf-md-headset',
    code: 0xf02ce,
  },
  {
    name: 'nf-md-headset_dock',
    code: 0xf02cf,
  },
  {
    name: 'nf-md-headset_off',
    code: 0xf02d0,
  },
  {
    name: 'nf-md-heart',
    code: 0xf02d1,
  },
  {
    name: 'nf-md-heart_box',
    code: 0xf02d2,
  },
  {
    name: 'nf-md-heart_box_outline',
    code: 0xf02d3,
  },
  {
    name: 'nf-md-heart_broken',
    code: 0xf02d4,
  },
  {
    name: 'nf-md-heart_broken_outline',
    code: 0xf0d14,
  },
  {
    name: 'nf-md-heart_circle',
    code: 0xf0971,
  },
  {
    name: 'nf-md-heart_circle_outline',
    code: 0xf0972,
  },
  {
    name: 'nf-md-heart_cog',
    code: 0xf1663,
  },
  {
    name: 'nf-md-heart_cog_outline',
    code: 0xf1664,
  },
  {
    name: 'nf-md-heart_flash',
    code: 0xf0ef9,
  },
  {
    name: 'nf-md-heart_half',
    code: 0xf06df,
  },
  {
    name: 'nf-md-heart_half_full',
    code: 0xf06de,
  },
  {
    name: 'nf-md-heart_half_outline',
    code: 0xf06e0,
  },
  {
    name: 'nf-md-heart_minus',
    code: 0xf142f,
  },
  {
    name: 'nf-md-heart_minus_outline',
    code: 0xf1432,
  },
  {
    name: 'nf-md-heart_multiple',
    code: 0xf0a56,
  },
  {
    name: 'nf-md-heart_multiple_outline',
    code: 0xf0a57,
  },
  {
    name: 'nf-md-heart_off',
    code: 0xf0759,
  },
  {
    name: 'nf-md-heart_off_outline',
    code: 0xf1434,
  },
  {
    name: 'nf-md-heart_outline',
    code: 0xf02d5,
  },
  {
    name: 'nf-md-heart_plus',
    code: 0xf142e,
  },
  {
    name: 'nf-md-heart_plus_outline',
    code: 0xf1431,
  },
  {
    name: 'nf-md-heart_pulse',
    code: 0xf05f6,
  },
  {
    name: 'nf-md-heart_remove',
    code: 0xf1430,
  },
  {
    name: 'nf-md-heart_remove_outline',
    code: 0xf1433,
  },
  {
    name: 'nf-md-heart_settings',
    code: 0xf1665,
  },
  {
    name: 'nf-md-heart_settings_outline',
    code: 0xf1666,
  },
  {
    name: 'nf-md-heat_pump',
    code: 0xf1a43,
  },
  {
    name: 'nf-md-heat_pump_outline',
    code: 0xf1a44,
  },
  {
    name: 'nf-md-heat_wave',
    code: 0xf1a45,
  },
  {
    name: 'nf-md-heating_coil',
    code: 0xf1aaf,
  },
  {
    name: 'nf-md-helicopter',
    code: 0xf0ac2,
  },
  {
    name: 'nf-md-help',
    code: 0xf02d6,
  },
  {
    name: 'nf-md-help_box',
    code: 0xf078b,
  },
  {
    name: 'nf-md-help_circle',
    code: 0xf02d7,
  },
  {
    name: 'nf-md-help_circle_outline',
    code: 0xf0625,
  },
  {
    name: 'nf-md-help_network',
    code: 0xf06f5,
  },
  {
    name: 'nf-md-help_network_outline',
    code: 0xf0c8a,
  },
  {
    name: 'nf-md-help_rhombus',
    code: 0xf0ba5,
  },
  {
    name: 'nf-md-help_rhombus_outline',
    code: 0xf0ba6,
  },
  {
    name: 'nf-md-hexadecimal',
    code: 0xf12a7,
  },
  {
    name: 'nf-md-hexagon',
    code: 0xf02d8,
  },
  {
    name: 'nf-md-hexagon_multiple',
    code: 0xf06e1,
  },
  {
    name: 'nf-md-hexagon_multiple_outline',
    code: 0xf10f2,
  },
  {
    name: 'nf-md-hexagon_outline',
    code: 0xf02d9,
  },
  {
    name: 'nf-md-hexagon_slice_1',
    code: 0xf0ac3,
  },
  {
    name: 'nf-md-hexagon_slice_2',
    code: 0xf0ac4,
  },
  {
    name: 'nf-md-hexagon_slice_3',
    code: 0xf0ac5,
  },
  {
    name: 'nf-md-hexagon_slice_4',
    code: 0xf0ac6,
  },
  {
    name: 'nf-md-hexagon_slice_5',
    code: 0xf0ac7,
  },
  {
    name: 'nf-md-hexagon_slice_6',
    code: 0xf0ac8,
  },
  {
    name: 'nf-md-hexagram',
    code: 0xf0ac9,
  },
  {
    name: 'nf-md-hexagram_outline',
    code: 0xf0aca,
  },
  {
    name: 'nf-md-high_definition',
    code: 0xf07cf,
  },
  {
    name: 'nf-md-high_definition_box',
    code: 0xf0878,
  },
  {
    name: 'nf-md-highway',
    code: 0xf05f7,
  },
  {
    name: 'nf-md-hiking',
    code: 0xf0d7f,
  },
  {
    name: 'nf-md-history',
    code: 0xf02da,
  },
  {
    name: 'nf-md-hockey_puck',
    code: 0xf0879,
  },
  {
    name: 'nf-md-hockey_sticks',
    code: 0xf087a,
  },
  {
    name: 'nf-md-hololens',
    code: 0xf02db,
  },
  {
    name: 'nf-md-home',
    code: 0xf02dc,
  },
  {
    name: 'nf-md-home_account',
    code: 0xf0826,
  },
  {
    name: 'nf-md-home_alert',
    code: 0xf087b,
  },
  {
    name: 'nf-md-home_alert_outline',
    code: 0xf15d0,
  },
  {
    name: 'nf-md-home_analytics',
    code: 0xf0eba,
  },
  {
    name: 'nf-md-home_assistant',
    code: 0xf07d0,
  },
  {
    name: 'nf-md-home_automation',
    code: 0xf07d1,
  },
  {
    name: 'nf-md-home_battery',
    code: 0xf1901,
  },
  {
    name: 'nf-md-home_battery_outline',
    code: 0xf1902,
  },
  {
    name: 'nf-md-home_circle',
    code: 0xf07d2,
  },
  {
    name: 'nf-md-home_circle_outline',
    code: 0xf104d,
  },
  {
    name: 'nf-md-home_city',
    code: 0xf0d15,
  },
  {
    name: 'nf-md-home_city_outline',
    code: 0xf0d16,
  },
  {
    name: 'nf-md-home_clock',
    code: 0xf1a12,
  },
  {
    name: 'nf-md-home_clock_outline',
    code: 0xf1a13,
  },
  {
    name: 'nf-md-home_edit',
    code: 0xf1159,
  },
  {
    name: 'nf-md-home_edit_outline',
    code: 0xf115a,
  },
  {
    name: 'nf-md-home_export_outline',
    code: 0xf0f9b,
  },
  {
    name: 'nf-md-home_flood',
    code: 0xf0efa,
  },
  {
    name: 'nf-md-home_floor_0',
    code: 0xf0dd2,
  },
  {
    name: 'nf-md-home_floor_1',
    code: 0xf0d80,
  },
  {
    name: 'nf-md-home_floor_2',
    code: 0xf0d81,
  },
  {
    name: 'nf-md-home_floor_3',
    code: 0xf0d82,
  },
  {
    name: 'nf-md-home_floor_a',
    code: 0xf0d83,
  },
  {
    name: 'nf-md-home_floor_b',
    code: 0xf0d84,
  },
  {
    name: 'nf-md-home_floor_g',
    code: 0xf0d85,
  },
  {
    name: 'nf-md-home_floor_l',
    code: 0xf0d86,
  },
  {
    name: 'nf-md-home_floor_negative_1',
    code: 0xf0dd3,
  },
  {
    name: 'nf-md-home_group',
    code: 0xf0dd4,
  },
  {
    name: 'nf-md-home_group_minus',
    code: 0xf19c1,
  },
  {
    name: 'nf-md-home_group_plus',
    code: 0xf19c0,
  },
  {
    name: 'nf-md-home_group_remove',
    code: 0xf19c2,
  },
  {
    name: 'nf-md-home_heart',
    code: 0xf0827,
  },
  {
    name: 'nf-md-home_import_outline',
    code: 0xf0f9c,
  },
  {
    name: 'nf-md-home_lightbulb',
    code: 0xf1251,
  },
  {
    name: 'nf-md-home_lightbulb_outline',
    code: 0xf1252,
  },
  {
    name: 'nf-md-home_lightning_bolt',
    code: 0xf1903,
  },
  {
    name: 'nf-md-home_lightning_bolt_outline',
    code: 0xf1904,
  },
  {
    name: 'nf-md-home_lock',
    code: 0xf08eb,
  },
  {
    name: 'nf-md-home_lock_open',
    code: 0xf08ec,
  },
  {
    name: 'nf-md-home_map_marker',
    code: 0xf05f8,
  },
  {
    name: 'nf-md-home_minus',
    code: 0xf0974,
  },
  {
    name: 'nf-md-home_minus_outline',
    code: 0xf13d5,
  },
  {
    name: 'nf-md-home_modern',
    code: 0xf02dd,
  },
  {
    name: 'nf-md-home_off',
    code: 0xf1a46,
  },
  {
    name: 'nf-md-home_off_outline',
    code: 0xf1a47,
  },
  {
    name: 'nf-md-home_outline',
    code: 0xf06a1,
  },
  {
    name: 'nf-md-home_plus',
    code: 0xf0975,
  },
  {
    name: 'nf-md-home_plus_outline',
    code: 0xf13d6,
  },
  {
    name: 'nf-md-home_remove',
    code: 0xf1247,
  },
  {
    name: 'nf-md-home_remove_outline',
    code: 0xf13d7,
  },
  {
    name: 'nf-md-home_roof',
    code: 0xf112b,
  },
  {
    name: 'nf-md-home_search',
    code: 0xf13b0,
  },
  {
    name: 'nf-md-home_search_outline',
    code: 0xf13b1,
  },
  {
    name: 'nf-md-home_switch',
    code: 0xf1794,
  },
  {
    name: 'nf-md-home_switch_outline',
    code: 0xf1795,
  },
  {
    name: 'nf-md-home_thermometer',
    code: 0xf0f54,
  },
  {
    name: 'nf-md-home_thermometer_outline',
    code: 0xf0f55,
  },
  {
    name: 'nf-md-home_variant',
    code: 0xf02de,
  },
  {
    name: 'nf-md-home_variant_outline',
    code: 0xf0ba7,
  },
  {
    name: 'nf-md-hook',
    code: 0xf06e2,
  },
  {
    name: 'nf-md-hook_off',
    code: 0xf06e3,
  },
  {
    name: 'nf-md-hoop_house',
    code: 0xf0e56,
  },
  {
    name: 'nf-md-hops',
    code: 0xf02df,
  },
  {
    name: 'nf-md-horizontal_rotate_clockwise',
    code: 0xf10f3,
  },
  {
    name: 'nf-md-horizontal_rotate_counterclockwise',
    code: 0xf10f4,
  },
  {
    name: 'nf-md-horse',
    code: 0xf15bf,
  },
  {
    name: 'nf-md-horse_human',
    code: 0xf15c0,
  },
  {
    name: 'nf-md-horse_variant',
    code: 0xf15c1,
  },
  {
    name: 'nf-md-horse_variant_fast',
    code: 0xf186e,
  },
  {
    name: 'nf-md-horseshoe',
    code: 0xf0a58,
  },
  {
    name: 'nf-md-hospital',
    code: 0xf0ff6,
  },
  {
    name: 'nf-md-hospital_box',
    code: 0xf02e0,
  },
  {
    name: 'nf-md-hospital_box_outline',
    code: 0xf0ff7,
  },
  {
    name: 'nf-md-hospital_building',
    code: 0xf02e1,
  },
  {
    name: 'nf-md-hospital_marker',
    code: 0xf02e2,
  },
  {
    name: 'nf-md-hot_tub',
    code: 0xf0828,
  },
  {
    name: 'nf-md-hours_24',
    code: 0xf1478,
  },
  {
    name: 'nf-md-hubspot',
    code: 0xf0d17,
  },
  {
    name: 'nf-md-hulu',
    code: 0xf0829,
  },
  {
    name: 'nf-md-human',
    code: 0xf02e6,
  },
  {
    name: 'nf-md-human_baby_changing_table',
    code: 0xf138b,
  },
  {
    name: 'nf-md-human_cane',
    code: 0xf1581,
  },
  {
    name: 'nf-md-human_capacity_decrease',
    code: 0xf159b,
  },
  {
    name: 'nf-md-human_capacity_increase',
    code: 0xf159c,
  },
  {
    name: 'nf-md-human_child',
    code: 0xf02e7,
  },
  {
    name: 'nf-md-human_dolly',
    code: 0xf1980,
  },
  {
    name: 'nf-md-human_edit',
    code: 0xf14e8,
  },
  {
    name: 'nf-md-human_female',
    code: 0xf0649,
  },
  {
    name: 'nf-md-human_female_boy',
    code: 0xf0a59,
  },
  {
    name: 'nf-md-human_female_dance',
    code: 0xf15c9,
  },
  {
    name: 'nf-md-human_female_female',
    code: 0xf0a5a,
  },
  {
    name: 'nf-md-human_female_girl',
    code: 0xf0a5b,
  },
  {
    name: 'nf-md-human_greeting',
    code: 0xf17c4,
  },
  {
    name: 'nf-md-human_greeting_proximity',
    code: 0xf159d,
  },
  {
    name: 'nf-md-human_greeting_variant',
    code: 0xf064a,
  },
  {
    name: 'nf-md-human_handsdown',
    code: 0xf064b,
  },
  {
    name: 'nf-md-human_handsup',
    code: 0xf064c,
  },
  {
    name: 'nf-md-human_male',
    code: 0xf064d,
  },
  {
    name: 'nf-md-human_male_board',
    code: 0xf0890,
  },
  {
    name: 'nf-md-human_male_board_poll',
    code: 0xf0846,
  },
  {
    name: 'nf-md-human_male_boy',
    code: 0xf0a5c,
  },
  {
    name: 'nf-md-human_male_child',
    code: 0xf138c,
  },
  {
    name: 'nf-md-human_male_female',
    code: 0xf02e8,
  },
  {
    name: 'nf-md-human_male_female_child',
    code: 0xf1823,
  },
  {
    name: 'nf-md-human_male_girl',
    code: 0xf0a5d,
  },
  {
    name: 'nf-md-human_male_height',
    code: 0xf0efb,
  },
  {
    name: 'nf-md-human_male_height_variant',
    code: 0xf0efc,
  },
  {
    name: 'nf-md-human_male_male',
    code: 0xf0a5e,
  },
  {
    name: 'nf-md-human_non_binary',
    code: 0xf1848,
  },
  {
    name: 'nf-md-human_pregnant',
    code: 0xf05cf,
  },
  {
    name: 'nf-md-human_queue',
    code: 0xf1571,
  },
  {
    name: 'nf-md-human_scooter',
    code: 0xf11e9,
  },
  {
    name: 'nf-md-human_wheelchair',
    code: 0xf138d,
  },
  {
    name: 'nf-md-human_white_cane',
    code: 0xf1981,
  },
  {
    name: 'nf-md-humble_bundle',
    code: 0xf0744,
  },
  {
    name: 'nf-md-hvac',
    code: 0xf1352,
  },
  {
    name: 'nf-md-hvac_off',
    code: 0xf159e,
  },
  {
    name: 'nf-md-hydraulic_oil_level',
    code: 0xf1324,
  },
  {
    name: 'nf-md-hydraulic_oil_temperature',
    code: 0xf1325,
  },
  {
    name: 'nf-md-hydro_power',
    code: 0xf12e5,
  },
  {
    name: 'nf-md-hydrogen_station',
    code: 0xf1894,
  },
  {
    name: 'nf-md-ice_cream',
    code: 0xf082a,
  },
  {
    name: 'nf-md-ice_cream_off',
    code: 0xf0e52,
  },
  {
    name: 'nf-md-ice_pop',
    code: 0xf0efd,
  },
  {
    name: 'nf-md-id_card',
    code: 0xf0fc0,
  },
  {
    name: 'nf-md-identifier',
    code: 0xf0efe,
  },
  {
    name: 'nf-md-ideogram_cjk',
    code: 0xf1331,
  },
  {
    name: 'nf-md-ideogram_cjk_variant',
    code: 0xf1332,
  },
  {
    name: 'nf-md-image',
    code: 0xf02e9,
  },
  {
    name: 'nf-md-image_album',
    code: 0xf02ea,
  },
  {
    name: 'nf-md-image_area',
    code: 0xf02eb,
  },
  {
    name: 'nf-md-image_area_close',
    code: 0xf02ec,
  },
  {
    name: 'nf-md-image_auto_adjust',
    code: 0xf0fc1,
  },
  {
    name: 'nf-md-image_broken',
    code: 0xf02ed,
  },
  {
    name: 'nf-md-image_broken_variant',
    code: 0xf02ee,
  },
  {
    name: 'nf-md-image_edit',
    code: 0xf11e3,
  },
  {
    name: 'nf-md-image_edit_outline',
    code: 0xf11e4,
  },
  {
    name: 'nf-md-image_filter_black_white',
    code: 0xf02f0,
  },
  {
    name: 'nf-md-image_filter_center_focus',
    code: 0xf02f1,
  },
  {
    name: 'nf-md-image_filter_center_focus_strong',
    code: 0xf0eff,
  },
  {
    name: 'nf-md-image_filter_center_focus_strong_outline',
    code: 0xf0f00,
  },
  {
    name: 'nf-md-image_filter_center_focus_weak',
    code: 0xf02f2,
  },
  {
    name: 'nf-md-image_filter_drama',
    code: 0xf02f3,
  },
  {
    name: 'nf-md-image_filter_frames',
    code: 0xf02f4,
  },
  {
    name: 'nf-md-image_filter_hdr',
    code: 0xf02f5,
  },
  {
    name: 'nf-md-image_filter_none',
    code: 0xf02f6,
  },
  {
    name: 'nf-md-image_filter_tilt_shift',
    code: 0xf02f7,
  },
  {
    name: 'nf-md-image_filter_vintage',
    code: 0xf02f8,
  },
  {
    name: 'nf-md-image_frame',
    code: 0xf0e49,
  },
  {
    name: 'nf-md-image_lock',
    code: 0xf1ab0,
  },
  {
    name: 'nf-md-image_lock_outline',
    code: 0xf1ab1,
  },
  {
    name: 'nf-md-image_marker',
    code: 0xf177b,
  },
  {
    name: 'nf-md-image_marker_outline',
    code: 0xf177c,
  },
  {
    name: 'nf-md-image_minus',
    code: 0xf1419,
  },
  {
    name: 'nf-md-image_move',
    code: 0xf09f8,
  },
  {
    name: 'nf-md-image_multiple',
    code: 0xf02f9,
  },
  {
    name: 'nf-md-image_multiple_outline',
    code: 0xf02ef,
  },
  {
    name: 'nf-md-image_off',
    code: 0xf082b,
  },
  {
    name: 'nf-md-image_off_outline',
    code: 0xf11d1,
  },
  {
    name: 'nf-md-image_outline',
    code: 0xf0976,
  },
  {
    name: 'nf-md-image_plus',
    code: 0xf087c,
  },
  {
    name: 'nf-md-image_refresh',
    code: 0xf19fe,
  },
  {
    name: 'nf-md-image_refresh_outline',
    code: 0xf19ff,
  },
  {
    name: 'nf-md-image_remove',
    code: 0xf1418,
  },
  {
    name: 'nf-md-image_search',
    code: 0xf0977,
  },
  {
    name: 'nf-md-image_search_outline',
    code: 0xf0978,
  },
  {
    name: 'nf-md-image_size_select_actual',
    code: 0xf0c8d,
  },
  {
    name: 'nf-md-image_size_select_large',
    code: 0xf0c8e,
  },
  {
    name: 'nf-md-image_size_select_small',
    code: 0xf0c8f,
  },
  {
    name: 'nf-md-image_sync',
    code: 0xf1a00,
  },
  {
    name: 'nf-md-image_sync_outline',
    code: 0xf1a01,
  },
  {
    name: 'nf-md-image_text',
    code: 0xf160d,
  },
  {
    name: 'nf-md-import',
    code: 0xf02fa,
  },
  {
    name: 'nf-md-inbox',
    code: 0xf0687,
  },
  {
    name: 'nf-md-inbox_arrow_down',
    code: 0xf02fb,
  },
  {
    name: 'nf-md-inbox_arrow_down_outline',
    code: 0xf1270,
  },
  {
    name: 'nf-md-inbox_arrow_up',
    code: 0xf03d1,
  },
  {
    name: 'nf-md-inbox_arrow_up_outline',
    code: 0xf1271,
  },
  {
    name: 'nf-md-inbox_full',
    code: 0xf1272,
  },
  {
    name: 'nf-md-inbox_full_outline',
    code: 0xf1273,
  },
  {
    name: 'nf-md-inbox_multiple',
    code: 0xf08b0,
  },
  {
    name: 'nf-md-inbox_multiple_outline',
    code: 0xf0ba8,
  },
  {
    name: 'nf-md-inbox_outline',
    code: 0xf1274,
  },
  {
    name: 'nf-md-inbox_remove',
    code: 0xf159f,
  },
  {
    name: 'nf-md-inbox_remove_outline',
    code: 0xf15a0,
  },
  {
    name: 'nf-md-incognito',
    code: 0xf05f9,
  },
  {
    name: 'nf-md-incognito_circle',
    code: 0xf1421,
  },
  {
    name: 'nf-md-incognito_circle_off',
    code: 0xf1422,
  },
  {
    name: 'nf-md-incognito_off',
    code: 0xf0075,
  },
  {
    name: 'nf-md-induction',
    code: 0xf184c,
  },
  {
    name: 'nf-md-infinity',
    code: 0xf06e4,
  },
  {
    name: 'nf-md-information',
    code: 0xf02fc,
  },
  {
    name: 'nf-md-information_off',
    code: 0xf178c,
  },
  {
    name: 'nf-md-information_off_outline',
    code: 0xf178d,
  },
  {
    name: 'nf-md-information_outline',
    code: 0xf02fd,
  },
  {
    name: 'nf-md-information_variant',
    code: 0xf064e,
  },
  {
    name: 'nf-md-instagram',
    code: 0xf02fe,
  },
  {
    name: 'nf-md-instrument_triangle',
    code: 0xf104e,
  },
  {
    name: 'nf-md-integrated_circuit_chip',
    code: 0xf1913,
  },
  {
    name: 'nf-md-invert_colors',
    code: 0xf0301,
  },
  {
    name: 'nf-md-invert_colors_off',
    code: 0xf0e4a,
  },
  {
    name: 'nf-md-iobroker',
    code: 0xf12e8,
  },
  {
    name: 'nf-md-ip',
    code: 0xf0a5f,
  },
  {
    name: 'nf-md-ip_network',
    code: 0xf0a60,
  },
  {
    name: 'nf-md-ip_network_outline',
    code: 0xf0c90,
  },
  {
    name: 'nf-md-ip_outline',
    code: 0xf1982,
  },
  {
    name: 'nf-md-ipod',
    code: 0xf0c91,
  },
  {
    name: 'nf-md-iron',
    code: 0xf1824,
  },
  {
    name: 'nf-md-iron_board',
    code: 0xf1838,
  },
  {
    name: 'nf-md-iron_outline',
    code: 0xf1825,
  },
  {
    name: 'nf-md-island',
    code: 0xf104f,
  },
  {
    name: 'nf-md-iv_bag',
    code: 0xf10b9,
  },
  {
    name: 'nf-md-jabber',
    code: 0xf0dd5,
  },
  {
    name: 'nf-md-jeepney',
    code: 0xf0302,
  },
  {
    name: 'nf-md-jellyfish',
    code: 0xf0f01,
  },
  {
    name: 'nf-md-jellyfish_outline',
    code: 0xf0f02,
  },
  {
    name: 'nf-md-jira',
    code: 0xf0303,
  },
  {
    name: 'nf-md-jquery',
    code: 0xf087d,
  },
  {
    name: 'nf-md-jsfiddle',
    code: 0xf0304,
  },
  {
    name: 'nf-md-jump_rope',
    code: 0xf12ff,
  },
  {
    name: 'nf-md-kabaddi',
    code: 0xf0d87,
  },
  {
    name: 'nf-md-kangaroo',
    code: 0xf1558,
  },
  {
    name: 'nf-md-karate',
    code: 0xf082c,
  },
  {
    name: 'nf-md-kayaking',
    code: 0xf08af,
  },
  {
    name: 'nf-md-keg',
    code: 0xf0305,
  },
  {
    name: 'nf-md-kettle',
    code: 0xf05fa,
  },
  {
    name: 'nf-md-kettle_alert',
    code: 0xf1317,
  },
  {
    name: 'nf-md-kettle_alert_outline',
    code: 0xf1318,
  },
  {
    name: 'nf-md-kettle_off',
    code: 0xf131b,
  },
  {
    name: 'nf-md-kettle_off_outline',
    code: 0xf131c,
  },
  {
    name: 'nf-md-kettle_outline',
    code: 0xf0f56,
  },
  {
    name: 'nf-md-kettle_pour_over',
    code: 0xf173c,
  },
  {
    name: 'nf-md-kettle_steam',
    code: 0xf1319,
  },
  {
    name: 'nf-md-kettle_steam_outline',
    code: 0xf131a,
  },
  {
    name: 'nf-md-kettlebell',
    code: 0xf1300,
  },
  {
    name: 'nf-md-key',
    code: 0xf0306,
  },
  {
    name: 'nf-md-key_alert',
    code: 0xf1983,
  },
  {
    name: 'nf-md-key_alert_outline',
    code: 0xf1984,
  },
  {
    name: 'nf-md-key_arrow_right',
    code: 0xf1312,
  },
  {
    name: 'nf-md-key_chain',
    code: 0xf1574,
  },
  {
    name: 'nf-md-key_chain_variant',
    code: 0xf1575,
  },
  {
    name: 'nf-md-key_change',
    code: 0xf0307,
  },
  {
    name: 'nf-md-key_link',
    code: 0xf119f,
  },
  {
    name: 'nf-md-key_minus',
    code: 0xf0308,
  },
  {
    name: 'nf-md-key_outline',
    code: 0xf0dd6,
  },
  {
    name: 'nf-md-key_plus',
    code: 0xf0309,
  },
  {
    name: 'nf-md-key_remove',
    code: 0xf030a,
  },
  {
    name: 'nf-md-key_star',
    code: 0xf119e,
  },
  {
    name: 'nf-md-key_variant',
    code: 0xf030b,
  },
  {
    name: 'nf-md-key_wireless',
    code: 0xf0fc2,
  },
  {
    name: 'nf-md-keyboard',
    code: 0xf030c,
  },
  {
    name: 'nf-md-keyboard_backspace',
    code: 0xf030d,
  },
  {
    name: 'nf-md-keyboard_caps',
    code: 0xf030e,
  },
  {
    name: 'nf-md-keyboard_close',
    code: 0xf030f,
  },
  {
    name: 'nf-md-keyboard_esc',
    code: 0xf12b7,
  },
  {
    name: 'nf-md-keyboard_f1',
    code: 0xf12ab,
  },
  {
    name: 'nf-md-keyboard_f10',
    code: 0xf12b4,
  },
  {
    name: 'nf-md-keyboard_f11',
    code: 0xf12b5,
  },
  {
    name: 'nf-md-keyboard_f12',
    code: 0xf12b6,
  },
  {
    name: 'nf-md-keyboard_f2',
    code: 0xf12ac,
  },
  {
    name: 'nf-md-keyboard_f3',
    code: 0xf12ad,
  },
  {
    name: 'nf-md-keyboard_f4',
    code: 0xf12ae,
  },
  {
    name: 'nf-md-keyboard_f5',
    code: 0xf12af,
  },
  {
    name: 'nf-md-keyboard_f6',
    code: 0xf12b0,
  },
  {
    name: 'nf-md-keyboard_f7',
    code: 0xf12b1,
  },
  {
    name: 'nf-md-keyboard_f8',
    code: 0xf12b2,
  },
  {
    name: 'nf-md-keyboard_f9',
    code: 0xf12b3,
  },
  {
    name: 'nf-md-keyboard_off',
    code: 0xf0310,
  },
  {
    name: 'nf-md-keyboard_off_outline',
    code: 0xf0e4b,
  },
  {
    name: 'nf-md-keyboard_outline',
    code: 0xf097b,
  },
  {
    name: 'nf-md-keyboard_return',
    code: 0xf0311,
  },
  {
    name: 'nf-md-keyboard_settings',
    code: 0xf09f9,
  },
  {
    name: 'nf-md-keyboard_settings_outline',
    code: 0xf09fa,
  },
  {
    name: 'nf-md-keyboard_space',
    code: 0xf1050,
  },
  {
    name: 'nf-md-keyboard_tab',
    code: 0xf0312,
  },
  {
    name: 'nf-md-keyboard_tab_reverse',
    code: 0xf0325,
  },
  {
    name: 'nf-md-keyboard_variant',
    code: 0xf0313,
  },
  {
    name: 'nf-md-khanda',
    code: 0xf10fd,
  },
  {
    name: 'nf-md-kickstarter',
    code: 0xf0745,
  },
  {
    name: 'nf-md-kite',
    code: 0xf1985,
  },
  {
    name: 'nf-md-kite_outline',
    code: 0xf1986,
  },
  {
    name: 'nf-md-kitesurfing',
    code: 0xf1744,
  },
  {
    name: 'nf-md-klingon',
    code: 0xf135b,
  },
  {
    name: 'nf-md-knife',
    code: 0xf09fb,
  },
  {
    name: 'nf-md-knife_military',
    code: 0xf09fc,
  },
  {
    name: 'nf-md-koala',
    code: 0xf173f,
  },
  {
    name: 'nf-md-kodi',
    code: 0xf0314,
  },
  {
    name: 'nf-md-kubernetes',
    code: 0xf10fe,
  },
  {
    name: 'nf-md-label',
    code: 0xf0315,
  },
  {
    name: 'nf-md-label_multiple',
    code: 0xf1375,
  },
  {
    name: 'nf-md-label_multiple_outline',
    code: 0xf1376,
  },
  {
    name: 'nf-md-label_off',
    code: 0xf0acb,
  },
  {
    name: 'nf-md-label_off_outline',
    code: 0xf0acc,
  },
  {
    name: 'nf-md-label_outline',
    code: 0xf0316,
  },
  {
    name: 'nf-md-label_percent',
    code: 0xf12ea,
  },
  {
    name: 'nf-md-label_percent_outline',
    code: 0xf12eb,
  },
  {
    name: 'nf-md-label_variant',
    code: 0xf0acd,
  },
  {
    name: 'nf-md-label_variant_outline',
    code: 0xf0ace,
  },
  {
    name: 'nf-md-ladder',
    code: 0xf15a2,
  },
  {
    name: 'nf-md-ladybug',
    code: 0xf082d,
  },
  {
    name: 'nf-md-lambda',
    code: 0xf0627,
  },
  {
    name: 'nf-md-lamp',
    code: 0xf06b5,
  },
  {
    name: 'nf-md-lamp_outline',
    code: 0xf17d0,
  },
  {
    name: 'nf-md-lamps',
    code: 0xf1576,
  },
  {
    name: 'nf-md-lamps_outline',
    code: 0xf17d1,
  },
  {
    name: 'nf-md-lan',
    code: 0xf0317,
  },
  {
    name: 'nf-md-lan_check',
    code: 0xf12aa,
  },
  {
    name: 'nf-md-lan_connect',
    code: 0xf0318,
  },
  {
    name: 'nf-md-lan_disconnect',
    code: 0xf0319,
  },
  {
    name: 'nf-md-lan_pending',
    code: 0xf031a,
  },
  {
    name: 'nf-md-land_fields',
    code: 0xf1ab2,
  },
  {
    name: 'nf-md-land_plots',
    code: 0xf1ab3,
  },
  {
    name: 'nf-md-land_plots_circle',
    code: 0xf1ab4,
  },
  {
    name: 'nf-md-land_plots_circle_variant',
    code: 0xf1ab5,
  },
  {
    name: 'nf-md-land_rows_horizontal',
    code: 0xf1ab6,
  },
  {
    name: 'nf-md-land_rows_vertical',
    code: 0xf1ab7,
  },
  {
    name: 'nf-md-landslide',
    code: 0xf1a48,
  },
  {
    name: 'nf-md-landslide_outline',
    code: 0xf1a49,
  },
  {
    name: 'nf-md-language_c',
    code: 0xf0671,
  },
  {
    name: 'nf-md-language_cpp',
    code: 0xf0672,
  },
  {
    name: 'nf-md-language_csharp',
    code: 0xf031b,
  },
  {
    name: 'nf-md-language_css3',
    code: 0xf031c,
  },
  {
    name: 'nf-md-language_fortran',
    code: 0xf121a,
  },
  {
    name: 'nf-md-language_go',
    code: 0xf07d3,
  },
  {
    name: 'nf-md-language_haskell',
    code: 0xf0c92,
  },
  {
    name: 'nf-md-language_html5',
    code: 0xf031d,
  },
  {
    name: 'nf-md-language_java',
    code: 0xf0b37,
  },
  {
    name: 'nf-md-language_javascript',
    code: 0xf031e,
  },
  {
    name: 'nf-md-language_kotlin',
    code: 0xf1219,
  },
  {
    name: 'nf-md-language_lua',
    code: 0xf08b1,
  },
  {
    name: 'nf-md-language_markdown',
    code: 0xf0354,
  },
  {
    name: 'nf-md-language_markdown_outline',
    code: 0xf0f5b,
  },
  {
    name: 'nf-md-language_php',
    code: 0xf031f,
  },
  {
    name: 'nf-md-language_python',
    code: 0xf0320,
  },
  {
    name: 'nf-md-language_r',
    code: 0xf07d4,
  },
  {
    name: 'nf-md-language_ruby',
    code: 0xf0d2d,
  },
  {
    name: 'nf-md-language_ruby_on_rails',
    code: 0xf0acf,
  },
  {
    name: 'nf-md-language_rust',
    code: 0xf1617,
  },
  {
    name: 'nf-md-language_swift',
    code: 0xf06e5,
  },
  {
    name: 'nf-md-language_typescript',
    code: 0xf06e6,
  },
  {
    name: 'nf-md-language_xaml',
    code: 0xf0673,
  },
  {
    name: 'nf-md-laptop',
    code: 0xf0322,
  },
  {
    name: 'nf-md-laptop_account',
    code: 0xf1a4a,
  },
  {
    name: 'nf-md-laptop_off',
    code: 0xf06e7,
  },
  {
    name: 'nf-md-laravel',
    code: 0xf0ad0,
  },
  {
    name: 'nf-md-laser_pointer',
    code: 0xf1484,
  },
  {
    name: 'nf-md-lasso',
    code: 0xf0f03,
  },
  {
    name: 'nf-md-lastpass',
    code: 0xf0446,
  },
  {
    name: 'nf-md-latitude',
    code: 0xf0f57,
  },
  {
    name: 'nf-md-launch',
    code: 0xf0327,
  },
  {
    name: 'nf-md-lava_lamp',
    code: 0xf07d5,
  },
  {
    name: 'nf-md-layers',
    code: 0xf0328,
  },
  {
    name: 'nf-md-layers_edit',
    code: 0xf1892,
  },
  {
    name: 'nf-md-layers_minus',
    code: 0xf0e4c,
  },
  {
    name: 'nf-md-layers_off',
    code: 0xf0329,
  },
  {
    name: 'nf-md-layers_off_outline',
    code: 0xf09fd,
  },
  {
    name: 'nf-md-layers_outline',
    code: 0xf09fe,
  },
  {
    name: 'nf-md-layers_plus',
    code: 0xf0e4d,
  },
  {
    name: 'nf-md-layers_remove',
    code: 0xf0e4e,
  },
  {
    name: 'nf-md-layers_search',
    code: 0xf1206,
  },
  {
    name: 'nf-md-layers_search_outline',
    code: 0xf1207,
  },
  {
    name: 'nf-md-layers_triple',
    code: 0xf0f58,
  },
  {
    name: 'nf-md-layers_triple_outline',
    code: 0xf0f59,
  },
  {
    name: 'nf-md-lead_pencil',
    code: 0xf064f,
  },
  {
    name: 'nf-md-leaf',
    code: 0xf032a,
  },
  {
    name: 'nf-md-leaf_circle',
    code: 0xf1905,
  },
  {
    name: 'nf-md-leaf_circle_outline',
    code: 0xf1906,
  },
  {
    name: 'nf-md-leaf_maple',
    code: 0xf0c93,
  },
  {
    name: 'nf-md-leaf_maple_off',
    code: 0xf12da,
  },
  {
    name: 'nf-md-leaf_off',
    code: 0xf12d9,
  },
  {
    name: 'nf-md-leak',
    code: 0xf0dd7,
  },
  {
    name: 'nf-md-leak_off',
    code: 0xf0dd8,
  },
  {
    name: 'nf-md-lecturn',
    code: 0xf1af0,
  },
  {
    name: 'nf-md-led_off',
    code: 0xf032b,
  },
  {
    name: 'nf-md-led_on',
    code: 0xf032c,
  },
  {
    name: 'nf-md-led_outline',
    code: 0xf032d,
  },
  {
    name: 'nf-md-led_strip',
    code: 0xf07d6,
  },
  {
    name: 'nf-md-led_strip_variant',
    code: 0xf1051,
  },
  {
    name: 'nf-md-led_strip_variant_off',
    code: 0xf1a4b,
  },
  {
    name: 'nf-md-led_variant_off',
    code: 0xf032e,
  },
  {
    name: 'nf-md-led_variant_on',
    code: 0xf032f,
  },
  {
    name: 'nf-md-led_variant_outline',
    code: 0xf0330,
  },
  {
    name: 'nf-md-leek',
    code: 0xf117d,
  },
  {
    name: 'nf-md-less_than',
    code: 0xf097c,
  },
  {
    name: 'nf-md-less_than_or_equal',
    code: 0xf097d,
  },
  {
    name: 'nf-md-library',
    code: 0xf0331,
  },
  {
    name: 'nf-md-library_outline',
    code: 0xf1a22,
  },
  {
    name: 'nf-md-library_shelves',
    code: 0xf0ba9,
  },
  {
    name: 'nf-md-license',
    code: 0xf0fc3,
  },
  {
    name: 'nf-md-lifebuoy',
    code: 0xf087e,
  },
  {
    name: 'nf-md-light_flood_down',
    code: 0xf1987,
  },
  {
    name: 'nf-md-light_flood_up',
    code: 0xf1988,
  },
  {
    name: 'nf-md-light_recessed',
    code: 0xf179b,
  },
  {
    name: 'nf-md-light_switch',
    code: 0xf097e,
  },
  {
    name: 'nf-md-light_switch_off',
    code: 0xf1a24,
  },
  {
    name: 'nf-md-lightbulb',
    code: 0xf0335,
  },
  {
    name: 'nf-md-lightbulb_alert',
    code: 0xf19e1,
  },
  {
    name: 'nf-md-lightbulb_alert_outline',
    code: 0xf19e2,
  },
  {
    name: 'nf-md-lightbulb_auto',
    code: 0xf1800,
  },
  {
    name: 'nf-md-lightbulb_auto_outline',
    code: 0xf1801,
  },
  {
    name: 'nf-md-lightbulb_cfl',
    code: 0xf1208,
  },
  {
    name: 'nf-md-lightbulb_cfl_off',
    code: 0xf1209,
  },
  {
    name: 'nf-md-lightbulb_cfl_spiral',
    code: 0xf1275,
  },
  {
    name: 'nf-md-lightbulb_cfl_spiral_off',
    code: 0xf12c3,
  },
  {
    name: 'nf-md-lightbulb_fluorescent_tube',
    code: 0xf1804,
  },
  {
    name: 'nf-md-lightbulb_fluorescent_tube_outline',
    code: 0xf1805,
  },
  {
    name: 'nf-md-lightbulb_group',
    code: 0xf1253,
  },
  {
    name: 'nf-md-lightbulb_group_off',
    code: 0xf12cd,
  },
  {
    name: 'nf-md-lightbulb_group_off_outline',
    code: 0xf12ce,
  },
  {
    name: 'nf-md-lightbulb_group_outline',
    code: 0xf1254,
  },
  {
    name: 'nf-md-lightbulb_multiple',
    code: 0xf1255,
  },
  {
    name: 'nf-md-lightbulb_multiple_off',
    code: 0xf12cf,
  },
  {
    name: 'nf-md-lightbulb_multiple_off_outline',
    code: 0xf12d0,
  },
  {
    name: 'nf-md-lightbulb_multiple_outline',
    code: 0xf1256,
  },
  {
    name: 'nf-md-lightbulb_night',
    code: 0xf1a4c,
  },
  {
    name: 'nf-md-lightbulb_night_outline',
    code: 0xf1a4d,
  },
  {
    name: 'nf-md-lightbulb_off',
    code: 0xf0e4f,
  },
  {
    name: 'nf-md-lightbulb_off_outline',
    code: 0xf0e50,
  },
  {
    name: 'nf-md-lightbulb_on',
    code: 0xf06e8,
  },
  {
    name: 'nf-md-lightbulb_on_10',
    code: 0xf1a4e,
  },
  {
    name: 'nf-md-lightbulb_on_20',
    code: 0xf1a4f,
  },
  {
    name: 'nf-md-lightbulb_on_30',
    code: 0xf1a50,
  },
  {
    name: 'nf-md-lightbulb_on_40',
    code: 0xf1a51,
  },
  {
    name: 'nf-md-lightbulb_on_50',
    code: 0xf1a52,
  },
  {
    name: 'nf-md-lightbulb_on_60',
    code: 0xf1a53,
  },
  {
    name: 'nf-md-lightbulb_on_70',
    code: 0xf1a54,
  },
  {
    name: 'nf-md-lightbulb_on_80',
    code: 0xf1a55,
  },
  {
    name: 'nf-md-lightbulb_on_90',
    code: 0xf1a56,
  },
  {
    name: 'nf-md-lightbulb_on_outline',
    code: 0xf06e9,
  },
  {
    name: 'nf-md-lightbulb_outline',
    code: 0xf0336,
  },
  {
    name: 'nf-md-lightbulb_question',
    code: 0xf19e3,
  },
  {
    name: 'nf-md-lightbulb_question_outline',
    code: 0xf19e4,
  },
  {
    name: 'nf-md-lightbulb_spot',
    code: 0xf17f4,
  },
  {
    name: 'nf-md-lightbulb_spot_off',
    code: 0xf17f5,
  },
  {
    name: 'nf-md-lightbulb_variant',
    code: 0xf1802,
  },
  {
    name: 'nf-md-lightbulb_variant_outline',
    code: 0xf1803,
  },
  {
    name: 'nf-md-lighthouse',
    code: 0xf09ff,
  },
  {
    name: 'nf-md-lighthouse_on',
    code: 0xf0a00,
  },
  {
    name: 'nf-md-lightning_bolt',
    code: 0xf140b,
  },
  {
    name: 'nf-md-lightning_bolt_circle',
    code: 0xf0820,
  },
  {
    name: 'nf-md-lightning_bolt_outline',
    code: 0xf140c,
  },
  {
    name: 'nf-md-line_scan',
    code: 0xf0624,
  },
  {
    name: 'nf-md-lingerie',
    code: 0xf1476,
  },
  {
    name: 'nf-md-link',
    code: 0xf0337,
  },
  {
    name: 'nf-md-link_box',
    code: 0xf0d1a,
  },
  {
    name: 'nf-md-link_box_outline',
    code: 0xf0d1b,
  },
  {
    name: 'nf-md-link_box_variant',
    code: 0xf0d1c,
  },
  {
    name: 'nf-md-link_box_variant_outline',
    code: 0xf0d1d,
  },
  {
    name: 'nf-md-link_lock',
    code: 0xf10ba,
  },
  {
    name: 'nf-md-link_off',
    code: 0xf0338,
  },
  {
    name: 'nf-md-link_plus',
    code: 0xf0c94,
  },
  {
    name: 'nf-md-link_variant',
    code: 0xf0339,
  },
  {
    name: 'nf-md-link_variant_minus',
    code: 0xf10ff,
  },
  {
    name: 'nf-md-link_variant_off',
    code: 0xf033a,
  },
  {
    name: 'nf-md-link_variant_plus',
    code: 0xf1100,
  },
  {
    name: 'nf-md-link_variant_remove',
    code: 0xf1101,
  },
  {
    name: 'nf-md-linkedin',
    code: 0xf033b,
  },
  {
    name: 'nf-md-linux',
    code: 0xf033d,
  },
  {
    name: 'nf-md-linux_mint',
    code: 0xf08ed,
  },
  {
    name: 'nf-md-lipstick',
    code: 0xf13b5,
  },
  {
    name: 'nf-md-liquid_spot',
    code: 0xf1826,
  },
  {
    name: 'nf-md-liquor',
    code: 0xf191e,
  },
  {
    name: 'nf-md-list_status',
    code: 0xf15ab,
  },
  {
    name: 'nf-md-litecoin',
    code: 0xf0a61,
  },
  {
    name: 'nf-md-loading',
    code: 0xf0772,
  },
  {
    name: 'nf-md-location_enter',
    code: 0xf0fc4,
  },
  {
    name: 'nf-md-location_exit',
    code: 0xf0fc5,
  },
  {
    name: 'nf-md-lock',
    code: 0xf033e,
  },
  {
    name: 'nf-md-lock_alert',
    code: 0xf08ee,
  },
  {
    name: 'nf-md-lock_alert_outline',
    code: 0xf15d1,
  },
  {
    name: 'nf-md-lock_check',
    code: 0xf139a,
  },
  {
    name: 'nf-md-lock_check_outline',
    code: 0xf16a8,
  },
  {
    name: 'nf-md-lock_clock',
    code: 0xf097f,
  },
  {
    name: 'nf-md-lock_minus',
    code: 0xf16a9,
  },
  {
    name: 'nf-md-lock_minus_outline',
    code: 0xf16aa,
  },
  {
    name: 'nf-md-lock_off',
    code: 0xf1671,
  },
  {
    name: 'nf-md-lock_off_outline',
    code: 0xf1672,
  },
  {
    name: 'nf-md-lock_open',
    code: 0xf033f,
  },
  {
    name: 'nf-md-lock_open_alert',
    code: 0xf139b,
  },
  {
    name: 'nf-md-lock_open_alert_outline',
    code: 0xf15d2,
  },
  {
    name: 'nf-md-lock_open_check',
    code: 0xf139c,
  },
  {
    name: 'nf-md-lock_open_check_outline',
    code: 0xf16ab,
  },
  {
    name: 'nf-md-lock_open_minus',
    code: 0xf16ac,
  },
  {
    name: 'nf-md-lock_open_minus_outline',
    code: 0xf16ad,
  },
  {
    name: 'nf-md-lock_open_outline',
    code: 0xf0340,
  },
  {
    name: 'nf-md-lock_open_plus',
    code: 0xf16ae,
  },
  {
    name: 'nf-md-lock_open_plus_outline',
    code: 0xf16af,
  },
  {
    name: 'nf-md-lock_open_remove',
    code: 0xf16b0,
  },
  {
    name: 'nf-md-lock_open_remove_outline',
    code: 0xf16b1,
  },
  {
    name: 'nf-md-lock_open_variant',
    code: 0xf0fc6,
  },
  {
    name: 'nf-md-lock_open_variant_outline',
    code: 0xf0fc7,
  },
  {
    name: 'nf-md-lock_outline',
    code: 0xf0341,
  },
  {
    name: 'nf-md-lock_pattern',
    code: 0xf06ea,
  },
  {
    name: 'nf-md-lock_plus',
    code: 0xf05fb,
  },
  {
    name: 'nf-md-lock_plus_outline',
    code: 0xf16b2,
  },
  {
    name: 'nf-md-lock_question',
    code: 0xf08ef,
  },
  {
    name: 'nf-md-lock_remove',
    code: 0xf16b3,
  },
  {
    name: 'nf-md-lock_remove_outline',
    code: 0xf16b4,
  },
  {
    name: 'nf-md-lock_reset',
    code: 0xf0773,
  },
  {
    name: 'nf-md-lock_smart',
    code: 0xf08b2,
  },
  {
    name: 'nf-md-locker',
    code: 0xf07d7,
  },
  {
    name: 'nf-md-locker_multiple',
    code: 0xf07d8,
  },
  {
    name: 'nf-md-login',
    code: 0xf0342,
  },
  {
    name: 'nf-md-logout',
    code: 0xf0343,
  },
  {
    name: 'nf-md-logout_variant',
    code: 0xf05fd,
  },
  {
    name: 'nf-md-longitude',
    code: 0xf0f5a,
  },
  {
    name: 'nf-md-looks',
    code: 0xf0344,
  },
  {
    name: 'nf-md-lotion',
    code: 0xf1582,
  },
  {
    name: 'nf-md-lotion_outline',
    code: 0xf1583,
  },
  {
    name: 'nf-md-lotion_plus',
    code: 0xf1584,
  },
  {
    name: 'nf-md-lotion_plus_outline',
    code: 0xf1585,
  },
  {
    name: 'nf-md-loupe',
    code: 0xf0345,
  },
  {
    name: 'nf-md-lumx',
    code: 0xf0346,
  },
  {
    name: 'nf-md-lungs',
    code: 0xf1084,
  },
  {
    name: 'nf-md-mace',
    code: 0xf1843,
  },
  {
    name: 'nf-md-magazine_pistol',
    code: 0xf0324,
  },
  {
    name: 'nf-md-magazine_rifle',
    code: 0xf0323,
  },
  {
    name: 'nf-md-magic_staff',
    code: 0xf1844,
  },
  {
    name: 'nf-md-magnet',
    code: 0xf0347,
  },
  {
    name: 'nf-md-magnet_on',
    code: 0xf0348,
  },
  {
    name: 'nf-md-magnify',
    code: 0xf0349,
  },
  {
    name: 'nf-md-magnify_close',
    code: 0xf0980,
  },
  {
    name: 'nf-md-magnify_expand',
    code: 0xf1874,
  },
  {
    name: 'nf-md-magnify_minus',
    code: 0xf034a,
  },
  {
    name: 'nf-md-magnify_minus_cursor',
    code: 0xf0a62,
  },
  {
    name: 'nf-md-magnify_minus_outline',
    code: 0xf06ec,
  },
  {
    name: 'nf-md-magnify_plus',
    code: 0xf034b,
  },
  {
    name: 'nf-md-magnify_plus_cursor',
    code: 0xf0a63,
  },
  {
    name: 'nf-md-magnify_plus_outline',
    code: 0xf06ed,
  },
  {
    name: 'nf-md-magnify_remove_cursor',
    code: 0xf120c,
  },
  {
    name: 'nf-md-magnify_remove_outline',
    code: 0xf120d,
  },
  {
    name: 'nf-md-magnify_scan',
    code: 0xf1276,
  },
  {
    name: 'nf-md-mail',
    code: 0xf0ebb,
  },
  {
    name: 'nf-md-mailbox',
    code: 0xf06ee,
  },
  {
    name: 'nf-md-mailbox_open',
    code: 0xf0d88,
  },
  {
    name: 'nf-md-mailbox_open_outline',
    code: 0xf0d89,
  },
  {
    name: 'nf-md-mailbox_open_up',
    code: 0xf0d8a,
  },
  {
    name: 'nf-md-mailbox_open_up_outline',
    code: 0xf0d8b,
  },
  {
    name: 'nf-md-mailbox_outline',
    code: 0xf0d8c,
  },
  {
    name: 'nf-md-mailbox_up',
    code: 0xf0d8d,
  },
  {
    name: 'nf-md-mailbox_up_outline',
    code: 0xf0d8e,
  },
  {
    name: 'nf-md-manjaro',
    code: 0xf160a,
  },
  {
    name: 'nf-md-map',
    code: 0xf034d,
  },
  {
    name: 'nf-md-map_check',
    code: 0xf0ebc,
  },
  {
    name: 'nf-md-map_check_outline',
    code: 0xf0ebd,
  },
  {
    name: 'nf-md-map_clock',
    code: 0xf0d1e,
  },
  {
    name: 'nf-md-map_clock_outline',
    code: 0xf0d1f,
  },
  {
    name: 'nf-md-map_legend',
    code: 0xf0a01,
  },
  {
    name: 'nf-md-map_marker',
    code: 0xf034e,
  },
  {
    name: 'nf-md-map_marker_account',
    code: 0xf18e3,
  },
  {
    name: 'nf-md-map_marker_account_outline',
    code: 0xf18e4,
  },
  {
    name: 'nf-md-map_marker_alert',
    code: 0xf0f05,
  },
  {
    name: 'nf-md-map_marker_alert_outline',
    code: 0xf0f06,
  },
  {
    name: 'nf-md-map_marker_check',
    code: 0xf0c95,
  },
  {
    name: 'nf-md-map_marker_check_outline',
    code: 0xf12fb,
  },
  {
    name: 'nf-md-map_marker_circle',
    code: 0xf034f,
  },
  {
    name: 'nf-md-map_marker_distance',
    code: 0xf08f0,
  },
  {
    name: 'nf-md-map_marker_down',
    code: 0xf1102,
  },
  {
    name: 'nf-md-map_marker_left',
    code: 0xf12db,
  },
  {
    name: 'nf-md-map_marker_left_outline',
    code: 0xf12dd,
  },
  {
    name: 'nf-md-map_marker_minus',
    code: 0xf0650,
  },
  {
    name: 'nf-md-map_marker_minus_outline',
    code: 0xf12f9,
  },
  {
    name: 'nf-md-map_marker_multiple',
    code: 0xf0350,
  },
  {
    name: 'nf-md-map_marker_multiple_outline',
    code: 0xf1277,
  },
  {
    name: 'nf-md-map_marker_off',
    code: 0xf0351,
  },
  {
    name: 'nf-md-map_marker_off_outline',
    code: 0xf12fd,
  },
  {
    name: 'nf-md-map_marker_outline',
    code: 0xf07d9,
  },
  {
    name: 'nf-md-map_marker_path',
    code: 0xf0d20,
  },
  {
    name: 'nf-md-map_marker_plus',
    code: 0xf0651,
  },
  {
    name: 'nf-md-map_marker_plus_outline',
    code: 0xf12f8,
  },
  {
    name: 'nf-md-map_marker_question',
    code: 0xf0f07,
  },
  {
    name: 'nf-md-map_marker_question_outline',
    code: 0xf0f08,
  },
  {
    name: 'nf-md-map_marker_radius',
    code: 0xf0352,
  },
  {
    name: 'nf-md-map_marker_radius_outline',
    code: 0xf12fc,
  },
  {
    name: 'nf-md-map_marker_remove',
    code: 0xf0f09,
  },
  {
    name: 'nf-md-map_marker_remove_outline',
    code: 0xf12fa,
  },
  {
    name: 'nf-md-map_marker_remove_variant',
    code: 0xf0f0a,
  },
  {
    name: 'nf-md-map_marker_right',
    code: 0xf12dc,
  },
  {
    name: 'nf-md-map_marker_right_outline',
    code: 0xf12de,
  },
  {
    name: 'nf-md-map_marker_star',
    code: 0xf1608,
  },
  {
    name: 'nf-md-map_marker_star_outline',
    code: 0xf1609,
  },
  {
    name: 'nf-md-map_marker_up',
    code: 0xf1103,
  },
  {
    name: 'nf-md-map_minus',
    code: 0xf0981,
  },
  {
    name: 'nf-md-map_outline',
    code: 0xf0982,
  },
  {
    name: 'nf-md-map_plus',
    code: 0xf0983,
  },
  {
    name: 'nf-md-map_search',
    code: 0xf0984,
  },
  {
    name: 'nf-md-map_search_outline',
    code: 0xf0985,
  },
  {
    name: 'nf-md-mapbox',
    code: 0xf0baa,
  },
  {
    name: 'nf-md-margin',
    code: 0xf0353,
  },
  {
    name: 'nf-md-marker',
    code: 0xf0652,
  },
  {
    name: 'nf-md-marker_cancel',
    code: 0xf0dd9,
  },
  {
    name: 'nf-md-marker_check',
    code: 0xf0355,
  },
  {
    name: 'nf-md-mastodon',
    code: 0xf0ad1,
  },
  {
    name: 'nf-md-material_design',
    code: 0xf0986,
  },
  {
    name: 'nf-md-material_ui',
    code: 0xf0357,
  },
  {
    name: 'nf-md-math_compass',
    code: 0xf0358,
  },
  {
    name: 'nf-md-math_cos',
    code: 0xf0c96,
  },
  {
    name: 'nf-md-math_integral',
    code: 0xf0fc8,
  },
  {
    name: 'nf-md-math_integral_box',
    code: 0xf0fc9,
  },
  {
    name: 'nf-md-math_log',
    code: 0xf1085,
  },
  {
    name: 'nf-md-math_norm',
    code: 0xf0fca,
  },
  {
    name: 'nf-md-math_norm_box',
    code: 0xf0fcb,
  },
  {
    name: 'nf-md-math_sin',
    code: 0xf0c97,
  },
  {
    name: 'nf-md-math_tan',
    code: 0xf0c98,
  },
  {
    name: 'nf-md-matrix',
    code: 0xf0628,
  },
  {
    name: 'nf-md-medal',
    code: 0xf0987,
  },
  {
    name: 'nf-md-medal_outline',
    code: 0xf1326,
  },
  {
    name: 'nf-md-medical_bag',
    code: 0xf06ef,
  },
  {
    name: 'nf-md-medical_cotton_swab',
    code: 0xf1ab8,
  },
  {
    name: 'nf-md-meditation',
    code: 0xf117b,
  },
  {
    name: 'nf-md-memory',
    code: 0xf035b,
  },
  {
    name: 'nf-md-menorah',
    code: 0xf17d4,
  },
  {
    name: 'nf-md-menorah_fire',
    code: 0xf17d5,
  },
  {
    name: 'nf-md-menu',
    code: 0xf035c,
  },
  {
    name: 'nf-md-menu_down',
    code: 0xf035d,
  },
  {
    name: 'nf-md-menu_down_outline',
    code: 0xf06b6,
  },
  {
    name: 'nf-md-menu_left',
    code: 0xf035e,
  },
  {
    name: 'nf-md-menu_left_outline',
    code: 0xf0a02,
  },
  {
    name: 'nf-md-menu_open',
    code: 0xf0bab,
  },
  {
    name: 'nf-md-menu_right',
    code: 0xf035f,
  },
  {
    name: 'nf-md-menu_right_outline',
    code: 0xf0a03,
  },
  {
    name: 'nf-md-menu_swap',
    code: 0xf0a64,
  },
  {
    name: 'nf-md-menu_swap_outline',
    code: 0xf0a65,
  },
  {
    name: 'nf-md-menu_up',
    code: 0xf0360,
  },
  {
    name: 'nf-md-menu_up_outline',
    code: 0xf06b7,
  },
  {
    name: 'nf-md-merge',
    code: 0xf0f5c,
  },
  {
    name: 'nf-md-message',
    code: 0xf0361,
  },
  {
    name: 'nf-md-message_alert',
    code: 0xf0362,
  },
  {
    name: 'nf-md-message_alert_outline',
    code: 0xf0a04,
  },
  {
    name: 'nf-md-message_arrow_left',
    code: 0xf12f2,
  },
  {
    name: 'nf-md-message_arrow_left_outline',
    code: 0xf12f3,
  },
  {
    name: 'nf-md-message_arrow_right',
    code: 0xf12f4,
  },
  {
    name: 'nf-md-message_arrow_right_outline',
    code: 0xf12f5,
  },
  {
    name: 'nf-md-message_badge',
    code: 0xf1941,
  },
  {
    name: 'nf-md-message_badge_outline',
    code: 0xf1942,
  },
  {
    name: 'nf-md-message_bookmark',
    code: 0xf15ac,
  },
  {
    name: 'nf-md-message_bookmark_outline',
    code: 0xf15ad,
  },
  {
    name: 'nf-md-message_bulleted',
    code: 0xf06a2,
  },
  {
    name: 'nf-md-message_bulleted_off',
    code: 0xf06a3,
  },
  {
    name: 'nf-md-message_cog',
    code: 0xf06f1,
  },
  {
    name: 'nf-md-message_cog_outline',
    code: 0xf1172,
  },
  {
    name: 'nf-md-message_draw',
    code: 0xf0363,
  },
  {
    name: 'nf-md-message_fast',
    code: 0xf19cc,
  },
  {
    name: 'nf-md-message_fast_outline',
    code: 0xf19cd,
  },
  {
    name: 'nf-md-message_flash',
    code: 0xf15a9,
  },
  {
    name: 'nf-md-message_flash_outline',
    code: 0xf15aa,
  },
  {
    name: 'nf-md-message_image',
    code: 0xf0364,
  },
  {
    name: 'nf-md-message_image_outline',
    code: 0xf116c,
  },
  {
    name: 'nf-md-message_lock',
    code: 0xf0fcc,
  },
  {
    name: 'nf-md-message_lock_outline',
    code: 0xf116d,
  },
  {
    name: 'nf-md-message_minus',
    code: 0xf116e,
  },
  {
    name: 'nf-md-message_minus_outline',
    code: 0xf116f,
  },
  {
    name: 'nf-md-message_off',
    code: 0xf164d,
  },
  {
    name: 'nf-md-message_off_outline',
    code: 0xf164e,
  },
  {
    name: 'nf-md-message_outline',
    code: 0xf0365,
  },
  {
    name: 'nf-md-message_plus',
    code: 0xf0653,
  },
  {
    name: 'nf-md-message_plus_outline',
    code: 0xf10bb,
  },
  {
    name: 'nf-md-message_processing',
    code: 0xf0366,
  },
  {
    name: 'nf-md-message_processing_outline',
    code: 0xf1170,
  },
  {
    name: 'nf-md-message_question',
    code: 0xf173a,
  },
  {
    name: 'nf-md-message_question_outline',
    code: 0xf173b,
  },
  {
    name: 'nf-md-message_reply',
    code: 0xf0367,
  },
  {
    name: 'nf-md-message_reply_outline',
    code: 0xf173d,
  },
  {
    name: 'nf-md-message_reply_text',
    code: 0xf0368,
  },
  {
    name: 'nf-md-message_reply_text_outline',
    code: 0xf173e,
  },
  {
    name: 'nf-md-message_settings',
    code: 0xf06f0,
  },
  {
    name: 'nf-md-message_settings_outline',
    code: 0xf1171,
  },
  {
    name: 'nf-md-message_star',
    code: 0xf069a,
  },
  {
    name: 'nf-md-message_star_outline',
    code: 0xf1250,
  },
  {
    name: 'nf-md-message_text',
    code: 0xf0369,
  },
  {
    name: 'nf-md-message_text_clock',
    code: 0xf1173,
  },
  {
    name: 'nf-md-message_text_clock_outline',
    code: 0xf1174,
  },
  {
    name: 'nf-md-message_text_fast',
    code: 0xf19ce,
  },
  {
    name: 'nf-md-message_text_fast_outline',
    code: 0xf19cf,
  },
  {
    name: 'nf-md-message_text_lock',
    code: 0xf0fcd,
  },
  {
    name: 'nf-md-message_text_lock_outline',
    code: 0xf1175,
  },
  {
    name: 'nf-md-message_text_outline',
    code: 0xf036a,
  },
  {
    name: 'nf-md-message_video',
    code: 0xf036b,
  },
  {
    name: 'nf-md-meteor',
    code: 0xf0629,
  },
  {
    name: 'nf-md-meter_electric',
    code: 0xf1a57,
  },
  {
    name: 'nf-md-meter_electric_outline',
    code: 0xf1a58,
  },
  {
    name: 'nf-md-meter_gas',
    code: 0xf1a59,
  },
  {
    name: 'nf-md-meter_gas_outline',
    code: 0xf1a5a,
  },
  {
    name: 'nf-md-metronome',
    code: 0xf07da,
  },
  {
    name: 'nf-md-metronome_tick',
    code: 0xf07db,
  },
  {
    name: 'nf-md-micro_sd',
    code: 0xf07dc,
  },
  {
    name: 'nf-md-microphone',
    code: 0xf036c,
  },
  {
    name: 'nf-md-microphone_minus',
    code: 0xf08b3,
  },
  {
    name: 'nf-md-microphone_off',
    code: 0xf036d,
  },
  {
    name: 'nf-md-microphone_outline',
    code: 0xf036e,
  },
  {
    name: 'nf-md-microphone_plus',
    code: 0xf08b4,
  },
  {
    name: 'nf-md-microphone_question',
    code: 0xf1989,
  },
  {
    name: 'nf-md-microphone_question_outline',
    code: 0xf198a,
  },
  {
    name: 'nf-md-microphone_settings',
    code: 0xf036f,
  },
  {
    name: 'nf-md-microphone_variant',
    code: 0xf0370,
  },
  {
    name: 'nf-md-microphone_variant_off',
    code: 0xf0371,
  },
  {
    name: 'nf-md-microscope',
    code: 0xf0654,
  },
  {
    name: 'nf-md-microsoft',
    code: 0xf0372,
  },
  {
    name: 'nf-md-microsoft_access',
    code: 0xf138e,
  },
  {
    name: 'nf-md-microsoft_azure',
    code: 0xf0805,
  },
  {
    name: 'nf-md-microsoft_azure_devops',
    code: 0xf0fd5,
  },
  {
    name: 'nf-md-microsoft_bing',
    code: 0xf00a4,
  },
  {
    name: 'nf-md-microsoft_dynamics_365',
    code: 0xf0988,
  },
  {
    name: 'nf-md-microsoft_edge',
    code: 0xf01e9,
  },
  {
    name: 'nf-md-microsoft_excel',
    code: 0xf138f,
  },
  {
    name: 'nf-md-microsoft_internet_explorer',
    code: 0xf0300,
  },
  {
    name: 'nf-md-microsoft_office',
    code: 0xf03c6,
  },
  {
    name: 'nf-md-microsoft_onedrive',
    code: 0xf03ca,
  },
  {
    name: 'nf-md-microsoft_onenote',
    code: 0xf0747,
  },
  {
    name: 'nf-md-microsoft_outlook',
    code: 0xf0d22,
  },
  {
    name: 'nf-md-microsoft_powerpoint',
    code: 0xf1390,
  },
  {
    name: 'nf-md-microsoft_sharepoint',
    code: 0xf1391,
  },
  {
    name: 'nf-md-microsoft_teams',
    code: 0xf02bb,
  },
  {
    name: 'nf-md-microsoft_visual_studio',
    code: 0xf0610,
  },
  {
    name: 'nf-md-microsoft_visual_studio_code',
    code: 0xf0a1e,
  },
  {
    name: 'nf-md-microsoft_windows',
    code: 0xf05b3,
  },
  {
    name: 'nf-md-microsoft_windows_classic',
    code: 0xf0a21,
  },
  {
    name: 'nf-md-microsoft_word',
    code: 0xf1392,
  },
  {
    name: 'nf-md-microsoft_xbox',
    code: 0xf05b9,
  },
  {
    name: 'nf-md-microsoft_xbox_controller',
    code: 0xf05ba,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_alert',
    code: 0xf074b,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_charging',
    code: 0xf0a22,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_empty',
    code: 0xf074c,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_full',
    code: 0xf074d,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_low',
    code: 0xf074e,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_medium',
    code: 0xf074f,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_battery_unknown',
    code: 0xf0750,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_menu',
    code: 0xf0e6f,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_off',
    code: 0xf05bb,
  },
  {
    name: 'nf-md-microsoft_xbox_controller_view',
    code: 0xf0e70,
  },
  {
    name: 'nf-md-microwave',
    code: 0xf0c99,
  },
  {
    name: 'nf-md-microwave_off',
    code: 0xf1423,
  },
  {
    name: 'nf-md-middleware',
    code: 0xf0f5d,
  },
  {
    name: 'nf-md-middleware_outline',
    code: 0xf0f5e,
  },
  {
    name: 'nf-md-midi',
    code: 0xf08f1,
  },
  {
    name: 'nf-md-midi_port',
    code: 0xf08f2,
  },
  {
    name: 'nf-md-mine',
    code: 0xf0dda,
  },
  {
    name: 'nf-md-minecraft',
    code: 0xf0373,
  },
  {
    name: 'nf-md-mini_sd',
    code: 0xf0a05,
  },
  {
    name: 'nf-md-minidisc',
    code: 0xf0a06,
  },
  {
    name: 'nf-md-minus',
    code: 0xf0374,
  },
  {
    name: 'nf-md-minus_box',
    code: 0xf0375,
  },
  {
    name: 'nf-md-minus_box_multiple',
    code: 0xf1141,
  },
  {
    name: 'nf-md-minus_box_multiple_outline',
    code: 0xf1142,
  },
  {
    name: 'nf-md-minus_box_outline',
    code: 0xf06f2,
  },
  {
    name: 'nf-md-minus_circle',
    code: 0xf0376,
  },
  {
    name: 'nf-md-minus_circle_multiple',
    code: 0xf035a,
  },
  {
    name: 'nf-md-minus_circle_multiple_outline',
    code: 0xf0ad3,
  },
  {
    name: 'nf-md-minus_circle_off',
    code: 0xf1459,
  },
  {
    name: 'nf-md-minus_circle_off_outline',
    code: 0xf145a,
  },
  {
    name: 'nf-md-minus_circle_outline',
    code: 0xf0377,
  },
  {
    name: 'nf-md-minus_network',
    code: 0xf0378,
  },
  {
    name: 'nf-md-minus_network_outline',
    code: 0xf0c9a,
  },
  {
    name: 'nf-md-minus_thick',
    code: 0xf1639,
  },
  {
    name: 'nf-md-mirror',
    code: 0xf11fd,
  },
  {
    name: 'nf-md-mirror_rectangle',
    code: 0xf179f,
  },
  {
    name: 'nf-md-mirror_variant',
    code: 0xf17a0,
  },
  {
    name: 'nf-md-mixed_martial_arts',
    code: 0xf0d8f,
  },
  {
    name: 'nf-md-mixed_reality',
    code: 0xf087f,
  },
  {
    name: 'nf-md-molecule',
    code: 0xf0bac,
  },
  {
    name: 'nf-md-molecule_co',
    code: 0xf12fe,
  },
  {
    name: 'nf-md-molecule_co2',
    code: 0xf07e4,
  },
  {
    name: 'nf-md-monitor',
    code: 0xf0379,
  },
  {
    name: 'nf-md-monitor_account',
    code: 0xf1a5b,
  },
  {
    name: 'nf-md-monitor_arrow_down',
    code: 0xf19d0,
  },
  {
    name: 'nf-md-monitor_arrow_down_variant',
    code: 0xf19d1,
  },
  {
    name: 'nf-md-monitor_cellphone',
    code: 0xf0989,
  },
  {
    name: 'nf-md-monitor_cellphone_star',
    code: 0xf098a,
  },
  {
    name: 'nf-md-monitor_dashboard',
    code: 0xf0a07,
  },
  {
    name: 'nf-md-monitor_edit',
    code: 0xf12c6,
  },
  {
    name: 'nf-md-monitor_eye',
    code: 0xf13b4,
  },
  {
    name: 'nf-md-monitor_lock',
    code: 0xf0ddb,
  },
  {
    name: 'nf-md-monitor_multiple',
    code: 0xf037a,
  },
  {
    name: 'nf-md-monitor_off',
    code: 0xf0d90,
  },
  {
    name: 'nf-md-monitor_screenshot',
    code: 0xf0e51,
  },
  {
    name: 'nf-md-monitor_share',
    code: 0xf1483,
  },
  {
    name: 'nf-md-monitor_shimmer',
    code: 0xf1104,
  },
  {
    name: 'nf-md-monitor_small',
    code: 0xf1876,
  },
  {
    name: 'nf-md-monitor_speaker',
    code: 0xf0f5f,
  },
  {
    name: 'nf-md-monitor_speaker_off',
    code: 0xf0f60,
  },
  {
    name: 'nf-md-monitor_star',
    code: 0xf0ddc,
  },
  {
    name: 'nf-md-moon_first_quarter',
    code: 0xf0f61,
  },
  {
    name: 'nf-md-moon_full',
    code: 0xf0f62,
  },
  {
    name: 'nf-md-moon_last_quarter',
    code: 0xf0f63,
  },
  {
    name: 'nf-md-moon_new',
    code: 0xf0f64,
  },
  {
    name: 'nf-md-moon_waning_crescent',
    code: 0xf0f65,
  },
  {
    name: 'nf-md-moon_waning_gibbous',
    code: 0xf0f66,
  },
  {
    name: 'nf-md-moon_waxing_crescent',
    code: 0xf0f67,
  },
  {
    name: 'nf-md-moon_waxing_gibbous',
    code: 0xf0f68,
  },
  {
    name: 'nf-md-moped',
    code: 0xf1086,
  },
  {
    name: 'nf-md-moped_electric',
    code: 0xf15b7,
  },
  {
    name: 'nf-md-moped_electric_outline',
    code: 0xf15b8,
  },
  {
    name: 'nf-md-moped_outline',
    code: 0xf15b9,
  },
  {
    name: 'nf-md-more',
    code: 0xf037b,
  },
  {
    name: 'nf-md-mortar_pestle',
    code: 0xf1748,
  },
  {
    name: 'nf-md-mortar_pestle_plus',
    code: 0xf03f1,
  },
  {
    name: 'nf-md-mosque',
    code: 0xf1827,
  },
  {
    name: 'nf-md-mother_heart',
    code: 0xf1314,
  },
  {
    name: 'nf-md-mother_nurse',
    code: 0xf0d21,
  },
  {
    name: 'nf-md-motion',
    code: 0xf15b2,
  },
  {
    name: 'nf-md-motion_outline',
    code: 0xf15b3,
  },
  {
    name: 'nf-md-motion_pause',
    code: 0xf1590,
  },
  {
    name: 'nf-md-motion_pause_outline',
    code: 0xf1592,
  },
  {
    name: 'nf-md-motion_play',
    code: 0xf158f,
  },
  {
    name: 'nf-md-motion_play_outline',
    code: 0xf1591,
  },
  {
    name: 'nf-md-motion_sensor',
    code: 0xf0d91,
  },
  {
    name: 'nf-md-motion_sensor_off',
    code: 0xf1435,
  },
  {
    name: 'nf-md-motorbike',
    code: 0xf037c,
  },
  {
    name: 'nf-md-motorbike_electric',
    code: 0xf15ba,
  },
  {
    name: 'nf-md-mouse',
    code: 0xf037d,
  },
  {
    name: 'nf-md-mouse_bluetooth',
    code: 0xf098b,
  },
  {
    name: 'nf-md-mouse_move_down',
    code: 0xf1550,
  },
  {
    name: 'nf-md-mouse_move_up',
    code: 0xf1551,
  },
  {
    name: 'nf-md-mouse_move_vertical',
    code: 0xf1552,
  },
  {
    name: 'nf-md-mouse_off',
    code: 0xf037e,
  },
  {
    name: 'nf-md-mouse_variant',
    code: 0xf037f,
  },
  {
    name: 'nf-md-mouse_variant_off',
    code: 0xf0380,
  },
  {
    name: 'nf-md-move_resize',
    code: 0xf0655,
  },
  {
    name: 'nf-md-move_resize_variant',
    code: 0xf0656,
  },
  {
    name: 'nf-md-movie',
    code: 0xf0381,
  },
  {
    name: 'nf-md-movie_check',
    code: 0xf16f3,
  },
  {
    name: 'nf-md-movie_check_outline',
    code: 0xf16f4,
  },
  {
    name: 'nf-md-movie_cog',
    code: 0xf16f5,
  },
  {
    name: 'nf-md-movie_cog_outline',
    code: 0xf16f6,
  },
  {
    name: 'nf-md-movie_edit',
    code: 0xf1122,
  },
  {
    name: 'nf-md-movie_edit_outline',
    code: 0xf1123,
  },
  {
    name: 'nf-md-movie_filter',
    code: 0xf1124,
  },
  {
    name: 'nf-md-movie_filter_outline',
    code: 0xf1125,
  },
  {
    name: 'nf-md-movie_minus',
    code: 0xf16f7,
  },
  {
    name: 'nf-md-movie_minus_outline',
    code: 0xf16f8,
  },
  {
    name: 'nf-md-movie_off',
    code: 0xf16f9,
  },
  {
    name: 'nf-md-movie_off_outline',
    code: 0xf16fa,
  },
  {
    name: 'nf-md-movie_open',
    code: 0xf0fce,
  },
  {
    name: 'nf-md-movie_open_check',
    code: 0xf16fb,
  },
  {
    name: 'nf-md-movie_open_check_outline',
    code: 0xf16fc,
  },
  {
    name: 'nf-md-movie_open_cog',
    code: 0xf16fd,
  },
  {
    name: 'nf-md-movie_open_cog_outline',
    code: 0xf16fe,
  },
  {
    name: 'nf-md-movie_open_edit',
    code: 0xf16ff,
  },
  {
    name: 'nf-md-movie_open_edit_outline',
    code: 0xf1700,
  },
  {
    name: 'nf-md-movie_open_minus',
    code: 0xf1701,
  },
  {
    name: 'nf-md-movie_open_minus_outline',
    code: 0xf1702,
  },
  {
    name: 'nf-md-movie_open_off',
    code: 0xf1703,
  },
  {
    name: 'nf-md-movie_open_off_outline',
    code: 0xf1704,
  },
  {
    name: 'nf-md-movie_open_outline',
    code: 0xf0fcf,
  },
  {
    name: 'nf-md-movie_open_play',
    code: 0xf1705,
  },
  {
    name: 'nf-md-movie_open_play_outline',
    code: 0xf1706,
  },
  {
    name: 'nf-md-movie_open_plus',
    code: 0xf1707,
  },
  {
    name: 'nf-md-movie_open_plus_outline',
    code: 0xf1708,
  },
  {
    name: 'nf-md-movie_open_remove',
    code: 0xf1709,
  },
  {
    name: 'nf-md-movie_open_remove_outline',
    code: 0xf170a,
  },
  {
    name: 'nf-md-movie_open_settings',
    code: 0xf170b,
  },
  {
    name: 'nf-md-movie_open_settings_outline',
    code: 0xf170c,
  },
  {
    name: 'nf-md-movie_open_star',
    code: 0xf170d,
  },
  {
    name: 'nf-md-movie_open_star_outline',
    code: 0xf170e,
  },
  {
    name: 'nf-md-movie_outline',
    code: 0xf0ddd,
  },
  {
    name: 'nf-md-movie_play',
    code: 0xf170f,
  },
  {
    name: 'nf-md-movie_play_outline',
    code: 0xf1710,
  },
  {
    name: 'nf-md-movie_plus',
    code: 0xf1711,
  },
  {
    name: 'nf-md-movie_plus_outline',
    code: 0xf1712,
  },
  {
    name: 'nf-md-movie_remove',
    code: 0xf1713,
  },
  {
    name: 'nf-md-movie_remove_outline',
    code: 0xf1714,
  },
  {
    name: 'nf-md-movie_roll',
    code: 0xf07de,
  },
  {
    name: 'nf-md-movie_search',
    code: 0xf11d2,
  },
  {
    name: 'nf-md-movie_search_outline',
    code: 0xf11d3,
  },
  {
    name: 'nf-md-movie_settings',
    code: 0xf1715,
  },
  {
    name: 'nf-md-movie_settings_outline',
    code: 0xf1716,
  },
  {
    name: 'nf-md-movie_star',
    code: 0xf1717,
  },
  {
    name: 'nf-md-movie_star_outline',
    code: 0xf1718,
  },
  {
    name: 'nf-md-mower',
    code: 0xf166f,
  },
  {
    name: 'nf-md-mower_bag',
    code: 0xf1670,
  },
  {
    name: 'nf-md-muffin',
    code: 0xf098c,
  },
  {
    name: 'nf-md-multicast',
    code: 0xf1893,
  },
  {
    name: 'nf-md-multiplication',
    code: 0xf0382,
  },
  {
    name: 'nf-md-multiplication_box',
    code: 0xf0383,
  },
  {
    name: 'nf-md-mushroom',
    code: 0xf07df,
  },
  {
    name: 'nf-md-mushroom_off',
    code: 0xf13fa,
  },
  {
    name: 'nf-md-mushroom_off_outline',
    code: 0xf13fb,
  },
  {
    name: 'nf-md-mushroom_outline',
    code: 0xf07e0,
  },
  {
    name: 'nf-md-music',
    code: 0xf075a,
  },
  {
    name: 'nf-md-music_accidental_double_flat',
    code: 0xf0f69,
  },
  {
    name: 'nf-md-music_accidental_double_sharp',
    code: 0xf0f6a,
  },
  {
    name: 'nf-md-music_accidental_flat',
    code: 0xf0f6b,
  },
  {
    name: 'nf-md-music_accidental_natural',
    code: 0xf0f6c,
  },
  {
    name: 'nf-md-music_accidental_sharp',
    code: 0xf0f6d,
  },
  {
    name: 'nf-md-music_box',
    code: 0xf0384,
  },
  {
    name: 'nf-md-music_box_multiple',
    code: 0xf0333,
  },
  {
    name: 'nf-md-music_box_multiple_outline',
    code: 0xf0f04,
  },
  {
    name: 'nf-md-music_box_outline',
    code: 0xf0385,
  },
  {
    name: 'nf-md-music_circle',
    code: 0xf0386,
  },
  {
    name: 'nf-md-music_circle_outline',
    code: 0xf0ad4,
  },
  {
    name: 'nf-md-music_clef_alto',
    code: 0xf0f6e,
  },
  {
    name: 'nf-md-music_clef_bass',
    code: 0xf0f6f,
  },
  {
    name: 'nf-md-music_clef_treble',
    code: 0xf0f70,
  },
  {
    name: 'nf-md-music_note',
    code: 0xf0387,
  },
  {
    name: 'nf-md-music_note_bluetooth',
    code: 0xf05fe,
  },
  {
    name: 'nf-md-music_note_bluetooth_off',
    code: 0xf05ff,
  },
  {
    name: 'nf-md-music_note_eighth_dotted',
    code: 0xf0f71,
  },
  {
    name: 'nf-md-music_note_half',
    code: 0xf0389,
  },
  {
    name: 'nf-md-music_note_half_dotted',
    code: 0xf0f72,
  },
  {
    name: 'nf-md-music_note_off',
    code: 0xf038a,
  },
  {
    name: 'nf-md-music_note_off_outline',
    code: 0xf0f73,
  },
  {
    name: 'nf-md-music_note_outline',
    code: 0xf0f74,
  },
  {
    name: 'nf-md-music_note_plus',
    code: 0xf0dde,
  },
  {
    name: 'nf-md-music_note_quarter',
    code: 0xf038b,
  },
  {
    name: 'nf-md-music_note_quarter_dotted',
    code: 0xf0f75,
  },
  {
    name: 'nf-md-music_note_sixteenth',
    code: 0xf038c,
  },
  {
    name: 'nf-md-music_note_sixteenth_dotted',
    code: 0xf0f76,
  },
  {
    name: 'nf-md-music_note_whole',
    code: 0xf038d,
  },
  {
    name: 'nf-md-music_note_whole_dotted',
    code: 0xf0f77,
  },
  {
    name: 'nf-md-music_off',
    code: 0xf075b,
  },
  {
    name: 'nf-md-music_rest_eighth',
    code: 0xf0f78,
  },
  {
    name: 'nf-md-music_rest_half',
    code: 0xf0f79,
  },
  {
    name: 'nf-md-music_rest_quarter',
    code: 0xf0f7a,
  },
  {
    name: 'nf-md-music_rest_sixteenth',
    code: 0xf0f7b,
  },
  {
    name: 'nf-md-music_rest_whole',
    code: 0xf0f7c,
  },
  {
    name: 'nf-md-mustache',
    code: 0xf15de,
  },
  {
    name: 'nf-md-nail',
    code: 0xf0ddf,
  },
  {
    name: 'nf-md-nas',
    code: 0xf08f3,
  },
  {
    name: 'nf-md-nativescript',
    code: 0xf0880,
  },
  {
    name: 'nf-md-nature',
    code: 0xf038e,
  },
  {
    name: 'nf-md-nature_people',
    code: 0xf038f,
  },
  {
    name: 'nf-md-navigation',
    code: 0xf0390,
  },
  {
    name: 'nf-md-navigation_outline',
    code: 0xf1607,
  },
  {
    name: 'nf-md-navigation_variant_outline',
    code: 0xf18f1,
  },
  {
    name: 'nf-md-near_me',
    code: 0xf05cd,
  },
  {
    name: 'nf-md-necklace',
    code: 0xf0f0b,
  },
  {
    name: 'nf-md-needle',
    code: 0xf0391,
  },
  {
    name: 'nf-md-needle_off',
    code: 0xf19d2,
  },
  {
    name: 'nf-md-netflix',
    code: 0xf0746,
  },
  {
    name: 'nf-md-network',
    code: 0xf06f3,
  },
  {
    name: 'nf-md-network_off',
    code: 0xf0c9b,
  },
  {
    name: 'nf-md-network_off_outline',
    code: 0xf0c9c,
  },
  {
    name: 'nf-md-network_outline',
    code: 0xf0c9d,
  },
  {
    name: 'nf-md-network_pos',
    code: 0xf1acb,
  },
  {
    name: 'nf-md-network_strength_1',
    code: 0xf08f4,
  },
  {
    name: 'nf-md-network_strength_1_alert',
    code: 0xf08f5,
  },
  {
    name: 'nf-md-network_strength_2',
    code: 0xf08f6,
  },
  {
    name: 'nf-md-network_strength_2_alert',
    code: 0xf08f7,
  },
  {
    name: 'nf-md-network_strength_3',
    code: 0xf08f8,
  },
  {
    name: 'nf-md-network_strength_3_alert',
    code: 0xf08f9,
  },
  {
    name: 'nf-md-network_strength_4',
    code: 0xf08fa,
  },
  {
    name: 'nf-md-network_strength_4_alert',
    code: 0xf08fb,
  },
  {
    name: 'nf-md-network_strength_4_cog',
    code: 0xf191a,
  },
  {
    name: 'nf-md-network_strength_off',
    code: 0xf08fc,
  },
  {
    name: 'nf-md-network_strength_off_outline',
    code: 0xf08fd,
  },
  {
    name: 'nf-md-network_strength_outline',
    code: 0xf08fe,
  },
  {
    name: 'nf-md-new_box',
    code: 0xf0394,
  },
  {
    name: 'nf-md-newspaper',
    code: 0xf0395,
  },
  {
    name: 'nf-md-newspaper_check',
    code: 0xf1943,
  },
  {
    name: 'nf-md-newspaper_minus',
    code: 0xf0f0c,
  },
  {
    name: 'nf-md-newspaper_plus',
    code: 0xf0f0d,
  },
  {
    name: 'nf-md-newspaper_remove',
    code: 0xf1944,
  },
  {
    name: 'nf-md-newspaper_variant',
    code: 0xf1001,
  },
  {
    name: 'nf-md-newspaper_variant_multiple',
    code: 0xf1002,
  },
  {
    name: 'nf-md-newspaper_variant_multiple_outline',
    code: 0xf1003,
  },
  {
    name: 'nf-md-newspaper_variant_outline',
    code: 0xf1004,
  },
  {
    name: 'nf-md-nfc',
    code: 0xf0396,
  },
  {
    name: 'nf-md-nfc_search_variant',
    code: 0xf0e53,
  },
  {
    name: 'nf-md-nfc_tap',
    code: 0xf0397,
  },
  {
    name: 'nf-md-nfc_variant',
    code: 0xf0398,
  },
  {
    name: 'nf-md-nfc_variant_off',
    code: 0xf0e54,
  },
  {
    name: 'nf-md-ninja',
    code: 0xf0774,
  },
  {
    name: 'nf-md-nintendo_game_boy',
    code: 0xf1393,
  },
  {
    name: 'nf-md-nintendo_switch',
    code: 0xf07e1,
  },
  {
    name: 'nf-md-nintendo_wii',
    code: 0xf05ab,
  },
  {
    name: 'nf-md-nintendo_wiiu',
    code: 0xf072d,
  },
  {
    name: 'nf-md-nix',
    code: 0xf1105,
  },
  {
    name: 'nf-md-nodejs',
    code: 0xf0399,
  },
  {
    name: 'nf-md-noodles',
    code: 0xf117e,
  },
  {
    name: 'nf-md-not_equal',
    code: 0xf098d,
  },
  {
    name: 'nf-md-not_equal_variant',
    code: 0xf098e,
  },
  {
    name: 'nf-md-note',
    code: 0xf039a,
  },
  {
    name: 'nf-md-note_alert',
    code: 0xf177d,
  },
  {
    name: 'nf-md-note_alert_outline',
    code: 0xf177e,
  },
  {
    name: 'nf-md-note_check',
    code: 0xf177f,
  },
  {
    name: 'nf-md-note_check_outline',
    code: 0xf1780,
  },
  {
    name: 'nf-md-note_edit',
    code: 0xf1781,
  },
  {
    name: 'nf-md-note_edit_outline',
    code: 0xf1782,
  },
  {
    name: 'nf-md-note_minus',
    code: 0xf164f,
  },
  {
    name: 'nf-md-note_minus_outline',
    code: 0xf1650,
  },
  {
    name: 'nf-md-note_multiple',
    code: 0xf06b8,
  },
  {
    name: 'nf-md-note_multiple_outline',
    code: 0xf06b9,
  },
  {
    name: 'nf-md-note_off',
    code: 0xf1783,
  },
  {
    name: 'nf-md-note_off_outline',
    code: 0xf1784,
  },
  {
    name: 'nf-md-note_outline',
    code: 0xf039b,
  },
  {
    name: 'nf-md-note_plus',
    code: 0xf039c,
  },
  {
    name: 'nf-md-note_plus_outline',
    code: 0xf039d,
  },
  {
    name: 'nf-md-note_remove',
    code: 0xf1651,
  },
  {
    name: 'nf-md-note_remove_outline',
    code: 0xf1652,
  },
  {
    name: 'nf-md-note_search',
    code: 0xf1653,
  },
  {
    name: 'nf-md-note_search_outline',
    code: 0xf1654,
  },
  {
    name: 'nf-md-note_text',
    code: 0xf039e,
  },
  {
    name: 'nf-md-note_text_outline',
    code: 0xf11d7,
  },
  {
    name: 'nf-md-notebook',
    code: 0xf082e,
  },
  {
    name: 'nf-md-notebook_check',
    code: 0xf14f5,
  },
  {
    name: 'nf-md-notebook_check_outline',
    code: 0xf14f6,
  },
  {
    name: 'nf-md-notebook_edit',
    code: 0xf14e7,
  },
  {
    name: 'nf-md-notebook_edit_outline',
    code: 0xf14e9,
  },
  {
    name: 'nf-md-notebook_heart',
    code: 0xf1a0b,
  },
  {
    name: 'nf-md-notebook_heart_outline',
    code: 0xf1a0c,
  },
  {
    name: 'nf-md-notebook_minus',
    code: 0xf1610,
  },
  {
    name: 'nf-md-notebook_minus_outline',
    code: 0xf1611,
  },
  {
    name: 'nf-md-notebook_multiple',
    code: 0xf0e55,
  },
  {
    name: 'nf-md-notebook_outline',
    code: 0xf0ebf,
  },
  {
    name: 'nf-md-notebook_plus',
    code: 0xf1612,
  },
  {
    name: 'nf-md-notebook_plus_outline',
    code: 0xf1613,
  },
  {
    name: 'nf-md-notebook_remove',
    code: 0xf1614,
  },
  {
    name: 'nf-md-notebook_remove_outline',
    code: 0xf1615,
  },
  {
    name: 'nf-md-notification_clear_all',
    code: 0xf039f,
  },
  {
    name: 'nf-md-npm',
    code: 0xf06f7,
  },
  {
    name: 'nf-md-nuke',
    code: 0xf06a4,
  },
  {
    name: 'nf-md-null',
    code: 0xf07e2,
  },
  {
    name: 'nf-md-numeric',
    code: 0xf03a0,
  },
  {
    name: 'nf-md-numeric_0_box',
    code: 0xf03a1,
  },
  {
    name: 'nf-md-numeric_0_box_multiple',
    code: 0xf0f0e,
  },
  {
    name: 'nf-md-numeric_0_box_multiple_outline',
    code: 0xf03a2,
  },
  {
    name: 'nf-md-numeric_0_box_outline',
    code: 0xf03a3,
  },
  {
    name: 'nf-md-numeric_1',
    code: 0xf0b3a,
  },
  {
    name: 'nf-md-numeric_10',
    code: 0xf0fe9,
  },
  {
    name: 'nf-md-numeric_10_box',
    code: 0xf0f7d,
  },
  {
    name: 'nf-md-numeric_10_box_multiple',
    code: 0xf0fea,
  },
  {
    name: 'nf-md-numeric_10_box_multiple_outline',
    code: 0xf0feb,
  },
  {
    name: 'nf-md-numeric_10_box_outline',
    code: 0xf0f7e,
  },
  {
    name: 'nf-md-numeric_10_circle',
    code: 0xf0fec,
  },
  {
    name: 'nf-md-numeric_10_circle_outline',
    code: 0xf0fed,
  },
  {
    name: 'nf-md-numeric_1_box',
    code: 0xf03a4,
  },
  {
    name: 'nf-md-numeric_1_box_multiple',
    code: 0xf0f0f,
  },
  {
    name: 'nf-md-numeric_1_box_multiple_outline',
    code: 0xf03a5,
  },
  {
    name: 'nf-md-numeric_1_box_outline',
    code: 0xf03a6,
  },
  {
    name: 'nf-md-numeric_1_circle',
    code: 0xf0ca0,
  },
  {
    name: 'nf-md-numeric_1_circle_outline',
    code: 0xf0ca1,
  },
  {
    name: 'nf-md-numeric_2',
    code: 0xf0b3b,
  },
  {
    name: 'nf-md-numeric_2_box',
    code: 0xf03a7,
  },
  {
    name: 'nf-md-numeric_2_box_multiple',
    code: 0xf0f10,
  },
  {
    name: 'nf-md-numeric_2_box_multiple_outline',
    code: 0xf03a8,
  },
  {
    name: 'nf-md-numeric_2_box_outline',
    code: 0xf03a9,
  },
  {
    name: 'nf-md-numeric_2_circle',
    code: 0xf0ca2,
  },
  {
    name: 'nf-md-numeric_2_circle_outline',
    code: 0xf0ca3,
  },
  {
    name: 'nf-md-numeric_3',
    code: 0xf0b3c,
  },
  {
    name: 'nf-md-numeric_3_box',
    code: 0xf03aa,
  },
  {
    name: 'nf-md-numeric_3_box_multiple',
    code: 0xf0f11,
  },
  {
    name: 'nf-md-numeric_3_box_multiple_outline',
    code: 0xf03ab,
  },
  {
    name: 'nf-md-numeric_3_box_outline',
    code: 0xf03ac,
  },
  {
    name: 'nf-md-numeric_3_circle',
    code: 0xf0ca4,
  },
  {
    name: 'nf-md-numeric_3_circle_outline',
    code: 0xf0ca5,
  },
  {
    name: 'nf-md-numeric_4',
    code: 0xf0b3d,
  },
  {
    name: 'nf-md-numeric_4_box',
    code: 0xf03ad,
  },
  {
    name: 'nf-md-numeric_4_box_multiple',
    code: 0xf0f12,
  },
  {
    name: 'nf-md-numeric_4_box_multiple_outline',
    code: 0xf03b2,
  },
  {
    name: 'nf-md-numeric_4_box_outline',
    code: 0xf03ae,
  },
  {
    name: 'nf-md-numeric_4_circle',
    code: 0xf0ca6,
  },
  {
    name: 'nf-md-numeric_4_circle_outline',
    code: 0xf0ca7,
  },
  {
    name: 'nf-md-numeric_5',
    code: 0xf0b3e,
  },
  {
    name: 'nf-md-numeric_5_box',
    code: 0xf03b1,
  },
  {
    name: 'nf-md-numeric_5_box_multiple',
    code: 0xf0f13,
  },
  {
    name: 'nf-md-numeric_5_box_multiple_outline',
    code: 0xf03af,
  },
  {
    name: 'nf-md-numeric_5_box_outline',
    code: 0xf03b0,
  },
  {
    name: 'nf-md-numeric_5_circle',
    code: 0xf0ca8,
  },
  {
    name: 'nf-md-numeric_5_circle_outline',
    code: 0xf0ca9,
  },
  {
    name: 'nf-md-numeric_6',
    code: 0xf0b3f,
  },
  {
    name: 'nf-md-numeric_6_box',
    code: 0xf03b3,
  },
  {
    name: 'nf-md-numeric_6_box_multiple',
    code: 0xf0f14,
  },
  {
    name: 'nf-md-numeric_6_box_multiple_outline',
    code: 0xf03b4,
  },
  {
    name: 'nf-md-numeric_6_box_outline',
    code: 0xf03b5,
  },
  {
    name: 'nf-md-numeric_6_circle',
    code: 0xf0caa,
  },
  {
    name: 'nf-md-numeric_6_circle_outline',
    code: 0xf0cab,
  },
  {
    name: 'nf-md-numeric_7',
    code: 0xf0b40,
  },
  {
    name: 'nf-md-numeric_7_box',
    code: 0xf03b6,
  },
  {
    name: 'nf-md-numeric_7_box_multiple',
    code: 0xf0f15,
  },
  {
    name: 'nf-md-numeric_7_box_multiple_outline',
    code: 0xf03b7,
  },
  {
    name: 'nf-md-numeric_7_box_outline',
    code: 0xf03b8,
  },
  {
    name: 'nf-md-numeric_7_circle',
    code: 0xf0cac,
  },
  {
    name: 'nf-md-numeric_7_circle_outline',
    code: 0xf0cad,
  },
  {
    name: 'nf-md-numeric_8',
    code: 0xf0b41,
  },
  {
    name: 'nf-md-numeric_8_box',
    code: 0xf03b9,
  },
  {
    name: 'nf-md-numeric_8_box_multiple',
    code: 0xf0f16,
  },
  {
    name: 'nf-md-numeric_8_box_multiple_outline',
    code: 0xf03ba,
  },
  {
    name: 'nf-md-numeric_8_box_outline',
    code: 0xf03bb,
  },
  {
    name: 'nf-md-numeric_8_circle',
    code: 0xf0cae,
  },
  {
    name: 'nf-md-numeric_8_circle_outline',
    code: 0xf0caf,
  },
  {
    name: 'nf-md-numeric_9',
    code: 0xf0b42,
  },
  {
    name: 'nf-md-numeric_9_box',
    code: 0xf03bc,
  },
  {
    name: 'nf-md-numeric_9_box_multiple',
    code: 0xf0f17,
  },
  {
    name: 'nf-md-numeric_9_box_multiple_outline',
    code: 0xf03bd,
  },
  {
    name: 'nf-md-numeric_9_box_outline',
    code: 0xf03be,
  },
  {
    name: 'nf-md-numeric_9_circle',
    code: 0xf0cb0,
  },
  {
    name: 'nf-md-numeric_9_circle_outline',
    code: 0xf0cb1,
  },
  {
    name: 'nf-md-numeric_9_plus',
    code: 0xf0fee,
  },
  {
    name: 'nf-md-numeric_9_plus_box',
    code: 0xf03bf,
  },
  {
    name: 'nf-md-numeric_9_plus_box_multiple',
    code: 0xf0f18,
  },
  {
    name: 'nf-md-numeric_9_plus_box_multiple_outline',
    code: 0xf03c0,
  },
  {
    name: 'nf-md-numeric_9_plus_box_outline',
    code: 0xf03c1,
  },
  {
    name: 'nf-md-numeric_9_plus_circle',
    code: 0xf0cb2,
  },
  {
    name: 'nf-md-numeric_9_plus_circle_outline',
    code: 0xf0cb3,
  },
  {
    name: 'nf-md-numeric_negative_1',
    code: 0xf1052,
  },
  {
    name: 'nf-md-numeric_off',
    code: 0xf19d3,
  },
  {
    name: 'nf-md-numeric_positive_1',
    code: 0xf15cb,
  },
  {
    name: 'nf-md-nut',
    code: 0xf06f8,
  },
  {
    name: 'nf-md-nutrition',
    code: 0xf03c2,
  },
  {
    name: 'nf-md-nuxt',
    code: 0xf1106,
  },
  {
    name: 'nf-md-oar',
    code: 0xf067c,
  },
  {
    name: 'nf-md-ocarina',
    code: 0xf0de0,
  },
  {
    name: 'nf-md-oci',
    code: 0xf12e9,
  },
  {
    name: 'nf-md-ocr',
    code: 0xf113a,
  },
  {
    name: 'nf-md-octagon',
    code: 0xf03c3,
  },
  {
    name: 'nf-md-octagon_outline',
    code: 0xf03c4,
  },
  {
    name: 'nf-md-octagram',
    code: 0xf06f9,
  },
  {
    name: 'nf-md-octagram_outline',
    code: 0xf0775,
  },
  {
    name: 'nf-md-octahedron',
    code: 0xf1950,
  },
  {
    name: 'nf-md-octahedron_off',
    code: 0xf1951,
  },
  {
    name: 'nf-md-odnoklassniki',
    code: 0xf03c5,
  },
  {
    name: 'nf-md-offer',
    code: 0xf121b,
  },
  {
    name: 'nf-md-office_building',
    code: 0xf0991,
  },
  {
    name: 'nf-md-office_building_cog',
    code: 0xf1949,
  },
  {
    name: 'nf-md-office_building_cog_outline',
    code: 0xf194a,
  },
  {
    name: 'nf-md-office_building_marker',
    code: 0xf1520,
  },
  {
    name: 'nf-md-office_building_marker_outline',
    code: 0xf1521,
  },
  {
    name: 'nf-md-office_building_outline',
    code: 0xf151f,
  },
  {
    name: 'nf-md-oil',
    code: 0xf03c7,
  },
  {
    name: 'nf-md-oil_lamp',
    code: 0xf0f19,
  },
  {
    name: 'nf-md-oil_level',
    code: 0xf1053,
  },
  {
    name: 'nf-md-oil_temperature',
    code: 0xf0ff8,
  },
  {
    name: 'nf-md-om',
    code: 0xf0973,
  },
  {
    name: 'nf-md-omega',
    code: 0xf03c9,
  },
  {
    name: 'nf-md-one_up',
    code: 0xf0bad,
  },
  {
    name: 'nf-md-onepassword',
    code: 0xf0881,
  },
  {
    name: 'nf-md-opacity',
    code: 0xf05cc,
  },
  {
    name: 'nf-md-open_in_app',
    code: 0xf03cb,
  },
  {
    name: 'nf-md-open_in_new',
    code: 0xf03cc,
  },
  {
    name: 'nf-md-open_source_initiative',
    code: 0xf0bae,
  },
  {
    name: 'nf-md-openid',
    code: 0xf03cd,
  },
  {
    name: 'nf-md-opera',
    code: 0xf03ce,
  },
  {
    name: 'nf-md-orbit',
    code: 0xf0018,
  },
  {
    name: 'nf-md-orbit_variant',
    code: 0xf15db,
  },
  {
    name: 'nf-md-order_alphabetical_ascending',
    code: 0xf020d,
  },
  {
    name: 'nf-md-order_alphabetical_descending',
    code: 0xf0d07,
  },
  {
    name: 'nf-md-order_bool_ascending',
    code: 0xf02be,
  },
  {
    name: 'nf-md-order_bool_ascending_variant',
    code: 0xf098f,
  },
  {
    name: 'nf-md-order_bool_descending',
    code: 0xf1384,
  },
  {
    name: 'nf-md-order_bool_descending_variant',
    code: 0xf0990,
  },
  {
    name: 'nf-md-order_numeric_ascending',
    code: 0xf0545,
  },
  {
    name: 'nf-md-order_numeric_descending',
    code: 0xf0546,
  },
  {
    name: 'nf-md-origin',
    code: 0xf0b43,
  },
  {
    name: 'nf-md-ornament',
    code: 0xf03cf,
  },
  {
    name: 'nf-md-ornament_variant',
    code: 0xf03d0,
  },
  {
    name: 'nf-md-outdoor_lamp',
    code: 0xf1054,
  },
  {
    name: 'nf-md-overscan',
    code: 0xf1005,
  },
  {
    name: 'nf-md-owl',
    code: 0xf03d2,
  },
  {
    name: 'nf-md-pac_man',
    code: 0xf0baf,
  },
  {
    name: 'nf-md-package',
    code: 0xf03d3,
  },
  {
    name: 'nf-md-package_down',
    code: 0xf03d4,
  },
  {
    name: 'nf-md-package_up',
    code: 0xf03d5,
  },
  {
    name: 'nf-md-package_variant',
    code: 0xf03d6,
  },
  {
    name: 'nf-md-package_variant_closed',
    code: 0xf03d7,
  },
  {
    name: 'nf-md-package_variant_closed_minus',
    code: 0xf19d4,
  },
  {
    name: 'nf-md-package_variant_closed_plus',
    code: 0xf19d5,
  },
  {
    name: 'nf-md-package_variant_closed_remove',
    code: 0xf19d6,
  },
  {
    name: 'nf-md-package_variant_minus',
    code: 0xf19d7,
  },
  {
    name: 'nf-md-package_variant_plus',
    code: 0xf19d8,
  },
  {
    name: 'nf-md-package_variant_remove',
    code: 0xf19d9,
  },
  {
    name: 'nf-md-page_first',
    code: 0xf0600,
  },
  {
    name: 'nf-md-page_last',
    code: 0xf0601,
  },
  {
    name: 'nf-md-page_layout_body',
    code: 0xf06fa,
  },
  {
    name: 'nf-md-page_layout_footer',
    code: 0xf06fb,
  },
  {
    name: 'nf-md-page_layout_header',
    code: 0xf06fc,
  },
  {
    name: 'nf-md-page_layout_header_footer',
    code: 0xf0f7f,
  },
  {
    name: 'nf-md-page_layout_sidebar_left',
    code: 0xf06fd,
  },
  {
    name: 'nf-md-page_layout_sidebar_right',
    code: 0xf06fe,
  },
  {
    name: 'nf-md-page_next',
    code: 0xf0bb0,
  },
  {
    name: 'nf-md-page_next_outline',
    code: 0xf0bb1,
  },
  {
    name: 'nf-md-page_previous',
    code: 0xf0bb2,
  },
  {
    name: 'nf-md-page_previous_outline',
    code: 0xf0bb3,
  },
  {
    name: 'nf-md-pail',
    code: 0xf1417,
  },
  {
    name: 'nf-md-pail_minus',
    code: 0xf1437,
  },
  {
    name: 'nf-md-pail_minus_outline',
    code: 0xf143c,
  },
  {
    name: 'nf-md-pail_off',
    code: 0xf1439,
  },
  {
    name: 'nf-md-pail_off_outline',
    code: 0xf143e,
  },
  {
    name: 'nf-md-pail_outline',
    code: 0xf143a,
  },
  {
    name: 'nf-md-pail_plus',
    code: 0xf1436,
  },
  {
    name: 'nf-md-pail_plus_outline',
    code: 0xf143b,
  },
  {
    name: 'nf-md-pail_remove',
    code: 0xf1438,
  },
  {
    name: 'nf-md-pail_remove_outline',
    code: 0xf143d,
  },
  {
    name: 'nf-md-palette',
    code: 0xf03d8,
  },
  {
    name: 'nf-md-palette_advanced',
    code: 0xf03d9,
  },
  {
    name: 'nf-md-palette_outline',
    code: 0xf0e0c,
  },
  {
    name: 'nf-md-palette_swatch',
    code: 0xf08b5,
  },
  {
    name: 'nf-md-palette_swatch_outline',
    code: 0xf135c,
  },
  {
    name: 'nf-md-palette_swatch_variant',
    code: 0xf195a,
  },
  {
    name: 'nf-md-palm_tree',
    code: 0xf1055,
  },
  {
    name: 'nf-md-pan',
    code: 0xf0bb4,
  },
  {
    name: 'nf-md-pan_bottom_left',
    code: 0xf0bb5,
  },
  {
    name: 'nf-md-pan_bottom_right',
    code: 0xf0bb6,
  },
  {
    name: 'nf-md-pan_down',
    code: 0xf0bb7,
  },
  {
    name: 'nf-md-pan_horizontal',
    code: 0xf0bb8,
  },
  {
    name: 'nf-md-pan_left',
    code: 0xf0bb9,
  },
  {
    name: 'nf-md-pan_right',
    code: 0xf0bba,
  },
  {
    name: 'nf-md-pan_top_left',
    code: 0xf0bbb,
  },
  {
    name: 'nf-md-pan_top_right',
    code: 0xf0bbc,
  },
  {
    name: 'nf-md-pan_up',
    code: 0xf0bbd,
  },
  {
    name: 'nf-md-pan_vertical',
    code: 0xf0bbe,
  },
  {
    name: 'nf-md-panda',
    code: 0xf03da,
  },
  {
    name: 'nf-md-pandora',
    code: 0xf03db,
  },
  {
    name: 'nf-md-panorama',
    code: 0xf03dc,
  },
  {
    name: 'nf-md-panorama_fisheye',
    code: 0xf03dd,
  },
  {
    name: 'nf-md-panorama_horizontal',
    code: 0xf1928,
  },
  {
    name: 'nf-md-panorama_horizontal_outline',
    code: 0xf03de,
  },
  {
    name: 'nf-md-panorama_outline',
    code: 0xf198c,
  },
  {
    name: 'nf-md-panorama_sphere',
    code: 0xf198d,
  },
  {
    name: 'nf-md-panorama_sphere_outline',
    code: 0xf198e,
  },
  {
    name: 'nf-md-panorama_variant',
    code: 0xf198f,
  },
  {
    name: 'nf-md-panorama_variant_outline',
    code: 0xf1990,
  },
  {
    name: 'nf-md-panorama_vertical',
    code: 0xf1929,
  },
  {
    name: 'nf-md-panorama_vertical_outline',
    code: 0xf03df,
  },
  {
    name: 'nf-md-panorama_wide_angle',
    code: 0xf195f,
  },
  {
    name: 'nf-md-panorama_wide_angle_outline',
    code: 0xf03e0,
  },
  {
    name: 'nf-md-paper_cut_vertical',
    code: 0xf03e1,
  },
  {
    name: 'nf-md-paper_roll',
    code: 0xf1157,
  },
  {
    name: 'nf-md-paper_roll_outline',
    code: 0xf1158,
  },
  {
    name: 'nf-md-paperclip',
    code: 0xf03e2,
  },
  {
    name: 'nf-md-paperclip_check',
    code: 0xf1ac6,
  },
  {
    name: 'nf-md-paperclip_lock',
    code: 0xf19da,
  },
  {
    name: 'nf-md-paperclip_minus',
    code: 0xf1ac7,
  },
  {
    name: 'nf-md-paperclip_off',
    code: 0xf1ac8,
  },
  {
    name: 'nf-md-paperclip_plus',
    code: 0xf1ac9,
  },
  {
    name: 'nf-md-paperclip_remove',
    code: 0xf1aca,
  },
  {
    name: 'nf-md-parachute',
    code: 0xf0cb4,
  },
  {
    name: 'nf-md-parachute_outline',
    code: 0xf0cb5,
  },
  {
    name: 'nf-md-paragliding',
    code: 0xf1745,
  },
  {
    name: 'nf-md-parking',
    code: 0xf03e3,
  },
  {
    name: 'nf-md-party_popper',
    code: 0xf1056,
  },
  {
    name: 'nf-md-passport',
    code: 0xf07e3,
  },
  {
    name: 'nf-md-passport_biometric',
    code: 0xf0de1,
  },
  {
    name: 'nf-md-pasta',
    code: 0xf1160,
  },
  {
    name: 'nf-md-patio_heater',
    code: 0xf0f80,
  },
  {
    name: 'nf-md-patreon',
    code: 0xf0882,
  },
  {
    name: 'nf-md-pause',
    code: 0xf03e4,
  },
  {
    name: 'nf-md-pause_circle',
    code: 0xf03e5,
  },
  {
    name: 'nf-md-pause_circle_outline',
    code: 0xf03e6,
  },
  {
    name: 'nf-md-pause_octagon',
    code: 0xf03e7,
  },
  {
    name: 'nf-md-pause_octagon_outline',
    code: 0xf03e8,
  },
  {
    name: 'nf-md-paw',
    code: 0xf03e9,
  },
  {
    name: 'nf-md-paw_off',
    code: 0xf0657,
  },
  {
    name: 'nf-md-paw_off_outline',
    code: 0xf1676,
  },
  {
    name: 'nf-md-paw_outline',
    code: 0xf1675,
  },
  {
    name: 'nf-md-peace',
    code: 0xf0884,
  },
  {
    name: 'nf-md-peanut',
    code: 0xf0ffc,
  },
  {
    name: 'nf-md-peanut_off',
    code: 0xf0ffd,
  },
  {
    name: 'nf-md-peanut_off_outline',
    code: 0xf0fff,
  },
  {
    name: 'nf-md-peanut_outline',
    code: 0xf0ffe,
  },
  {
    name: 'nf-md-pen',
    code: 0xf03ea,
  },
  {
    name: 'nf-md-pen_lock',
    code: 0xf0de2,
  },
  {
    name: 'nf-md-pen_minus',
    code: 0xf0de3,
  },
  {
    name: 'nf-md-pen_off',
    code: 0xf0de4,
  },
  {
    name: 'nf-md-pen_plus',
    code: 0xf0de5,
  },
  {
    name: 'nf-md-pen_remove',
    code: 0xf0de6,
  },
  {
    name: 'nf-md-pencil',
    code: 0xf03eb,
  },
  {
    name: 'nf-md-pencil_box',
    code: 0xf03ec,
  },
  {
    name: 'nf-md-pencil_box_multiple',
    code: 0xf1144,
  },
  {
    name: 'nf-md-pencil_box_multiple_outline',
    code: 0xf1145,
  },
  {
    name: 'nf-md-pencil_box_outline',
    code: 0xf03ed,
  },
  {
    name: 'nf-md-pencil_circle',
    code: 0xf06ff,
  },
  {
    name: 'nf-md-pencil_circle_outline',
    code: 0xf0776,
  },
  {
    name: 'nf-md-pencil_lock',
    code: 0xf03ee,
  },
  {
    name: 'nf-md-pencil_lock_outline',
    code: 0xf0de7,
  },
  {
    name: 'nf-md-pencil_minus',
    code: 0xf0de8,
  },
  {
    name: 'nf-md-pencil_minus_outline',
    code: 0xf0de9,
  },
  {
    name: 'nf-md-pencil_off',
    code: 0xf03ef,
  },
  {
    name: 'nf-md-pencil_off_outline',
    code: 0xf0dea,
  },
  {
    name: 'nf-md-pencil_outline',
    code: 0xf0cb6,
  },
  {
    name: 'nf-md-pencil_plus',
    code: 0xf0deb,
  },
  {
    name: 'nf-md-pencil_plus_outline',
    code: 0xf0dec,
  },
  {
    name: 'nf-md-pencil_remove',
    code: 0xf0ded,
  },
  {
    name: 'nf-md-pencil_remove_outline',
    code: 0xf0dee,
  },
  {
    name: 'nf-md-pencil_ruler',
    code: 0xf1353,
  },
  {
    name: 'nf-md-penguin',
    code: 0xf0ec0,
  },
  {
    name: 'nf-md-pentagon',
    code: 0xf0701,
  },
  {
    name: 'nf-md-pentagon_outline',
    code: 0xf0700,
  },
  {
    name: 'nf-md-pentagram',
    code: 0xf1667,
  },
  {
    name: 'nf-md-percent',
    code: 0xf03f0,
  },
  {
    name: 'nf-md-percent_box',
    code: 0xf1a02,
  },
  {
    name: 'nf-md-percent_box_outline',
    code: 0xf1a03,
  },
  {
    name: 'nf-md-percent_circle',
    code: 0xf1a04,
  },
  {
    name: 'nf-md-percent_circle_outline',
    code: 0xf1a05,
  },
  {
    name: 'nf-md-percent_outline',
    code: 0xf1278,
  },
  {
    name: 'nf-md-periodic_table',
    code: 0xf08b6,
  },
  {
    name: 'nf-md-perspective_less',
    code: 0xf0d23,
  },
  {
    name: 'nf-md-perspective_more',
    code: 0xf0d24,
  },
  {
    name: 'nf-md-ph',
    code: 0xf17c5,
  },
  {
    name: 'nf-md-phone',
    code: 0xf03f2,
  },
  {
    name: 'nf-md-phone_alert',
    code: 0xf0f1a,
  },
  {
    name: 'nf-md-phone_alert_outline',
    code: 0xf118e,
  },
  {
    name: 'nf-md-phone_bluetooth',
    code: 0xf03f3,
  },
  {
    name: 'nf-md-phone_bluetooth_outline',
    code: 0xf118f,
  },
  {
    name: 'nf-md-phone_cancel',
    code: 0xf10bc,
  },
  {
    name: 'nf-md-phone_cancel_outline',
    code: 0xf1190,
  },
  {
    name: 'nf-md-phone_check',
    code: 0xf11a9,
  },
  {
    name: 'nf-md-phone_check_outline',
    code: 0xf11aa,
  },
  {
    name: 'nf-md-phone_classic',
    code: 0xf0602,
  },
  {
    name: 'nf-md-phone_classic_off',
    code: 0xf1279,
  },
  {
    name: 'nf-md-phone_clock',
    code: 0xf19db,
  },
  {
    name: 'nf-md-phone_dial',
    code: 0xf1559,
  },
  {
    name: 'nf-md-phone_dial_outline',
    code: 0xf155a,
  },
  {
    name: 'nf-md-phone_forward',
    code: 0xf03f4,
  },
  {
    name: 'nf-md-phone_forward_outline',
    code: 0xf1191,
  },
  {
    name: 'nf-md-phone_hangup',
    code: 0xf03f5,
  },
  {
    name: 'nf-md-phone_hangup_outline',
    code: 0xf1192,
  },
  {
    name: 'nf-md-phone_in_talk',
    code: 0xf03f6,
  },
  {
    name: 'nf-md-phone_in_talk_outline',
    code: 0xf1182,
  },
  {
    name: 'nf-md-phone_incoming',
    code: 0xf03f7,
  },
  {
    name: 'nf-md-phone_incoming_outline',
    code: 0xf1193,
  },
  {
    name: 'nf-md-phone_lock',
    code: 0xf03f8,
  },
  {
    name: 'nf-md-phone_lock_outline',
    code: 0xf1194,
  },
  {
    name: 'nf-md-phone_log',
    code: 0xf03f9,
  },
  {
    name: 'nf-md-phone_log_outline',
    code: 0xf1195,
  },
  {
    name: 'nf-md-phone_message',
    code: 0xf1196,
  },
  {
    name: 'nf-md-phone_message_outline',
    code: 0xf1197,
  },
  {
    name: 'nf-md-phone_minus',
    code: 0xf0658,
  },
  {
    name: 'nf-md-phone_minus_outline',
    code: 0xf1198,
  },
  {
    name: 'nf-md-phone_missed',
    code: 0xf03fa,
  },
  {
    name: 'nf-md-phone_missed_outline',
    code: 0xf11a5,
  },
  {
    name: 'nf-md-phone_off',
    code: 0xf0def,
  },
  {
    name: 'nf-md-phone_off_outline',
    code: 0xf11a6,
  },
  {
    name: 'nf-md-phone_outgoing',
    code: 0xf03fb,
  },
  {
    name: 'nf-md-phone_outgoing_outline',
    code: 0xf1199,
  },
  {
    name: 'nf-md-phone_outline',
    code: 0xf0df0,
  },
  {
    name: 'nf-md-phone_paused',
    code: 0xf03fc,
  },
  {
    name: 'nf-md-phone_paused_outline',
    code: 0xf119a,
  },
  {
    name: 'nf-md-phone_plus',
    code: 0xf0659,
  },
  {
    name: 'nf-md-phone_plus_outline',
    code: 0xf119b,
  },
  {
    name: 'nf-md-phone_refresh',
    code: 0xf1993,
  },
  {
    name: 'nf-md-phone_refresh_outline',
    code: 0xf1994,
  },
  {
    name: 'nf-md-phone_remove',
    code: 0xf152f,
  },
  {
    name: 'nf-md-phone_remove_outline',
    code: 0xf1530,
  },
  {
    name: 'nf-md-phone_return',
    code: 0xf082f,
  },
  {
    name: 'nf-md-phone_return_outline',
    code: 0xf119c,
  },
  {
    name: 'nf-md-phone_ring',
    code: 0xf11ab,
  },
  {
    name: 'nf-md-phone_ring_outline',
    code: 0xf11ac,
  },
  {
    name: 'nf-md-phone_rotate_landscape',
    code: 0xf0885,
  },
  {
    name: 'nf-md-phone_rotate_portrait',
    code: 0xf0886,
  },
  {
    name: 'nf-md-phone_settings',
    code: 0xf03fd,
  },
  {
    name: 'nf-md-phone_settings_outline',
    code: 0xf119d,
  },
  {
    name: 'nf-md-phone_sync',
    code: 0xf1995,
  },
  {
    name: 'nf-md-phone_sync_outline',
    code: 0xf1996,
  },
  {
    name: 'nf-md-phone_voip',
    code: 0xf03fe,
  },
  {
    name: 'nf-md-pi',
    code: 0xf03ff,
  },
  {
    name: 'nf-md-pi_box',
    code: 0xf0400,
  },
  {
    name: 'nf-md-pi_hole',
    code: 0xf0df1,
  },
  {
    name: 'nf-md-piano',
    code: 0xf067d,
  },
  {
    name: 'nf-md-piano_off',
    code: 0xf0698,
  },
  {
    name: 'nf-md-pickaxe',
    code: 0xf08b7,
  },
  {
    name: 'nf-md-picture_in_picture_bottom_right',
    code: 0xf0e57,
  },
  {
    name: 'nf-md-picture_in_picture_bottom_right_outline',
    code: 0xf0e58,
  },
  {
    name: 'nf-md-picture_in_picture_top_right',
    code: 0xf0e59,
  },
  {
    name: 'nf-md-picture_in_picture_top_right_outline',
    code: 0xf0e5a,
  },
  {
    name: 'nf-md-pier',
    code: 0xf0887,
  },
  {
    name: 'nf-md-pier_crane',
    code: 0xf0888,
  },
  {
    name: 'nf-md-pig',
    code: 0xf0401,
  },
  {
    name: 'nf-md-pig_variant',
    code: 0xf1006,
  },
  {
    name: 'nf-md-pig_variant_outline',
    code: 0xf1678,
  },
  {
    name: 'nf-md-piggy_bank',
    code: 0xf1007,
  },
  {
    name: 'nf-md-piggy_bank_outline',
    code: 0xf1679,
  },
  {
    name: 'nf-md-pill',
    code: 0xf0402,
  },
  {
    name: 'nf-md-pill_off',
    code: 0xf1a5c,
  },
  {
    name: 'nf-md-pillar',
    code: 0xf0702,
  },
  {
    name: 'nf-md-pin',
    code: 0xf0403,
  },
  {
    name: 'nf-md-pin_off',
    code: 0xf0404,
  },
  {
    name: 'nf-md-pin_off_outline',
    code: 0xf0930,
  },
  {
    name: 'nf-md-pin_outline',
    code: 0xf0931,
  },
  {
    name: 'nf-md-pine_tree',
    code: 0xf0405,
  },
  {
    name: 'nf-md-pine_tree_box',
    code: 0xf0406,
  },
  {
    name: 'nf-md-pine_tree_fire',
    code: 0xf141a,
  },
  {
    name: 'nf-md-pinterest',
    code: 0xf0407,
  },
  {
    name: 'nf-md-pinwheel',
    code: 0xf0ad5,
  },
  {
    name: 'nf-md-pinwheel_outline',
    code: 0xf0ad6,
  },
  {
    name: 'nf-md-pipe',
    code: 0xf07e5,
  },
  {
    name: 'nf-md-pipe_disconnected',
    code: 0xf07e6,
  },
  {
    name: 'nf-md-pipe_leak',
    code: 0xf0889,
  },
  {
    name: 'nf-md-pipe_valve',
    code: 0xf184d,
  },
  {
    name: 'nf-md-pipe_wrench',
    code: 0xf1354,
  },
  {
    name: 'nf-md-pirate',
    code: 0xf0a08,
  },
  {
    name: 'nf-md-pistol',
    code: 0xf0703,
  },
  {
    name: 'nf-md-piston',
    code: 0xf088a,
  },
  {
    name: 'nf-md-pitchfork',
    code: 0xf1553,
  },
  {
    name: 'nf-md-pizza',
    code: 0xf0409,
  },
  {
    name: 'nf-md-play',
    code: 0xf040a,
  },
  {
    name: 'nf-md-play_box',
    code: 0xf127a,
  },
  {
    name: 'nf-md-play_box_lock',
    code: 0xf1a16,
  },
  {
    name: 'nf-md-play_box_lock_open',
    code: 0xf1a17,
  },
  {
    name: 'nf-md-play_box_lock_open_outline',
    code: 0xf1a18,
  },
  {
    name: 'nf-md-play_box_lock_outline',
    code: 0xf1a19,
  },
  {
    name: 'nf-md-play_box_multiple',
    code: 0xf0d19,
  },
  {
    name: 'nf-md-play_box_multiple_outline',
    code: 0xf13e6,
  },
  {
    name: 'nf-md-play_box_outline',
    code: 0xf040b,
  },
  {
    name: 'nf-md-play_circle',
    code: 0xf040c,
  },
  {
    name: 'nf-md-play_circle_outline',
    code: 0xf040d,
  },
  {
    name: 'nf-md-play_network',
    code: 0xf088b,
  },
  {
    name: 'nf-md-play_network_outline',
    code: 0xf0cb7,
  },
  {
    name: 'nf-md-play_outline',
    code: 0xf0f1b,
  },
  {
    name: 'nf-md-play_pause',
    code: 0xf040e,
  },
  {
    name: 'nf-md-play_protected_content',
    code: 0xf040f,
  },
  {
    name: 'nf-md-play_speed',
    code: 0xf08ff,
  },
  {
    name: 'nf-md-playlist_check',
    code: 0xf05c7,
  },
  {
    name: 'nf-md-playlist_edit',
    code: 0xf0900,
  },
  {
    name: 'nf-md-playlist_minus',
    code: 0xf0410,
  },
  {
    name: 'nf-md-playlist_music',
    code: 0xf0cb8,
  },
  {
    name: 'nf-md-playlist_music_outline',
    code: 0xf0cb9,
  },
  {
    name: 'nf-md-playlist_play',
    code: 0xf0411,
  },
  {
    name: 'nf-md-playlist_plus',
    code: 0xf0412,
  },
  {
    name: 'nf-md-playlist_remove',
    code: 0xf0413,
  },
  {
    name: 'nf-md-playlist_star',
    code: 0xf0df2,
  },
  {
    name: 'nf-md-plex',
    code: 0xf06ba,
  },
  {
    name: 'nf-md-pliers',
    code: 0xf19a4,
  },
  {
    name: 'nf-md-plus',
    code: 0xf0415,
  },
  {
    name: 'nf-md-plus_box',
    code: 0xf0416,
  },
  {
    name: 'nf-md-plus_box_multiple',
    code: 0xf0334,
  },
  {
    name: 'nf-md-plus_box_multiple_outline',
    code: 0xf1143,
  },
  {
    name: 'nf-md-plus_box_outline',
    code: 0xf0704,
  },
  {
    name: 'nf-md-plus_circle',
    code: 0xf0417,
  },
  {
    name: 'nf-md-plus_circle_multiple',
    code: 0xf034c,
  },
  {
    name: 'nf-md-plus_circle_multiple_outline',
    code: 0xf0418,
  },
  {
    name: 'nf-md-plus_circle_outline',
    code: 0xf0419,
  },
  {
    name: 'nf-md-plus_lock',
    code: 0xf1a5d,
  },
  {
    name: 'nf-md-plus_lock_open',
    code: 0xf1a5e,
  },
  {
    name: 'nf-md-plus_minus',
    code: 0xf0992,
  },
  {
    name: 'nf-md-plus_minus_box',
    code: 0xf0993,
  },
  {
    name: 'nf-md-plus_minus_variant',
    code: 0xf14c9,
  },
  {
    name: 'nf-md-plus_network',
    code: 0xf041a,
  },
  {
    name: 'nf-md-plus_network_outline',
    code: 0xf0cba,
  },
  {
    name: 'nf-md-plus_outline',
    code: 0xf0705,
  },
  {
    name: 'nf-md-plus_thick',
    code: 0xf11ec,
  },
  {
    name: 'nf-md-podcast',
    code: 0xf0994,
  },
  {
    name: 'nf-md-podium',
    code: 0xf0d25,
  },
  {
    name: 'nf-md-podium_bronze',
    code: 0xf0d26,
  },
  {
    name: 'nf-md-podium_gold',
    code: 0xf0d27,
  },
  {
    name: 'nf-md-podium_silver',
    code: 0xf0d28,
  },
  {
    name: 'nf-md-point_of_sale',
    code: 0xf0d92,
  },
  {
    name: 'nf-md-pokeball',
    code: 0xf041d,
  },
  {
    name: 'nf-md-pokemon_go',
    code: 0xf0a09,
  },
  {
    name: 'nf-md-poker_chip',
    code: 0xf0830,
  },
  {
    name: 'nf-md-polaroid',
    code: 0xf041e,
  },
  {
    name: 'nf-md-police_badge',
    code: 0xf1167,
  },
  {
    name: 'nf-md-police_badge_outline',
    code: 0xf1168,
  },
  {
    name: 'nf-md-police_station',
    code: 0xf1839,
  },
  {
    name: 'nf-md-poll',
    code: 0xf041f,
  },
  {
    name: 'nf-md-polo',
    code: 0xf14c3,
  },
  {
    name: 'nf-md-polymer',
    code: 0xf0421,
  },
  {
    name: 'nf-md-pool',
    code: 0xf0606,
  },
  {
    name: 'nf-md-pool_thermometer',
    code: 0xf1a5f,
  },
  {
    name: 'nf-md-popcorn',
    code: 0xf0422,
  },
  {
    name: 'nf-md-post',
    code: 0xf1008,
  },
  {
    name: 'nf-md-post_lamp',
    code: 0xf1a60,
  },
  {
    name: 'nf-md-post_outline',
    code: 0xf1009,
  },
  {
    name: 'nf-md-postage_stamp',
    code: 0xf0cbb,
  },
  {
    name: 'nf-md-pot',
    code: 0xf02e5,
  },
  {
    name: 'nf-md-pot_mix',
    code: 0xf065b,
  },
  {
    name: 'nf-md-pot_mix_outline',
    code: 0xf0677,
  },
  {
    name: 'nf-md-pot_outline',
    code: 0xf02ff,
  },
  {
    name: 'nf-md-pot_steam',
    code: 0xf065a,
  },
  {
    name: 'nf-md-pot_steam_outline',
    code: 0xf0326,
  },
  {
    name: 'nf-md-pound',
    code: 0xf0423,
  },
  {
    name: 'nf-md-pound_box',
    code: 0xf0424,
  },
  {
    name: 'nf-md-pound_box_outline',
    code: 0xf117f,
  },
  {
    name: 'nf-md-power',
    code: 0xf0425,
  },
  {
    name: 'nf-md-power_cycle',
    code: 0xf0901,
  },
  {
    name: 'nf-md-power_off',
    code: 0xf0902,
  },
  {
    name: 'nf-md-power_on',
    code: 0xf0903,
  },
  {
    name: 'nf-md-power_plug',
    code: 0xf06a5,
  },
  {
    name: 'nf-md-power_plug_off',
    code: 0xf06a6,
  },
  {
    name: 'nf-md-power_plug_off_outline',
    code: 0xf1424,
  },
  {
    name: 'nf-md-power_plug_outline',
    code: 0xf1425,
  },
  {
    name: 'nf-md-power_settings',
    code: 0xf0426,
  },
  {
    name: 'nf-md-power_sleep',
    code: 0xf0904,
  },
  {
    name: 'nf-md-power_socket',
    code: 0xf0427,
  },
  {
    name: 'nf-md-power_socket_au',
    code: 0xf0905,
  },
  {
    name: 'nf-md-power_socket_ch',
    code: 0xf0fb3,
  },
  {
    name: 'nf-md-power_socket_de',
    code: 0xf1107,
  },
  {
    name: 'nf-md-power_socket_eu',
    code: 0xf07e7,
  },
  {
    name: 'nf-md-power_socket_fr',
    code: 0xf1108,
  },
  {
    name: 'nf-md-power_socket_it',
    code: 0xf14ff,
  },
  {
    name: 'nf-md-power_socket_jp',
    code: 0xf1109,
  },
  {
    name: 'nf-md-power_socket_uk',
    code: 0xf07e8,
  },
  {
    name: 'nf-md-power_socket_us',
    code: 0xf07e9,
  },
  {
    name: 'nf-md-power_standby',
    code: 0xf0906,
  },
  {
    name: 'nf-md-powershell',
    code: 0xf0a0a,
  },
  {
    name: 'nf-md-prescription',
    code: 0xf0706,
  },
  {
    name: 'nf-md-presentation',
    code: 0xf0428,
  },
  {
    name: 'nf-md-presentation_play',
    code: 0xf0429,
  },
  {
    name: 'nf-md-pretzel',
    code: 0xf1562,
  },
  {
    name: 'nf-md-printer',
    code: 0xf042a,
  },
  {
    name: 'nf-md-printer_3d',
    code: 0xf042b,
  },
  {
    name: 'nf-md-printer_3d_nozzle',
    code: 0xf0e5b,
  },
  {
    name: 'nf-md-printer_3d_nozzle_alert',
    code: 0xf11c0,
  },
  {
    name: 'nf-md-printer_3d_nozzle_alert_outline',
    code: 0xf11c1,
  },
  {
    name: 'nf-md-printer_3d_nozzle_heat',
    code: 0xf18b8,
  },
  {
    name: 'nf-md-printer_3d_nozzle_heat_outline',
    code: 0xf18b9,
  },
  {
    name: 'nf-md-printer_3d_nozzle_outline',
    code: 0xf0e5c,
  },
  {
    name: 'nf-md-printer_alert',
    code: 0xf042c,
  },
  {
    name: 'nf-md-printer_check',
    code: 0xf1146,
  },
  {
    name: 'nf-md-printer_eye',
    code: 0xf1458,
  },
  {
    name: 'nf-md-printer_off',
    code: 0xf0e5d,
  },
  {
    name: 'nf-md-printer_off_outline',
    code: 0xf1785,
  },
  {
    name: 'nf-md-printer_outline',
    code: 0xf1786,
  },
  {
    name: 'nf-md-printer_pos',
    code: 0xf1057,
  },
  {
    name: 'nf-md-printer_search',
    code: 0xf1457,
  },
  {
    name: 'nf-md-printer_settings',
    code: 0xf0707,
  },
  {
    name: 'nf-md-printer_wireless',
    code: 0xf0a0b,
  },
  {
    name: 'nf-md-priority_high',
    code: 0xf0603,
  },
  {
    name: 'nf-md-priority_low',
    code: 0xf0604,
  },
  {
    name: 'nf-md-professional_hexagon',
    code: 0xf042d,
  },
  {
    name: 'nf-md-progress_alert',
    code: 0xf0cbc,
  },
  {
    name: 'nf-md-progress_check',
    code: 0xf0995,
  },
  {
    name: 'nf-md-progress_clock',
    code: 0xf0996,
  },
  {
    name: 'nf-md-progress_close',
    code: 0xf110a,
  },
  {
    name: 'nf-md-progress_download',
    code: 0xf0997,
  },
  {
    name: 'nf-md-progress_pencil',
    code: 0xf1787,
  },
  {
    name: 'nf-md-progress_question',
    code: 0xf1522,
  },
  {
    name: 'nf-md-progress_star',
    code: 0xf1788,
  },
  {
    name: 'nf-md-progress_upload',
    code: 0xf0998,
  },
  {
    name: 'nf-md-progress_wrench',
    code: 0xf0cbd,
  },
  {
    name: 'nf-md-projector',
    code: 0xf042e,
  },
  {
    name: 'nf-md-projector_off',
    code: 0xf1a23,
  },
  {
    name: 'nf-md-projector_screen',
    code: 0xf042f,
  },
  {
    name: 'nf-md-projector_screen_off',
    code: 0xf180d,
  },
  {
    name: 'nf-md-projector_screen_off_outline',
    code: 0xf180e,
  },
  {
    name: 'nf-md-projector_screen_outline',
    code: 0xf1724,
  },
  {
    name: 'nf-md-projector_screen_variant',
    code: 0xf180f,
  },
  {
    name: 'nf-md-projector_screen_variant_off',
    code: 0xf1810,
  },
  {
    name: 'nf-md-projector_screen_variant_off_outline',
    code: 0xf1811,
  },
  {
    name: 'nf-md-projector_screen_variant_outline',
    code: 0xf1812,
  },
  {
    name: 'nf-md-propane_tank',
    code: 0xf1357,
  },
  {
    name: 'nf-md-propane_tank_outline',
    code: 0xf1358,
  },
  {
    name: 'nf-md-protocol',
    code: 0xf0fd8,
  },
  {
    name: 'nf-md-publish',
    code: 0xf06a7,
  },
  {
    name: 'nf-md-publish_off',
    code: 0xf1945,
  },
  {
    name: 'nf-md-pulse',
    code: 0xf0430,
  },
  {
    name: 'nf-md-pump',
    code: 0xf1402,
  },
  {
    name: 'nf-md-pumpkin',
    code: 0xf0bbf,
  },
  {
    name: 'nf-md-purse',
    code: 0xf0f1c,
  },
  {
    name: 'nf-md-purse_outline',
    code: 0xf0f1d,
  },
  {
    name: 'nf-md-puzzle',
    code: 0xf0431,
  },
  {
    name: 'nf-md-puzzle_check',
    code: 0xf1426,
  },
  {
    name: 'nf-md-puzzle_check_outline',
    code: 0xf1427,
  },
  {
    name: 'nf-md-puzzle_edit',
    code: 0xf14d3,
  },
  {
    name: 'nf-md-puzzle_edit_outline',
    code: 0xf14d9,
  },
  {
    name: 'nf-md-puzzle_heart',
    code: 0xf14d4,
  },
  {
    name: 'nf-md-puzzle_heart_outline',
    code: 0xf14da,
  },
  {
    name: 'nf-md-puzzle_minus',
    code: 0xf14d1,
  },
  {
    name: 'nf-md-puzzle_minus_outline',
    code: 0xf14d7,
  },
  {
    name: 'nf-md-puzzle_outline',
    code: 0xf0a66,
  },
  {
    name: 'nf-md-puzzle_plus',
    code: 0xf14d0,
  },
  {
    name: 'nf-md-puzzle_plus_outline',
    code: 0xf14d6,
  },
  {
    name: 'nf-md-puzzle_remove',
    code: 0xf14d2,
  },
  {
    name: 'nf-md-puzzle_remove_outline',
    code: 0xf14d8,
  },
  {
    name: 'nf-md-puzzle_star',
    code: 0xf14d5,
  },
  {
    name: 'nf-md-puzzle_star_outline',
    code: 0xf14db,
  },
  {
    name: 'nf-md-pyramid',
    code: 0xf1952,
  },
  {
    name: 'nf-md-pyramid_off',
    code: 0xf1953,
  },
  {
    name: 'nf-md-qi',
    code: 0xf0999,
  },
  {
    name: 'nf-md-qqchat',
    code: 0xf0605,
  },
  {
    name: 'nf-md-qrcode',
    code: 0xf0432,
  },
  {
    name: 'nf-md-qrcode_edit',
    code: 0xf08b8,
  },
  {
    name: 'nf-md-qrcode_minus',
    code: 0xf118c,
  },
  {
    name: 'nf-md-qrcode_plus',
    code: 0xf118b,
  },
  {
    name: 'nf-md-qrcode_remove',
    code: 0xf118d,
  },
  {
    name: 'nf-md-qrcode_scan',
    code: 0xf0433,
  },
  {
    name: 'nf-md-quadcopter',
    code: 0xf0434,
  },
  {
    name: 'nf-md-quality_high',
    code: 0xf0435,
  },
  {
    name: 'nf-md-quality_low',
    code: 0xf0a0c,
  },
  {
    name: 'nf-md-quality_medium',
    code: 0xf0a0d,
  },
  {
    name: 'nf-md-quora',
    code: 0xf0d29,
  },
  {
    name: 'nf-md-rabbit',
    code: 0xf0907,
  },
  {
    name: 'nf-md-rabbit_variant',
    code: 0xf1a61,
  },
  {
    name: 'nf-md-rabbit_variant_outline',
    code: 0xf1a62,
  },
  {
    name: 'nf-md-racing_helmet',
    code: 0xf0d93,
  },
  {
    name: 'nf-md-racquetball',
    code: 0xf0d94,
  },
  {
    name: 'nf-md-radar',
    code: 0xf0437,
  },
  {
    name: 'nf-md-radiator',
    code: 0xf0438,
  },
  {
    name: 'nf-md-radiator_disabled',
    code: 0xf0ad7,
  },
  {
    name: 'nf-md-radiator_off',
    code: 0xf0ad8,
  },
  {
    name: 'nf-md-radio',
    code: 0xf0439,
  },
  {
    name: 'nf-md-radio_am',
    code: 0xf0cbe,
  },
  {
    name: 'nf-md-radio_fm',
    code: 0xf0cbf,
  },
  {
    name: 'nf-md-radio_handheld',
    code: 0xf043a,
  },
  {
    name: 'nf-md-radio_off',
    code: 0xf121c,
  },
  {
    name: 'nf-md-radio_tower',
    code: 0xf043b,
  },
  {
    name: 'nf-md-radioactive',
    code: 0xf043c,
  },
  {
    name: 'nf-md-radioactive_circle',
    code: 0xf185d,
  },
  {
    name: 'nf-md-radioactive_circle_outline',
    code: 0xf185e,
  },
  {
    name: 'nf-md-radioactive_off',
    code: 0xf0ec1,
  },
  {
    name: 'nf-md-radiobox_marked',
    code: 0xf043e,
  },
  {
    name: 'nf-md-radiology_box',
    code: 0xf14c5,
  },
  {
    name: 'nf-md-radiology_box_outline',
    code: 0xf14c6,
  },
  {
    name: 'nf-md-radius',
    code: 0xf0cc0,
  },
  {
    name: 'nf-md-radius_outline',
    code: 0xf0cc1,
  },
  {
    name: 'nf-md-railroad_light',
    code: 0xf0f1e,
  },
  {
    name: 'nf-md-rake',
    code: 0xf1544,
  },
  {
    name: 'nf-md-raspberry_pi',
    code: 0xf043f,
  },
  {
    name: 'nf-md-raw',
    code: 0xf1a0f,
  },
  {
    name: 'nf-md-raw_off',
    code: 0xf1a10,
  },
  {
    name: 'nf-md-ray_end',
    code: 0xf0440,
  },
  {
    name: 'nf-md-ray_end_arrow',
    code: 0xf0441,
  },
  {
    name: 'nf-md-ray_start',
    code: 0xf0442,
  },
  {
    name: 'nf-md-ray_start_arrow',
    code: 0xf0443,
  },
  {
    name: 'nf-md-ray_start_end',
    code: 0xf0444,
  },
  {
    name: 'nf-md-ray_start_vertex_end',
    code: 0xf15d8,
  },
  {
    name: 'nf-md-ray_vertex',
    code: 0xf0445,
  },
  {
    name: 'nf-md-razor_double_edge',
    code: 0xf1997,
  },
  {
    name: 'nf-md-razor_single_edge',
    code: 0xf1998,
  },
  {
    name: 'nf-md-react',
    code: 0xf0708,
  },
  {
    name: 'nf-md-read',
    code: 0xf0447,
  },
  {
    name: 'nf-md-receipt',
    code: 0xf0449,
  },
  {
    name: 'nf-md-receipt_outline',
    code: 0xf19dc,
  },
  {
    name: 'nf-md-receipt_text_check',
    code: 0xf1a63,
  },
  {
    name: 'nf-md-receipt_text_check_outline',
    code: 0xf1a64,
  },
  {
    name: 'nf-md-receipt_text_minus',
    code: 0xf1a65,
  },
  {
    name: 'nf-md-receipt_text_minus_outline',
    code: 0xf1a66,
  },
  {
    name: 'nf-md-receipt_text_plus',
    code: 0xf1a67,
  },
  {
    name: 'nf-md-receipt_text_plus_outline',
    code: 0xf1a68,
  },
  {
    name: 'nf-md-receipt_text_remove',
    code: 0xf1a69,
  },
  {
    name: 'nf-md-receipt_text_remove_outline',
    code: 0xf1a6a,
  },
  {
    name: 'nf-md-record',
    code: 0xf044a,
  },
  {
    name: 'nf-md-record_circle',
    code: 0xf0ec2,
  },
  {
    name: 'nf-md-record_circle_outline',
    code: 0xf0ec3,
  },
  {
    name: 'nf-md-record_player',
    code: 0xf099a,
  },
  {
    name: 'nf-md-record_rec',
    code: 0xf044b,
  },
  {
    name: 'nf-md-rectangle',
    code: 0xf0e5e,
  },
  {
    name: 'nf-md-rectangle_outline',
    code: 0xf0e5f,
  },
  {
    name: 'nf-md-recycle',
    code: 0xf044c,
  },
  {
    name: 'nf-md-recycle_variant',
    code: 0xf139d,
  },
  {
    name: 'nf-md-reddit',
    code: 0xf044d,
  },
  {
    name: 'nf-md-redhat',
    code: 0xf111b,
  },
  {
    name: 'nf-md-redo',
    code: 0xf044e,
  },
  {
    name: 'nf-md-redo_variant',
    code: 0xf044f,
  },
  {
    name: 'nf-md-reflect_horizontal',
    code: 0xf0a0e,
  },
  {
    name: 'nf-md-reflect_vertical',
    code: 0xf0a0f,
  },
  {
    name: 'nf-md-refresh',
    code: 0xf0450,
  },
  {
    name: 'nf-md-refresh_auto',
    code: 0xf18f2,
  },
  {
    name: 'nf-md-refresh_circle',
    code: 0xf1377,
  },
  {
    name: 'nf-md-regex',
    code: 0xf0451,
  },
  {
    name: 'nf-md-registered_trademark',
    code: 0xf0a67,
  },
  {
    name: 'nf-md-reiterate',
    code: 0xf1588,
  },
  {
    name: 'nf-md-relation_many_to_many',
    code: 0xf1496,
  },
  {
    name: 'nf-md-relation_many_to_one',
    code: 0xf1497,
  },
  {
    name: 'nf-md-relation_many_to_one_or_many',
    code: 0xf1498,
  },
  {
    name: 'nf-md-relation_many_to_only_one',
    code: 0xf1499,
  },
  {
    name: 'nf-md-relation_many_to_zero_or_many',
    code: 0xf149a,
  },
  {
    name: 'nf-md-relation_many_to_zero_or_one',
    code: 0xf149b,
  },
  {
    name: 'nf-md-relation_one_or_many_to_many',
    code: 0xf149c,
  },
  {
    name: 'nf-md-relation_one_or_many_to_one',
    code: 0xf149d,
  },
  {
    name: 'nf-md-relation_one_or_many_to_one_or_many',
    code: 0xf149e,
  },
  {
    name: 'nf-md-relation_one_or_many_to_only_one',
    code: 0xf149f,
  },
  {
    name: 'nf-md-relation_one_or_many_to_zero_or_many',
    code: 0xf14a0,
  },
  {
    name: 'nf-md-relation_one_or_many_to_zero_or_one',
    code: 0xf14a1,
  },
  {
    name: 'nf-md-relation_one_to_many',
    code: 0xf14a2,
  },
  {
    name: 'nf-md-relation_one_to_one',
    code: 0xf14a3,
  },
  {
    name: 'nf-md-relation_one_to_one_or_many',
    code: 0xf14a4,
  },
  {
    name: 'nf-md-relation_one_to_only_one',
    code: 0xf14a5,
  },
  {
    name: 'nf-md-relation_one_to_zero_or_many',
    code: 0xf14a6,
  },
  {
    name: 'nf-md-relation_one_to_zero_or_one',
    code: 0xf14a7,
  },
  {
    name: 'nf-md-relation_only_one_to_many',
    code: 0xf14a8,
  },
  {
    name: 'nf-md-relation_only_one_to_one',
    code: 0xf14a9,
  },
  {
    name: 'nf-md-relation_only_one_to_one_or_many',
    code: 0xf14aa,
  },
  {
    name: 'nf-md-relation_only_one_to_only_one',
    code: 0xf14ab,
  },
  {
    name: 'nf-md-relation_only_one_to_zero_or_many',
    code: 0xf14ac,
  },
  {
    name: 'nf-md-relation_only_one_to_zero_or_one',
    code: 0xf14ad,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_many',
    code: 0xf14ae,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_one',
    code: 0xf14af,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_one_or_many',
    code: 0xf14b0,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_only_one',
    code: 0xf14b1,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_zero_or_many',
    code: 0xf14b2,
  },
  {
    name: 'nf-md-relation_zero_or_many_to_zero_or_one',
    code: 0xf14b3,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_many',
    code: 0xf14b4,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_one',
    code: 0xf14b5,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_one_or_many',
    code: 0xf14b6,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_only_one',
    code: 0xf14b7,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_zero_or_many',
    code: 0xf14b8,
  },
  {
    name: 'nf-md-relation_zero_or_one_to_zero_or_one',
    code: 0xf14b9,
  },
  {
    name: 'nf-md-relative_scale',
    code: 0xf0452,
  },
  {
    name: 'nf-md-reload',
    code: 0xf0453,
  },
  {
    name: 'nf-md-reload_alert',
    code: 0xf110b,
  },
  {
    name: 'nf-md-reminder',
    code: 0xf088c,
  },
  {
    name: 'nf-md-remote',
    code: 0xf0454,
  },
  {
    name: 'nf-md-remote_desktop',
    code: 0xf08b9,
  },
  {
    name: 'nf-md-remote_off',
    code: 0xf0ec4,
  },
  {
    name: 'nf-md-remote_tv',
    code: 0xf0ec5,
  },
  {
    name: 'nf-md-remote_tv_off',
    code: 0xf0ec6,
  },
  {
    name: 'nf-md-rename_box',
    code: 0xf0455,
  },
  {
    name: 'nf-md-reorder_horizontal',
    code: 0xf0688,
  },
  {
    name: 'nf-md-reorder_vertical',
    code: 0xf0689,
  },
  {
    name: 'nf-md-repeat',
    code: 0xf0456,
  },
  {
    name: 'nf-md-repeat_off',
    code: 0xf0457,
  },
  {
    name: 'nf-md-repeat_once',
    code: 0xf0458,
  },
  {
    name: 'nf-md-repeat_variant',
    code: 0xf0547,
  },
  {
    name: 'nf-md-replay',
    code: 0xf0459,
  },
  {
    name: 'nf-md-reply',
    code: 0xf045a,
  },
  {
    name: 'nf-md-reply_all',
    code: 0xf045b,
  },
  {
    name: 'nf-md-reply_all_outline',
    code: 0xf0f1f,
  },
  {
    name: 'nf-md-reply_circle',
    code: 0xf11ae,
  },
  {
    name: 'nf-md-reply_outline',
    code: 0xf0f20,
  },
  {
    name: 'nf-md-reproduction',
    code: 0xf045c,
  },
  {
    name: 'nf-md-resistor',
    code: 0xf0b44,
  },
  {
    name: 'nf-md-resistor_nodes',
    code: 0xf0b45,
  },
  {
    name: 'nf-md-resize',
    code: 0xf0a68,
  },
  {
    name: 'nf-md-resize_bottom_right',
    code: 0xf045d,
  },
  {
    name: 'nf-md-responsive',
    code: 0xf045e,
  },
  {
    name: 'nf-md-restart',
    code: 0xf0709,
  },
  {
    name: 'nf-md-restart_alert',
    code: 0xf110c,
  },
  {
    name: 'nf-md-restart_off',
    code: 0xf0d95,
  },
  {
    name: 'nf-md-restore',
    code: 0xf099b,
  },
  {
    name: 'nf-md-restore_alert',
    code: 0xf110d,
  },
  {
    name: 'nf-md-rewind',
    code: 0xf045f,
  },
  {
    name: 'nf-md-rewind_10',
    code: 0xf0d2a,
  },
  {
    name: 'nf-md-rewind_15',
    code: 0xf1946,
  },
  {
    name: 'nf-md-rewind_30',
    code: 0xf0d96,
  },
  {
    name: 'nf-md-rewind_5',
    code: 0xf11f9,
  },
  {
    name: 'nf-md-rewind_60',
    code: 0xf160c,
  },
  {
    name: 'nf-md-rewind_outline',
    code: 0xf070a,
  },
  {
    name: 'nf-md-rhombus',
    code: 0xf070b,
  },
  {
    name: 'nf-md-rhombus_medium',
    code: 0xf0a10,
  },
  {
    name: 'nf-md-rhombus_medium_outline',
    code: 0xf14dc,
  },
  {
    name: 'nf-md-rhombus_outline',
    code: 0xf070c,
  },
  {
    name: 'nf-md-rhombus_split',
    code: 0xf0a11,
  },
  {
    name: 'nf-md-rhombus_split_outline',
    code: 0xf14dd,
  },
  {
    name: 'nf-md-ribbon',
    code: 0xf0460,
  },
  {
    name: 'nf-md-rice',
    code: 0xf07ea,
  },
  {
    name: 'nf-md-rickshaw',
    code: 0xf15bb,
  },
  {
    name: 'nf-md-rickshaw_electric',
    code: 0xf15bc,
  },
  {
    name: 'nf-md-ring',
    code: 0xf07eb,
  },
  {
    name: 'nf-md-rivet',
    code: 0xf0e60,
  },
  {
    name: 'nf-md-road',
    code: 0xf0461,
  },
  {
    name: 'nf-md-road_variant',
    code: 0xf0462,
  },
  {
    name: 'nf-md-robber',
    code: 0xf1058,
  },
  {
    name: 'nf-md-robot',
    code: 0xf06a9,
  },
  {
    name: 'nf-md-robot_angry',
    code: 0xf169d,
  },
  {
    name: 'nf-md-robot_angry_outline',
    code: 0xf169e,
  },
  {
    name: 'nf-md-robot_confused',
    code: 0xf169f,
  },
  {
    name: 'nf-md-robot_confused_outline',
    code: 0xf16a0,
  },
  {
    name: 'nf-md-robot_dead',
    code: 0xf16a1,
  },
  {
    name: 'nf-md-robot_dead_outline',
    code: 0xf16a2,
  },
  {
    name: 'nf-md-robot_excited',
    code: 0xf16a3,
  },
  {
    name: 'nf-md-robot_excited_outline',
    code: 0xf16a4,
  },
  {
    name: 'nf-md-robot_happy',
    code: 0xf1719,
  },
  {
    name: 'nf-md-robot_happy_outline',
    code: 0xf171a,
  },
  {
    name: 'nf-md-robot_industrial',
    code: 0xf0b46,
  },
  {
    name: 'nf-md-robot_industrial_outline',
    code: 0xf1a1a,
  },
  {
    name: 'nf-md-robot_love',
    code: 0xf16a5,
  },
  {
    name: 'nf-md-robot_love_outline',
    code: 0xf16a6,
  },
  {
    name: 'nf-md-robot_mower',
    code: 0xf11f7,
  },
  {
    name: 'nf-md-robot_mower_outline',
    code: 0xf11f3,
  },
  {
    name: 'nf-md-robot_off',
    code: 0xf16a7,
  },
  {
    name: 'nf-md-robot_off_outline',
    code: 0xf167b,
  },
  {
    name: 'nf-md-robot_outline',
    code: 0xf167a,
  },
  {
    name: 'nf-md-robot_vacuum',
    code: 0xf070d,
  },
  {
    name: 'nf-md-robot_vacuum_variant',
    code: 0xf0908,
  },
  {
    name: 'nf-md-rocket',
    code: 0xf0463,
  },
  {
    name: 'nf-md-rocket_launch',
    code: 0xf14de,
  },
  {
    name: 'nf-md-rocket_launch_outline',
    code: 0xf14df,
  },
  {
    name: 'nf-md-rocket_outline',
    code: 0xf13af,
  },
  {
    name: 'nf-md-rodent',
    code: 0xf1327,
  },
  {
    name: 'nf-md-roller_shade',
    code: 0xf1a6b,
  },
  {
    name: 'nf-md-roller_shade_closed',
    code: 0xf1a6c,
  },
  {
    name: 'nf-md-roller_skate',
    code: 0xf0d2b,
  },
  {
    name: 'nf-md-roller_skate_off',
    code: 0xf0145,
  },
  {
    name: 'nf-md-rollerblade',
    code: 0xf0d2c,
  },
  {
    name: 'nf-md-rollerblade_off',
    code: 0xf002e,
  },
  {
    name: 'nf-md-rollupjs',
    code: 0xf0bc0,
  },
  {
    name: 'nf-md-rolodex',
    code: 0xf1ab9,
  },
  {
    name: 'nf-md-rolodex_outline',
    code: 0xf1aba,
  },
  {
    name: 'nf-md-roman_numeral_2',
    code: 0xf1089,
  },
  {
    name: 'nf-md-roman_numeral_3',
    code: 0xf108a,
  },
  {
    name: 'nf-md-roman_numeral_4',
    code: 0xf108b,
  },
  {
    name: 'nf-md-roman_numeral_6',
    code: 0xf108d,
  },
  {
    name: 'nf-md-roman_numeral_7',
    code: 0xf108e,
  },
  {
    name: 'nf-md-roman_numeral_8',
    code: 0xf108f,
  },
  {
    name: 'nf-md-roman_numeral_9',
    code: 0xf1090,
  },
  {
    name: 'nf-md-room_service',
    code: 0xf088d,
  },
  {
    name: 'nf-md-room_service_outline',
    code: 0xf0d97,
  },
  {
    name: 'nf-md-rotate_360',
    code: 0xf1999,
  },
  {
    name: 'nf-md-rotate_3d',
    code: 0xf0ec7,
  },
  {
    name: 'nf-md-rotate_3d_variant',
    code: 0xf0464,
  },
  {
    name: 'nf-md-rotate_left',
    code: 0xf0465,
  },
  {
    name: 'nf-md-rotate_left_variant',
    code: 0xf0466,
  },
  {
    name: 'nf-md-rotate_orbit',
    code: 0xf0d98,
  },
  {
    name: 'nf-md-rotate_right',
    code: 0xf0467,
  },
  {
    name: 'nf-md-rotate_right_variant',
    code: 0xf0468,
  },
  {
    name: 'nf-md-rounded_corner',
    code: 0xf0607,
  },
  {
    name: 'nf-md-router',
    code: 0xf11e2,
  },
  {
    name: 'nf-md-router_network',
    code: 0xf1087,
  },
  {
    name: 'nf-md-router_wireless',
    code: 0xf0469,
  },
  {
    name: 'nf-md-router_wireless_off',
    code: 0xf15a3,
  },
  {
    name: 'nf-md-router_wireless_settings',
    code: 0xf0a69,
  },
  {
    name: 'nf-md-routes',
    code: 0xf046a,
  },
  {
    name: 'nf-md-routes_clock',
    code: 0xf1059,
  },
  {
    name: 'nf-md-rowing',
    code: 0xf0608,
  },
  {
    name: 'nf-md-rss',
    code: 0xf046b,
  },
  {
    name: 'nf-md-rss_box',
    code: 0xf046c,
  },
  {
    name: 'nf-md-rss_off',
    code: 0xf0f21,
  },
  {
    name: 'nf-md-rug',
    code: 0xf1475,
  },
  {
    name: 'nf-md-rugby',
    code: 0xf0d99,
  },
  {
    name: 'nf-md-ruler',
    code: 0xf046d,
  },
  {
    name: 'nf-md-ruler_square',
    code: 0xf0cc2,
  },
  {
    name: 'nf-md-ruler_square_compass',
    code: 0xf0ebe,
  },
  {
    name: 'nf-md-run',
    code: 0xf070e,
  },
  {
    name: 'nf-md-run_fast',
    code: 0xf046e,
  },
  {
    name: 'nf-md-rv_truck',
    code: 0xf11d4,
  },
  {
    name: 'nf-md-sack',
    code: 0xf0d2e,
  },
  {
    name: 'nf-md-sack_percent',
    code: 0xf0d2f,
  },
  {
    name: 'nf-md-safe',
    code: 0xf0a6a,
  },
  {
    name: 'nf-md-safe_square',
    code: 0xf127c,
  },
  {
    name: 'nf-md-safe_square_outline',
    code: 0xf127d,
  },
  {
    name: 'nf-md-safety_goggles',
    code: 0xf0d30,
  },
  {
    name: 'nf-md-sail_boat',
    code: 0xf0ec8,
  },
  {
    name: 'nf-md-sail_boat_sink',
    code: 0xf1aef,
  },
  {
    name: 'nf-md-sale',
    code: 0xf046f,
  },
  {
    name: 'nf-md-sale_outline',
    code: 0xf1a06,
  },
  {
    name: 'nf-md-salesforce',
    code: 0xf088e,
  },
  {
    name: 'nf-md-sass',
    code: 0xf07ec,
  },
  {
    name: 'nf-md-satellite',
    code: 0xf0470,
  },
  {
    name: 'nf-md-satellite_uplink',
    code: 0xf0909,
  },
  {
    name: 'nf-md-satellite_variant',
    code: 0xf0471,
  },
  {
    name: 'nf-md-sausage',
    code: 0xf08ba,
  },
  {
    name: 'nf-md-sausage_off',
    code: 0xf1789,
  },
  {
    name: 'nf-md-saw_blade',
    code: 0xf0e61,
  },
  {
    name: 'nf-md-sawtooth_wave',
    code: 0xf147a,
  },
  {
    name: 'nf-md-saxophone',
    code: 0xf0609,
  },
  {
    name: 'nf-md-scale',
    code: 0xf0472,
  },
  {
    name: 'nf-md-scale_balance',
    code: 0xf05d1,
  },
  {
    name: 'nf-md-scale_bathroom',
    code: 0xf0473,
  },
  {
    name: 'nf-md-scale_off',
    code: 0xf105a,
  },
  {
    name: 'nf-md-scale_unbalanced',
    code: 0xf19b8,
  },
  {
    name: 'nf-md-scan_helper',
    code: 0xf13d8,
  },
  {
    name: 'nf-md-scanner',
    code: 0xf06ab,
  },
  {
    name: 'nf-md-scanner_off',
    code: 0xf090a,
  },
  {
    name: 'nf-md-scatter_plot',
    code: 0xf0ec9,
  },
  {
    name: 'nf-md-scatter_plot_outline',
    code: 0xf0eca,
  },
  {
    name: 'nf-md-scent',
    code: 0xf1958,
  },
  {
    name: 'nf-md-scent_off',
    code: 0xf1959,
  },
  {
    name: 'nf-md-school',
    code: 0xf0474,
  },
  {
    name: 'nf-md-school_outline',
    code: 0xf1180,
  },
  {
    name: 'nf-md-scissors_cutting',
    code: 0xf0a6b,
  },
  {
    name: 'nf-md-scooter',
    code: 0xf15bd,
  },
  {
    name: 'nf-md-scooter_electric',
    code: 0xf15be,
  },
  {
    name: 'nf-md-scoreboard',
    code: 0xf127e,
  },
  {
    name: 'nf-md-scoreboard_outline',
    code: 0xf127f,
  },
  {
    name: 'nf-md-screen_rotation',
    code: 0xf0475,
  },
  {
    name: 'nf-md-screen_rotation_lock',
    code: 0xf0478,
  },
  {
    name: 'nf-md-screw_flat_top',
    code: 0xf0df3,
  },
  {
    name: 'nf-md-screw_lag',
    code: 0xf0df4,
  },
  {
    name: 'nf-md-screw_machine_flat_top',
    code: 0xf0df5,
  },
  {
    name: 'nf-md-screw_machine_round_top',
    code: 0xf0df6,
  },
  {
    name: 'nf-md-screw_round_top',
    code: 0xf0df7,
  },
  {
    name: 'nf-md-screwdriver',
    code: 0xf0476,
  },
  {
    name: 'nf-md-script',
    code: 0xf0bc1,
  },
  {
    name: 'nf-md-script_outline',
    code: 0xf0477,
  },
  {
    name: 'nf-md-script_text',
    code: 0xf0bc2,
  },
  {
    name: 'nf-md-script_text_key',
    code: 0xf1725,
  },
  {
    name: 'nf-md-script_text_key_outline',
    code: 0xf1726,
  },
  {
    name: 'nf-md-script_text_outline',
    code: 0xf0bc3,
  },
  {
    name: 'nf-md-script_text_play',
    code: 0xf1727,
  },
  {
    name: 'nf-md-script_text_play_outline',
    code: 0xf1728,
  },
  {
    name: 'nf-md-sd',
    code: 0xf0479,
  },
  {
    name: 'nf-md-seal',
    code: 0xf047a,
  },
  {
    name: 'nf-md-seal_variant',
    code: 0xf0fd9,
  },
  {
    name: 'nf-md-search_web',
    code: 0xf070f,
  },
  {
    name: 'nf-md-seat',
    code: 0xf0cc3,
  },
  {
    name: 'nf-md-seat_flat',
    code: 0xf047b,
  },
  {
    name: 'nf-md-seat_flat_angled',
    code: 0xf047c,
  },
  {
    name: 'nf-md-seat_individual_suite',
    code: 0xf047d,
  },
  {
    name: 'nf-md-seat_legroom_extra',
    code: 0xf047e,
  },
  {
    name: 'nf-md-seat_legroom_normal',
    code: 0xf047f,
  },
  {
    name: 'nf-md-seat_legroom_reduced',
    code: 0xf0480,
  },
  {
    name: 'nf-md-seat_outline',
    code: 0xf0cc4,
  },
  {
    name: 'nf-md-seat_passenger',
    code: 0xf1249,
  },
  {
    name: 'nf-md-seat_recline_extra',
    code: 0xf0481,
  },
  {
    name: 'nf-md-seat_recline_normal',
    code: 0xf0482,
  },
  {
    name: 'nf-md-seatbelt',
    code: 0xf0cc5,
  },
  {
    name: 'nf-md-security',
    code: 0xf0483,
  },
  {
    name: 'nf-md-security_network',
    code: 0xf0484,
  },
  {
    name: 'nf-md-seed',
    code: 0xf0e62,
  },
  {
    name: 'nf-md-seed_off',
    code: 0xf13fd,
  },
  {
    name: 'nf-md-seed_off_outline',
    code: 0xf13fe,
  },
  {
    name: 'nf-md-seed_outline',
    code: 0xf0e63,
  },
  {
    name: 'nf-md-seed_plus',
    code: 0xf1a6d,
  },
  {
    name: 'nf-md-seed_plus_outline',
    code: 0xf1a6e,
  },
  {
    name: 'nf-md-seesaw',
    code: 0xf15a4,
  },
  {
    name: 'nf-md-segment',
    code: 0xf0ecb,
  },
  {
    name: 'nf-md-select',
    code: 0xf0485,
  },
  {
    name: 'nf-md-select_all',
    code: 0xf0486,
  },
  {
    name: 'nf-md-select_color',
    code: 0xf0d31,
  },
  {
    name: 'nf-md-select_compare',
    code: 0xf0ad9,
  },
  {
    name: 'nf-md-select_drag',
    code: 0xf0a6c,
  },
  {
    name: 'nf-md-select_group',
    code: 0xf0f82,
  },
  {
    name: 'nf-md-select_inverse',
    code: 0xf0487,
  },
  {
    name: 'nf-md-select_marker',
    code: 0xf1280,
  },
  {
    name: 'nf-md-select_multiple',
    code: 0xf1281,
  },
  {
    name: 'nf-md-select_multiple_marker',
    code: 0xf1282,
  },
  {
    name: 'nf-md-select_off',
    code: 0xf0488,
  },
  {
    name: 'nf-md-select_place',
    code: 0xf0fda,
  },
  {
    name: 'nf-md-select_remove',
    code: 0xf17c1,
  },
  {
    name: 'nf-md-select_search',
    code: 0xf1204,
  },
  {
    name: 'nf-md-selection',
    code: 0xf0489,
  },
  {
    name: 'nf-md-selection_drag',
    code: 0xf0a6d,
  },
  {
    name: 'nf-md-selection_ellipse',
    code: 0xf0d32,
  },
  {
    name: 'nf-md-selection_ellipse_arrow_inside',
    code: 0xf0f22,
  },
  {
    name: 'nf-md-selection_ellipse_remove',
    code: 0xf17c2,
  },
  {
    name: 'nf-md-selection_marker',
    code: 0xf1283,
  },
  {
    name: 'nf-md-selection_multiple',
    code: 0xf1285,
  },
  {
    name: 'nf-md-selection_multiple_marker',
    code: 0xf1284,
  },
  {
    name: 'nf-md-selection_off',
    code: 0xf0777,
  },
  {
    name: 'nf-md-selection_remove',
    code: 0xf17c3,
  },
  {
    name: 'nf-md-selection_search',
    code: 0xf1205,
  },
  {
    name: 'nf-md-semantic_web',
    code: 0xf1316,
  },
  {
    name: 'nf-md-send',
    code: 0xf048a,
  },
  {
    name: 'nf-md-send_check',
    code: 0xf1161,
  },
  {
    name: 'nf-md-send_check_outline',
    code: 0xf1162,
  },
  {
    name: 'nf-md-send_circle',
    code: 0xf0df8,
  },
  {
    name: 'nf-md-send_circle_outline',
    code: 0xf0df9,
  },
  {
    name: 'nf-md-send_clock',
    code: 0xf1163,
  },
  {
    name: 'nf-md-send_clock_outline',
    code: 0xf1164,
  },
  {
    name: 'nf-md-send_lock',
    code: 0xf07ed,
  },
  {
    name: 'nf-md-send_lock_outline',
    code: 0xf1166,
  },
  {
    name: 'nf-md-send_outline',
    code: 0xf1165,
  },
  {
    name: 'nf-md-serial_port',
    code: 0xf065c,
  },
  {
    name: 'nf-md-server',
    code: 0xf048b,
  },
  {
    name: 'nf-md-server_minus',
    code: 0xf048c,
  },
  {
    name: 'nf-md-server_network',
    code: 0xf048d,
  },
  {
    name: 'nf-md-server_network_off',
    code: 0xf048e,
  },
  {
    name: 'nf-md-server_off',
    code: 0xf048f,
  },
  {
    name: 'nf-md-server_plus',
    code: 0xf0490,
  },
  {
    name: 'nf-md-server_remove',
    code: 0xf0491,
  },
  {
    name: 'nf-md-server_security',
    code: 0xf0492,
  },
  {
    name: 'nf-md-set_all',
    code: 0xf0778,
  },
  {
    name: 'nf-md-set_center',
    code: 0xf0779,
  },
  {
    name: 'nf-md-set_center_right',
    code: 0xf077a,
  },
  {
    name: 'nf-md-set_left',
    code: 0xf077b,
  },
  {
    name: 'nf-md-set_left_center',
    code: 0xf077c,
  },
  {
    name: 'nf-md-set_left_right',
    code: 0xf077d,
  },
  {
    name: 'nf-md-set_merge',
    code: 0xf14e0,
  },
  {
    name: 'nf-md-set_none',
    code: 0xf077e,
  },
  {
    name: 'nf-md-set_right',
    code: 0xf077f,
  },
  {
    name: 'nf-md-set_split',
    code: 0xf14e1,
  },
  {
    name: 'nf-md-set_square',
    code: 0xf145d,
  },
  {
    name: 'nf-md-set_top_box',
    code: 0xf099f,
  },
  {
    name: 'nf-md-settings_helper',
    code: 0xf0a6e,
  },
  {
    name: 'nf-md-shaker',
    code: 0xf110e,
  },
  {
    name: 'nf-md-shaker_outline',
    code: 0xf110f,
  },
  {
    name: 'nf-md-shape',
    code: 0xf0831,
  },
  {
    name: 'nf-md-shape_circle_plus',
    code: 0xf065d,
  },
  {
    name: 'nf-md-shape_outline',
    code: 0xf0832,
  },
  {
    name: 'nf-md-shape_oval_plus',
    code: 0xf11fa,
  },
  {
    name: 'nf-md-shape_plus',
    code: 0xf0495,
  },
  {
    name: 'nf-md-shape_polygon_plus',
    code: 0xf065e,
  },
  {
    name: 'nf-md-shape_rectangle_plus',
    code: 0xf065f,
  },
  {
    name: 'nf-md-shape_square_plus',
    code: 0xf0660,
  },
  {
    name: 'nf-md-shape_square_rounded_plus',
    code: 0xf14fa,
  },
  {
    name: 'nf-md-share',
    code: 0xf0496,
  },
  {
    name: 'nf-md-share_all',
    code: 0xf11f4,
  },
  {
    name: 'nf-md-share_all_outline',
    code: 0xf11f5,
  },
  {
    name: 'nf-md-share_circle',
    code: 0xf11ad,
  },
  {
    name: 'nf-md-share_off',
    code: 0xf0f23,
  },
  {
    name: 'nf-md-share_off_outline',
    code: 0xf0f24,
  },
  {
    name: 'nf-md-share_outline',
    code: 0xf0932,
  },
  {
    name: 'nf-md-share_variant',
    code: 0xf0497,
  },
  {
    name: 'nf-md-share_variant_outline',
    code: 0xf1514,
  },
  {
    name: 'nf-md-shark',
    code: 0xf18ba,
  },
  {
    name: 'nf-md-shark_fin',
    code: 0xf1673,
  },
  {
    name: 'nf-md-shark_fin_outline',
    code: 0xf1674,
  },
  {
    name: 'nf-md-shark_off',
    code: 0xf18bb,
  },
  {
    name: 'nf-md-sheep',
    code: 0xf0cc6,
  },
  {
    name: 'nf-md-shield',
    code: 0xf0498,
  },
  {
    name: 'nf-md-shield_account',
    code: 0xf088f,
  },
  {
    name: 'nf-md-shield_account_outline',
    code: 0xf0a12,
  },
  {
    name: 'nf-md-shield_account_variant',
    code: 0xf15a7,
  },
  {
    name: 'nf-md-shield_account_variant_outline',
    code: 0xf15a8,
  },
  {
    name: 'nf-md-shield_airplane',
    code: 0xf06bb,
  },
  {
    name: 'nf-md-shield_airplane_outline',
    code: 0xf0cc7,
  },
  {
    name: 'nf-md-shield_alert',
    code: 0xf0ecc,
  },
  {
    name: 'nf-md-shield_alert_outline',
    code: 0xf0ecd,
  },
  {
    name: 'nf-md-shield_bug',
    code: 0xf13da,
  },
  {
    name: 'nf-md-shield_bug_outline',
    code: 0xf13db,
  },
  {
    name: 'nf-md-shield_car',
    code: 0xf0f83,
  },
  {
    name: 'nf-md-shield_check',
    code: 0xf0565,
  },
  {
    name: 'nf-md-shield_check_outline',
    code: 0xf0cc8,
  },
  {
    name: 'nf-md-shield_cross',
    code: 0xf0cc9,
  },
  {
    name: 'nf-md-shield_cross_outline',
    code: 0xf0cca,
  },
  {
    name: 'nf-md-shield_crown',
    code: 0xf18bc,
  },
  {
    name: 'nf-md-shield_crown_outline',
    code: 0xf18bd,
  },
  {
    name: 'nf-md-shield_edit',
    code: 0xf11a0,
  },
  {
    name: 'nf-md-shield_edit_outline',
    code: 0xf11a1,
  },
  {
    name: 'nf-md-shield_half',
    code: 0xf1360,
  },
  {
    name: 'nf-md-shield_half_full',
    code: 0xf0780,
  },
  {
    name: 'nf-md-shield_home',
    code: 0xf068a,
  },
  {
    name: 'nf-md-shield_home_outline',
    code: 0xf0ccb,
  },
  {
    name: 'nf-md-shield_key',
    code: 0xf0bc4,
  },
  {
    name: 'nf-md-shield_key_outline',
    code: 0xf0bc5,
  },
  {
    name: 'nf-md-shield_link_variant',
    code: 0xf0d33,
  },
  {
    name: 'nf-md-shield_link_variant_outline',
    code: 0xf0d34,
  },
  {
    name: 'nf-md-shield_lock',
    code: 0xf099d,
  },
  {
    name: 'nf-md-shield_lock_open',
    code: 0xf199a,
  },
  {
    name: 'nf-md-shield_lock_open_outline',
    code: 0xf199b,
  },
  {
    name: 'nf-md-shield_lock_outline',
    code: 0xf0ccc,
  },
  {
    name: 'nf-md-shield_moon',
    code: 0xf1828,
  },
  {
    name: 'nf-md-shield_moon_outline',
    code: 0xf1829,
  },
  {
    name: 'nf-md-shield_off',
    code: 0xf099e,
  },
  {
    name: 'nf-md-shield_off_outline',
    code: 0xf099c,
  },
  {
    name: 'nf-md-shield_outline',
    code: 0xf0499,
  },
  {
    name: 'nf-md-shield_plus',
    code: 0xf0ada,
  },
  {
    name: 'nf-md-shield_plus_outline',
    code: 0xf0adb,
  },
  {
    name: 'nf-md-shield_refresh',
    code: 0xf00aa,
  },
  {
    name: 'nf-md-shield_refresh_outline',
    code: 0xf01e0,
  },
  {
    name: 'nf-md-shield_remove',
    code: 0xf0adc,
  },
  {
    name: 'nf-md-shield_remove_outline',
    code: 0xf0add,
  },
  {
    name: 'nf-md-shield_search',
    code: 0xf0d9a,
  },
  {
    name: 'nf-md-shield_star',
    code: 0xf113b,
  },
  {
    name: 'nf-md-shield_star_outline',
    code: 0xf113c,
  },
  {
    name: 'nf-md-shield_sun',
    code: 0xf105d,
  },
  {
    name: 'nf-md-shield_sun_outline',
    code: 0xf105e,
  },
  {
    name: 'nf-md-shield_sword',
    code: 0xf18be,
  },
  {
    name: 'nf-md-shield_sword_outline',
    code: 0xf18bf,
  },
  {
    name: 'nf-md-shield_sync',
    code: 0xf11a2,
  },
  {
    name: 'nf-md-shield_sync_outline',
    code: 0xf11a3,
  },
  {
    name: 'nf-md-shimmer',
    code: 0xf1545,
  },
  {
    name: 'nf-md-ship_wheel',
    code: 0xf0833,
  },
  {
    name: 'nf-md-shipping_pallet',
    code: 0xf184e,
  },
  {
    name: 'nf-md-shoe_ballet',
    code: 0xf15ca,
  },
  {
    name: 'nf-md-shoe_cleat',
    code: 0xf15c7,
  },
  {
    name: 'nf-md-shoe_formal',
    code: 0xf0b47,
  },
  {
    name: 'nf-md-shoe_heel',
    code: 0xf0b48,
  },
  {
    name: 'nf-md-shoe_print',
    code: 0xf0dfa,
  },
  {
    name: 'nf-md-shoe_sneaker',
    code: 0xf15c8,
  },
  {
    name: 'nf-md-shopping',
    code: 0xf049a,
  },
  {
    name: 'nf-md-shopping_music',
    code: 0xf049b,
  },
  {
    name: 'nf-md-shopping_outline',
    code: 0xf11d5,
  },
  {
    name: 'nf-md-shopping_search',
    code: 0xf0f84,
  },
  {
    name: 'nf-md-shopping_search_outline',
    code: 0xf1a6f,
  },
  {
    name: 'nf-md-shore',
    code: 0xf14f9,
  },
  {
    name: 'nf-md-shovel',
    code: 0xf0710,
  },
  {
    name: 'nf-md-shovel_off',
    code: 0xf0711,
  },
  {
    name: 'nf-md-shower',
    code: 0xf09a0,
  },
  {
    name: 'nf-md-shower_head',
    code: 0xf09a1,
  },
  {
    name: 'nf-md-shredder',
    code: 0xf049c,
  },
  {
    name: 'nf-md-shuffle',
    code: 0xf049d,
  },
  {
    name: 'nf-md-shuffle_disabled',
    code: 0xf049e,
  },
  {
    name: 'nf-md-shuffle_variant',
    code: 0xf049f,
  },
  {
    name: 'nf-md-shuriken',
    code: 0xf137f,
  },
  {
    name: 'nf-md-sickle',
    code: 0xf18c0,
  },
  {
    name: 'nf-md-sigma',
    code: 0xf04a0,
  },
  {
    name: 'nf-md-sigma_lower',
    code: 0xf062b,
  },
  {
    name: 'nf-md-sign_caution',
    code: 0xf04a1,
  },
  {
    name: 'nf-md-sign_direction',
    code: 0xf0781,
  },
  {
    name: 'nf-md-sign_direction_minus',
    code: 0xf1000,
  },
  {
    name: 'nf-md-sign_direction_plus',
    code: 0xf0fdc,
  },
  {
    name: 'nf-md-sign_direction_remove',
    code: 0xf0fdd,
  },
  {
    name: 'nf-md-sign_pole',
    code: 0xf14f8,
  },
  {
    name: 'nf-md-sign_real_estate',
    code: 0xf1118,
  },
  {
    name: 'nf-md-sign_text',
    code: 0xf0782,
  },
  {
    name: 'nf-md-signal',
    code: 0xf04a2,
  },
  {
    name: 'nf-md-signal_2g',
    code: 0xf0712,
  },
  {
    name: 'nf-md-signal_3g',
    code: 0xf0713,
  },
  {
    name: 'nf-md-signal_4g',
    code: 0xf0714,
  },
  {
    name: 'nf-md-signal_5g',
    code: 0xf0a6f,
  },
  {
    name: 'nf-md-signal_cellular_1',
    code: 0xf08bc,
  },
  {
    name: 'nf-md-signal_cellular_2',
    code: 0xf08bd,
  },
  {
    name: 'nf-md-signal_cellular_3',
    code: 0xf08be,
  },
  {
    name: 'nf-md-signal_cellular_outline',
    code: 0xf08bf,
  },
  {
    name: 'nf-md-signal_distance_variant',
    code: 0xf0e64,
  },
  {
    name: 'nf-md-signal_hspa',
    code: 0xf0715,
  },
  {
    name: 'nf-md-signal_hspa_plus',
    code: 0xf0716,
  },
  {
    name: 'nf-md-signal_off',
    code: 0xf0783,
  },
  {
    name: 'nf-md-signal_variant',
    code: 0xf060a,
  },
  {
    name: 'nf-md-signature',
    code: 0xf0dfb,
  },
  {
    name: 'nf-md-signature_freehand',
    code: 0xf0dfc,
  },
  {
    name: 'nf-md-signature_image',
    code: 0xf0dfd,
  },
  {
    name: 'nf-md-signature_text',
    code: 0xf0dfe,
  },
  {
    name: 'nf-md-silo',
    code: 0xf0b49,
  },
  {
    name: 'nf-md-silverware',
    code: 0xf04a3,
  },
  {
    name: 'nf-md-silverware_clean',
    code: 0xf0fde,
  },
  {
    name: 'nf-md-silverware_fork',
    code: 0xf04a4,
  },
  {
    name: 'nf-md-silverware_fork_knife',
    code: 0xf0a70,
  },
  {
    name: 'nf-md-silverware_spoon',
    code: 0xf04a5,
  },
  {
    name: 'nf-md-silverware_variant',
    code: 0xf04a6,
  },
  {
    name: 'nf-md-sim',
    code: 0xf04a7,
  },
  {
    name: 'nf-md-sim_alert',
    code: 0xf04a8,
  },
  {
    name: 'nf-md-sim_alert_outline',
    code: 0xf15d3,
  },
  {
    name: 'nf-md-sim_off',
    code: 0xf04a9,
  },
  {
    name: 'nf-md-sim_off_outline',
    code: 0xf15d4,
  },
  {
    name: 'nf-md-sim_outline',
    code: 0xf15d5,
  },
  {
    name: 'nf-md-simple_icons',
    code: 0xf131d,
  },
  {
    name: 'nf-md-sina_weibo',
    code: 0xf0adf,
  },
  {
    name: 'nf-md-sine_wave',
    code: 0xf095b,
  },
  {
    name: 'nf-md-sitemap',
    code: 0xf04aa,
  },
  {
    name: 'nf-md-sitemap_outline',
    code: 0xf199c,
  },
  {
    name: 'nf-md-size_m',
    code: 0xf13a5,
  },
  {
    name: 'nf-md-size_s',
    code: 0xf13a4,
  },
  {
    name: 'nf-md-size_xl',
    code: 0xf13a7,
  },
  {
    name: 'nf-md-size_xs',
    code: 0xf13a3,
  },
  {
    name: 'nf-md-size_xxl',
    code: 0xf13a8,
  },
  {
    name: 'nf-md-size_xxs',
    code: 0xf13a2,
  },
  {
    name: 'nf-md-size_xxxl',
    code: 0xf13a9,
  },
  {
    name: 'nf-md-skate',
    code: 0xf0d35,
  },
  {
    name: 'nf-md-skate_off',
    code: 0xf0699,
  },
  {
    name: 'nf-md-skateboard',
    code: 0xf14c2,
  },
  {
    name: 'nf-md-skateboarding',
    code: 0xf0501,
  },
  {
    name: 'nf-md-skew_less',
    code: 0xf0d36,
  },
  {
    name: 'nf-md-skew_more',
    code: 0xf0d37,
  },
  {
    name: 'nf-md-ski',
    code: 0xf1304,
  },
  {
    name: 'nf-md-ski_cross_country',
    code: 0xf1305,
  },
  {
    name: 'nf-md-ski_water',
    code: 0xf1306,
  },
  {
    name: 'nf-md-skip_backward',
    code: 0xf04ab,
  },
  {
    name: 'nf-md-skip_backward_outline',
    code: 0xf0f25,
  },
  {
    name: 'nf-md-skip_forward',
    code: 0xf04ac,
  },
  {
    name: 'nf-md-skip_forward_outline',
    code: 0xf0f26,
  },
  {
    name: 'nf-md-skip_next',
    code: 0xf04ad,
  },
  {
    name: 'nf-md-skip_next_circle',
    code: 0xf0661,
  },
  {
    name: 'nf-md-skip_next_circle_outline',
    code: 0xf0662,
  },
  {
    name: 'nf-md-skip_next_outline',
    code: 0xf0f27,
  },
  {
    name: 'nf-md-skip_previous',
    code: 0xf04ae,
  },
  {
    name: 'nf-md-skip_previous_circle',
    code: 0xf0663,
  },
  {
    name: 'nf-md-skip_previous_circle_outline',
    code: 0xf0664,
  },
  {
    name: 'nf-md-skip_previous_outline',
    code: 0xf0f28,
  },
  {
    name: 'nf-md-skull',
    code: 0xf068c,
  },
  {
    name: 'nf-md-skull_crossbones',
    code: 0xf0bc6,
  },
  {
    name: 'nf-md-skull_crossbones_outline',
    code: 0xf0bc7,
  },
  {
    name: 'nf-md-skull_outline',
    code: 0xf0bc8,
  },
  {
    name: 'nf-md-skull_scan',
    code: 0xf14c7,
  },
  {
    name: 'nf-md-skull_scan_outline',
    code: 0xf14c8,
  },
  {
    name: 'nf-md-skype',
    code: 0xf04af,
  },
  {
    name: 'nf-md-skype_business',
    code: 0xf04b0,
  },
  {
    name: 'nf-md-slack',
    code: 0xf04b1,
  },
  {
    name: 'nf-md-slash_forward',
    code: 0xf0fdf,
  },
  {
    name: 'nf-md-slash_forward_box',
    code: 0xf0fe0,
  },
  {
    name: 'nf-md-sledding',
    code: 0xf041b,
  },
  {
    name: 'nf-md-sleep',
    code: 0xf04b2,
  },
  {
    name: 'nf-md-sleep_off',
    code: 0xf04b3,
  },
  {
    name: 'nf-md-slide',
    code: 0xf15a5,
  },
  {
    name: 'nf-md-slope_downhill',
    code: 0xf0dff,
  },
  {
    name: 'nf-md-slope_uphill',
    code: 0xf0e00,
  },
  {
    name: 'nf-md-slot_machine',
    code: 0xf1114,
  },
  {
    name: 'nf-md-slot_machine_outline',
    code: 0xf1115,
  },
  {
    name: 'nf-md-smart_card',
    code: 0xf10bd,
  },
  {
    name: 'nf-md-smart_card_off',
    code: 0xf18f7,
  },
  {
    name: 'nf-md-smart_card_off_outline',
    code: 0xf18f8,
  },
  {
    name: 'nf-md-smart_card_outline',
    code: 0xf10be,
  },
  {
    name: 'nf-md-smart_card_reader',
    code: 0xf10bf,
  },
  {
    name: 'nf-md-smart_card_reader_outline',
    code: 0xf10c0,
  },
  {
    name: 'nf-md-smog',
    code: 0xf0a71,
  },
  {
    name: 'nf-md-smoke',
    code: 0xf1799,
  },
  {
    name: 'nf-md-smoke_detector',
    code: 0xf0392,
  },
  {
    name: 'nf-md-smoke_detector_alert',
    code: 0xf192e,
  },
  {
    name: 'nf-md-smoke_detector_alert_outline',
    code: 0xf192f,
  },
  {
    name: 'nf-md-smoke_detector_off',
    code: 0xf1809,
  },
  {
    name: 'nf-md-smoke_detector_off_outline',
    code: 0xf180a,
  },
  {
    name: 'nf-md-smoke_detector_outline',
    code: 0xf1808,
  },
  {
    name: 'nf-md-smoke_detector_variant',
    code: 0xf180b,
  },
  {
    name: 'nf-md-smoke_detector_variant_alert',
    code: 0xf1930,
  },
  {
    name: 'nf-md-smoke_detector_variant_off',
    code: 0xf180c,
  },
  {
    name: 'nf-md-smoking',
    code: 0xf04b4,
  },
  {
    name: 'nf-md-smoking_off',
    code: 0xf04b5,
  },
  {
    name: 'nf-md-smoking_pipe',
    code: 0xf140d,
  },
  {
    name: 'nf-md-smoking_pipe_off',
    code: 0xf1428,
  },
  {
    name: 'nf-md-snail',
    code: 0xf1677,
  },
  {
    name: 'nf-md-snake',
    code: 0xf150e,
  },
  {
    name: 'nf-md-snapchat',
    code: 0xf04b6,
  },
  {
    name: 'nf-md-snowboard',
    code: 0xf1307,
  },
  {
    name: 'nf-md-snowflake',
    code: 0xf0717,
  },
  {
    name: 'nf-md-snowflake_alert',
    code: 0xf0f29,
  },
  {
    name: 'nf-md-snowflake_check',
    code: 0xf1a70,
  },
  {
    name: 'nf-md-snowflake_melt',
    code: 0xf12cb,
  },
  {
    name: 'nf-md-snowflake_off',
    code: 0xf14e3,
  },
  {
    name: 'nf-md-snowflake_thermometer',
    code: 0xf1a71,
  },
  {
    name: 'nf-md-snowflake_variant',
    code: 0xf0f2a,
  },
  {
    name: 'nf-md-snowman',
    code: 0xf04b7,
  },
  {
    name: 'nf-md-snowmobile',
    code: 0xf06dd,
  },
  {
    name: 'nf-md-snowshoeing',
    code: 0xf1a72,
  },
  {
    name: 'nf-md-soccer',
    code: 0xf04b8,
  },
  {
    name: 'nf-md-soccer_field',
    code: 0xf0834,
  },
  {
    name: 'nf-md-social_distance_2_meters',
    code: 0xf1579,
  },
  {
    name: 'nf-md-social_distance_6_feet',
    code: 0xf157a,
  },
  {
    name: 'nf-md-sofa',
    code: 0xf04b9,
  },
  {
    name: 'nf-md-sofa_outline',
    code: 0xf156d,
  },
  {
    name: 'nf-md-sofa_single',
    code: 0xf156e,
  },
  {
    name: 'nf-md-sofa_single_outline',
    code: 0xf156f,
  },
  {
    name: 'nf-md-solar_panel',
    code: 0xf0d9b,
  },
  {
    name: 'nf-md-solar_panel_large',
    code: 0xf0d9c,
  },
  {
    name: 'nf-md-solar_power',
    code: 0xf0a72,
  },
  {
    name: 'nf-md-solar_power_variant',
    code: 0xf1a73,
  },
  {
    name: 'nf-md-solar_power_variant_outline',
    code: 0xf1a74,
  },
  {
    name: 'nf-md-soldering_iron',
    code: 0xf1092,
  },
  {
    name: 'nf-md-solid',
    code: 0xf068d,
  },
  {
    name: 'nf-md-sony_playstation',
    code: 0xf0414,
  },
  {
    name: 'nf-md-sort',
    code: 0xf04ba,
  },
  {
    name: 'nf-md-sort_alphabetical_ascending',
    code: 0xf05bd,
  },
  {
    name: 'nf-md-sort_alphabetical_ascending_variant',
    code: 0xf1148,
  },
  {
    name: 'nf-md-sort_alphabetical_descending',
    code: 0xf05bf,
  },
  {
    name: 'nf-md-sort_alphabetical_descending_variant',
    code: 0xf1149,
  },
  {
    name: 'nf-md-sort_alphabetical_variant',
    code: 0xf04bb,
  },
  {
    name: 'nf-md-sort_ascending',
    code: 0xf04bc,
  },
  {
    name: 'nf-md-sort_bool_ascending',
    code: 0xf1385,
  },
  {
    name: 'nf-md-sort_bool_ascending_variant',
    code: 0xf1386,
  },
  {
    name: 'nf-md-sort_bool_descending',
    code: 0xf1387,
  },
  {
    name: 'nf-md-sort_bool_descending_variant',
    code: 0xf1388,
  },
  {
    name: 'nf-md-sort_calendar_ascending',
    code: 0xf1547,
  },
  {
    name: 'nf-md-sort_calendar_descending',
    code: 0xf1548,
  },
  {
    name: 'nf-md-sort_clock_ascending',
    code: 0xf1549,
  },
  {
    name: 'nf-md-sort_clock_ascending_outline',
    code: 0xf154a,
  },
  {
    name: 'nf-md-sort_clock_descending',
    code: 0xf154b,
  },
  {
    name: 'nf-md-sort_clock_descending_outline',
    code: 0xf154c,
  },
  {
    name: 'nf-md-sort_descending',
    code: 0xf04bd,
  },
  {
    name: 'nf-md-sort_numeric_ascending',
    code: 0xf1389,
  },
  {
    name: 'nf-md-sort_numeric_ascending_variant',
    code: 0xf090d,
  },
  {
    name: 'nf-md-sort_numeric_descending',
    code: 0xf138a,
  },
  {
    name: 'nf-md-sort_numeric_descending_variant',
    code: 0xf0ad2,
  },
  {
    name: 'nf-md-sort_numeric_variant',
    code: 0xf04be,
  },
  {
    name: 'nf-md-sort_reverse_variant',
    code: 0xf033c,
  },
  {
    name: 'nf-md-sort_variant',
    code: 0xf04bf,
  },
  {
    name: 'nf-md-sort_variant_lock',
    code: 0xf0ccd,
  },
  {
    name: 'nf-md-sort_variant_lock_open',
    code: 0xf0cce,
  },
  {
    name: 'nf-md-sort_variant_off',
    code: 0xf1abb,
  },
  {
    name: 'nf-md-sort_variant_remove',
    code: 0xf1147,
  },
  {
    name: 'nf-md-soundbar',
    code: 0xf17db,
  },
  {
    name: 'nf-md-soundcloud',
    code: 0xf04c0,
  },
  {
    name: 'nf-md-source_branch',
    code: 0xf062c,
  },
  {
    name: 'nf-md-source_branch_check',
    code: 0xf14cf,
  },
  {
    name: 'nf-md-source_branch_minus',
    code: 0xf14cb,
  },
  {
    name: 'nf-md-source_branch_plus',
    code: 0xf14ca,
  },
  {
    name: 'nf-md-source_branch_refresh',
    code: 0xf14cd,
  },
  {
    name: 'nf-md-source_branch_remove',
    code: 0xf14cc,
  },
  {
    name: 'nf-md-source_branch_sync',
    code: 0xf14ce,
  },
  {
    name: 'nf-md-source_commit',
    code: 0xf0718,
  },
  {
    name: 'nf-md-source_commit_end',
    code: 0xf0719,
  },
  {
    name: 'nf-md-source_commit_end_local',
    code: 0xf071a,
  },
  {
    name: 'nf-md-source_commit_local',
    code: 0xf071b,
  },
  {
    name: 'nf-md-source_commit_next_local',
    code: 0xf071c,
  },
  {
    name: 'nf-md-source_commit_start',
    code: 0xf071d,
  },
  {
    name: 'nf-md-source_commit_start_next_local',
    code: 0xf071e,
  },
  {
    name: 'nf-md-source_fork',
    code: 0xf04c1,
  },
  {
    name: 'nf-md-source_merge',
    code: 0xf062d,
  },
  {
    name: 'nf-md-source_pull',
    code: 0xf04c2,
  },
  {
    name: 'nf-md-source_repository',
    code: 0xf0ccf,
  },
  {
    name: 'nf-md-source_repository_multiple',
    code: 0xf0cd0,
  },
  {
    name: 'nf-md-soy_sauce',
    code: 0xf07ee,
  },
  {
    name: 'nf-md-soy_sauce_off',
    code: 0xf13fc,
  },
  {
    name: 'nf-md-spa',
    code: 0xf0cd1,
  },
  {
    name: 'nf-md-spa_outline',
    code: 0xf0cd2,
  },
  {
    name: 'nf-md-space_invaders',
    code: 0xf0bc9,
  },
  {
    name: 'nf-md-space_station',
    code: 0xf1383,
  },
  {
    name: 'nf-md-spade',
    code: 0xf0e65,
  },
  {
    name: 'nf-md-speaker',
    code: 0xf04c3,
  },
  {
    name: 'nf-md-speaker_bluetooth',
    code: 0xf09a2,
  },
  {
    name: 'nf-md-speaker_multiple',
    code: 0xf0d38,
  },
  {
    name: 'nf-md-speaker_off',
    code: 0xf04c4,
  },
  {
    name: 'nf-md-speaker_wireless',
    code: 0xf071f,
  },
  {
    name: 'nf-md-spear',
    code: 0xf1845,
  },
  {
    name: 'nf-md-speedometer',
    code: 0xf04c5,
  },
  {
    name: 'nf-md-speedometer_medium',
    code: 0xf0f85,
  },
  {
    name: 'nf-md-speedometer_slow',
    code: 0xf0f86,
  },
  {
    name: 'nf-md-spellcheck',
    code: 0xf04c6,
  },
  {
    name: 'nf-md-sphere',
    code: 0xf1954,
  },
  {
    name: 'nf-md-sphere_off',
    code: 0xf1955,
  },
  {
    name: 'nf-md-spider',
    code: 0xf11ea,
  },
  {
    name: 'nf-md-spider_thread',
    code: 0xf11eb,
  },
  {
    name: 'nf-md-spider_web',
    code: 0xf0bca,
  },
  {
    name: 'nf-md-spirit_level',
    code: 0xf14f1,
  },
  {
    name: 'nf-md-spoon_sugar',
    code: 0xf1429,
  },
  {
    name: 'nf-md-spotify',
    code: 0xf04c7,
  },
  {
    name: 'nf-md-spotlight',
    code: 0xf04c8,
  },
  {
    name: 'nf-md-spotlight_beam',
    code: 0xf04c9,
  },
  {
    name: 'nf-md-spray',
    code: 0xf0665,
  },
  {
    name: 'nf-md-spray_bottle',
    code: 0xf0ae0,
  },
  {
    name: 'nf-md-sprinkler',
    code: 0xf105f,
  },
  {
    name: 'nf-md-sprinkler_fire',
    code: 0xf199d,
  },
  {
    name: 'nf-md-sprinkler_variant',
    code: 0xf1060,
  },
  {
    name: 'nf-md-sprout',
    code: 0xf0e66,
  },
  {
    name: 'nf-md-sprout_outline',
    code: 0xf0e67,
  },
  {
    name: 'nf-md-square',
    code: 0xf0764,
  },
  {
    name: 'nf-md-square_circle',
    code: 0xf1500,
  },
  {
    name: 'nf-md-square_edit_outline',
    code: 0xf090c,
  },
  {
    name: 'nf-md-square_medium',
    code: 0xf0a13,
  },
  {
    name: 'nf-md-square_medium_outline',
    code: 0xf0a14,
  },
  {
    name: 'nf-md-square_off',
    code: 0xf12ee,
  },
  {
    name: 'nf-md-square_off_outline',
    code: 0xf12ef,
  },
  {
    name: 'nf-md-square_opacity',
    code: 0xf1854,
  },
  {
    name: 'nf-md-square_outline',
    code: 0xf0763,
  },
  {
    name: 'nf-md-square_root',
    code: 0xf0784,
  },
  {
    name: 'nf-md-square_root_box',
    code: 0xf09a3,
  },
  {
    name: 'nf-md-square_rounded',
    code: 0xf14fb,
  },
  {
    name: 'nf-md-square_rounded_badge',
    code: 0xf1a07,
  },
  {
    name: 'nf-md-square_rounded_badge_outline',
    code: 0xf1a08,
  },
  {
    name: 'nf-md-square_rounded_outline',
    code: 0xf14fc,
  },
  {
    name: 'nf-md-square_small',
    code: 0xf0a15,
  },
  {
    name: 'nf-md-square_wave',
    code: 0xf147b,
  },
  {
    name: 'nf-md-squeegee',
    code: 0xf0ae1,
  },
  {
    name: 'nf-md-ssh',
    code: 0xf08c0,
  },
  {
    name: 'nf-md-stack_exchange',
    code: 0xf060b,
  },
  {
    name: 'nf-md-stack_overflow',
    code: 0xf04cc,
  },
  {
    name: 'nf-md-stackpath',
    code: 0xf0359,
  },
  {
    name: 'nf-md-stadium',
    code: 0xf0ff9,
  },
  {
    name: 'nf-md-stadium_variant',
    code: 0xf0720,
  },
  {
    name: 'nf-md-stairs',
    code: 0xf04cd,
  },
  {
    name: 'nf-md-stairs_box',
    code: 0xf139e,
  },
  {
    name: 'nf-md-stairs_down',
    code: 0xf12be,
  },
  {
    name: 'nf-md-stairs_up',
    code: 0xf12bd,
  },
  {
    name: 'nf-md-stamper',
    code: 0xf0d39,
  },
  {
    name: 'nf-md-standard_definition',
    code: 0xf07ef,
  },
  {
    name: 'nf-md-star',
    code: 0xf04ce,
  },
  {
    name: 'nf-md-star_box',
    code: 0xf0a73,
  },
  {
    name: 'nf-md-star_box_multiple',
    code: 0xf1286,
  },
  {
    name: 'nf-md-star_box_multiple_outline',
    code: 0xf1287,
  },
  {
    name: 'nf-md-star_box_outline',
    code: 0xf0a74,
  },
  {
    name: 'nf-md-star_check',
    code: 0xf1566,
  },
  {
    name: 'nf-md-star_check_outline',
    code: 0xf156a,
  },
  {
    name: 'nf-md-star_circle',
    code: 0xf04cf,
  },
  {
    name: 'nf-md-star_circle_outline',
    code: 0xf09a4,
  },
  {
    name: 'nf-md-star_cog',
    code: 0xf1668,
  },
  {
    name: 'nf-md-star_cog_outline',
    code: 0xf1669,
  },
  {
    name: 'nf-md-star_crescent',
    code: 0xf0979,
  },
  {
    name: 'nf-md-star_david',
    code: 0xf097a,
  },
  {
    name: 'nf-md-star_face',
    code: 0xf09a5,
  },
  {
    name: 'nf-md-star_four_points',
    code: 0xf0ae2,
  },
  {
    name: 'nf-md-star_four_points_outline',
    code: 0xf0ae3,
  },
  {
    name: 'nf-md-star_half',
    code: 0xf0246,
  },
  {
    name: 'nf-md-star_half_full',
    code: 0xf04d0,
  },
  {
    name: 'nf-md-star_minus',
    code: 0xf1564,
  },
  {
    name: 'nf-md-star_minus_outline',
    code: 0xf1568,
  },
  {
    name: 'nf-md-star_off',
    code: 0xf04d1,
  },
  {
    name: 'nf-md-star_off_outline',
    code: 0xf155b,
  },
  {
    name: 'nf-md-star_outline',
    code: 0xf04d2,
  },
  {
    name: 'nf-md-star_plus',
    code: 0xf1563,
  },
  {
    name: 'nf-md-star_plus_outline',
    code: 0xf1567,
  },
  {
    name: 'nf-md-star_remove',
    code: 0xf1565,
  },
  {
    name: 'nf-md-star_remove_outline',
    code: 0xf1569,
  },
  {
    name: 'nf-md-star_settings',
    code: 0xf166a,
  },
  {
    name: 'nf-md-star_settings_outline',
    code: 0xf166b,
  },
  {
    name: 'nf-md-star_shooting',
    code: 0xf1741,
  },
  {
    name: 'nf-md-star_shooting_outline',
    code: 0xf1742,
  },
  {
    name: 'nf-md-star_three_points',
    code: 0xf0ae4,
  },
  {
    name: 'nf-md-star_three_points_outline',
    code: 0xf0ae5,
  },
  {
    name: 'nf-md-state_machine',
    code: 0xf11ef,
  },
  {
    name: 'nf-md-steam',
    code: 0xf04d3,
  },
  {
    name: 'nf-md-steering',
    code: 0xf04d4,
  },
  {
    name: 'nf-md-steering_off',
    code: 0xf090e,
  },
  {
    name: 'nf-md-step_backward',
    code: 0xf04d5,
  },
  {
    name: 'nf-md-step_backward_2',
    code: 0xf04d6,
  },
  {
    name: 'nf-md-step_forward',
    code: 0xf04d7,
  },
  {
    name: 'nf-md-step_forward_2',
    code: 0xf04d8,
  },
  {
    name: 'nf-md-stethoscope',
    code: 0xf04d9,
  },
  {
    name: 'nf-md-sticker',
    code: 0xf1364,
  },
  {
    name: 'nf-md-sticker_alert',
    code: 0xf1365,
  },
  {
    name: 'nf-md-sticker_alert_outline',
    code: 0xf1366,
  },
  {
    name: 'nf-md-sticker_check',
    code: 0xf1367,
  },
  {
    name: 'nf-md-sticker_check_outline',
    code: 0xf1368,
  },
  {
    name: 'nf-md-sticker_circle_outline',
    code: 0xf05d0,
  },
  {
    name: 'nf-md-sticker_emoji',
    code: 0xf0785,
  },
  {
    name: 'nf-md-sticker_minus',
    code: 0xf1369,
  },
  {
    name: 'nf-md-sticker_minus_outline',
    code: 0xf136a,
  },
  {
    name: 'nf-md-sticker_outline',
    code: 0xf136b,
  },
  {
    name: 'nf-md-sticker_plus',
    code: 0xf136c,
  },
  {
    name: 'nf-md-sticker_plus_outline',
    code: 0xf136d,
  },
  {
    name: 'nf-md-sticker_remove',
    code: 0xf136e,
  },
  {
    name: 'nf-md-sticker_remove_outline',
    code: 0xf136f,
  },
  {
    name: 'nf-md-sticker_text',
    code: 0xf178e,
  },
  {
    name: 'nf-md-sticker_text_outline',
    code: 0xf178f,
  },
  {
    name: 'nf-md-stocking',
    code: 0xf04da,
  },
  {
    name: 'nf-md-stomach',
    code: 0xf1093,
  },
  {
    name: 'nf-md-stool',
    code: 0xf195d,
  },
  {
    name: 'nf-md-stool_outline',
    code: 0xf195e,
  },
  {
    name: 'nf-md-stop',
    code: 0xf04db,
  },
  {
    name: 'nf-md-stop_circle',
    code: 0xf0666,
  },
  {
    name: 'nf-md-stop_circle_outline',
    code: 0xf0667,
  },
  {
    name: 'nf-md-storage_tank',
    code: 0xf1a75,
  },
  {
    name: 'nf-md-storage_tank_outline',
    code: 0xf1a76,
  },
  {
    name: 'nf-md-store',
    code: 0xf04dc,
  },
  {
    name: 'nf-md-store_24_hour',
    code: 0xf04dd,
  },
  {
    name: 'nf-md-store_alert',
    code: 0xf18c1,
  },
  {
    name: 'nf-md-store_alert_outline',
    code: 0xf18c2,
  },
  {
    name: 'nf-md-store_check',
    code: 0xf18c3,
  },
  {
    name: 'nf-md-store_check_outline',
    code: 0xf18c4,
  },
  {
    name: 'nf-md-store_clock',
    code: 0xf18c5,
  },
  {
    name: 'nf-md-store_clock_outline',
    code: 0xf18c6,
  },
  {
    name: 'nf-md-store_cog',
    code: 0xf18c7,
  },
  {
    name: 'nf-md-store_cog_outline',
    code: 0xf18c8,
  },
  {
    name: 'nf-md-store_edit',
    code: 0xf18c9,
  },
  {
    name: 'nf-md-store_edit_outline',
    code: 0xf18ca,
  },
  {
    name: 'nf-md-store_marker',
    code: 0xf18cb,
  },
  {
    name: 'nf-md-store_marker_outline',
    code: 0xf18cc,
  },
  {
    name: 'nf-md-store_minus',
    code: 0xf165e,
  },
  {
    name: 'nf-md-store_minus_outline',
    code: 0xf18cd,
  },
  {
    name: 'nf-md-store_off',
    code: 0xf18ce,
  },
  {
    name: 'nf-md-store_off_outline',
    code: 0xf18cf,
  },
  {
    name: 'nf-md-store_outline',
    code: 0xf1361,
  },
  {
    name: 'nf-md-store_plus',
    code: 0xf165f,
  },
  {
    name: 'nf-md-store_plus_outline',
    code: 0xf18d0,
  },
  {
    name: 'nf-md-store_remove',
    code: 0xf1660,
  },
  {
    name: 'nf-md-store_remove_outline',
    code: 0xf18d1,
  },
  {
    name: 'nf-md-store_search',
    code: 0xf18d2,
  },
  {
    name: 'nf-md-store_search_outline',
    code: 0xf18d3,
  },
  {
    name: 'nf-md-store_settings',
    code: 0xf18d4,
  },
  {
    name: 'nf-md-store_settings_outline',
    code: 0xf18d5,
  },
  {
    name: 'nf-md-storefront',
    code: 0xf07c7,
  },
  {
    name: 'nf-md-storefront_outline',
    code: 0xf10c1,
  },
  {
    name: 'nf-md-stove',
    code: 0xf04de,
  },
  {
    name: 'nf-md-strategy',
    code: 0xf11d6,
  },
  {
    name: 'nf-md-stretch_to_page',
    code: 0xf0f2b,
  },
  {
    name: 'nf-md-stretch_to_page_outline',
    code: 0xf0f2c,
  },
  {
    name: 'nf-md-string_lights',
    code: 0xf12ba,
  },
  {
    name: 'nf-md-string_lights_off',
    code: 0xf12bb,
  },
  {
    name: 'nf-md-subdirectory_arrow_left',
    code: 0xf060c,
  },
  {
    name: 'nf-md-subdirectory_arrow_right',
    code: 0xf060d,
  },
  {
    name: 'nf-md-submarine',
    code: 0xf156c,
  },
  {
    name: 'nf-md-subtitles',
    code: 0xf0a16,
  },
  {
    name: 'nf-md-subtitles_outline',
    code: 0xf0a17,
  },
  {
    name: 'nf-md-subway',
    code: 0xf06ac,
  },
  {
    name: 'nf-md-subway_alert_variant',
    code: 0xf0d9d,
  },
  {
    name: 'nf-md-subway_variant',
    code: 0xf04df,
  },
  {
    name: 'nf-md-summit',
    code: 0xf0786,
  },
  {
    name: 'nf-md-sun_clock',
    code: 0xf1a77,
  },
  {
    name: 'nf-md-sun_clock_outline',
    code: 0xf1a78,
  },
  {
    name: 'nf-md-sun_compass',
    code: 0xf19a5,
  },
  {
    name: 'nf-md-sun_snowflake',
    code: 0xf1796,
  },
  {
    name: 'nf-md-sun_snowflake_variant',
    code: 0xf1a79,
  },
  {
    name: 'nf-md-sun_thermometer',
    code: 0xf18d6,
  },
  {
    name: 'nf-md-sun_thermometer_outline',
    code: 0xf18d7,
  },
  {
    name: 'nf-md-sun_wireless',
    code: 0xf17fe,
  },
  {
    name: 'nf-md-sun_wireless_outline',
    code: 0xf17ff,
  },
  {
    name: 'nf-md-sunglasses',
    code: 0xf04e0,
  },
  {
    name: 'nf-md-surfing',
    code: 0xf1746,
  },
  {
    name: 'nf-md-surround_sound',
    code: 0xf05c5,
  },
  {
    name: 'nf-md-surround_sound_2_0',
    code: 0xf07f0,
  },
  {
    name: 'nf-md-surround_sound_2_1',
    code: 0xf1729,
  },
  {
    name: 'nf-md-surround_sound_3_1',
    code: 0xf07f1,
  },
  {
    name: 'nf-md-surround_sound_5_1',
    code: 0xf07f2,
  },
  {
    name: 'nf-md-surround_sound_5_1_2',
    code: 0xf172a,
  },
  {
    name: 'nf-md-surround_sound_7_1',
    code: 0xf07f3,
  },
  {
    name: 'nf-md-svg',
    code: 0xf0721,
  },
  {
    name: 'nf-md-swap_horizontal',
    code: 0xf04e1,
  },
  {
    name: 'nf-md-swap_horizontal_bold',
    code: 0xf0bcd,
  },
  {
    name: 'nf-md-swap_horizontal_circle',
    code: 0xf0fe1,
  },
  {
    name: 'nf-md-swap_horizontal_circle_outline',
    code: 0xf0fe2,
  },
  {
    name: 'nf-md-swap_horizontal_variant',
    code: 0xf08c1,
  },
  {
    name: 'nf-md-swap_vertical',
    code: 0xf04e2,
  },
  {
    name: 'nf-md-swap_vertical_bold',
    code: 0xf0bce,
  },
  {
    name: 'nf-md-swap_vertical_circle',
    code: 0xf0fe3,
  },
  {
    name: 'nf-md-swap_vertical_circle_outline',
    code: 0xf0fe4,
  },
  {
    name: 'nf-md-swap_vertical_variant',
    code: 0xf08c2,
  },
  {
    name: 'nf-md-swim',
    code: 0xf04e3,
  },
  {
    name: 'nf-md-switch',
    code: 0xf04e4,
  },
  {
    name: 'nf-md-sword',
    code: 0xf04e5,
  },
  {
    name: 'nf-md-sword_cross',
    code: 0xf0787,
  },
  {
    name: 'nf-md-syllabary_hangul',
    code: 0xf1333,
  },
  {
    name: 'nf-md-syllabary_hiragana',
    code: 0xf1334,
  },
  {
    name: 'nf-md-syllabary_katakana',
    code: 0xf1335,
  },
  {
    name: 'nf-md-syllabary_katakana_halfwidth',
    code: 0xf1336,
  },
  {
    name: 'nf-md-symbol',
    code: 0xf1501,
  },
  {
    name: 'nf-md-symfony',
    code: 0xf0ae6,
  },
  {
    name: 'nf-md-sync',
    code: 0xf04e6,
  },
  {
    name: 'nf-md-sync_alert',
    code: 0xf04e7,
  },
  {
    name: 'nf-md-sync_circle',
    code: 0xf1378,
  },
  {
    name: 'nf-md-sync_off',
    code: 0xf04e8,
  },
  {
    name: 'nf-md-tab',
    code: 0xf04e9,
  },
  {
    name: 'nf-md-tab_minus',
    code: 0xf0b4b,
  },
  {
    name: 'nf-md-tab_plus',
    code: 0xf075c,
  },
  {
    name: 'nf-md-tab_remove',
    code: 0xf0b4c,
  },
  {
    name: 'nf-md-tab_search',
    code: 0xf199e,
  },
  {
    name: 'nf-md-tab_unselected',
    code: 0xf04ea,
  },
  {
    name: 'nf-md-table',
    code: 0xf04eb,
  },
  {
    name: 'nf-md-table_account',
    code: 0xf13b9,
  },
  {
    name: 'nf-md-table_alert',
    code: 0xf13ba,
  },
  {
    name: 'nf-md-table_arrow_down',
    code: 0xf13bb,
  },
  {
    name: 'nf-md-table_arrow_left',
    code: 0xf13bc,
  },
  {
    name: 'nf-md-table_arrow_right',
    code: 0xf13bd,
  },
  {
    name: 'nf-md-table_arrow_up',
    code: 0xf13be,
  },
  {
    name: 'nf-md-table_border',
    code: 0xf0a18,
  },
  {
    name: 'nf-md-table_cancel',
    code: 0xf13bf,
  },
  {
    name: 'nf-md-table_chair',
    code: 0xf1061,
  },
  {
    name: 'nf-md-table_check',
    code: 0xf13c0,
  },
  {
    name: 'nf-md-table_clock',
    code: 0xf13c1,
  },
  {
    name: 'nf-md-table_cog',
    code: 0xf13c2,
  },
  {
    name: 'nf-md-table_column',
    code: 0xf0835,
  },
  {
    name: 'nf-md-table_column_plus_after',
    code: 0xf04ec,
  },
  {
    name: 'nf-md-table_column_plus_before',
    code: 0xf04ed,
  },
  {
    name: 'nf-md-table_column_remove',
    code: 0xf04ee,
  },
  {
    name: 'nf-md-table_column_width',
    code: 0xf04ef,
  },
  {
    name: 'nf-md-table_edit',
    code: 0xf04f0,
  },
  {
    name: 'nf-md-table_eye',
    code: 0xf1094,
  },
  {
    name: 'nf-md-table_eye_off',
    code: 0xf13c3,
  },
  {
    name: 'nf-md-table_furniture',
    code: 0xf05bc,
  },
  {
    name: 'nf-md-table_headers_eye',
    code: 0xf121d,
  },
  {
    name: 'nf-md-table_headers_eye_off',
    code: 0xf121e,
  },
  {
    name: 'nf-md-table_heart',
    code: 0xf13c4,
  },
  {
    name: 'nf-md-table_key',
    code: 0xf13c5,
  },
  {
    name: 'nf-md-table_large',
    code: 0xf04f1,
  },
  {
    name: 'nf-md-table_large_plus',
    code: 0xf0f87,
  },
  {
    name: 'nf-md-table_large_remove',
    code: 0xf0f88,
  },
  {
    name: 'nf-md-table_lock',
    code: 0xf13c6,
  },
  {
    name: 'nf-md-table_merge_cells',
    code: 0xf09a6,
  },
  {
    name: 'nf-md-table_minus',
    code: 0xf13c7,
  },
  {
    name: 'nf-md-table_multiple',
    code: 0xf13c8,
  },
  {
    name: 'nf-md-table_network',
    code: 0xf13c9,
  },
  {
    name: 'nf-md-table_of_contents',
    code: 0xf0836,
  },
  {
    name: 'nf-md-table_off',
    code: 0xf13ca,
  },
  {
    name: 'nf-md-table_picnic',
    code: 0xf1743,
  },
  {
    name: 'nf-md-table_pivot',
    code: 0xf183c,
  },
  {
    name: 'nf-md-table_plus',
    code: 0xf0a75,
  },
  {
    name: 'nf-md-table_refresh',
    code: 0xf13a0,
  },
  {
    name: 'nf-md-table_remove',
    code: 0xf0a76,
  },
  {
    name: 'nf-md-table_row',
    code: 0xf0837,
  },
  {
    name: 'nf-md-table_row_height',
    code: 0xf04f2,
  },
  {
    name: 'nf-md-table_row_plus_after',
    code: 0xf04f3,
  },
  {
    name: 'nf-md-table_row_plus_before',
    code: 0xf04f4,
  },
  {
    name: 'nf-md-table_row_remove',
    code: 0xf04f5,
  },
  {
    name: 'nf-md-table_search',
    code: 0xf090f,
  },
  {
    name: 'nf-md-table_settings',
    code: 0xf0838,
  },
  {
    name: 'nf-md-table_split_cell',
    code: 0xf142a,
  },
  {
    name: 'nf-md-table_star',
    code: 0xf13cb,
  },
  {
    name: 'nf-md-table_sync',
    code: 0xf13a1,
  },
  {
    name: 'nf-md-table_tennis',
    code: 0xf0e68,
  },
  {
    name: 'nf-md-tablet',
    code: 0xf04f6,
  },
  {
    name: 'nf-md-tablet_android',
    code: 0xf04f7,
  },
  {
    name: 'nf-md-tablet_cellphone',
    code: 0xf09a7,
  },
  {
    name: 'nf-md-tablet_dashboard',
    code: 0xf0ece,
  },
  {
    name: 'nf-md-taco',
    code: 0xf0762,
  },
  {
    name: 'nf-md-tag',
    code: 0xf04f9,
  },
  {
    name: 'nf-md-tag_arrow_down',
    code: 0xf172b,
  },
  {
    name: 'nf-md-tag_arrow_down_outline',
    code: 0xf172c,
  },
  {
    name: 'nf-md-tag_arrow_left',
    code: 0xf172d,
  },
  {
    name: 'nf-md-tag_arrow_left_outline',
    code: 0xf172e,
  },
  {
    name: 'nf-md-tag_arrow_right',
    code: 0xf172f,
  },
  {
    name: 'nf-md-tag_arrow_right_outline',
    code: 0xf1730,
  },
  {
    name: 'nf-md-tag_arrow_up',
    code: 0xf1731,
  },
  {
    name: 'nf-md-tag_arrow_up_outline',
    code: 0xf1732,
  },
  {
    name: 'nf-md-tag_check',
    code: 0xf1a7a,
  },
  {
    name: 'nf-md-tag_check_outline',
    code: 0xf1a7b,
  },
  {
    name: 'nf-md-tag_faces',
    code: 0xf04fa,
  },
  {
    name: 'nf-md-tag_heart',
    code: 0xf068b,
  },
  {
    name: 'nf-md-tag_heart_outline',
    code: 0xf0bcf,
  },
  {
    name: 'nf-md-tag_minus',
    code: 0xf0910,
  },
  {
    name: 'nf-md-tag_minus_outline',
    code: 0xf121f,
  },
  {
    name: 'nf-md-tag_multiple',
    code: 0xf04fb,
  },
  {
    name: 'nf-md-tag_multiple_outline',
    code: 0xf12f7,
  },
  {
    name: 'nf-md-tag_off',
    code: 0xf1220,
  },
  {
    name: 'nf-md-tag_off_outline',
    code: 0xf1221,
  },
  {
    name: 'nf-md-tag_outline',
    code: 0xf04fc,
  },
  {
    name: 'nf-md-tag_plus',
    code: 0xf0722,
  },
  {
    name: 'nf-md-tag_plus_outline',
    code: 0xf1222,
  },
  {
    name: 'nf-md-tag_remove',
    code: 0xf0723,
  },
  {
    name: 'nf-md-tag_remove_outline',
    code: 0xf1223,
  },
  {
    name: 'nf-md-tag_search',
    code: 0xf1907,
  },
  {
    name: 'nf-md-tag_search_outline',
    code: 0xf1908,
  },
  {
    name: 'nf-md-tag_text',
    code: 0xf1224,
  },
  {
    name: 'nf-md-tag_text_outline',
    code: 0xf04fd,
  },
  {
    name: 'nf-md-tailwind',
    code: 0xf13ff,
  },
  {
    name: 'nf-md-tally_mark_1',
    code: 0xf1abc,
  },
  {
    name: 'nf-md-tally_mark_2',
    code: 0xf1abd,
  },
  {
    name: 'nf-md-tally_mark_3',
    code: 0xf1abe,
  },
  {
    name: 'nf-md-tally_mark_4',
    code: 0xf1abf,
  },
  {
    name: 'nf-md-tally_mark_5',
    code: 0xf1ac0,
  },
  {
    name: 'nf-md-tangram',
    code: 0xf04f8,
  },
  {
    name: 'nf-md-tank',
    code: 0xf0d3a,
  },
  {
    name: 'nf-md-tanker_truck',
    code: 0xf0fe5,
  },
  {
    name: 'nf-md-tape_drive',
    code: 0xf16df,
  },
  {
    name: 'nf-md-tape_measure',
    code: 0xf0b4d,
  },
  {
    name: 'nf-md-target',
    code: 0xf04fe,
  },
  {
    name: 'nf-md-target_account',
    code: 0xf0bd0,
  },
  {
    name: 'nf-md-target_variant',
    code: 0xf0a77,
  },
  {
    name: 'nf-md-taxi',
    code: 0xf04ff,
  },
  {
    name: 'nf-md-tea',
    code: 0xf0d9e,
  },
  {
    name: 'nf-md-tea_outline',
    code: 0xf0d9f,
  },
  {
    name: 'nf-md-teamviewer',
    code: 0xf0500,
  },
  {
    name: 'nf-md-teddy_bear',
    code: 0xf18fb,
  },
  {
    name: 'nf-md-telescope',
    code: 0xf0b4e,
  },
  {
    name: 'nf-md-television',
    code: 0xf0502,
  },
  {
    name: 'nf-md-television_ambient_light',
    code: 0xf1356,
  },
  {
    name: 'nf-md-television_box',
    code: 0xf0839,
  },
  {
    name: 'nf-md-television_classic',
    code: 0xf07f4,
  },
  {
    name: 'nf-md-television_classic_off',
    code: 0xf083a,
  },
  {
    name: 'nf-md-television_guide',
    code: 0xf0503,
  },
  {
    name: 'nf-md-television_off',
    code: 0xf083b,
  },
  {
    name: 'nf-md-television_pause',
    code: 0xf0f89,
  },
  {
    name: 'nf-md-television_play',
    code: 0xf0ecf,
  },
  {
    name: 'nf-md-television_shimmer',
    code: 0xf1110,
  },
  {
    name: 'nf-md-television_stop',
    code: 0xf0f8a,
  },
  {
    name: 'nf-md-temperature_celsius',
    code: 0xf0504,
  },
  {
    name: 'nf-md-temperature_fahrenheit',
    code: 0xf0505,
  },
  {
    name: 'nf-md-temperature_kelvin',
    code: 0xf0506,
  },
  {
    name: 'nf-md-tennis',
    code: 0xf0da0,
  },
  {
    name: 'nf-md-tennis_ball',
    code: 0xf0507,
  },
  {
    name: 'nf-md-tent',
    code: 0xf0508,
  },
  {
    name: 'nf-md-terraform',
    code: 0xf1062,
  },
  {
    name: 'nf-md-test_tube',
    code: 0xf0668,
  },
  {
    name: 'nf-md-test_tube_empty',
    code: 0xf0911,
  },
  {
    name: 'nf-md-test_tube_off',
    code: 0xf0912,
  },
  {
    name: 'nf-md-text',
    code: 0xf09a8,
  },
  {
    name: 'nf-md-text_account',
    code: 0xf1570,
  },
  {
    name: 'nf-md-text_box',
    code: 0xf021a,
  },
  {
    name: 'nf-md-text_box_check',
    code: 0xf0ea6,
  },
  {
    name: 'nf-md-text_box_check_outline',
    code: 0xf0ea7,
  },
  {
    name: 'nf-md-text_box_edit',
    code: 0xf1a7c,
  },
  {
    name: 'nf-md-text_box_edit_outline',
    code: 0xf1a7d,
  },
  {
    name: 'nf-md-text_box_minus',
    code: 0xf0ea8,
  },
  {
    name: 'nf-md-text_box_minus_outline',
    code: 0xf0ea9,
  },
  {
    name: 'nf-md-text_box_multiple',
    code: 0xf0ab7,
  },
  {
    name: 'nf-md-text_box_multiple_outline',
    code: 0xf0ab8,
  },
  {
    name: 'nf-md-text_box_outline',
    code: 0xf09ed,
  },
  {
    name: 'nf-md-text_box_plus',
    code: 0xf0eaa,
  },
  {
    name: 'nf-md-text_box_plus_outline',
    code: 0xf0eab,
  },
  {
    name: 'nf-md-text_box_remove',
    code: 0xf0eac,
  },
  {
    name: 'nf-md-text_box_remove_outline',
    code: 0xf0ead,
  },
  {
    name: 'nf-md-text_box_search',
    code: 0xf0eae,
  },
  {
    name: 'nf-md-text_box_search_outline',
    code: 0xf0eaf,
  },
  {
    name: 'nf-md-text_long',
    code: 0xf09aa,
  },
  {
    name: 'nf-md-text_recognition',
    code: 0xf113d,
  },
  {
    name: 'nf-md-text_search',
    code: 0xf13b8,
  },
  {
    name: 'nf-md-text_search_variant',
    code: 0xf1a7e,
  },
  {
    name: 'nf-md-text_shadow',
    code: 0xf0669,
  },
  {
    name: 'nf-md-text_short',
    code: 0xf09a9,
  },
  {
    name: 'nf-md-text_to_speech',
    code: 0xf050a,
  },
  {
    name: 'nf-md-text_to_speech_off',
    code: 0xf050b,
  },
  {
    name: 'nf-md-texture',
    code: 0xf050c,
  },
  {
    name: 'nf-md-texture_box',
    code: 0xf0fe6,
  },
  {
    name: 'nf-md-theater',
    code: 0xf050d,
  },
  {
    name: 'nf-md-theme_light_dark',
    code: 0xf050e,
  },
  {
    name: 'nf-md-thermometer',
    code: 0xf050f,
  },
  {
    name: 'nf-md-thermometer_alert',
    code: 0xf0e01,
  },
  {
    name: 'nf-md-thermometer_bluetooth',
    code: 0xf1895,
  },
  {
    name: 'nf-md-thermometer_check',
    code: 0xf1a7f,
  },
  {
    name: 'nf-md-thermometer_chevron_down',
    code: 0xf0e02,
  },
  {
    name: 'nf-md-thermometer_chevron_up',
    code: 0xf0e03,
  },
  {
    name: 'nf-md-thermometer_high',
    code: 0xf10c2,
  },
  {
    name: 'nf-md-thermometer_lines',
    code: 0xf0510,
  },
  {
    name: 'nf-md-thermometer_low',
    code: 0xf10c3,
  },
  {
    name: 'nf-md-thermometer_minus',
    code: 0xf0e04,
  },
  {
    name: 'nf-md-thermometer_off',
    code: 0xf1531,
  },
  {
    name: 'nf-md-thermometer_plus',
    code: 0xf0e05,
  },
  {
    name: 'nf-md-thermometer_water',
    code: 0xf1a80,
  },
  {
    name: 'nf-md-thermostat',
    code: 0xf0393,
  },
  {
    name: 'nf-md-thermostat_box',
    code: 0xf0891,
  },
  {
    name: 'nf-md-thought_bubble',
    code: 0xf07f6,
  },
  {
    name: 'nf-md-thought_bubble_outline',
    code: 0xf07f7,
  },
  {
    name: 'nf-md-thumb_down',
    code: 0xf0511,
  },
  {
    name: 'nf-md-thumb_down_outline',
    code: 0xf0512,
  },
  {
    name: 'nf-md-thumb_up',
    code: 0xf0513,
  },
  {
    name: 'nf-md-thumb_up_outline',
    code: 0xf0514,
  },
  {
    name: 'nf-md-thumbs_up_down',
    code: 0xf0515,
  },
  {
    name: 'nf-md-thumbs_up_down_outline',
    code: 0xf1914,
  },
  {
    name: 'nf-md-ticket',
    code: 0xf0516,
  },
  {
    name: 'nf-md-ticket_account',
    code: 0xf0517,
  },
  {
    name: 'nf-md-ticket_confirmation',
    code: 0xf0518,
  },
  {
    name: 'nf-md-ticket_confirmation_outline',
    code: 0xf13aa,
  },
  {
    name: 'nf-md-ticket_outline',
    code: 0xf0913,
  },
  {
    name: 'nf-md-ticket_percent',
    code: 0xf0724,
  },
  {
    name: 'nf-md-ticket_percent_outline',
    code: 0xf142b,
  },
  {
    name: 'nf-md-tie',
    code: 0xf0519,
  },
  {
    name: 'nf-md-tilde',
    code: 0xf0725,
  },
  {
    name: 'nf-md-tilde_off',
    code: 0xf18f3,
  },
  {
    name: 'nf-md-timelapse',
    code: 0xf051a,
  },
  {
    name: 'nf-md-timeline',
    code: 0xf0bd1,
  },
  {
    name: 'nf-md-timeline_alert',
    code: 0xf0f95,
  },
  {
    name: 'nf-md-timeline_alert_outline',
    code: 0xf0f98,
  },
  {
    name: 'nf-md-timeline_check',
    code: 0xf1532,
  },
  {
    name: 'nf-md-timeline_check_outline',
    code: 0xf1533,
  },
  {
    name: 'nf-md-timeline_clock',
    code: 0xf11fb,
  },
  {
    name: 'nf-md-timeline_clock_outline',
    code: 0xf11fc,
  },
  {
    name: 'nf-md-timeline_help',
    code: 0xf0f99,
  },
  {
    name: 'nf-md-timeline_help_outline',
    code: 0xf0f9a,
  },
  {
    name: 'nf-md-timeline_minus',
    code: 0xf1534,
  },
  {
    name: 'nf-md-timeline_minus_outline',
    code: 0xf1535,
  },
  {
    name: 'nf-md-timeline_outline',
    code: 0xf0bd2,
  },
  {
    name: 'nf-md-timeline_plus',
    code: 0xf0f96,
  },
  {
    name: 'nf-md-timeline_plus_outline',
    code: 0xf0f97,
  },
  {
    name: 'nf-md-timeline_remove',
    code: 0xf1536,
  },
  {
    name: 'nf-md-timeline_remove_outline',
    code: 0xf1537,
  },
  {
    name: 'nf-md-timeline_text',
    code: 0xf0bd3,
  },
  {
    name: 'nf-md-timeline_text_outline',
    code: 0xf0bd4,
  },
  {
    name: 'nf-md-timer',
    code: 0xf13ab,
  },
  {
    name: 'nf-md-timer_10',
    code: 0xf051c,
  },
  {
    name: 'nf-md-timer_3',
    code: 0xf051d,
  },
  {
    name: 'nf-md-timer_alert',
    code: 0xf1acc,
  },
  {
    name: 'nf-md-timer_alert_outline',
    code: 0xf1acd,
  },
  {
    name: 'nf-md-timer_cancel',
    code: 0xf1ace,
  },
  {
    name: 'nf-md-timer_cancel_outline',
    code: 0xf1acf,
  },
  {
    name: 'nf-md-timer_check',
    code: 0xf1ad0,
  },
  {
    name: 'nf-md-timer_check_outline',
    code: 0xf1ad1,
  },
  {
    name: 'nf-md-timer_cog',
    code: 0xf1925,
  },
  {
    name: 'nf-md-timer_cog_outline',
    code: 0xf1926,
  },
  {
    name: 'nf-md-timer_edit',
    code: 0xf1ad2,
  },
  {
    name: 'nf-md-timer_edit_outline',
    code: 0xf1ad3,
  },
  {
    name: 'nf-md-timer_lock',
    code: 0xf1ad4,
  },
  {
    name: 'nf-md-timer_lock_open',
    code: 0xf1ad5,
  },
  {
    name: 'nf-md-timer_lock_open_outline',
    code: 0xf1ad6,
  },
  {
    name: 'nf-md-timer_lock_outline',
    code: 0xf1ad7,
  },
  {
    name: 'nf-md-timer_marker',
    code: 0xf1ad8,
  },
  {
    name: 'nf-md-timer_marker_outline',
    code: 0xf1ad9,
  },
  {
    name: 'nf-md-timer_minus',
    code: 0xf1ada,
  },
  {
    name: 'nf-md-timer_minus_outline',
    code: 0xf1adb,
  },
  {
    name: 'nf-md-timer_music',
    code: 0xf1adc,
  },
  {
    name: 'nf-md-timer_music_outline',
    code: 0xf1add,
  },
  {
    name: 'nf-md-timer_off',
    code: 0xf13ac,
  },
  {
    name: 'nf-md-timer_off_outline',
    code: 0xf051e,
  },
  {
    name: 'nf-md-timer_outline',
    code: 0xf051b,
  },
  {
    name: 'nf-md-timer_pause',
    code: 0xf1ade,
  },
  {
    name: 'nf-md-timer_pause_outline',
    code: 0xf1adf,
  },
  {
    name: 'nf-md-timer_play',
    code: 0xf1ae0,
  },
  {
    name: 'nf-md-timer_play_outline',
    code: 0xf1ae1,
  },
  {
    name: 'nf-md-timer_plus',
    code: 0xf1ae2,
  },
  {
    name: 'nf-md-timer_plus_outline',
    code: 0xf1ae3,
  },
  {
    name: 'nf-md-timer_refresh',
    code: 0xf1ae4,
  },
  {
    name: 'nf-md-timer_refresh_outline',
    code: 0xf1ae5,
  },
  {
    name: 'nf-md-timer_remove',
    code: 0xf1ae6,
  },
  {
    name: 'nf-md-timer_remove_outline',
    code: 0xf1ae7,
  },
  {
    name: 'nf-md-timer_sand',
    code: 0xf051f,
  },
  {
    name: 'nf-md-timer_sand_complete',
    code: 0xf199f,
  },
  {
    name: 'nf-md-timer_sand_empty',
    code: 0xf06ad,
  },
  {
    name: 'nf-md-timer_sand_full',
    code: 0xf078c,
  },
  {
    name: 'nf-md-timer_sand_paused',
    code: 0xf19a0,
  },
  {
    name: 'nf-md-timer_settings',
    code: 0xf1923,
  },
  {
    name: 'nf-md-timer_settings_outline',
    code: 0xf1924,
  },
  {
    name: 'nf-md-timer_star',
    code: 0xf1ae8,
  },
  {
    name: 'nf-md-timer_star_outline',
    code: 0xf1ae9,
  },
  {
    name: 'nf-md-timer_stop',
    code: 0xf1aea,
  },
  {
    name: 'nf-md-timer_stop_outline',
    code: 0xf1aeb,
  },
  {
    name: 'nf-md-timer_sync',
    code: 0xf1aec,
  },
  {
    name: 'nf-md-timer_sync_outline',
    code: 0xf1aed,
  },
  {
    name: 'nf-md-timetable',
    code: 0xf0520,
  },
  {
    name: 'nf-md-tire',
    code: 0xf1896,
  },
  {
    name: 'nf-md-toaster',
    code: 0xf1063,
  },
  {
    name: 'nf-md-toaster_off',
    code: 0xf11b7,
  },
  {
    name: 'nf-md-toaster_oven',
    code: 0xf0cd3,
  },
  {
    name: 'nf-md-toggle_switch',
    code: 0xf0521,
  },
  {
    name: 'nf-md-toggle_switch_off',
    code: 0xf0522,
  },
  {
    name: 'nf-md-toggle_switch_off_outline',
    code: 0xf0a19,
  },
  {
    name: 'nf-md-toggle_switch_outline',
    code: 0xf0a1a,
  },
  {
    name: 'nf-md-toggle_switch_variant',
    code: 0xf1a25,
  },
  {
    name: 'nf-md-toggle_switch_variant_off',
    code: 0xf1a26,
  },
  {
    name: 'nf-md-toilet',
    code: 0xf09ab,
  },
  {
    name: 'nf-md-toolbox',
    code: 0xf09ac,
  },
  {
    name: 'nf-md-toolbox_outline',
    code: 0xf09ad,
  },
  {
    name: 'nf-md-tools',
    code: 0xf1064,
  },
  {
    name: 'nf-md-tooltip',
    code: 0xf0523,
  },
  {
    name: 'nf-md-tooltip_account',
    code: 0xf000c,
  },
  {
    name: 'nf-md-tooltip_cellphone',
    code: 0xf183b,
  },
  {
    name: 'nf-md-tooltip_check',
    code: 0xf155c,
  },
  {
    name: 'nf-md-tooltip_check_outline',
    code: 0xf155d,
  },
  {
    name: 'nf-md-tooltip_edit',
    code: 0xf0524,
  },
  {
    name: 'nf-md-tooltip_edit_outline',
    code: 0xf12c5,
  },
  {
    name: 'nf-md-tooltip_image',
    code: 0xf0525,
  },
  {
    name: 'nf-md-tooltip_image_outline',
    code: 0xf0bd5,
  },
  {
    name: 'nf-md-tooltip_minus',
    code: 0xf155e,
  },
  {
    name: 'nf-md-tooltip_minus_outline',
    code: 0xf155f,
  },
  {
    name: 'nf-md-tooltip_outline',
    code: 0xf0526,
  },
  {
    name: 'nf-md-tooltip_plus',
    code: 0xf0bd6,
  },
  {
    name: 'nf-md-tooltip_plus_outline',
    code: 0xf0527,
  },
  {
    name: 'nf-md-tooltip_remove',
    code: 0xf1560,
  },
  {
    name: 'nf-md-tooltip_remove_outline',
    code: 0xf1561,
  },
  {
    name: 'nf-md-tooltip_text',
    code: 0xf0528,
  },
  {
    name: 'nf-md-tooltip_text_outline',
    code: 0xf0bd7,
  },
  {
    name: 'nf-md-tooth',
    code: 0xf08c3,
  },
  {
    name: 'nf-md-tooth_outline',
    code: 0xf0529,
  },
  {
    name: 'nf-md-toothbrush',
    code: 0xf1129,
  },
  {
    name: 'nf-md-toothbrush_electric',
    code: 0xf112c,
  },
  {
    name: 'nf-md-toothbrush_paste',
    code: 0xf112a,
  },
  {
    name: 'nf-md-torch',
    code: 0xf1606,
  },
  {
    name: 'nf-md-tortoise',
    code: 0xf0d3b,
  },
  {
    name: 'nf-md-toslink',
    code: 0xf12b8,
  },
  {
    name: 'nf-md-tournament',
    code: 0xf09ae,
  },
  {
    name: 'nf-md-tow_truck',
    code: 0xf083c,
  },
  {
    name: 'nf-md-tower_beach',
    code: 0xf0681,
  },
  {
    name: 'nf-md-tower_fire',
    code: 0xf0682,
  },
  {
    name: 'nf-md-town_hall',
    code: 0xf1875,
  },
  {
    name: 'nf-md-toy_brick',
    code: 0xf1288,
  },
  {
    name: 'nf-md-toy_brick_marker',
    code: 0xf1289,
  },
  {
    name: 'nf-md-toy_brick_marker_outline',
    code: 0xf128a,
  },
  {
    name: 'nf-md-toy_brick_minus',
    code: 0xf128b,
  },
  {
    name: 'nf-md-toy_brick_minus_outline',
    code: 0xf128c,
  },
  {
    name: 'nf-md-toy_brick_outline',
    code: 0xf128d,
  },
  {
    name: 'nf-md-toy_brick_plus',
    code: 0xf128e,
  },
  {
    name: 'nf-md-toy_brick_plus_outline',
    code: 0xf128f,
  },
  {
    name: 'nf-md-toy_brick_remove',
    code: 0xf1290,
  },
  {
    name: 'nf-md-toy_brick_remove_outline',
    code: 0xf1291,
  },
  {
    name: 'nf-md-toy_brick_search',
    code: 0xf1292,
  },
  {
    name: 'nf-md-toy_brick_search_outline',
    code: 0xf1293,
  },
  {
    name: 'nf-md-track_light',
    code: 0xf0914,
  },
  {
    name: 'nf-md-trackpad',
    code: 0xf07f8,
  },
  {
    name: 'nf-md-trackpad_lock',
    code: 0xf0933,
  },
  {
    name: 'nf-md-tractor',
    code: 0xf0892,
  },
  {
    name: 'nf-md-tractor_variant',
    code: 0xf14c4,
  },
  {
    name: 'nf-md-trademark',
    code: 0xf0a78,
  },
  {
    name: 'nf-md-traffic_cone',
    code: 0xf137c,
  },
  {
    name: 'nf-md-traffic_light',
    code: 0xf052b,
  },
  {
    name: 'nf-md-traffic_light_outline',
    code: 0xf182a,
  },
  {
    name: 'nf-md-train',
    code: 0xf052c,
  },
  {
    name: 'nf-md-train_car',
    code: 0xf0bd8,
  },
  {
    name: 'nf-md-train_car_passenger',
    code: 0xf1733,
  },
  {
    name: 'nf-md-train_car_passenger_door',
    code: 0xf1734,
  },
  {
    name: 'nf-md-train_car_passenger_door_open',
    code: 0xf1735,
  },
  {
    name: 'nf-md-train_car_passenger_variant',
    code: 0xf1736,
  },
  {
    name: 'nf-md-train_variant',
    code: 0xf08c4,
  },
  {
    name: 'nf-md-tram',
    code: 0xf052d,
  },
  {
    name: 'nf-md-tram_side',
    code: 0xf0fe7,
  },
  {
    name: 'nf-md-transcribe',
    code: 0xf052e,
  },
  {
    name: 'nf-md-transcribe_close',
    code: 0xf052f,
  },
  {
    name: 'nf-md-transfer',
    code: 0xf1065,
  },
  {
    name: 'nf-md-transfer_down',
    code: 0xf0da1,
  },
  {
    name: 'nf-md-transfer_left',
    code: 0xf0da2,
  },
  {
    name: 'nf-md-transfer_right',
    code: 0xf0530,
  },
  {
    name: 'nf-md-transfer_up',
    code: 0xf0da3,
  },
  {
    name: 'nf-md-transit_connection',
    code: 0xf0d3c,
  },
  {
    name: 'nf-md-transit_connection_horizontal',
    code: 0xf1546,
  },
  {
    name: 'nf-md-transit_connection_variant',
    code: 0xf0d3d,
  },
  {
    name: 'nf-md-transit_detour',
    code: 0xf0f8b,
  },
  {
    name: 'nf-md-transit_skip',
    code: 0xf1515,
  },
  {
    name: 'nf-md-transit_transfer',
    code: 0xf06ae,
  },
  {
    name: 'nf-md-transition',
    code: 0xf0915,
  },
  {
    name: 'nf-md-transition_masked',
    code: 0xf0916,
  },
  {
    name: 'nf-md-translate',
    code: 0xf05ca,
  },
  {
    name: 'nf-md-translate_off',
    code: 0xf0e06,
  },
  {
    name: 'nf-md-transmission_tower',
    code: 0xf0d3e,
  },
  {
    name: 'nf-md-transmission_tower_export',
    code: 0xf192c,
  },
  {
    name: 'nf-md-transmission_tower_import',
    code: 0xf192d,
  },
  {
    name: 'nf-md-transmission_tower_off',
    code: 0xf19dd,
  },
  {
    name: 'nf-md-trash_can',
    code: 0xf0a79,
  },
  {
    name: 'nf-md-trash_can_outline',
    code: 0xf0a7a,
  },
  {
    name: 'nf-md-tray',
    code: 0xf1294,
  },
  {
    name: 'nf-md-tray_alert',
    code: 0xf1295,
  },
  {
    name: 'nf-md-tray_arrow_down',
    code: 0xf0120,
  },
  {
    name: 'nf-md-tray_arrow_up',
    code: 0xf011d,
  },
  {
    name: 'nf-md-tray_full',
    code: 0xf1296,
  },
  {
    name: 'nf-md-tray_minus',
    code: 0xf1297,
  },
  {
    name: 'nf-md-tray_plus',
    code: 0xf1298,
  },
  {
    name: 'nf-md-tray_remove',
    code: 0xf1299,
  },
  {
    name: 'nf-md-treasure_chest',
    code: 0xf0726,
  },
  {
    name: 'nf-md-tree',
    code: 0xf0531,
  },
  {
    name: 'nf-md-tree_outline',
    code: 0xf0e69,
  },
  {
    name: 'nf-md-trello',
    code: 0xf0532,
  },
  {
    name: 'nf-md-trending_down',
    code: 0xf0533,
  },
  {
    name: 'nf-md-trending_neutral',
    code: 0xf0534,
  },
  {
    name: 'nf-md-trending_up',
    code: 0xf0535,
  },
  {
    name: 'nf-md-triangle',
    code: 0xf0536,
  },
  {
    name: 'nf-md-triangle_outline',
    code: 0xf0537,
  },
  {
    name: 'nf-md-triangle_small_down',
    code: 0xf1a09,
  },
  {
    name: 'nf-md-triangle_small_up',
    code: 0xf1a0a,
  },
  {
    name: 'nf-md-triangle_wave',
    code: 0xf147c,
  },
  {
    name: 'nf-md-triforce',
    code: 0xf0bd9,
  },
  {
    name: 'nf-md-trophy',
    code: 0xf0538,
  },
  {
    name: 'nf-md-trophy_award',
    code: 0xf0539,
  },
  {
    name: 'nf-md-trophy_broken',
    code: 0xf0da4,
  },
  {
    name: 'nf-md-trophy_outline',
    code: 0xf053a,
  },
  {
    name: 'nf-md-trophy_variant',
    code: 0xf053b,
  },
  {
    name: 'nf-md-trophy_variant_outline',
    code: 0xf053c,
  },
  {
    name: 'nf-md-truck',
    code: 0xf053d,
  },
  {
    name: 'nf-md-truck_alert',
    code: 0xf19de,
  },
  {
    name: 'nf-md-truck_alert_outline',
    code: 0xf19df,
  },
  {
    name: 'nf-md-truck_cargo_container',
    code: 0xf18d8,
  },
  {
    name: 'nf-md-truck_check',
    code: 0xf0cd4,
  },
  {
    name: 'nf-md-truck_check_outline',
    code: 0xf129a,
  },
  {
    name: 'nf-md-truck_delivery',
    code: 0xf053e,
  },
  {
    name: 'nf-md-truck_delivery_outline',
    code: 0xf129b,
  },
  {
    name: 'nf-md-truck_fast',
    code: 0xf0788,
  },
  {
    name: 'nf-md-truck_fast_outline',
    code: 0xf129c,
  },
  {
    name: 'nf-md-truck_flatbed',
    code: 0xf1891,
  },
  {
    name: 'nf-md-truck_minus',
    code: 0xf19ae,
  },
  {
    name: 'nf-md-truck_minus_outline',
    code: 0xf19bd,
  },
  {
    name: 'nf-md-truck_outline',
    code: 0xf129d,
  },
  {
    name: 'nf-md-truck_plus',
    code: 0xf19ad,
  },
  {
    name: 'nf-md-truck_plus_outline',
    code: 0xf19bc,
  },
  {
    name: 'nf-md-truck_remove',
    code: 0xf19af,
  },
  {
    name: 'nf-md-truck_remove_outline',
    code: 0xf19be,
  },
  {
    name: 'nf-md-truck_snowflake',
    code: 0xf19a6,
  },
  {
    name: 'nf-md-truck_trailer',
    code: 0xf0727,
  },
  {
    name: 'nf-md-trumpet',
    code: 0xf1096,
  },
  {
    name: 'nf-md-tshirt_crew',
    code: 0xf0a7b,
  },
  {
    name: 'nf-md-tshirt_crew_outline',
    code: 0xf053f,
  },
  {
    name: 'nf-md-tshirt_v',
    code: 0xf0a7c,
  },
  {
    name: 'nf-md-tshirt_v_outline',
    code: 0xf0540,
  },
  {
    name: 'nf-md-tsunami',
    code: 0xf1a81,
  },
  {
    name: 'nf-md-tumble_dryer',
    code: 0xf0917,
  },
  {
    name: 'nf-md-tumble_dryer_alert',
    code: 0xf11ba,
  },
  {
    name: 'nf-md-tumble_dryer_off',
    code: 0xf11bb,
  },
  {
    name: 'nf-md-tune',
    code: 0xf062e,
  },
  {
    name: 'nf-md-tune_variant',
    code: 0xf1542,
  },
  {
    name: 'nf-md-tune_vertical',
    code: 0xf066a,
  },
  {
    name: 'nf-md-tune_vertical_variant',
    code: 0xf1543,
  },
  {
    name: 'nf-md-tunnel',
    code: 0xf183d,
  },
  {
    name: 'nf-md-tunnel_outline',
    code: 0xf183e,
  },
  {
    name: 'nf-md-turbine',
    code: 0xf1a82,
  },
  {
    name: 'nf-md-turkey',
    code: 0xf171b,
  },
  {
    name: 'nf-md-turnstile',
    code: 0xf0cd5,
  },
  {
    name: 'nf-md-turnstile_outline',
    code: 0xf0cd6,
  },
  {
    name: 'nf-md-turtle',
    code: 0xf0cd7,
  },
  {
    name: 'nf-md-twitch',
    code: 0xf0543,
  },
  {
    name: 'nf-md-twitter',
    code: 0xf0544,
  },
  {
    name: 'nf-md-two_factor_authentication',
    code: 0xf09af,
  },
  {
    name: 'nf-md-typewriter',
    code: 0xf0f2d,
  },
  {
    name: 'nf-md-ubisoft',
    code: 0xf0bda,
  },
  {
    name: 'nf-md-ubuntu',
    code: 0xf0548,
  },
  {
    name: 'nf-md-ufo',
    code: 0xf10c4,
  },
  {
    name: 'nf-md-ufo_outline',
    code: 0xf10c5,
  },
  {
    name: 'nf-md-ultra_high_definition',
    code: 0xf07f9,
  },
  {
    name: 'nf-md-umbraco',
    code: 0xf0549,
  },
  {
    name: 'nf-md-umbrella',
    code: 0xf054a,
  },
  {
    name: 'nf-md-umbrella_beach',
    code: 0xf188a,
  },
  {
    name: 'nf-md-umbrella_beach_outline',
    code: 0xf188b,
  },
  {
    name: 'nf-md-umbrella_closed',
    code: 0xf09b0,
  },
  {
    name: 'nf-md-umbrella_closed_outline',
    code: 0xf13e2,
  },
  {
    name: 'nf-md-umbrella_closed_variant',
    code: 0xf13e1,
  },
  {
    name: 'nf-md-umbrella_outline',
    code: 0xf054b,
  },
  {
    name: 'nf-md-undo',
    code: 0xf054c,
  },
  {
    name: 'nf-md-undo_variant',
    code: 0xf054d,
  },
  {
    name: 'nf-md-unfold_less_horizontal',
    code: 0xf054e,
  },
  {
    name: 'nf-md-unfold_less_vertical',
    code: 0xf0760,
  },
  {
    name: 'nf-md-unfold_more_horizontal',
    code: 0xf054f,
  },
  {
    name: 'nf-md-unfold_more_vertical',
    code: 0xf0761,
  },
  {
    name: 'nf-md-ungroup',
    code: 0xf0550,
  },
  {
    name: 'nf-md-unicode',
    code: 0xf0ed0,
  },
  {
    name: 'nf-md-unicorn',
    code: 0xf15c2,
  },
  {
    name: 'nf-md-unicorn_variant',
    code: 0xf15c3,
  },
  {
    name: 'nf-md-unicycle',
    code: 0xf15e5,
  },
  {
    name: 'nf-md-unity',
    code: 0xf06af,
  },
  {
    name: 'nf-md-unreal',
    code: 0xf09b1,
  },
  {
    name: 'nf-md-update',
    code: 0xf06b0,
  },
  {
    name: 'nf-md-upload',
    code: 0xf0552,
  },
  {
    name: 'nf-md-upload_lock',
    code: 0xf1373,
  },
  {
    name: 'nf-md-upload_lock_outline',
    code: 0xf1374,
  },
  {
    name: 'nf-md-upload_multiple',
    code: 0xf083d,
  },
  {
    name: 'nf-md-upload_network',
    code: 0xf06f6,
  },
  {
    name: 'nf-md-upload_network_outline',
    code: 0xf0cd8,
  },
  {
    name: 'nf-md-upload_off',
    code: 0xf10c6,
  },
  {
    name: 'nf-md-upload_off_outline',
    code: 0xf10c7,
  },
  {
    name: 'nf-md-upload_outline',
    code: 0xf0e07,
  },
  {
    name: 'nf-md-usb',
    code: 0xf0553,
  },
  {
    name: 'nf-md-usb_flash_drive',
    code: 0xf129e,
  },
  {
    name: 'nf-md-usb_flash_drive_outline',
    code: 0xf129f,
  },
  {
    name: 'nf-md-usb_port',
    code: 0xf11f0,
  },
  {
    name: 'nf-md-vacuum',
    code: 0xf19a1,
  },
  {
    name: 'nf-md-vacuum_outline',
    code: 0xf19a2,
  },
  {
    name: 'nf-md-valve',
    code: 0xf1066,
  },
  {
    name: 'nf-md-valve_closed',
    code: 0xf1067,
  },
  {
    name: 'nf-md-valve_open',
    code: 0xf1068,
  },
  {
    name: 'nf-md-van_passenger',
    code: 0xf07fa,
  },
  {
    name: 'nf-md-van_utility',
    code: 0xf07fb,
  },
  {
    name: 'nf-md-vanish',
    code: 0xf07fc,
  },
  {
    name: 'nf-md-vanish_quarter',
    code: 0xf1554,
  },
  {
    name: 'nf-md-vanity_light',
    code: 0xf11e1,
  },
  {
    name: 'nf-md-variable',
    code: 0xf0ae7,
  },
  {
    name: 'nf-md-variable_box',
    code: 0xf1111,
  },
  {
    name: 'nf-md-vector_arrange_above',
    code: 0xf0554,
  },
  {
    name: 'nf-md-vector_arrange_below',
    code: 0xf0555,
  },
  {
    name: 'nf-md-vector_bezier',
    code: 0xf0ae8,
  },
  {
    name: 'nf-md-vector_circle',
    code: 0xf0556,
  },
  {
    name: 'nf-md-vector_circle_variant',
    code: 0xf0557,
  },
  {
    name: 'nf-md-vector_combine',
    code: 0xf0558,
  },
  {
    name: 'nf-md-vector_curve',
    code: 0xf0559,
  },
  {
    name: 'nf-md-vector_difference',
    code: 0xf055a,
  },
  {
    name: 'nf-md-vector_difference_ab',
    code: 0xf055b,
  },
  {
    name: 'nf-md-vector_difference_ba',
    code: 0xf055c,
  },
  {
    name: 'nf-md-vector_ellipse',
    code: 0xf0893,
  },
  {
    name: 'nf-md-vector_intersection',
    code: 0xf055d,
  },
  {
    name: 'nf-md-vector_line',
    code: 0xf055e,
  },
  {
    name: 'nf-md-vector_link',
    code: 0xf0fe8,
  },
  {
    name: 'nf-md-vector_point',
    code: 0xf055f,
  },
  {
    name: 'nf-md-vector_polygon',
    code: 0xf0560,
  },
  {
    name: 'nf-md-vector_polygon_variant',
    code: 0xf1856,
  },
  {
    name: 'nf-md-vector_polyline',
    code: 0xf0561,
  },
  {
    name: 'nf-md-vector_polyline_edit',
    code: 0xf1225,
  },
  {
    name: 'nf-md-vector_polyline_minus',
    code: 0xf1226,
  },
  {
    name: 'nf-md-vector_polyline_plus',
    code: 0xf1227,
  },
  {
    name: 'nf-md-vector_polyline_remove',
    code: 0xf1228,
  },
  {
    name: 'nf-md-vector_radius',
    code: 0xf074a,
  },
  {
    name: 'nf-md-vector_rectangle',
    code: 0xf05c6,
  },
  {
    name: 'nf-md-vector_selection',
    code: 0xf0562,
  },
  {
    name: 'nf-md-vector_square',
    code: 0xf0001,
  },
  {
    name: 'nf-md-vector_square_close',
    code: 0xf1857,
  },
  {
    name: 'nf-md-vector_square_edit',
    code: 0xf18d9,
  },
  {
    name: 'nf-md-vector_square_minus',
    code: 0xf18da,
  },
  {
    name: 'nf-md-vector_square_open',
    code: 0xf1858,
  },
  {
    name: 'nf-md-vector_square_plus',
    code: 0xf18db,
  },
  {
    name: 'nf-md-vector_square_remove',
    code: 0xf18dc,
  },
  {
    name: 'nf-md-vector_triangle',
    code: 0xf0563,
  },
  {
    name: 'nf-md-vector_union',
    code: 0xf0564,
  },
  {
    name: 'nf-md-vhs',
    code: 0xf0a1b,
  },
  {
    name: 'nf-md-vibrate',
    code: 0xf0566,
  },
  {
    name: 'nf-md-vibrate_off',
    code: 0xf0cd9,
  },
  {
    name: 'nf-md-video',
    code: 0xf0567,
  },
  {
    name: 'nf-md-video_2d',
    code: 0xf1a1c,
  },
  {
    name: 'nf-md-video_3d',
    code: 0xf07fd,
  },
  {
    name: 'nf-md-video_3d_off',
    code: 0xf13d9,
  },
  {
    name: 'nf-md-video_3d_variant',
    code: 0xf0ed1,
  },
  {
    name: 'nf-md-video_4k_box',
    code: 0xf083e,
  },
  {
    name: 'nf-md-video_account',
    code: 0xf0919,
  },
  {
    name: 'nf-md-video_box',
    code: 0xf00fd,
  },
  {
    name: 'nf-md-video_box_off',
    code: 0xf00fe,
  },
  {
    name: 'nf-md-video_check',
    code: 0xf1069,
  },
  {
    name: 'nf-md-video_check_outline',
    code: 0xf106a,
  },
  {
    name: 'nf-md-video_high_definition',
    code: 0xf152e,
  },
  {
    name: 'nf-md-video_image',
    code: 0xf091a,
  },
  {
    name: 'nf-md-video_input_antenna',
    code: 0xf083f,
  },
  {
    name: 'nf-md-video_input_component',
    code: 0xf0840,
  },
  {
    name: 'nf-md-video_input_hdmi',
    code: 0xf0841,
  },
  {
    name: 'nf-md-video_input_scart',
    code: 0xf0f8c,
  },
  {
    name: 'nf-md-video_input_svideo',
    code: 0xf0842,
  },
  {
    name: 'nf-md-video_marker',
    code: 0xf19a9,
  },
  {
    name: 'nf-md-video_marker_outline',
    code: 0xf19aa,
  },
  {
    name: 'nf-md-video_minus',
    code: 0xf09b2,
  },
  {
    name: 'nf-md-video_minus_outline',
    code: 0xf02ba,
  },
  {
    name: 'nf-md-video_off',
    code: 0xf0568,
  },
  {
    name: 'nf-md-video_off_outline',
    code: 0xf0bdb,
  },
  {
    name: 'nf-md-video_outline',
    code: 0xf0bdc,
  },
  {
    name: 'nf-md-video_plus',
    code: 0xf09b3,
  },
  {
    name: 'nf-md-video_plus_outline',
    code: 0xf01d3,
  },
  {
    name: 'nf-md-video_stabilization',
    code: 0xf091b,
  },
  {
    name: 'nf-md-video_switch',
    code: 0xf0569,
  },
  {
    name: 'nf-md-video_switch_outline',
    code: 0xf0790,
  },
  {
    name: 'nf-md-video_vintage',
    code: 0xf0a1c,
  },
  {
    name: 'nf-md-video_wireless',
    code: 0xf0ed2,
  },
  {
    name: 'nf-md-video_wireless_outline',
    code: 0xf0ed3,
  },
  {
    name: 'nf-md-view_agenda',
    code: 0xf056a,
  },
  {
    name: 'nf-md-view_agenda_outline',
    code: 0xf11d8,
  },
  {
    name: 'nf-md-view_array',
    code: 0xf056b,
  },
  {
    name: 'nf-md-view_array_outline',
    code: 0xf1485,
  },
  {
    name: 'nf-md-view_carousel',
    code: 0xf056c,
  },
  {
    name: 'nf-md-view_carousel_outline',
    code: 0xf1486,
  },
  {
    name: 'nf-md-view_column',
    code: 0xf056d,
  },
  {
    name: 'nf-md-view_column_outline',
    code: 0xf1487,
  },
  {
    name: 'nf-md-view_comfy',
    code: 0xf0e6a,
  },
  {
    name: 'nf-md-view_comfy_outline',
    code: 0xf1488,
  },
  {
    name: 'nf-md-view_compact',
    code: 0xf0e6b,
  },
  {
    name: 'nf-md-view_compact_outline',
    code: 0xf0e6c,
  },
  {
    name: 'nf-md-view_dashboard',
    code: 0xf056e,
  },
  {
    name: 'nf-md-view_dashboard_edit',
    code: 0xf1947,
  },
  {
    name: 'nf-md-view_dashboard_edit_outline',
    code: 0xf1948,
  },
  {
    name: 'nf-md-view_dashboard_outline',
    code: 0xf0a1d,
  },
  {
    name: 'nf-md-view_dashboard_variant',
    code: 0xf0843,
  },
  {
    name: 'nf-md-view_dashboard_variant_outline',
    code: 0xf1489,
  },
  {
    name: 'nf-md-view_day',
    code: 0xf056f,
  },
  {
    name: 'nf-md-view_day_outline',
    code: 0xf148a,
  },
  {
    name: 'nf-md-view_gallery',
    code: 0xf1888,
  },
  {
    name: 'nf-md-view_gallery_outline',
    code: 0xf1889,
  },
  {
    name: 'nf-md-view_grid',
    code: 0xf0570,
  },
  {
    name: 'nf-md-view_grid_outline',
    code: 0xf11d9,
  },
  {
    name: 'nf-md-view_grid_plus',
    code: 0xf0f8d,
  },
  {
    name: 'nf-md-view_grid_plus_outline',
    code: 0xf11da,
  },
  {
    name: 'nf-md-view_headline',
    code: 0xf0571,
  },
  {
    name: 'nf-md-view_list',
    code: 0xf0572,
  },
  {
    name: 'nf-md-view_list_outline',
    code: 0xf148b,
  },
  {
    name: 'nf-md-view_module',
    code: 0xf0573,
  },
  {
    name: 'nf-md-view_module_outline',
    code: 0xf148c,
  },
  {
    name: 'nf-md-view_parallel',
    code: 0xf0728,
  },
  {
    name: 'nf-md-view_parallel_outline',
    code: 0xf148d,
  },
  {
    name: 'nf-md-view_quilt',
    code: 0xf0574,
  },
  {
    name: 'nf-md-view_quilt_outline',
    code: 0xf148e,
  },
  {
    name: 'nf-md-view_sequential',
    code: 0xf0729,
  },
  {
    name: 'nf-md-view_sequential_outline',
    code: 0xf148f,
  },
  {
    name: 'nf-md-view_split_horizontal',
    code: 0xf0bcb,
  },
  {
    name: 'nf-md-view_split_vertical',
    code: 0xf0bcc,
  },
  {
    name: 'nf-md-view_stream',
    code: 0xf0575,
  },
  {
    name: 'nf-md-view_stream_outline',
    code: 0xf1490,
  },
  {
    name: 'nf-md-view_week',
    code: 0xf0576,
  },
  {
    name: 'nf-md-view_week_outline',
    code: 0xf1491,
  },
  {
    name: 'nf-md-vimeo',
    code: 0xf0577,
  },
  {
    name: 'nf-md-violin',
    code: 0xf060f,
  },
  {
    name: 'nf-md-virtual_reality',
    code: 0xf0894,
  },
  {
    name: 'nf-md-virus',
    code: 0xf13b6,
  },
  {
    name: 'nf-md-virus_off',
    code: 0xf18e1,
  },
  {
    name: 'nf-md-virus_off_outline',
    code: 0xf18e2,
  },
  {
    name: 'nf-md-virus_outline',
    code: 0xf13b7,
  },
  {
    name: 'nf-md-vlc',
    code: 0xf057c,
  },
  {
    name: 'nf-md-voicemail',
    code: 0xf057d,
  },
  {
    name: 'nf-md-volcano',
    code: 0xf1a83,
  },
  {
    name: 'nf-md-volcano_outline',
    code: 0xf1a84,
  },
  {
    name: 'nf-md-volleyball',
    code: 0xf09b4,
  },
  {
    name: 'nf-md-volume_high',
    code: 0xf057e,
  },
  {
    name: 'nf-md-volume_low',
    code: 0xf057f,
  },
  {
    name: 'nf-md-volume_medium',
    code: 0xf0580,
  },
  {
    name: 'nf-md-volume_minus',
    code: 0xf075e,
  },
  {
    name: 'nf-md-volume_mute',
    code: 0xf075f,
  },
  {
    name: 'nf-md-volume_off',
    code: 0xf0581,
  },
  {
    name: 'nf-md-volume_plus',
    code: 0xf075d,
  },
  {
    name: 'nf-md-volume_source',
    code: 0xf1120,
  },
  {
    name: 'nf-md-volume_variant_off',
    code: 0xf0e08,
  },
  {
    name: 'nf-md-volume_vibrate',
    code: 0xf1121,
  },
  {
    name: 'nf-md-vote',
    code: 0xf0a1f,
  },
  {
    name: 'nf-md-vote_outline',
    code: 0xf0a20,
  },
  {
    name: 'nf-md-vpn',
    code: 0xf0582,
  },
  {
    name: 'nf-md-vuejs',
    code: 0xf0844,
  },
  {
    name: 'nf-md-vuetify',
    code: 0xf0e6d,
  },
  {
    name: 'nf-md-walk',
    code: 0xf0583,
  },
  {
    name: 'nf-md-wall',
    code: 0xf07fe,
  },
  {
    name: 'nf-md-wall_fire',
    code: 0xf1a11,
  },
  {
    name: 'nf-md-wall_sconce',
    code: 0xf091c,
  },
  {
    name: 'nf-md-wall_sconce_flat',
    code: 0xf091d,
  },
  {
    name: 'nf-md-wall_sconce_flat_outline',
    code: 0xf17c9,
  },
  {
    name: 'nf-md-wall_sconce_flat_variant',
    code: 0xf041c,
  },
  {
    name: 'nf-md-wall_sconce_flat_variant_outline',
    code: 0xf17ca,
  },
  {
    name: 'nf-md-wall_sconce_outline',
    code: 0xf17cb,
  },
  {
    name: 'nf-md-wall_sconce_round',
    code: 0xf0748,
  },
  {
    name: 'nf-md-wall_sconce_round_outline',
    code: 0xf17cc,
  },
  {
    name: 'nf-md-wall_sconce_round_variant',
    code: 0xf091e,
  },
  {
    name: 'nf-md-wall_sconce_round_variant_outline',
    code: 0xf17cd,
  },
  {
    name: 'nf-md-wallet',
    code: 0xf0584,
  },
  {
    name: 'nf-md-wallet_giftcard',
    code: 0xf0585,
  },
  {
    name: 'nf-md-wallet_membership',
    code: 0xf0586,
  },
  {
    name: 'nf-md-wallet_outline',
    code: 0xf0bdd,
  },
  {
    name: 'nf-md-wallet_plus',
    code: 0xf0f8e,
  },
  {
    name: 'nf-md-wallet_plus_outline',
    code: 0xf0f8f,
  },
  {
    name: 'nf-md-wallet_travel',
    code: 0xf0587,
  },
  {
    name: 'nf-md-wallpaper',
    code: 0xf0e09,
  },
  {
    name: 'nf-md-wan',
    code: 0xf0588,
  },
  {
    name: 'nf-md-wardrobe',
    code: 0xf0f90,
  },
  {
    name: 'nf-md-wardrobe_outline',
    code: 0xf0f91,
  },
  {
    name: 'nf-md-warehouse',
    code: 0xf0f81,
  },
  {
    name: 'nf-md-washing_machine',
    code: 0xf072a,
  },
  {
    name: 'nf-md-washing_machine_alert',
    code: 0xf11bc,
  },
  {
    name: 'nf-md-washing_machine_off',
    code: 0xf11bd,
  },
  {
    name: 'nf-md-watch',
    code: 0xf0589,
  },
  {
    name: 'nf-md-watch_export',
    code: 0xf058a,
  },
  {
    name: 'nf-md-watch_export_variant',
    code: 0xf0895,
  },
  {
    name: 'nf-md-watch_import',
    code: 0xf058b,
  },
  {
    name: 'nf-md-watch_import_variant',
    code: 0xf0896,
  },
  {
    name: 'nf-md-watch_variant',
    code: 0xf0897,
  },
  {
    name: 'nf-md-watch_vibrate',
    code: 0xf06b1,
  },
  {
    name: 'nf-md-watch_vibrate_off',
    code: 0xf0cda,
  },
  {
    name: 'nf-md-water',
    code: 0xf058c,
  },
  {
    name: 'nf-md-water_alert',
    code: 0xf1502,
  },
  {
    name: 'nf-md-water_alert_outline',
    code: 0xf1503,
  },
  {
    name: 'nf-md-water_boiler',
    code: 0xf0f92,
  },
  {
    name: 'nf-md-water_boiler_alert',
    code: 0xf11b3,
  },
  {
    name: 'nf-md-water_boiler_off',
    code: 0xf11b4,
  },
  {
    name: 'nf-md-water_check',
    code: 0xf1504,
  },
  {
    name: 'nf-md-water_check_outline',
    code: 0xf1505,
  },
  {
    name: 'nf-md-water_circle',
    code: 0xf1806,
  },
  {
    name: 'nf-md-water_minus',
    code: 0xf1506,
  },
  {
    name: 'nf-md-water_minus_outline',
    code: 0xf1507,
  },
  {
    name: 'nf-md-water_off',
    code: 0xf058d,
  },
  {
    name: 'nf-md-water_off_outline',
    code: 0xf1508,
  },
  {
    name: 'nf-md-water_opacity',
    code: 0xf1855,
  },
  {
    name: 'nf-md-water_outline',
    code: 0xf0e0a,
  },
  {
    name: 'nf-md-water_percent',
    code: 0xf058e,
  },
  {
    name: 'nf-md-water_percent_alert',
    code: 0xf1509,
  },
  {
    name: 'nf-md-water_plus',
    code: 0xf150a,
  },
  {
    name: 'nf-md-water_plus_outline',
    code: 0xf150b,
  },
  {
    name: 'nf-md-water_polo',
    code: 0xf12a0,
  },
  {
    name: 'nf-md-water_pump',
    code: 0xf058f,
  },
  {
    name: 'nf-md-water_pump_off',
    code: 0xf0f93,
  },
  {
    name: 'nf-md-water_remove',
    code: 0xf150c,
  },
  {
    name: 'nf-md-water_remove_outline',
    code: 0xf150d,
  },
  {
    name: 'nf-md-water_sync',
    code: 0xf17c6,
  },
  {
    name: 'nf-md-water_thermometer',
    code: 0xf1a85,
  },
  {
    name: 'nf-md-water_thermometer_outline',
    code: 0xf1a86,
  },
  {
    name: 'nf-md-water_well',
    code: 0xf106b,
  },
  {
    name: 'nf-md-water_well_outline',
    code: 0xf106c,
  },
  {
    name: 'nf-md-waterfall',
    code: 0xf1849,
  },
  {
    name: 'nf-md-watering_can',
    code: 0xf1481,
  },
  {
    name: 'nf-md-watering_can_outline',
    code: 0xf1482,
  },
  {
    name: 'nf-md-watermark',
    code: 0xf0612,
  },
  {
    name: 'nf-md-wave',
    code: 0xf0f2e,
  },
  {
    name: 'nf-md-waveform',
    code: 0xf147d,
  },
  {
    name: 'nf-md-waves',
    code: 0xf078d,
  },
  {
    name: 'nf-md-waves_arrow_left',
    code: 0xf1859,
  },
  {
    name: 'nf-md-waves_arrow_right',
    code: 0xf185a,
  },
  {
    name: 'nf-md-waves_arrow_up',
    code: 0xf185b,
  },
  {
    name: 'nf-md-waze',
    code: 0xf0bde,
  },
  {
    name: 'nf-md-weather_cloudy',
    code: 0xf0590,
  },
  {
    name: 'nf-md-weather_cloudy_alert',
    code: 0xf0f2f,
  },
  {
    name: 'nf-md-weather_cloudy_arrow_right',
    code: 0xf0e6e,
  },
  {
    name: 'nf-md-weather_cloudy_clock',
    code: 0xf18f6,
  },
  {
    name: 'nf-md-weather_fog',
    code: 0xf0591,
  },
  {
    name: 'nf-md-weather_hail',
    code: 0xf0592,
  },
  {
    name: 'nf-md-weather_hazy',
    code: 0xf0f30,
  },
  {
    name: 'nf-md-weather_hurricane',
    code: 0xf0898,
  },
  {
    name: 'nf-md-weather_lightning',
    code: 0xf0593,
  },
  {
    name: 'nf-md-weather_lightning_rainy',
    code: 0xf067e,
  },
  {
    name: 'nf-md-weather_night',
    code: 0xf0594,
  },
  {
    name: 'nf-md-weather_night_partly_cloudy',
    code: 0xf0f31,
  },
  {
    name: 'nf-md-weather_partly_cloudy',
    code: 0xf0595,
  },
  {
    name: 'nf-md-weather_partly_lightning',
    code: 0xf0f32,
  },
  {
    name: 'nf-md-weather_partly_rainy',
    code: 0xf0f33,
  },
  {
    name: 'nf-md-weather_partly_snowy',
    code: 0xf0f34,
  },
  {
    name: 'nf-md-weather_partly_snowy_rainy',
    code: 0xf0f35,
  },
  {
    name: 'nf-md-weather_pouring',
    code: 0xf0596,
  },
  {
    name: 'nf-md-weather_rainy',
    code: 0xf0597,
  },
  {
    name: 'nf-md-weather_snowy',
    code: 0xf0598,
  },
  {
    name: 'nf-md-weather_snowy_heavy',
    code: 0xf0f36,
  },
  {
    name: 'nf-md-weather_snowy_rainy',
    code: 0xf067f,
  },
  {
    name: 'nf-md-weather_sunny',
    code: 0xf0599,
  },
  {
    name: 'nf-md-weather_sunny_alert',
    code: 0xf0f37,
  },
  {
    name: 'nf-md-weather_sunny_off',
    code: 0xf14e4,
  },
  {
    name: 'nf-md-weather_sunset',
    code: 0xf059a,
  },
  {
    name: 'nf-md-weather_sunset_down',
    code: 0xf059b,
  },
  {
    name: 'nf-md-weather_sunset_up',
    code: 0xf059c,
  },
  {
    name: 'nf-md-weather_tornado',
    code: 0xf0f38,
  },
  {
    name: 'nf-md-weather_windy',
    code: 0xf059d,
  },
  {
    name: 'nf-md-weather_windy_variant',
    code: 0xf059e,
  },
  {
    name: 'nf-md-web',
    code: 0xf059f,
  },
  {
    name: 'nf-md-web_box',
    code: 0xf0f94,
  },
  {
    name: 'nf-md-web_cancel',
    code: 0xf1790,
  },
  {
    name: 'nf-md-web_check',
    code: 0xf0789,
  },
  {
    name: 'nf-md-web_clock',
    code: 0xf124a,
  },
  {
    name: 'nf-md-web_minus',
    code: 0xf10a0,
  },
  {
    name: 'nf-md-web_off',
    code: 0xf0a8e,
  },
  {
    name: 'nf-md-web_plus',
    code: 0xf0033,
  },
  {
    name: 'nf-md-web_refresh',
    code: 0xf1791,
  },
  {
    name: 'nf-md-web_remove',
    code: 0xf0551,
  },
  {
    name: 'nf-md-web_sync',
    code: 0xf1792,
  },
  {
    name: 'nf-md-webcam',
    code: 0xf05a0,
  },
  {
    name: 'nf-md-webcam_off',
    code: 0xf1737,
  },
  {
    name: 'nf-md-webhook',
    code: 0xf062f,
  },
  {
    name: 'nf-md-webpack',
    code: 0xf072b,
  },
  {
    name: 'nf-md-webrtc',
    code: 0xf1248,
  },
  {
    name: 'nf-md-wechat',
    code: 0xf0611,
  },
  {
    name: 'nf-md-weight',
    code: 0xf05a1,
  },
  {
    name: 'nf-md-weight_gram',
    code: 0xf0d3f,
  },
  {
    name: 'nf-md-weight_kilogram',
    code: 0xf05a2,
  },
  {
    name: 'nf-md-weight_lifter',
    code: 0xf115d,
  },
  {
    name: 'nf-md-weight_pound',
    code: 0xf09b5,
  },
  {
    name: 'nf-md-whatsapp',
    code: 0xf05a3,
  },
  {
    name: 'nf-md-wheel_barrow',
    code: 0xf14f2,
  },
  {
    name: 'nf-md-wheelchair',
    code: 0xf1a87,
  },
  {
    name: 'nf-md-wheelchair_accessibility',
    code: 0xf05a4,
  },
  {
    name: 'nf-md-whistle',
    code: 0xf09b6,
  },
  {
    name: 'nf-md-whistle_outline',
    code: 0xf12bc,
  },
  {
    name: 'nf-md-white_balance_auto',
    code: 0xf05a5,
  },
  {
    name: 'nf-md-white_balance_incandescent',
    code: 0xf05a6,
  },
  {
    name: 'nf-md-white_balance_iridescent',
    code: 0xf05a7,
  },
  {
    name: 'nf-md-white_balance_sunny',
    code: 0xf05a8,
  },
  {
    name: 'nf-md-widgets',
    code: 0xf072c,
  },
  {
    name: 'nf-md-widgets_outline',
    code: 0xf1355,
  },
  {
    name: 'nf-md-wifi',
    code: 0xf05a9,
  },
  {
    name: 'nf-md-wifi_alert',
    code: 0xf16b5,
  },
  {
    name: 'nf-md-wifi_arrow_down',
    code: 0xf16b6,
  },
  {
    name: 'nf-md-wifi_arrow_left',
    code: 0xf16b7,
  },
  {
    name: 'nf-md-wifi_arrow_left_right',
    code: 0xf16b8,
  },
  {
    name: 'nf-md-wifi_arrow_right',
    code: 0xf16b9,
  },
  {
    name: 'nf-md-wifi_arrow_up',
    code: 0xf16ba,
  },
  {
    name: 'nf-md-wifi_arrow_up_down',
    code: 0xf16bb,
  },
  {
    name: 'nf-md-wifi_cancel',
    code: 0xf16bc,
  },
  {
    name: 'nf-md-wifi_check',
    code: 0xf16bd,
  },
  {
    name: 'nf-md-wifi_cog',
    code: 0xf16be,
  },
  {
    name: 'nf-md-wifi_lock',
    code: 0xf16bf,
  },
  {
    name: 'nf-md-wifi_lock_open',
    code: 0xf16c0,
  },
  {
    name: 'nf-md-wifi_marker',
    code: 0xf16c1,
  },
  {
    name: 'nf-md-wifi_minus',
    code: 0xf16c2,
  },
  {
    name: 'nf-md-wifi_off',
    code: 0xf05aa,
  },
  {
    name: 'nf-md-wifi_plus',
    code: 0xf16c3,
  },
  {
    name: 'nf-md-wifi_refresh',
    code: 0xf16c4,
  },
  {
    name: 'nf-md-wifi_remove',
    code: 0xf16c5,
  },
  {
    name: 'nf-md-wifi_settings',
    code: 0xf16c6,
  },
  {
    name: 'nf-md-wifi_star',
    code: 0xf0e0b,
  },
  {
    name: 'nf-md-wifi_strength_1',
    code: 0xf091f,
  },
  {
    name: 'nf-md-wifi_strength_1_alert',
    code: 0xf0920,
  },
  {
    name: 'nf-md-wifi_strength_1_lock',
    code: 0xf0921,
  },
  {
    name: 'nf-md-wifi_strength_1_lock_open',
    code: 0xf16cb,
  },
  {
    name: 'nf-md-wifi_strength_2',
    code: 0xf0922,
  },
  {
    name: 'nf-md-wifi_strength_2_alert',
    code: 0xf0923,
  },
  {
    name: 'nf-md-wifi_strength_2_lock',
    code: 0xf0924,
  },
  {
    name: 'nf-md-wifi_strength_2_lock_open',
    code: 0xf16cc,
  },
  {
    name: 'nf-md-wifi_strength_3',
    code: 0xf0925,
  },
  {
    name: 'nf-md-wifi_strength_3_alert',
    code: 0xf0926,
  },
  {
    name: 'nf-md-wifi_strength_3_lock',
    code: 0xf0927,
  },
  {
    name: 'nf-md-wifi_strength_3_lock_open',
    code: 0xf16cd,
  },
  {
    name: 'nf-md-wifi_strength_4',
    code: 0xf0928,
  },
  {
    name: 'nf-md-wifi_strength_4_alert',
    code: 0xf0929,
  },
  {
    name: 'nf-md-wifi_strength_4_lock',
    code: 0xf092a,
  },
  {
    name: 'nf-md-wifi_strength_4_lock_open',
    code: 0xf16ce,
  },
  {
    name: 'nf-md-wifi_strength_alert_outline',
    code: 0xf092b,
  },
  {
    name: 'nf-md-wifi_strength_lock_open_outline',
    code: 0xf16cf,
  },
  {
    name: 'nf-md-wifi_strength_lock_outline',
    code: 0xf092c,
  },
  {
    name: 'nf-md-wifi_strength_off',
    code: 0xf092d,
  },
  {
    name: 'nf-md-wifi_strength_off_outline',
    code: 0xf092e,
  },
  {
    name: 'nf-md-wifi_strength_outline',
    code: 0xf092f,
  },
  {
    name: 'nf-md-wifi_sync',
    code: 0xf16c7,
  },
  {
    name: 'nf-md-wikipedia',
    code: 0xf05ac,
  },
  {
    name: 'nf-md-wind_power',
    code: 0xf1a88,
  },
  {
    name: 'nf-md-wind_power_outline',
    code: 0xf1a89,
  },
  {
    name: 'nf-md-wind_turbine',
    code: 0xf0da5,
  },
  {
    name: 'nf-md-wind_turbine_alert',
    code: 0xf19ab,
  },
  {
    name: 'nf-md-wind_turbine_check',
    code: 0xf19ac,
  },
  {
    name: 'nf-md-window_close',
    code: 0xf05ad,
  },
  {
    name: 'nf-md-window_closed',
    code: 0xf05ae,
  },
  {
    name: 'nf-md-window_closed_variant',
    code: 0xf11db,
  },
  {
    name: 'nf-md-window_maximize',
    code: 0xf05af,
  },
  {
    name: 'nf-md-window_minimize',
    code: 0xf05b0,
  },
  {
    name: 'nf-md-window_open',
    code: 0xf05b1,
  },
  {
    name: 'nf-md-window_open_variant',
    code: 0xf11dc,
  },
  {
    name: 'nf-md-window_restore',
    code: 0xf05b2,
  },
  {
    name: 'nf-md-window_shutter',
    code: 0xf111c,
  },
  {
    name: 'nf-md-window_shutter_alert',
    code: 0xf111d,
  },
  {
    name: 'nf-md-window_shutter_cog',
    code: 0xf1a8a,
  },
  {
    name: 'nf-md-window_shutter_open',
    code: 0xf111e,
  },
  {
    name: 'nf-md-window_shutter_settings',
    code: 0xf1a8b,
  },
  {
    name: 'nf-md-windsock',
    code: 0xf15fa,
  },
  {
    name: 'nf-md-wiper',
    code: 0xf0ae9,
  },
  {
    name: 'nf-md-wiper_wash',
    code: 0xf0da6,
  },
  {
    name: 'nf-md-wiper_wash_alert',
    code: 0xf18df,
  },
  {
    name: 'nf-md-wizard_hat',
    code: 0xf1477,
  },
  {
    name: 'nf-md-wordpress',
    code: 0xf05b4,
  },
  {
    name: 'nf-md-wrap',
    code: 0xf05b6,
  },
  {
    name: 'nf-md-wrap_disabled',
    code: 0xf0bdf,
  },
  {
    name: 'nf-md-wrench',
    code: 0xf05b7,
  },
  {
    name: 'nf-md-wrench_clock',
    code: 0xf19a3,
  },
  {
    name: 'nf-md-wrench_outline',
    code: 0xf0be0,
  },
  {
    name: 'nf-md-xamarin',
    code: 0xf0845,
  },
  {
    name: 'nf-md-xml',
    code: 0xf05c0,
  },
  {
    name: 'nf-md-xmpp',
    code: 0xf07ff,
  },
  {
    name: 'nf-md-yahoo',
    code: 0xf0b4f,
  },
  {
    name: 'nf-md-yeast',
    code: 0xf05c1,
  },
  {
    name: 'nf-md-yin_yang',
    code: 0xf0680,
  },
  {
    name: 'nf-md-yoga',
    code: 0xf117c,
  },
  {
    name: 'nf-md-youtube',
    code: 0xf05c3,
  },
  {
    name: 'nf-md-youtube_gaming',
    code: 0xf0848,
  },
  {
    name: 'nf-md-youtube_studio',
    code: 0xf0847,
  },
  {
    name: 'nf-md-youtube_subscription',
    code: 0xf0d40,
  },
  {
    name: 'nf-md-youtube_tv',
    code: 0xf0448,
  },
  {
    name: 'nf-md-yurt',
    code: 0xf1516,
  },
  {
    name: 'nf-md-z_wave',
    code: 0xf0aea,
  },
  {
    name: 'nf-md-zend',
    code: 0xf0aeb,
  },
  {
    name: 'nf-md-zigbee',
    code: 0xf0d41,
  },
  {
    name: 'nf-md-zip_box',
    code: 0xf05c4,
  },
  {
    name: 'nf-md-zip_box_outline',
    code: 0xf0ffa,
  },
  {
    name: 'nf-md-zip_disk',
    code: 0xf0a23,
  },
  {
    name: 'nf-md-zodiac_aquarius',
    code: 0xf0a7d,
  },
  {
    name: 'nf-md-zodiac_aries',
    code: 0xf0a7e,
  },
  {
    name: 'nf-md-zodiac_cancer',
    code: 0xf0a7f,
  },
  {
    name: 'nf-md-zodiac_capricorn',
    code: 0xf0a80,
  },
  {
    name: 'nf-md-zodiac_gemini',
    code: 0xf0a81,
  },
  {
    name: 'nf-md-zodiac_leo',
    code: 0xf0a82,
  },
  {
    name: 'nf-md-zodiac_libra',
    code: 0xf0a83,
  },
  {
    name: 'nf-md-zodiac_pisces',
    code: 0xf0a84,
  },
  {
    name: 'nf-md-zodiac_sagittarius',
    code: 0xf0a85,
  },
  {
    name: 'nf-md-zodiac_scorpio',
    code: 0xf0a86,
  },
  {
    name: 'nf-md-zodiac_taurus',
    code: 0xf0a87,
  },
  {
    name: 'nf-md-zodiac_virgo',
    code: 0xf0a88,
  },
  {
    name: 'nf-oct-accessibility',
    code: 0xf406,
  },
  {
    name: 'nf-oct-accessibility_inset',
    code: 0xf40b,
  },
  {
    name: 'nf-oct-alert',
    code: 0xf421,
  },
  {
    name: 'nf-oct-alert_fill',
    code: 0xf40c,
  },
  {
    name: 'nf-oct-apps',
    code: 0xf40e,
  },
  {
    name: 'nf-oct-archive',
    code: 0xf411,
  },
  {
    name: 'nf-oct-arrow_both',
    code: 0xf416,
  },
  {
    name: 'nf-oct-arrow_down',
    code: 0xf433,
  },
  {
    name: 'nf-oct-arrow_down_left',
    code: 0xf424,
  },
  {
    name: 'nf-oct-arrow_down_right',
    code: 0xf43e,
  },
  {
    name: 'nf-oct-arrow_left',
    code: 0xf434,
  },
  {
    name: 'nf-oct-arrow_right',
    code: 0xf432,
  },
  {
    name: 'nf-oct-arrow_switch',
    code: 0xf443,
  },
  {
    name: 'nf-oct-arrow_up',
    code: 0xf431,
  },
  {
    name: 'nf-oct-arrow_up_left',
    code: 0xf45c,
  },
  {
    name: 'nf-oct-arrow_up_right',
    code: 0xf46c,
  },
  {
    name: 'nf-oct-beaker',
    code: 0xf499,
  },
  {
    name: 'nf-oct-bell',
    code: 0xf49a,
  },
  {
    name: 'nf-oct-bell_fill',
    code: 0xf476,
  },
  {
    name: 'nf-oct-bell_slash',
    code: 0xf478,
  },
  {
    name: 'nf-oct-blocked',
    code: 0xf479,
  },
  {
    name: 'nf-oct-bold',
    code: 0xf49d,
  },
  {
    name: 'nf-oct-book',
    code: 0xf405,
  },
  {
    name: 'nf-oct-bookmark',
    code: 0xf461,
  },
  {
    name: 'nf-oct-bookmark_fill',
    code: 0xf47a,
  },
  {
    name: 'nf-oct-bookmark_slash',
    code: 0xf533,
  },
  {
    name: 'nf-oct-bookmark_slash_fill',
    code: 0xf493,
  },
  {
    name: 'nf-oct-briefcase',
    code: 0xf491,
  },
  {
    name: 'nf-oct-broadcast',
    code: 0xf43c,
  },
  {
    name: 'nf-oct-browser',
    code: 0xf488,
  },
  {
    name: 'nf-oct-bug',
    code: 0xf46f,
  },
  {
    name: 'nf-oct-cache',
    code: 0xf49b,
  },
  {
    name: 'nf-oct-calendar',
    code: 0xf455,
  },
  {
    name: 'nf-oct-check',
    code: 0xf42e,
  },
  {
    name: 'nf-oct-check_circle',
    code: 0xf49e,
  },
  {
    name: 'nf-oct-check_circle_fill',
    code: 0xf4a4,
  },
  {
    name: 'nf-oct-checkbox',
    code: 0xf4a7,
  },
  {
    name: 'nf-oct-checklist',
    code: 0xf45e,
  },
  {
    name: 'nf-oct-chevron_down',
    code: 0xf47c,
  },
  {
    name: 'nf-oct-chevron_left',
    code: 0xf47d,
  },
  {
    name: 'nf-oct-chevron_right',
    code: 0xf460,
  },
  {
    name: 'nf-oct-chevron_up',
    code: 0xf47b,
  },
  {
    name: 'nf-oct-circle',
    code: 0xf4aa,
  },
  {
    name: 'nf-oct-circle_slash',
    code: 0xf468,
  },
  {
    name: 'nf-oct-clock',
    code: 0xf43a,
  },
  {
    name: 'nf-oct-clock_fill',
    code: 0xf4ab,
  },
  {
    name: 'nf-oct-cloud',
    code: 0xf4ac,
  },
  {
    name: 'nf-oct-cloud_offline',
    code: 0xf4ad,
  },
  {
    name: 'nf-oct-code',
    code: 0xf44f,
  },
  {
    name: 'nf-oct-code_of_conduct',
    code: 0xf4ae,
  },
  {
    name: 'nf-oct-code_review',
    code: 0xf4af,
  },
  {
    name: 'nf-oct-code_square',
    code: 0xf4b0,
  },
  {
    name: 'nf-oct-codescan',
    code: 0xf4b1,
  },
  {
    name: 'nf-oct-codescan_checkmark',
    code: 0xf4b2,
  },
  {
    name: 'nf-oct-codespaces',
    code: 0xf4b3,
  },
  {
    name: 'nf-oct-columns',
    code: 0xf4b4,
  },
  {
    name: 'nf-oct-command_palette',
    code: 0xf4b5,
  },
  {
    name: 'nf-oct-comment',
    code: 0xf41f,
  },
  {
    name: 'nf-oct-comment_discussion',
    code: 0xf442,
  },
  {
    name: 'nf-oct-commit',
    code: 0xf4b6,
  },
  {
    name: 'nf-oct-container',
    code: 0xf4b7,
  },
  {
    name: 'nf-oct-copilot',
    code: 0xf4b8,
  },
  {
    name: 'nf-oct-copilot_error',
    code: 0xf4b9,
  },
  {
    name: 'nf-oct-copilot_warning',
    code: 0xf4ba,
  },
  {
    name: 'nf-oct-copy',
    code: 0xf4bb,
  },
  {
    name: 'nf-oct-cpu',
    code: 0xf4bc,
  },
  {
    name: 'nf-oct-credit_card',
    code: 0xf439,
  },
  {
    name: 'nf-oct-cross_reference',
    code: 0xf4bd,
  },
  {
    name: 'nf-oct-dash',
    code: 0xf48b,
  },
  {
    name: 'nf-oct-database',
    code: 0xf472,
  },
  {
    name: 'nf-oct-dependabot',
    code: 0xf4be,
  },
  {
    name: 'nf-oct-desktop_download',
    code: 0xf498,
  },
  {
    name: 'nf-oct-device_camera',
    code: 0xf446,
  },
  {
    name: 'nf-oct-device_camera_video',
    code: 0xf447,
  },
  {
    name: 'nf-oct-device_desktop',
    code: 0xf4a9,
  },
  {
    name: 'nf-oct-device_mobile',
    code: 0xf42c,
  },
  {
    name: 'nf-oct-diamond',
    code: 0xf4bf,
  },
  {
    name: 'nf-oct-diff',
    code: 0xf440,
  },
  {
    name: 'nf-oct-diff_added',
    code: 0xf457,
  },
  {
    name: 'nf-oct-diff_ignored',
    code: 0xf474,
  },
  {
    name: 'nf-oct-diff_modified',
    code: 0xf459,
  },
  {
    name: 'nf-oct-diff_removed',
    code: 0xf458,
  },
  {
    name: 'nf-oct-diff_renamed',
    code: 0xf45a,
  },
  {
    name: 'nf-oct-discussion_closed',
    code: 0xf4c0,
  },
  {
    name: 'nf-oct-discussion_duplicate',
    code: 0xf4c1,
  },
  {
    name: 'nf-oct-discussion_outdated',
    code: 0xf4c2,
  },
  {
    name: 'nf-oct-dot',
    code: 0xf4c3,
  },
  {
    name: 'nf-oct-dot_fill',
    code: 0xf444,
  },
  {
    name: 'nf-oct-download',
    code: 0xf409,
  },
  {
    name: 'nf-oct-duplicate',
    code: 0xf4c4,
  },
  {
    name: 'nf-oct-ellipsis',
    code: 0xf475,
  },
  {
    name: 'nf-oct-eye',
    code: 0xf441,
  },
  {
    name: 'nf-oct-eye_closed',
    code: 0xf4c5,
  },
  {
    name: 'nf-oct-feed_discussion',
    code: 0xf4c6,
  },
  {
    name: 'nf-oct-feed_forked',
    code: 0xf4c7,
  },
  {
    name: 'nf-oct-feed_heart',
    code: 0xf4c8,
  },
  {
    name: 'nf-oct-feed_merged',
    code: 0xf4c9,
  },
  {
    name: 'nf-oct-feed_person',
    code: 0xf4ca,
  },
  {
    name: 'nf-oct-feed_repo',
    code: 0xf4cb,
  },
  {
    name: 'nf-oct-feed_rocket',
    code: 0xf4cc,
  },
  {
    name: 'nf-oct-feed_star',
    code: 0xf4cd,
  },
  {
    name: 'nf-oct-feed_tag',
    code: 0xf4ce,
  },
  {
    name: 'nf-oct-feed_trophy',
    code: 0xf4cf,
  },
  {
    name: 'nf-oct-file',
    code: 0xf4a5,
  },
  {
    name: 'nf-oct-file_added',
    code: 0xf4d0,
  },
  {
    name: 'nf-oct-file_badge',
    code: 0xf4d1,
  },
  {
    name: 'nf-oct-file_binary',
    code: 0xf471,
  },
  {
    name: 'nf-oct-file_code',
    code: 0xf40d,
  },
  {
    name: 'nf-oct-file_diff',
    code: 0xf4d2,
  },
  {
    name: 'nf-oct-file_directory',
    code: 0xf413,
  },
  {
    name: 'nf-oct-file_directory_fill',
    code: 0xf4d3,
  },
  {
    name: 'nf-oct-file_directory_open_fill',
    code: 0xf4d4,
  },
  {
    name: 'nf-oct-file_media',
    code: 0xf40f,
  },
  {
    name: 'nf-oct-file_moved',
    code: 0xf4d5,
  },
  {
    name: 'nf-oct-file_removed',
    code: 0xf4d6,
  },
  {
    name: 'nf-oct-file_submodule',
    code: 0xf414,
  },
  {
    name: 'nf-oct-file_symlink_directory',
    code: 0xf482,
  },
  {
    name: 'nf-oct-file_symlink_file',
    code: 0xf481,
  },
  {
    name: 'nf-oct-file_zip',
    code: 0xf410,
  },
  {
    name: 'nf-oct-filter',
    code: 0xf4d7,
  },
  {
    name: 'nf-oct-fiscal_host',
    code: 0xf4d8,
  },
  {
    name: 'nf-oct-flame',
    code: 0xf490,
  },
  {
    name: 'nf-oct-fold',
    code: 0xf48c,
  },
  {
    name: 'nf-oct-fold_down',
    code: 0xf4d9,
  },
  {
    name: 'nf-oct-fold_up',
    code: 0xf4da,
  },
  {
    name: 'nf-oct-gear',
    code: 0xf423,
  },
  {
    name: 'nf-oct-gift',
    code: 0xf436,
  },
  {
    name: 'nf-oct-git_branch',
    code: 0xf418,
  },
  {
    name: 'nf-oct-git_commit',
    code: 0xf417,
  },
  {
    name: 'nf-oct-git_compare',
    code: 0xf47f,
  },
  {
    name: 'nf-oct-git_merge',
    code: 0xf419,
  },
  {
    name: 'nf-oct-git_merge_queue',
    code: 0xf4db,
  },
  {
    name: 'nf-oct-git_pull_request',
    code: 0xf407,
  },
  {
    name: 'nf-oct-git_pull_request_closed',
    code: 0xf4dc,
  },
  {
    name: 'nf-oct-git_pull_request_draft',
    code: 0xf4dd,
  },
  {
    name: 'nf-oct-globe',
    code: 0xf484,
  },
  {
    name: 'nf-oct-goal',
    code: 0xf4de,
  },
  {
    name: 'nf-oct-grabber',
    code: 0xf4a6,
  },
  {
    name: 'nf-oct-graph',
    code: 0xf437,
  },
  {
    name: 'nf-oct-hash',
    code: 0xf4df,
  },
  {
    name: 'nf-oct-heading',
    code: 0xf4e0,
  },
  {
    name: 'nf-oct-heart',
    code: 0x2665,
  },
  {
    name: 'nf-oct-heart_fill',
    code: 0xf4e1,
  },
  {
    name: 'nf-oct-history',
    code: 0xf464,
  },
  {
    name: 'nf-oct-home',
    code: 0xf46d,
  },
  {
    name: 'nf-oct-home_fill',
    code: 0xf4e2,
  },
  {
    name: 'nf-oct-horizontal_rule',
    code: 0xf45b,
  },
  {
    name: 'nf-oct-hourglass',
    code: 0xf4e3,
  },
  {
    name: 'nf-oct-hubot',
    code: 0xf477,
  },
  {
    name: 'nf-oct-id_badge',
    code: 0xf4e4,
  },
  {
    name: 'nf-oct-image',
    code: 0xf4e5,
  },
  {
    name: 'nf-oct-inbox',
    code: 0xf48d,
  },
  {
    name: 'nf-oct-infinity',
    code: 0xf4e6,
  },
  {
    name: 'nf-oct-info',
    code: 0xf449,
  },
  {
    name: 'nf-oct-issue_closed',
    code: 0xf41d,
  },
  {
    name: 'nf-oct-issue_draft',
    code: 0xf4e7,
  },
  {
    name: 'nf-oct-issue_opened',
    code: 0xf41b,
  },
  {
    name: 'nf-oct-issue_reopened',
    code: 0xf41c,
  },
  {
    name: 'nf-oct-issue_tracked_by',
    code: 0xf4e8,
  },
  {
    name: 'nf-oct-issue_tracks',
    code: 0xf4e9,
  },
  {
    name: 'nf-oct-italic',
    code: 0xf49f,
  },
  {
    name: 'nf-oct-iterations',
    code: 0xf4ea,
  },
  {
    name: 'nf-oct-kebab_horizontal',
    code: 0xf4eb,
  },
  {
    name: 'nf-oct-key',
    code: 0xf43d,
  },
  {
    name: 'nf-oct-key_asterisk',
    code: 0xf4ec,
  },
  {
    name: 'nf-oct-law',
    code: 0xf495,
  },
  {
    name: 'nf-oct-light_bulb',
    code: 0xf400,
  },
  {
    name: 'nf-oct-link',
    code: 0xf44c,
  },
  {
    name: 'nf-oct-link_external',
    code: 0xf465,
  },
  {
    name: 'nf-oct-list_ordered',
    code: 0xf452,
  },
  {
    name: 'nf-oct-list_unordered',
    code: 0xf451,
  },
  {
    name: 'nf-oct-location',
    code: 0xf450,
  },
  {
    name: 'nf-oct-lock',
    code: 0xf456,
  },
  {
    name: 'nf-oct-log',
    code: 0xf4ed,
  },
  {
    name: 'nf-oct-logo_gist',
    code: 0xf480,
  },
  {
    name: 'nf-oct-logo_github',
    code: 0xf470,
  },
  {
    name: 'nf-oct-mail',
    code: 0xf42f,
  },
  {
    name: 'nf-oct-mark_github',
    code: 0xf408,
  },
  {
    name: 'nf-oct-markdown',
    code: 0xf48a,
  },
  {
    name: 'nf-oct-megaphone',
    code: 0xf45f,
  },
  {
    name: 'nf-oct-mention',
    code: 0xf486,
  },
  {
    name: 'nf-oct-meter',
    code: 0xf463,
  },
  {
    name: 'nf-oct-milestone',
    code: 0xf45d,
  },
  {
    name: 'nf-oct-mirror',
    code: 0xf41a,
  },
  {
    name: 'nf-oct-moon',
    code: 0xf4ee,
  },
  {
    name: 'nf-oct-mortar_board',
    code: 0xf494,
  },
  {
    name: 'nf-oct-move_to_bottom',
    code: 0xf4ef,
  },
  {
    name: 'nf-oct-move_to_end',
    code: 0xf4f0,
  },
  {
    name: 'nf-oct-move_to_start',
    code: 0xf4f1,
  },
  {
    name: 'nf-oct-move_to_top',
    code: 0xf4f2,
  },
  {
    name: 'nf-oct-multi_select',
    code: 0xf4f3,
  },
  {
    name: 'nf-oct-mute',
    code: 0xf466,
  },
  {
    name: 'nf-oct-no_entry',
    code: 0xf4f4,
  },
  {
    name: 'nf-oct-north_star',
    code: 0xf4f5,
  },
  {
    name: 'nf-oct-note',
    code: 0xf4f6,
  },
  {
    name: 'nf-oct-number',
    code: 0xf4f7,
  },
  {
    name: 'nf-oct-organization',
    code: 0xf42b,
  },
  {
    name: 'nf-oct-package',
    code: 0xf487,
  },
  {
    name: 'nf-oct-package_dependencies',
    code: 0xf4f8,
  },
  {
    name: 'nf-oct-package_dependents',
    code: 0xf4f9,
  },
  {
    name: 'nf-oct-paintbrush',
    code: 0xf48f,
  },
  {
    name: 'nf-oct-paper_airplane',
    code: 0xf4fa,
  },
  {
    name: 'nf-oct-paperclip',
    code: 0xf4fb,
  },
  {
    name: 'nf-oct-passkey_fill',
    code: 0xf4fc,
  },
  {
    name: 'nf-oct-paste',
    code: 0xf429,
  },
  {
    name: 'nf-oct-pencil',
    code: 0xf448,
  },
  {
    name: 'nf-oct-people',
    code: 0xf4fd,
  },
  {
    name: 'nf-oct-person',
    code: 0xf415,
  },
  {
    name: 'nf-oct-person_add',
    code: 0xf4fe,
  },
  {
    name: 'nf-oct-person_fill',
    code: 0xf4ff,
  },
  {
    name: 'nf-oct-pin',
    code: 0xf435,
  },
  {
    name: 'nf-oct-play',
    code: 0xf500,
  },
  {
    name: 'nf-oct-plug',
    code: 0xf492,
  },
  {
    name: 'nf-oct-plus',
    code: 0xf44d,
  },
  {
    name: 'nf-oct-plus_circle',
    code: 0xf501,
  },
  {
    name: 'nf-oct-project',
    code: 0xf502,
  },
  {
    name: 'nf-oct-project_roadmap',
    code: 0xf503,
  },
  {
    name: 'nf-oct-project_symlink',
    code: 0xf504,
  },
  {
    name: 'nf-oct-project_template',
    code: 0xf505,
  },
  {
    name: 'nf-oct-pulse',
    code: 0xf469,
  },
  {
    name: 'nf-oct-question',
    code: 0xf420,
  },
  {
    name: 'nf-oct-quote',
    code: 0xf453,
  },
  {
    name: 'nf-oct-read',
    code: 0xf430,
  },
  {
    name: 'nf-oct-rel_file_path',
    code: 0xf506,
  },
  {
    name: 'nf-oct-reply',
    code: 0xf4a8,
  },
  {
    name: 'nf-oct-repo',
    code: 0xf401,
  },
  {
    name: 'nf-oct-repo_clone',
    code: 0xf43f,
  },
  {
    name: 'nf-oct-repo_deleted',
    code: 0xf507,
  },
  {
    name: 'nf-oct-repo_forked',
    code: 0xf402,
  },
  {
    name: 'nf-oct-repo_locked',
    code: 0xf508,
  },
  {
    name: 'nf-oct-repo_pull',
    code: 0xf404,
  },
  {
    name: 'nf-oct-repo_push',
    code: 0xf403,
  },
  {
    name: 'nf-oct-repo_template',
    code: 0xf509,
  },
  {
    name: 'nf-oct-report',
    code: 0xf50a,
  },
  {
    name: 'nf-oct-rocket',
    code: 0xf427,
  },
  {
    name: 'nf-oct-rows',
    code: 0xf50b,
  },
  {
    name: 'nf-oct-rss',
    code: 0xf428,
  },
  {
    name: 'nf-oct-ruby',
    code: 0xf43b,
  },
  {
    name: 'nf-oct-screen_full',
    code: 0xf50c,
  },
  {
    name: 'nf-oct-screen_normal',
    code: 0xf50d,
  },
  {
    name: 'nf-oct-search',
    code: 0xf422,
  },
  {
    name: 'nf-oct-server',
    code: 0xf473,
  },
  {
    name: 'nf-oct-share',
    code: 0xf50e,
  },
  {
    name: 'nf-oct-share_android',
    code: 0xf50f,
  },
  {
    name: 'nf-oct-shield',
    code: 0xf49c,
  },
  {
    name: 'nf-oct-shield_check',
    code: 0xf510,
  },
  {
    name: 'nf-oct-shield_lock',
    code: 0xf511,
  },
  {
    name: 'nf-oct-shield_slash',
    code: 0xf512,
  },
  {
    name: 'nf-oct-shield_x',
    code: 0xf513,
  },
  {
    name: 'nf-oct-sidebar_collapse',
    code: 0xf514,
  },
  {
    name: 'nf-oct-sidebar_expand',
    code: 0xf515,
  },
  {
    name: 'nf-oct-sign_in',
    code: 0xf42a,
  },
  {
    name: 'nf-oct-sign_out',
    code: 0xf426,
  },
  {
    name: 'nf-oct-single_select',
    code: 0xf516,
  },
  {
    name: 'nf-oct-skip',
    code: 0xf517,
  },
  {
    name: 'nf-oct-skip_fill',
    code: 0xf518,
  },
  {
    name: 'nf-oct-sliders',
    code: 0xf462,
  },
  {
    name: 'nf-oct-smiley',
    code: 0xf4a2,
  },
  {
    name: 'nf-oct-sort_asc',
    code: 0xf519,
  },
  {
    name: 'nf-oct-sort_desc',
    code: 0xf51a,
  },
  {
    name: 'nf-oct-sparkle_fill',
    code: 0xf51b,
  },
  {
    name: 'nf-oct-sponsor_tiers',
    code: 0xf51c,
  },
  {
    name: 'nf-oct-square',
    code: 0xf51d,
  },
  {
    name: 'nf-oct-square_fill',
    code: 0xf445,
  },
  {
    name: 'nf-oct-squirrel',
    code: 0xf483,
  },
  {
    name: 'nf-oct-stack',
    code: 0xf51e,
  },
  {
    name: 'nf-oct-star',
    code: 0xf41e,
  },
  {
    name: 'nf-oct-star_fill',
    code: 0xf51f,
  },
  {
    name: 'nf-oct-stop',
    code: 0xf46e,
  },
  {
    name: 'nf-oct-stopwatch',
    code: 0xf520,
  },
  {
    name: 'nf-oct-strikethrough',
    code: 0xf521,
  },
  {
    name: 'nf-oct-sun',
    code: 0xf522,
  },
  {
    name: 'nf-oct-sync',
    code: 0xf46a,
  },
  {
    name: 'nf-oct-tab',
    code: 0xf523,
  },
  {
    name: 'nf-oct-tab_external',
    code: 0xf524,
  },
  {
    name: 'nf-oct-table',
    code: 0xf525,
  },
  {
    name: 'nf-oct-tag',
    code: 0xf412,
  },
  {
    name: 'nf-oct-tasklist',
    code: 0xf4a0,
  },
  {
    name: 'nf-oct-telescope',
    code: 0xf46b,
  },
  {
    name: 'nf-oct-telescope_fill',
    code: 0xf526,
  },
  {
    name: 'nf-oct-terminal',
    code: 0xf489,
  },
  {
    name: 'nf-oct-three_bars',
    code: 0xf44e,
  },
  {
    name: 'nf-oct-thumbsdown',
    code: 0xf497,
  },
  {
    name: 'nf-oct-thumbsup',
    code: 0xf496,
  },
  {
    name: 'nf-oct-tools',
    code: 0xf425,
  },
  {
    name: 'nf-oct-trash',
    code: 0xf48e,
  },
  {
    name: 'nf-oct-triangle_down',
    code: 0xf44b,
  },
  {
    name: 'nf-oct-triangle_left',
    code: 0xf438,
  },
  {
    name: 'nf-oct-triangle_right',
    code: 0xf44a,
  },
  {
    name: 'nf-oct-triangle_up',
    code: 0xf47e,
  },
  {
    name: 'nf-oct-trophy',
    code: 0xf527,
  },
  {
    name: 'nf-oct-typography',
    code: 0xf528,
  },
  {
    name: 'nf-oct-unfold',
    code: 0xf42d,
  },
  {
    name: 'nf-oct-unlink',
    code: 0xf529,
  },
  {
    name: 'nf-oct-unlock',
    code: 0xf52a,
  },
  {
    name: 'nf-oct-unmute',
    code: 0xf485,
  },
  {
    name: 'nf-oct-unread',
    code: 0xf52b,
  },
  {
    name: 'nf-oct-unverified',
    code: 0xf4a3,
  },
  {
    name: 'nf-oct-upload',
    code: 0xf40a,
  },
  {
    name: 'nf-oct-verified',
    code: 0xf4a1,
  },
  {
    name: 'nf-oct-versions',
    code: 0xf454,
  },
  {
    name: 'nf-oct-video',
    code: 0xf52c,
  },
  {
    name: 'nf-oct-webhook',
    code: 0xf52d,
  },
  {
    name: 'nf-oct-workflow',
    code: 0xf52e,
  },
  {
    name: 'nf-oct-x',
    code: 0xf467,
  },
  {
    name: 'nf-oct-x_circle',
    code: 0xf52f,
  },
  {
    name: 'nf-oct-x_circle_fill',
    code: 0xf530,
  },
  {
    name: 'nf-oct-zap',
    code: 0x26a1,
  },
  {
    name: 'nf-oct-zoom_in',
    code: 0xf531,
  },
  {
    name: 'nf-oct-zoom_out',
    code: 0xf532,
  },
  {
    name: 'nf-pl-branch',
    code: 0xe0a0,
  },
  {
    name: 'nf-pl-current_line',
    code: 0xe0a1,
  },
  {
    name: 'nf-pl-hostname',
    code: 0xe0a2,
  },
  {
    name: 'nf-pl-left_hard_divider',
    code: 0xe0b0,
  },
  {
    name: 'nf-pl-left_soft_divider',
    code: 0xe0b1,
  },
  {
    name: 'nf-pl-line_number',
    code: 0xe0a1,
  },
  {
    name: 'nf-pl-readonly',
    code: 0xe0a2,
  },
  {
    name: 'nf-pl-right_hard_divider',
    code: 0xe0b2,
  },
  {
    name: 'nf-pl-right_soft_divider',
    code: 0xe0b3,
  },
  {
    name: 'nf-ple-backslash_separator',
    code: 0xe0b9,
  },
  {
    name: 'nf-ple-backslash_separator_redundant',
    code: 0xe0bf,
  },
  {
    name: 'nf-ple-column_number',
    code: 0xe0a3,
  },
  {
    name: 'nf-ple-current_column',
    code: 0xe0a3,
  },
  {
    name: 'nf-ple-flame_thick',
    code: 0xe0c0,
  },
  {
    name: 'nf-ple-flame_thick_mirrored',
    code: 0xe0c2,
  },
  {
    name: 'nf-ple-flame_thin',
    code: 0xe0c1,
  },
  {
    name: 'nf-ple-flame_thin_mirrored',
    code: 0xe0c3,
  },
  {
    name: 'nf-ple-forwardslash_separator',
    code: 0xe0bb,
  },
  {
    name: 'nf-ple-forwardslash_separator_redundant',
    code: 0xe0bd,
  },
  {
    name: 'nf-ple-honeycomb',
    code: 0xe0cc,
  },
  {
    name: 'nf-ple-honeycomb_outline',
    code: 0xe0cd,
  },
  {
    name: 'nf-ple-ice_waveform',
    code: 0xe0c8,
  },
  {
    name: 'nf-ple-ice_waveform_mirrored',
    code: 0xe0ca,
  },
  {
    name: 'nf-ple-left_half_circle_thick',
    code: 0xe0b6,
  },
  {
    name: 'nf-ple-left_half_circle_thin',
    code: 0xe0b7,
  },
  {
    name: 'nf-ple-left_hard_divider_inverse',
    code: 0xe0d7,
  },
  {
    name: 'nf-ple-lego_block_facing',
    code: 0xe0d0,
  },
  {
    name: 'nf-ple-lego_block_sideways',
    code: 0xe0d1,
  },
  {
    name: 'nf-ple-lego_separator',
    code: 0xe0ce,
  },
  {
    name: 'nf-ple-lego_separator_thin',
    code: 0xe0cf,
  },
  {
    name: 'nf-ple-lower_left_triangle',
    code: 0xe0b8,
  },
  {
    name: 'nf-ple-lower_right_triangle',
    code: 0xe0ba,
  },
  {
    name: 'nf-ple-pixelated_squares_big',
    code: 0xe0c6,
  },
  {
    name: 'nf-ple-pixelated_squares_big_mirrored',
    code: 0xe0c7,
  },
  {
    name: 'nf-ple-pixelated_squares_small',
    code: 0xe0c4,
  },
  {
    name: 'nf-ple-pixelated_squares_small_mirrored',
    code: 0xe0c5,
  },
  {
    name: 'nf-ple-right_half_circle_thick',
    code: 0xe0b4,
  },
  {
    name: 'nf-ple-right_half_circle_thin',
    code: 0xe0b5,
  },
  {
    name: 'nf-ple-right_hard_divider_inverse',
    code: 0xe0d6,
  },
  {
    name: 'nf-ple-trapezoid_top_bottom',
    code: 0xe0d2,
  },
  {
    name: 'nf-ple-trapezoid_top_bottom_mirrored',
    code: 0xe0d4,
  },
  {
    name: 'nf-ple-upper_left_triangle',
    code: 0xe0bc,
  },
  {
    name: 'nf-ple-upper_right_triangle',
    code: 0xe0be,
  },
  {
    name: 'nf-pom-away',
    code: 0xe007,
  },
  {
    name: 'nf-pom-clean_code',
    code: 0xe000,
  },
  {
    name: 'nf-pom-external_interruption',
    code: 0xe00a,
  },
  {
    name: 'nf-pom-internal_interruption',
    code: 0xe009,
  },
  {
    name: 'nf-pom-long_pause',
    code: 0xe006,
  },
  {
    name: 'nf-pom-pair_programming',
    code: 0xe008,
  },
  {
    name: 'nf-pom-pomodoro_done',
    code: 0xe001,
  },
  {
    name: 'nf-pom-pomodoro_estimated',
    code: 0xe002,
  },
  {
    name: 'nf-pom-pomodoro_squashed',
    code: 0xe004,
  },
  {
    name: 'nf-pom-pomodoro_ticking',
    code: 0xe003,
  },
  {
    name: 'nf-pom-short_pause',
    code: 0xe005,
  },
  {
    name: 'nf-seti-apple',
    code: 0xe635,
  },
  {
    name: 'nf-seti-argdown',
    code: 0xe636,
  },
  {
    name: 'nf-seti-asm',
    code: 0xe637,
  },
  {
    name: 'nf-seti-audio',
    code: 0xe638,
  },
  {
    name: 'nf-seti-babel',
    code: 0xe639,
  },
  {
    name: 'nf-seti-bazel',
    code: 0xe63a,
  },
  {
    name: 'nf-seti-bicep',
    code: 0xe63b,
  },
  {
    name: 'nf-seti-bower',
    code: 0xe61a,
  },
  {
    name: 'nf-seti-bsl',
    code: 0xe63c,
  },
  {
    name: 'nf-seti-c',
    code: 0xe649,
  },
  {
    name: 'nf-seti-c_sharp',
    code: 0xe648,
  },
  {
    name: 'nf-seti-cake',
    code: 0xe63e,
  },
  {
    name: 'nf-seti-cake_php',
    code: 0xe63d,
  },
  {
    name: 'nf-seti-checkbox',
    code: 0xe63f,
  },
  {
    name: 'nf-seti-checkbox_unchecked',
    code: 0xe640,
  },
  {
    name: 'nf-seti-cjsx',
    code: 0xe61b,
  },
  {
    name: 'nf-seti-clock',
    code: 0xe641,
  },
  {
    name: 'nf-seti-clojure',
    code: 0xe642,
  },
  {
    name: 'nf-seti-code_climate',
    code: 0xe643,
  },
  {
    name: 'nf-seti-code_search',
    code: 0xe644,
  },
  {
    name: 'nf-seti-coffee',
    code: 0xe61b,
  },
  {
    name: 'nf-seti-coldfusion',
    code: 0xe645,
  },
  {
    name: 'nf-seti-config',
    code: 0xe615,
  },
  {
    name: 'nf-seti-cpp',
    code: 0xe646,
  },
  {
    name: 'nf-seti-crystal',
    code: 0xe62f,
  },
  {
    name: 'nf-seti-crystal_embedded',
    code: 0xe647,
  },
  {
    name: 'nf-seti-css',
    code: 0xe614,
  },
  {
    name: 'nf-seti-csv',
    code: 0xe64a,
  },
  {
    name: 'nf-seti-cu',
    code: 0xe64b,
  },
  {
    name: 'nf-seti-d',
    code: 0xe651,
  },
  {
    name: 'nf-seti-dart',
    code: 0xe64c,
  },
  {
    name: 'nf-seti-db',
    code: 0xe64d,
  },
  {
    name: 'nf-seti-default',
    code: 0xe64e,
  },
  {
    name: 'nf-seti-deprecation_cop',
    code: 0xe64f,
  },
  {
    name: 'nf-seti-docker',
    code: 0xe650,
  },
  {
    name: 'nf-seti-editorconfig',
    code: 0xe652,
  },
  {
    name: 'nf-seti-ejs',
    code: 0xe618,
  },
  {
    name: 'nf-seti-elixir',
    code: 0xe62d,
  },
  {
    name: 'nf-seti-elixir_script',
    code: 0xe653,
  },
  {
    name: 'nf-seti-elm',
    code: 0xe62c,
  },
  {
    name: 'nf-seti-error',
    code: 0xe654,
  },
  {
    name: 'nf-seti-eslint',
    code: 0xe655,
  },
  {
    name: 'nf-seti-ethereum',
    code: 0xe656,
  },
  {
    name: 'nf-seti-f_sharp',
    code: 0xe65a,
  },
  {
    name: 'nf-seti-favicon',
    code: 0xe623,
  },
  {
    name: 'nf-seti-firebase',
    code: 0xe657,
  },
  {
    name: 'nf-seti-firefox',
    code: 0xe658,
  },
  {
    name: 'nf-seti-folder',
    code: 0xe613,
  },
  {
    name: 'nf-seti-font',
    code: 0xe659,
  },
  {
    name: 'nf-seti-git',
    code: 0xe65d,
  },
  {
    name: 'nf-seti-git_folder',
    code: 0xe65d,
  },
  {
    name: 'nf-seti-git_ignore',
    code: 0xe65d,
  },
  {
    name: 'nf-seti-github',
    code: 0xe65b,
  },
  {
    name: 'nf-seti-gitlab',
    code: 0xe65c,
  },
  {
    name: 'nf-seti-go',
    code: 0xe627,
  },
  {
    name: 'nf-seti-go2',
    code: 0xe65e,
  },
  {
    name: 'nf-seti-godot',
    code: 0xe65f,
  },
  {
    name: 'nf-seti-gradle',
    code: 0xe660,
  },
  {
    name: 'nf-seti-grails',
    code: 0xe661,
  },
  {
    name: 'nf-seti-graphql',
    code: 0xe662,
  },
  {
    name: 'nf-seti-grunt',
    code: 0xe611,
  },
  {
    name: 'nf-seti-gulp',
    code: 0xe610,
  },
  {
    name: 'nf-seti-hacklang',
    code: 0xe663,
  },
  {
    name: 'nf-seti-haml',
    code: 0xe664,
  },
  {
    name: 'nf-seti-happenings',
    code: 0xe665,
  },
  {
    name: 'nf-seti-haskell',
    code: 0xe61f,
  },
  {
    name: 'nf-seti-haxe',
    code: 0xe666,
  },
  {
    name: 'nf-seti-heroku',
    code: 0xe607,
  },
  {
    name: 'nf-seti-hex',
    code: 0xe667,
  },
  {
    name: 'nf-seti-home',
    code: 0xe617,
  },
  {
    name: 'nf-seti-html',
    code: 0xe60e,
  },
  {
    name: 'nf-seti-ignored',
    code: 0xe668,
  },
  {
    name: 'nf-seti-illustrator',
    code: 0xe669,
  },
  {
    name: 'nf-seti-image',
    code: 0xe60d,
  },
  {
    name: 'nf-seti-info',
    code: 0xe66a,
  },
  {
    name: 'nf-seti-ionic',
    code: 0xe66b,
  },
  {
    name: 'nf-seti-jade',
    code: 0xe66c,
  },
  {
    name: 'nf-seti-java',
    code: 0xe66d,
  },
  {
    name: 'nf-seti-javascript',
    code: 0xe60c,
  },
  {
    name: 'nf-seti-jenkins',
    code: 0xe66e,
  },
  {
    name: 'nf-seti-jinja',
    code: 0xe66f,
  },
  {
    name: 'nf-seti-json',
    code: 0xe60b,
  },
  {
    name: 'nf-seti-julia',
    code: 0xe624,
  },
  {
    name: 'nf-seti-karma',
    code: 0xe622,
  },
  {
    name: 'nf-seti-kotlin',
    code: 0xe634,
  },
  {
    name: 'nf-seti-less',
    code: 0xe60b,
  },
  {
    name: 'nf-seti-license',
    code: 0xe60a,
  },
  {
    name: 'nf-seti-liquid',
    code: 0xe670,
  },
  {
    name: 'nf-seti-livescript',
    code: 0xe671,
  },
  {
    name: 'nf-seti-lock',
    code: 0xe672,
  },
  {
    name: 'nf-seti-lua',
    code: 0xe620,
  },
  {
    name: 'nf-seti-makefile',
    code: 0xe673,
  },
  {
    name: 'nf-seti-markdown',
    code: 0xe609,
  },
  {
    name: 'nf-seti-maven',
    code: 0xe674,
  },
  {
    name: 'nf-seti-mdo',
    code: 0xe675,
  },
  {
    name: 'nf-seti-mustache',
    code: 0xe60f,
  },
  {
    name: 'nf-seti-new_file',
    code: 0xe676,
  },
  {
    name: 'nf-seti-nim',
    code: 0xe677,
  },
  {
    name: 'nf-seti-notebook',
    code: 0xe678,
  },
  {
    name: 'nf-seti-npm',
    code: 0xe616,
  },
  {
    name: 'nf-seti-npm_ignored',
    code: 0xe616,
  },
  {
    name: 'nf-seti-nunjucks',
    code: 0xe679,
  },
  {
    name: 'nf-seti-ocaml',
    code: 0xe67a,
  },
  {
    name: 'nf-seti-odata',
    code: 0xe67b,
  },
  {
    name: 'nf-seti-pddl',
    code: 0xe67c,
  },
  {
    name: 'nf-seti-pdf',
    code: 0xe67d,
  },
  {
    name: 'nf-seti-perl',
    code: 0xe67e,
  },
  {
    name: 'nf-seti-photoshop',
    code: 0xe67f,
  },
  {
    name: 'nf-seti-php',
    code: 0xe608,
  },
  {
    name: 'nf-seti-pipeline',
    code: 0xe680,
  },
  {
    name: 'nf-seti-plan',
    code: 0xe681,
  },
  {
    name: 'nf-seti-platformio',
    code: 0xe682,
  },
  {
    name: 'nf-seti-play_arrow',
    code: 0xe602,
  },
  {
    name: 'nf-seti-powershell',
    code: 0xe683,
  },
  {
    name: 'nf-seti-prisma',
    code: 0xe684,
  },
  {
    name: 'nf-seti-project',
    code: 0xe601,
  },
  {
    name: 'nf-seti-prolog',
    code: 0xe685,
  },
  {
    name: 'nf-seti-pug',
    code: 0xe686,
  },
  {
    name: 'nf-seti-puppet',
    code: 0xe631,
  },
  {
    name: 'nf-seti-purescript',
    code: 0xe630,
  },
  {
    name: 'nf-seti-python',
    code: 0xe606,
  },
  {
    name: 'nf-seti-r',
    code: 0xe68a,
  },
  {
    name: 'nf-seti-rails',
    code: 0xe604,
  },
  {
    name: 'nf-seti-react',
    code: 0xe625,
  },
  {
    name: 'nf-seti-reasonml',
    code: 0xe687,
  },
  {
    name: 'nf-seti-rescript',
    code: 0xe688,
  },
  {
    name: 'nf-seti-rollup',
    code: 0xe689,
  },
  {
    name: 'nf-seti-ruby',
    code: 0xe605,
  },
  {
    name: 'nf-seti-rust',
    code: 0xe68b,
  },
  {
    name: 'nf-seti-salesforce',
    code: 0xe68c,
  },
  {
    name: 'nf-seti-sass',
    code: 0xe603,
  },
  {
    name: 'nf-seti-sbt',
    code: 0xe68d,
  },
  {
    name: 'nf-seti-scala',
    code: 0xe68e,
  },
  {
    name: 'nf-seti-search',
    code: 0xe68f,
  },
  {
    name: 'nf-seti-settings',
    code: 0xe690,
  },
  {
    name: 'nf-seti-shell',
    code: 0xe691,
  },
  {
    name: 'nf-seti-slim',
    code: 0xe692,
  },
  {
    name: 'nf-seti-smarty',
    code: 0xe693,
  },
  {
    name: 'nf-seti-spring',
    code: 0xe694,
  },
  {
    name: 'nf-seti-stylelint',
    code: 0xe695,
  },
  {
    name: 'nf-seti-stylus',
    code: 0xe600,
  },
  {
    name: 'nf-seti-sublime',
    code: 0xe696,
  },
  {
    name: 'nf-seti-svelte',
    code: 0xe697,
  },
  {
    name: 'nf-seti-svg',
    code: 0xe698,
  },
  {
    name: 'nf-seti-swift',
    code: 0xe699,
  },
  {
    name: 'nf-seti-terraform',
    code: 0xe69a,
  },
  {
    name: 'nf-seti-tex',
    code: 0xe69b,
  },
  {
    name: 'nf-seti-text',
    code: 0xe64e,
  },
  {
    name: 'nf-seti-time_cop',
    code: 0xe641,
  },
  {
    name: 'nf-seti-todo',
    code: 0xe69c,
  },
  {
    name: 'nf-seti-tsconfig',
    code: 0xe69d,
  },
  {
    name: 'nf-seti-twig',
    code: 0xe61c,
  },
  {
    name: 'nf-seti-typescript',
    code: 0xe628,
  },
  {
    name: 'nf-seti-vala',
    code: 0xe69e,
  },
  {
    name: 'nf-seti-video',
    code: 0xe69f,
  },
  {
    name: 'nf-seti-vue',
    code: 0xe6a0,
  },
  {
    name: 'nf-seti-wasm',
    code: 0xe6a1,
  },
  {
    name: 'nf-seti-wat',
    code: 0xe6a2,
  },
  {
    name: 'nf-seti-webpack',
    code: 0xe6a3,
  },
  {
    name: 'nf-seti-wgt',
    code: 0xe6a4,
  },
  {
    name: 'nf-seti-word',
    code: 0xe6a5,
  },
  {
    name: 'nf-seti-xls',
    code: 0xe6a6,
  },
  {
    name: 'nf-seti-xml',
    code: 0xe619,
  },
  {
    name: 'nf-seti-yarn',
    code: 0xe6a7,
  },
  {
    name: 'nf-seti-yml',
    code: 0xe6a8,
  },
  {
    name: 'nf-seti-zig',
    code: 0xe6a9,
  },
  {
    name: 'nf-seti-zip',
    code: 0xe6aa,
  },
  {
    name: 'nf-weather-alien',
    code: 0xe36e,
  },
  {
    name: 'nf-weather-aliens',
    code: 0xe345,
  },
  {
    name: 'nf-weather-barometer',
    code: 0xe372,
  },
  {
    name: 'nf-weather-celsius',
    code: 0xe339,
  },
  {
    name: 'nf-weather-cloud',
    code: 0xe33d,
  },
  {
    name: 'nf-weather-cloud_down',
    code: 0xe33a,
  },
  {
    name: 'nf-weather-cloud_refresh',
    code: 0xe33b,
  },
  {
    name: 'nf-weather-cloud_up',
    code: 0xe33c,
  },
  {
    name: 'nf-weather-cloudy',
    code: 0xe312,
  },
  {
    name: 'nf-weather-cloudy_gusts',
    code: 0xe310,
  },
  {
    name: 'nf-weather-cloudy_windy',
    code: 0xe311,
  },
  {
    name: 'nf-weather-day_cloudy',
    code: 0xe302,
  },
  {
    name: 'nf-weather-day_cloudy_gusts',
    code: 0xe300,
  },
  {
    name: 'nf-weather-day_cloudy_high',
    code: 0xe376,
  },
  {
    name: 'nf-weather-day_cloudy_windy',
    code: 0xe301,
  },
  {
    name: 'nf-weather-day_fog',
    code: 0xe303,
  },
  {
    name: 'nf-weather-day_hail',
    code: 0xe304,
  },
  {
    name: 'nf-weather-day_haze',
    code: 0xe3ae,
  },
  {
    name: 'nf-weather-day_light_wind',
    code: 0xe3bc,
  },
  {
    name: 'nf-weather-day_lightning',
    code: 0xe305,
  },
  {
    name: 'nf-weather-day_rain',
    code: 0xe308,
  },
  {
    name: 'nf-weather-day_rain_mix',
    code: 0xe306,
  },
  {
    name: 'nf-weather-day_rain_wind',
    code: 0xe307,
  },
  {
    name: 'nf-weather-day_showers',
    code: 0xe309,
  },
  {
    name: 'nf-weather-day_sleet',
    code: 0xe3aa,
  },
  {
    name: 'nf-weather-day_sleet_storm',
    code: 0xe362,
  },
  {
    name: 'nf-weather-day_snow',
    code: 0xe30a,
  },
  {
    name: 'nf-weather-day_snow_thunderstorm',
    code: 0xe365,
  },
  {
    name: 'nf-weather-day_snow_wind',
    code: 0xe35f,
  },
  {
    name: 'nf-weather-day_sprinkle',
    code: 0xe30b,
  },
  {
    name: 'nf-weather-day_storm_showers',
    code: 0xe30e,
  },
  {
    name: 'nf-weather-day_sunny',
    code: 0xe30d,
  },
  {
    name: 'nf-weather-day_sunny_overcast',
    code: 0xe30c,
  },
  {
    name: 'nf-weather-day_thunderstorm',
    code: 0xe30f,
  },
  {
    name: 'nf-weather-day_windy',
    code: 0xe37d,
  },
  {
    name: 'nf-weather-degrees',
    code: 0xe33e,
  },
  {
    name: 'nf-weather-direction_down',
    code: 0xe340,
  },
  {
    name: 'nf-weather-direction_down_left',
    code: 0xe33f,
  },
  {
    name: 'nf-weather-direction_down_right',
    code: 0xe380,
  },
  {
    name: 'nf-weather-direction_left',
    code: 0xe344,
  },
  {
    name: 'nf-weather-direction_right',
    code: 0xe349,
  },
  {
    name: 'nf-weather-direction_up',
    code: 0xe353,
  },
  {
    name: 'nf-weather-direction_up_left',
    code: 0xe37f,
  },
  {
    name: 'nf-weather-direction_up_right',
    code: 0xe352,
  },
  {
    name: 'nf-weather-dust',
    code: 0xe35d,
  },
  {
    name: 'nf-weather-earthquake',
    code: 0xe3be,
  },
  {
    name: 'nf-weather-fahrenheit',
    code: 0xe341,
  },
  {
    name: 'nf-weather-fire',
    code: 0xe3bf,
  },
  {
    name: 'nf-weather-flood',
    code: 0xe375,
  },
  {
    name: 'nf-weather-fog',
    code: 0xe313,
  },
  {
    name: 'nf-weather-gale_warning',
    code: 0xe3c5,
  },
  {
    name: 'nf-weather-hail',
    code: 0xe314,
  },
  {
    name: 'nf-weather-horizon',
    code: 0xe343,
  },
  {
    name: 'nf-weather-horizon_alt',
    code: 0xe342,
  },
  {
    name: 'nf-weather-hot',
    code: 0xe36b,
  },
  {
    name: 'nf-weather-humidity',
    code: 0xe373,
  },
  {
    name: 'nf-weather-hurricane',
    code: 0xe36c,
  },
  {
    name: 'nf-weather-hurricane_warning',
    code: 0xe3c7,
  },
  {
    name: 'nf-weather-lightning',
    code: 0xe315,
  },
  {
    name: 'nf-weather-lunar_eclipse',
    code: 0xe369,
  },
  {
    name: 'nf-weather-meteor',
    code: 0xe36a,
  },
  {
    name: 'nf-weather-moon_alt_first_quarter',
    code: 0xe3ce,
  },
  {
    name: 'nf-weather-moon_alt_full',
    code: 0xe3d5,
  },
  {
    name: 'nf-weather-moon_alt_new',
    code: 0xe3e3,
  },
  {
    name: 'nf-weather-moon_alt_third_quarter',
    code: 0xe3dc,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_1',
    code: 0xe3dd,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_2',
    code: 0xe3de,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_3',
    code: 0xe3df,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_4',
    code: 0xe3e0,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_5',
    code: 0xe3e1,
  },
  {
    name: 'nf-weather-moon_alt_waning_crescent_6',
    code: 0xe3e2,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_1',
    code: 0xe3d6,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_2',
    code: 0xe3d7,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_3',
    code: 0xe3d8,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_4',
    code: 0xe3d9,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_5',
    code: 0xe3da,
  },
  {
    name: 'nf-weather-moon_alt_waning_gibbous_6',
    code: 0xe3db,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_1',
    code: 0xe3c8,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_2',
    code: 0xe3c9,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_3',
    code: 0xe3ca,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_4',
    code: 0xe3cb,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_5',
    code: 0xe3cc,
  },
  {
    name: 'nf-weather-moon_alt_waxing_crescent_6',
    code: 0xe3cd,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_1',
    code: 0xe3cf,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_2',
    code: 0xe3d0,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_3',
    code: 0xe3d1,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_4',
    code: 0xe3d2,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_5',
    code: 0xe3d3,
  },
  {
    name: 'nf-weather-moon_alt_waxing_gibbous_6',
    code: 0xe3d4,
  },
  {
    name: 'nf-weather-moon_first_quarter',
    code: 0xe394,
  },
  {
    name: 'nf-weather-moon_full',
    code: 0xe39b,
  },
  {
    name: 'nf-weather-moon_new',
    code: 0xe38d,
  },
  {
    name: 'nf-weather-moon_third_quarter',
    code: 0xe3a2,
  },
  {
    name: 'nf-weather-moon_waning_crescent_1',
    code: 0xe3a3,
  },
  {
    name: 'nf-weather-moon_waning_crescent_2',
    code: 0xe3a4,
  },
  {
    name: 'nf-weather-moon_waning_crescent_3',
    code: 0xe3a5,
  },
  {
    name: 'nf-weather-moon_waning_crescent_4',
    code: 0xe3a6,
  },
  {
    name: 'nf-weather-moon_waning_crescent_5',
    code: 0xe3a7,
  },
  {
    name: 'nf-weather-moon_waning_crescent_6',
    code: 0xe3a8,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_1',
    code: 0xe39c,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_2',
    code: 0xe39d,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_3',
    code: 0xe39e,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_4',
    code: 0xe39f,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_5',
    code: 0xe3a0,
  },
  {
    name: 'nf-weather-moon_waning_gibbous_6',
    code: 0xe3a1,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_1',
    code: 0xe38e,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_2',
    code: 0xe38f,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_3',
    code: 0xe390,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_4',
    code: 0xe391,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_5',
    code: 0xe392,
  },
  {
    name: 'nf-weather-moon_waxing_crescent_6',
    code: 0xe393,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_1',
    code: 0xe395,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_2',
    code: 0xe396,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_3',
    code: 0xe397,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_4',
    code: 0xe398,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_5',
    code: 0xe399,
  },
  {
    name: 'nf-weather-moon_waxing_gibbous_6',
    code: 0xe39a,
  },
  {
    name: 'nf-weather-moonrise',
    code: 0xe3c1,
  },
  {
    name: 'nf-weather-moonset',
    code: 0xe3c2,
  },
  {
    name: 'nf-weather-na',
    code: 0xe374,
  },
  {
    name: 'nf-weather-night_alt_cloudy',
    code: 0xe37e,
  },
  {
    name: 'nf-weather-night_alt_cloudy_gusts',
    code: 0xe31f,
  },
  {
    name: 'nf-weather-night_alt_cloudy_high',
    code: 0xe377,
  },
  {
    name: 'nf-weather-night_alt_cloudy_windy',
    code: 0xe320,
  },
  {
    name: 'nf-weather-night_alt_hail',
    code: 0xe321,
  },
  {
    name: 'nf-weather-night_alt_lightning',
    code: 0xe322,
  },
  {
    name: 'nf-weather-night_alt_partly_cloudy',
    code: 0xe379,
  },
  {
    name: 'nf-weather-night_alt_rain',
    code: 0xe325,
  },
  {
    name: 'nf-weather-night_alt_rain_mix',
    code: 0xe323,
  },
  {
    name: 'nf-weather-night_alt_rain_wind',
    code: 0xe324,
  },
  {
    name: 'nf-weather-night_alt_showers',
    code: 0xe326,
  },
  {
    name: 'nf-weather-night_alt_sleet',
    code: 0xe3ac,
  },
  {
    name: 'nf-weather-night_alt_sleet_storm',
    code: 0xe364,
  },
  {
    name: 'nf-weather-night_alt_snow',
    code: 0xe327,
  },
  {
    name: 'nf-weather-night_alt_snow_thunderstorm',
    code: 0xe367,
  },
  {
    name: 'nf-weather-night_alt_snow_wind',
    code: 0xe361,
  },
  {
    name: 'nf-weather-night_alt_sprinkle',
    code: 0xe328,
  },
  {
    name: 'nf-weather-night_alt_storm_showers',
    code: 0xe329,
  },
  {
    name: 'nf-weather-night_alt_thunderstorm',
    code: 0xe32a,
  },
  {
    name: 'nf-weather-night_clear',
    code: 0xe32b,
  },
  {
    name: 'nf-weather-night_cloudy',
    code: 0xe32e,
  },
  {
    name: 'nf-weather-night_cloudy_gusts',
    code: 0xe32c,
  },
  {
    name: 'nf-weather-night_cloudy_high',
    code: 0xe378,
  },
  {
    name: 'nf-weather-night_cloudy_windy',
    code: 0xe32d,
  },
  {
    name: 'nf-weather-night_fog',
    code: 0xe346,
  },
  {
    name: 'nf-weather-night_hail',
    code: 0xe32f,
  },
  {
    name: 'nf-weather-night_lightning',
    code: 0xe330,
  },
  {
    name: 'nf-weather-night_partly_cloudy',
    code: 0xe37b,
  },
  {
    name: 'nf-weather-night_rain',
    code: 0xe333,
  },
  {
    name: 'nf-weather-night_rain_mix',
    code: 0xe331,
  },
  {
    name: 'nf-weather-night_rain_wind',
    code: 0xe332,
  },
  {
    name: 'nf-weather-night_showers',
    code: 0xe334,
  },
  {
    name: 'nf-weather-night_sleet',
    code: 0xe3ab,
  },
  {
    name: 'nf-weather-night_sleet_storm',
    code: 0xe363,
  },
  {
    name: 'nf-weather-night_snow',
    code: 0xe335,
  },
  {
    name: 'nf-weather-night_snow_thunderstorm',
    code: 0xe366,
  },
  {
    name: 'nf-weather-night_snow_wind',
    code: 0xe360,
  },
  {
    name: 'nf-weather-night_sprinkle',
    code: 0xe336,
  },
  {
    name: 'nf-weather-night_storm_showers',
    code: 0xe337,
  },
  {
    name: 'nf-weather-night_thunderstorm',
    code: 0xe338,
  },
  {
    name: 'nf-weather-rain',
    code: 0xe318,
  },
  {
    name: 'nf-weather-rain_mix',
    code: 0xe316,
  },
  {
    name: 'nf-weather-rain_wind',
    code: 0xe317,
  },
  {
    name: 'nf-weather-raindrop',
    code: 0xe371,
  },
  {
    name: 'nf-weather-raindrops',
    code: 0xe34a,
  },
  {
    name: 'nf-weather-refresh',
    code: 0xe348,
  },
  {
    name: 'nf-weather-refresh_alt',
    code: 0xe347,
  },
  {
    name: 'nf-weather-sandstorm',
    code: 0xe37a,
  },
  {
    name: 'nf-weather-showers',
    code: 0xe319,
  },
  {
    name: 'nf-weather-sleet',
    code: 0xe3ad,
  },
  {
    name: 'nf-weather-small_craft_advisory',
    code: 0xe3c4,
  },
  {
    name: 'nf-weather-smog',
    code: 0xe36d,
  },
  {
    name: 'nf-weather-smoke',
    code: 0xe35c,
  },
  {
    name: 'nf-weather-snow',
    code: 0xe31a,
  },
  {
    name: 'nf-weather-snow_wind',
    code: 0xe35e,
  },
  {
    name: 'nf-weather-snowflake_cold',
    code: 0xe36f,
  },
  {
    name: 'nf-weather-solar_eclipse',
    code: 0xe368,
  },
  {
    name: 'nf-weather-sprinkle',
    code: 0xe31b,
  },
  {
    name: 'nf-weather-stars',
    code: 0xe370,
  },
  {
    name: 'nf-weather-storm_showers',
    code: 0xe31c,
  },
  {
    name: 'nf-weather-storm_warning',
    code: 0xe3c6,
  },
  {
    name: 'nf-weather-strong_wind',
    code: 0xe34b,
  },
  {
    name: 'nf-weather-sunrise',
    code: 0xe34c,
  },
  {
    name: 'nf-weather-sunset',
    code: 0xe34d,
  },
  {
    name: 'nf-weather-thermometer',
    code: 0xe350,
  },
  {
    name: 'nf-weather-thermometer_exterior',
    code: 0xe34e,
  },
  {
    name: 'nf-weather-thermometer_internal',
    code: 0xe34f,
  },
  {
    name: 'nf-weather-thunderstorm',
    code: 0xe31d,
  },
  {
    name: 'nf-weather-time_1',
    code: 0xe382,
  },
  {
    name: 'nf-weather-time_10',
    code: 0xe38b,
  },
  {
    name: 'nf-weather-time_11',
    code: 0xe38c,
  },
  {
    name: 'nf-weather-time_12',
    code: 0xe381,
  },
  {
    name: 'nf-weather-time_2',
    code: 0xe383,
  },
  {
    name: 'nf-weather-time_3',
    code: 0xe384,
  },
  {
    name: 'nf-weather-time_4',
    code: 0xe385,
  },
  {
    name: 'nf-weather-time_5',
    code: 0xe386,
  },
  {
    name: 'nf-weather-time_6',
    code: 0xe387,
  },
  {
    name: 'nf-weather-time_7',
    code: 0xe388,
  },
  {
    name: 'nf-weather-time_8',
    code: 0xe389,
  },
  {
    name: 'nf-weather-time_9',
    code: 0xe38a,
  },
  {
    name: 'nf-weather-tornado',
    code: 0xe351,
  },
  {
    name: 'nf-weather-train',
    code: 0xe3c3,
  },
  {
    name: 'nf-weather-tsunami',
    code: 0xe3bd,
  },
  {
    name: 'nf-weather-umbrella',
    code: 0xe37c,
  },
  {
    name: 'nf-weather-volcano',
    code: 0xe3c0,
  },
  {
    name: 'nf-weather-wind_beaufort_0',
    code: 0xe3af,
  },
  {
    name: 'nf-weather-wind_beaufort_1',
    code: 0xe3b0,
  },
  {
    name: 'nf-weather-wind_beaufort_10',
    code: 0xe3b9,
  },
  {
    name: 'nf-weather-wind_beaufort_11',
    code: 0xe3ba,
  },
  {
    name: 'nf-weather-wind_beaufort_12',
    code: 0xe3bb,
  },
  {
    name: 'nf-weather-wind_beaufort_2',
    code: 0xe3b1,
  },
  {
    name: 'nf-weather-wind_beaufort_3',
    code: 0xe3b2,
  },
  {
    name: 'nf-weather-wind_beaufort_4',
    code: 0xe3b3,
  },
  {
    name: 'nf-weather-wind_beaufort_5',
    code: 0xe3b4,
  },
  {
    name: 'nf-weather-wind_beaufort_6',
    code: 0xe3b5,
  },
  {
    name: 'nf-weather-wind_beaufort_7',
    code: 0xe3b6,
  },
  {
    name: 'nf-weather-wind_beaufort_8',
    code: 0xe3b7,
  },
  {
    name: 'nf-weather-wind_beaufort_9',
    code: 0xe3b8,
  },
  {
    name: 'nf-weather-wind_direction',
    code: 0xe3a9,
  },
  {
    name: 'nf-weather-wind_east',
    code: 0xe35b,
  },
  {
    name: 'nf-weather-wind_north',
    code: 0xe35a,
  },
  {
    name: 'nf-weather-wind_north_east',
    code: 0xe359,
  },
  {
    name: 'nf-weather-wind_north_west',
    code: 0xe358,
  },
  {
    name: 'nf-weather-wind_south',
    code: 0xe357,
  },
  {
    name: 'nf-weather-wind_south_east',
    code: 0xe356,
  },
  {
    name: 'nf-weather-wind_south_west',
    code: 0xe355,
  },
  {
    name: 'nf-weather-wind_west',
    code: 0xe354,
  },
  {
    name: 'nf-weather-windy',
    code: 0xe31e,
  },
];

/**
 * Find a Nerd Font glyph by its name.
 *
 * @param name The case-insensitive name of a glyph.
 * @returns The glyph with the given name or `undefined` if no such glyph exists.
 */
export function findNerdFontGlyphByName(name: string): NerdFontGlyph | undefined {
  return NERD_FONT_GLYPHS.find((glyph) => glyph.name.toLowerCase() === name.toLowerCase());
}

const codeRange = NERD_FONT_GLYPHS.reduce(
  (range, glyph) => ({
    min: Math.min(range.min, glyph.code),
    max: Math.max(range.max, glyph.code),
  }),
  { min: Infinity, max: -Infinity },
);

/**
 * Find a Nerd Font glyph by its code point.
 *
 * @param code The code point of the glyph.
 * @returns The glyph with the given code point or `undefined` if no such glyph exists.
 */
export function findNerdFontGlyphByCode(code: number): NerdFontGlyph | undefined {
  if (code < codeRange.min || code > codeRange.max) {
    return undefined;
  }
  return NERD_FONT_GLYPHS.find((glyph) => glyph.code === code);
}

const fuse = new Fuse(NERD_FONT_GLYPHS, {
  keys: ['name'],
});

/**
 * Find Nerd Font glyphs by a fuzzy search on their names.
 * 
 * @param name The case-insensitive name to search for.
 * @returns A limited list of glyphs that match the search term, sorted by score.
 */
export function fuzzySearchNerdFontGlyphs(name: string): NerdFontGlyph[] {
  const limit = 16;
  if (name === '') {
    return NERD_FONT_GLYPHS.slice(0, limit);
  }
  return fuse.search(name, { limit }).map((result) => result.item);
}
