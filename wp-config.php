<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '?arN82d^7v.Iy)Gf<js(@klGf`F/g<15d; !mr.hGBQ=287|?~p4 5i}Q5aW4>D6' );
define( 'SECURE_AUTH_KEY',   '(2RJKSAI2+$lqc~{Gfrutx;fZRjm*SC~zq:kh$}B`!Bc(9!VC,,`S ^^Z9GvEC=R' );
define( 'LOGGED_IN_KEY',     '+5r?C$Whl|f@S.^|`vvv+Ns6L^mw{!%g9POJFcGt77P19T+[ `>t4!GY:kWlc9W$' );
define( 'NONCE_KEY',         ' IatlB,(XGTmGIHnZ%aUxL4,G!vXPrnF@82U=*BpA~TP##|gl/7jz!P_[aB?g}7C' );
define( 'AUTH_SALT',         'A%npQ3b+asqY)Uv{@7XF:}V[BZ{UP{bQbBk9u@1S+293<9zySPBcGM*L4HzmG[Xw' );
define( 'SECURE_AUTH_SALT',  'DvzMw85/b{qoqlnt7y1qrpcNGV]$HJ.gv4MwVw4C$oz4-g1jHwlEB?L%)iR-{9x-' );
define( 'LOGGED_IN_SALT',    '%yt>4#*ky~VT>B:xKjp %||b$Fa 2#T6H>x>Dz3/^ig(7)|[ovZxD&ARry >HC-^' );
define( 'NONCE_SALT',        '4i5KaWWP80Tk40c)?HG4su:5L*(^3ycAn:S[Zcnw{;2u,r3Aj.L#?rr~}i7L9Yqu' );
define( 'WP_CACHE_KEY_SALT', '_wxMQy-CRY|o[5:R;rc`tO[rTo#)i8b!3m5{pp>f Uemc~tH</>ZyG8D`PxZd(WD' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
