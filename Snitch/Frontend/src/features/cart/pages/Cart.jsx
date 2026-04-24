// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useCart } from '../hook/useCart'
// import { useNavigate } from 'react-router-dom'

// /* ─── Google Font ─────────────────────────────────────────────────────────── */
// const fontLink = document.createElement('link')
// fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
// fontLink.rel = 'stylesheet'
// document.head.appendChild(fontLink)

// /* ─── Inline styles (Gilded Noir design system) ──────────────────────────── */
// const styles = {
//   page: {
//     minHeight: '100vh',
//     background: '#131313',
//     fontFamily: "'Manrope', sans-serif",
//     color: '#e5e2e1',
//     paddingBottom: '120px',
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '20px 24px 16px',
//     background: 'rgba(53,53,52,0.6)',
//     backdropFilter: 'blur(24px)',
//     WebkitBackdropFilter: 'blur(24px)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10,
//   },
//   backBtn: {
//     background: '#2a2a2a',
//     border: 'none',
//     borderRadius: '50%',
//     width: 40,
//     height: 40,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: '#e5e2e1',
//     fontSize: 18,
//     transition: 'background 0.2s',
//   },
//   headerTitle: {
//     fontSize: '1.25rem',
//     fontWeight: 700,
//     letterSpacing: '-0.01em',
//     color: '#e5e2e1',
//     margin: 0,
//   },
//   badge: {
//     background: '#ffc107',
//     color: '#3f2e00',
//     borderRadius: '999px',
//     fontSize: '0.7rem',
//     fontWeight: 700,
//     padding: '3px 10px',
//     letterSpacing: '0.05em',
//   },
//   section: {
//     padding: '8px 0',
//   },
//   sectionTitle: {
//     fontSize: '0.7rem',
//     fontWeight: 700,
//     letterSpacing: '0.12em',
//     color: '#d4c5ab',
//     textTransform: 'uppercase',
//     padding: '24px 24px 12px',
//     margin: 0,
//   },
//   cartCard: {
//     background: '#1c1b1b',
//     borderRadius: '16px',
//     margin: '0 16px 12px',
//     padding: '16px',
//     display: 'flex',
//     gap: '14px',
//     boxShadow: '0 8px 40px 0 rgba(250,189,0,0.04)',
//     position: 'relative',
//   },
//   productImg: {
//     width: 88,
//     height: 108,
//     borderRadius: '12px',
//     objectFit: 'cover',
//     flexShrink: 0,
//     background: '#2a2a2a',
//   },
//   productImgFallback: {
//     width: 88,
//     height: 108,
//     borderRadius: '12px',
//     background: 'linear-gradient(135deg, #2a2a2a 0%, #353534 100%)',
//     flexShrink: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 28,
//   },
//   cardInfo: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 6,
//     minWidth: 0,
//   },
//   productName: {
//     fontSize: '1rem',
//     fontWeight: 700,
//     color: '#e5e2e1',
//     margin: 0,
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   },
//   productDesc: {
//     fontSize: '0.75rem',
//     color: '#d4c5ab',
//     margin: 0,
//     lineHeight: 1.4,
//   },
//   variantChip: {
//     display: 'inline-block',
//     background: '#353534',
//     color: '#d4c5ab',
//     borderRadius: '6px',
//     fontSize: '0.65rem',
//     fontWeight: 600,
//     padding: '3px 8px',
//     letterSpacing: '0.06em',
//     textTransform: 'uppercase',
//     width: 'fit-content',
//   },
//   priceRow: {
//     display: 'flex',
//     alignItems: 'baseline',
//     gap: 8,
//     marginTop: 2,
//   },
//   priceMain: {
//     fontSize: '1rem',
//     fontWeight: 800,
//     color: '#ffe4af',
//   },
//   priceOriginal: {
//     fontSize: '0.78rem',
//     color: '#9c8f78',
//     textDecoration: 'line-through',
//   },
//   quantityStepper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 0,
//     background: '#2a2a2a',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     alignSelf: 'flex-start',
//     marginTop: 4,
//   },
//   stepperBtn: {
//     background: 'transparent',
//     border: 'none',
//     color: '#ffe4af',
//     fontSize: '1.05rem',
//     fontWeight: 700,
//     width: 34,
//     height: 32,
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'background 0.15s',
//   },
//   stepperCount: {
//     fontSize: '0.85rem',
//     fontWeight: 700,
//     color: '#e5e2e1',
//     minWidth: 28,
//     textAlign: 'center',
//   },
//   deleteBtn: {
//     position: 'absolute',
//     top: 14,
//     right: 14,
//     background: 'transparent',
//     border: 'none',
//     color: '#9c8f78',
//     fontSize: 16,
//     cursor: 'pointer',
//     padding: 4,
//     borderRadius: 6,
//     transition: 'color 0.2s',
//   },
//   /* order summary */
//   summarySection: {
//     background: '#201f1f',
//     borderRadius: '20px',
//     margin: '8px 16px',
//     padding: '24px',
//   },
//   summaryTitle: {
//     fontSize: '1rem',
//     fontWeight: 700,
//     color: '#e5e2e1',
//     margin: '0 0 20px',
//   },
//   summaryRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 14,
//   },
//   summaryLabel: {
//     fontSize: '0.85rem',
//     color: '#d4c5ab',
//     fontWeight: 500,
//   },
//   summaryValue: {
//     fontSize: '0.85rem',
//     color: '#e5e2e1',
//     fontWeight: 600,
//   },
//   summaryDiscount: {
//     fontSize: '0.85rem',
//     color: '#00daf8',
//     fontWeight: 600,
//   },
//   summaryFree: {
//     fontSize: '0.85rem',
//     color: '#00daf8',
//     fontWeight: 700,
//   },
//   summaryDivider: {
//     height: 4,
//     background: '#131313',
//     borderRadius: 4,
//     margin: '16px 0',
//   },
//   summaryTotal: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 4,
//   },
//   totalLabel: {
//     fontSize: '1rem',
//     fontWeight: 700,
//     color: '#e5e2e1',
//   },
//   totalValue: {
//     fontSize: '1.2rem',
//     fontWeight: 800,
//     color: '#ffe4af',
//   },
//   /* promo */
//   promoSection: {
//     margin: '8px 16px',
//     background: '#1c1b1b',
//     borderRadius: '16px',
//     padding: '16px 20px',
//     display: 'flex',
//     gap: 10,
//     alignItems: 'center',
//   },
//   promoTag: {
//     fontSize: 18,
//     flexShrink: 0,
//   },
//   promoInput: {
//     flex: 1,
//     background: '#0e0e0e',
//     border: 'none',
//     borderRadius: '10px',
//     padding: '10px 14px',
//     color: '#e5e2e1',
//     fontSize: '0.85rem',
//     fontFamily: "'Manrope', sans-serif",
//     outline: 'none',
//   },
//   promoBtn: {
//     background: 'transparent',
//     border: '1px solid rgba(156,143,120,0.25)',
//     borderRadius: '10px',
//     color: '#ffe4af',
//     fontFamily: "'Manrope', sans-serif",
//     fontSize: '0.8rem',
//     fontWeight: 700,
//     padding: '10px 16px',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//     transition: 'background 0.2s',
//     letterSpacing: '0.04em',
//   },
//   /* checkout */
//   checkoutBar: {
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: '16px 20px 28px',
//     background: 'rgba(19,19,19,0.85)',
//     backdropFilter: 'blur(20px)',
//     WebkitBackdropFilter: 'blur(20px)',
//   },
//   checkoutBtn: {
//     width: '100%',
//     background: 'linear-gradient(135deg, #fabd00 0%, #ffe4af 100%)',
//     color: '#3f2e00',
//     border: 'none',
//     borderRadius: '14px',
//     padding: '16px 24px',
//     fontSize: '1rem',
//     fontWeight: 800,
//     fontFamily: "'Manrope', sans-serif",
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     boxShadow: '0 8px 32px 0 rgba(250,189,0,0.25)',
//     transition: 'transform 0.15s, box-shadow 0.2s',
//     letterSpacing: '-0.01em',
//   },
//   checkoutTotal: {
//     fontSize: '1rem',
//     fontWeight: 800,
//     color: '#3f2e00',
//   },
//   /* empty state */
//   emptyWrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '70vh',
//     padding: '40px 32px',
//     textAlign: 'center',
//   },
//   emptyIcon: {
//     fontSize: 72,
//     marginBottom: 24,
//     opacity: 0.7,
//   },
//   emptyTitle: {
//     fontSize: '1.4rem',
//     fontWeight: 800,
//     color: '#e5e2e1',
//     margin: '0 0 10px',
//     letterSpacing: '-0.01em',
//   },
//   emptySubtitle: {
//     fontSize: '0.9rem',
//     color: '#d4c5ab',
//     margin: '0 0 32px',
//     lineHeight: 1.6,
//   },
//   shopBtn: {
//     background: 'transparent',
//     border: '1px solid rgba(156,143,120,0.3)',
//     borderRadius: '12px',
//     color: '#ffe4af',
//     fontFamily: "'Manrope', sans-serif",
//     fontSize: '0.95rem',
//     fontWeight: 700,
//     padding: '14px 32px',
//     cursor: 'pointer',
//     letterSpacing: '0.02em',
//     transition: 'background 0.2s',
//   },
//   /* loading */
//   loadingWrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '70vh',
//     gap: 16,
//   },
//   spinner: {
//     width: 40,
//     height: 40,
//     border: '3px solid #2a2a2a',
//     borderTop: '3px solid #ffc107',
//     borderRadius: '50%',
//     animation: 'spin 0.8s linear infinite',
//   },
// }

// /* ─── CartItemCard ────────────────────────────────────────────────────────── */
// function CartItemCard({ item }) {
//   const { product, quantity, price, variant } = item
//   const imageUrl = product?.images?.[0]?.url
//   const variantPrice = product?.variants?.find(v => v._id === variant)?.price?.amount
//   const displayPrice = variantPrice ?? price?.amount ?? product?.price?.amount
//   const originalPrice = product?.price?.amount
//   const showDiscount = originalPrice && displayPrice && displayPrice < originalPrice

//   return (
//     <div style={styles.cartCard}>
//       {/* trash icon */}
//       <button style={styles.deleteBtn} title="Remove item">🗑</button>

//       {/* image */}
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt={product?.title}
//           style={styles.productImg}
//           onError={e => { e.target.style.display = 'none' }}
//         />
//       ) : (
//         <div style={styles.productImgFallback}>👔</div>
//       )}

//       {/* info */}
//       <div style={styles.cardInfo}>
//         <p style={styles.productName}>{product?.title ?? 'Unknown Product'}</p>
//         <p style={styles.productDesc}>{product?.description ?? ''}</p>

//         <span style={styles.variantChip}>Variant · {quantity} pcs</span>

//         <div style={styles.priceRow}>
//           <span style={styles.priceMain}>
//             ₹{(displayPrice * quantity).toLocaleString('en-IN')}
//           </span>
//           {showDiscount && (
//             <span style={styles.priceOriginal}>
//               ₹{(originalPrice * quantity).toLocaleString('en-IN')}
//             </span>
//           )}
//         </div>

//         {/* quantity stepper (display only — hook can be wired) */}
//         <div style={styles.quantityStepper}>
//           <button style={styles.stepperBtn}>−</button>
//           <span style={styles.stepperCount}>{quantity}</span>
//           <button style={styles.stepperBtn}>+</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ─── OrderSummary ────────────────────────────────────────────────────────── */
// function OrderSummary({ cartItems }) {
//   const mrpTotal = cartItems.reduce((sum, item) => {
//     const originalPrice = item.product?.price?.amount ?? 0
//     return sum + originalPrice * item.quantity
//   }, 0)

//   const discountedTotal = cartItems.reduce((sum, item) => {
//     const variantPrice = item.product?.variants?.find(v => v._id === item.variant)?.price?.amount
//     const price = variantPrice ?? item.price?.amount ?? item.product?.price?.amount ?? 0
//     return sum + price * item.quantity
//   }, 0)

//   const discount = mrpTotal - discountedTotal

//   return (
//     <div style={styles.summarySection}>
//       <p style={styles.summaryTitle}>Order Summary</p>

//       <div style={styles.summaryRow}>
//         <span style={styles.summaryLabel}>MRP Total</span>
//         <span style={styles.summaryValue}>₹{mrpTotal.toLocaleString('en-IN')}</span>
//       </div>

//       {discount > 0 && (
//         <div style={styles.summaryRow}>
//           <span style={styles.summaryLabel}>Discount</span>
//           <span style={styles.summaryDiscount}>−₹{discount.toLocaleString('en-IN')}</span>
//         </div>
//       )}

//       <div style={styles.summaryRow}>
//         <span style={styles.summaryLabel}>Delivery</span>
//         <span style={styles.summaryFree}>FREE</span>
//       </div>

//       <div style={styles.summaryDivider} />

//       <div style={styles.summaryTotal}>
//         <span style={styles.totalLabel}>Total Payable</span>
//         <span style={styles.totalValue}>₹{discountedTotal.toLocaleString('en-IN')}</span>
//       </div>
//     </div>
//   )
// }

// /* ─── PromoCode ───────────────────────────────────────────────────────────── */
// function PromoCode() {
//   const [code, setCode] = useState('')

//   return (
//     <div style={styles.promoSection}>
//       <span style={styles.promoTag}>🏷️</span>
//       <input
//         style={styles.promoInput}
//         placeholder="Enter promo code"
//         value={code}
//         onChange={e => setCode(e.target.value)}
//       />
//       <button style={styles.promoBtn}>Apply</button>
//     </div>
//   )
// }

// /* ─── EmptyCart ───────────────────────────────────────────────────────────── */
// function EmptyCart({ onShop }) {
//   return (
//     <div style={styles.emptyWrapper}>
//       <div style={styles.emptyIcon}>🛍️</div>
//       <h2 style={styles.emptyTitle}>Your cart is empty</h2>
//       <p style={styles.emptySubtitle}>
//         Looks like you haven't added<br />anything to your cart yet.
//       </p>
//       <button
//         style={styles.shopBtn}
//         onClick={onShop}
//         onMouseEnter={e => e.currentTarget.style.background = '#1c1b1b'}
//         onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//       >
//         Start Shopping
//       </button>
//     </div>
//   )
// }

// /* ─── Main Cart Page ──────────────────────────────────────────────────────── */
// const Cart = () => {
//   const cartItems = useSelector(state => state.cart.items)
//   const { handleGetCart } = useCart()
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // inject keyframes for spinner
//     if (!document.getElementById('cart-spin-style')) {
//       const s = document.createElement('style')
//       s.id = 'cart-spin-style'
//       s.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`
//       document.head.appendChild(s)
//     }

//     async function load() {
//       try {
//         await handleGetCart()
//       } finally {
//         setLoading(false)
//       }
//     }
//     load()
//   }, [])

//   /* compute totals for CTA */
//   const checkoutTotal = cartItems.reduce((sum, item) => {
//     const variantPrice = item.product?.variants?.find(v => v._id === item.variant)?.price?.amount
//     const price = variantPrice ?? item.price?.amount ?? item.product?.price?.amount ?? 0
//     return sum + price * item.quantity
//   }, 0)

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

//   return (
//     <div style={styles.page}>
//       {/* ── Header ── */}
//       <header style={styles.header}>
//         <button
//           style={styles.backBtn}
//           onClick={() => navigate(-1)}
//           onMouseEnter={e => e.currentTarget.style.background = '#353534'}
//           onMouseLeave={e => e.currentTarget.style.background = '#2a2a2a'}
//         >
//           ←
//         </button>
//         <h1 style={styles.headerTitle}>My Cart</h1>
//         <span style={styles.badge}>
//           {totalItems} {totalItems === 1 ? 'item' : 'items'}
//         </span>
//       </header>

//       {/* ── Body ── */}
//       {loading ? (
//         <div style={styles.loadingWrapper}>
//           <div style={styles.spinner} />
//           <span style={{ color: '#d4c5ab', fontSize: '0.85rem' }}>Loading your cart…</span>
//         </div>
//       ) : cartItems.length === 0 ? (
//         <EmptyCart onShop={() => navigate('/')} />
//       ) : (
//         <>
//           {/* Cart Items */}
//           <div style={styles.section}>
//             <p style={styles.sectionTitle}>
//               {cartItems.length} {cartItems.length === 1 ? 'Product' : 'Products'}
//             </p>
//             {cartItems.map(item => (
//               <CartItemCard key={item._id} item={item} />
//             ))}
//           </div>

//           {/* Promo Code */}
//           <PromoCode />

//           {/* Order Summary */}
//           <div style={styles.section}>
//             <p style={styles.sectionTitle}>Price Details</p>
//             <OrderSummary cartItems={cartItems} />
//           </div>
//         </>
//       )}

//       {/* ── Sticky Checkout Bar ── */}
//       {!loading && cartItems.length > 0 && (
//         <div style={styles.checkoutBar}>
//           <button
//             style={styles.checkoutBtn}
//             onMouseEnter={e => {
//               e.currentTarget.style.transform = 'translateY(-2px)'
//               e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(250,189,0,0.35)'
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.transform = 'translateY(0)'
//               e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(250,189,0,0.25)'
//             }}
//           >
//             <span>Proceed to Checkout</span>
//             <span style={styles.checkoutTotal}>₹{checkoutTotal.toLocaleString('en-IN')}</span>
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart



















import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useCart } from '../hook/useCart'
import { Link, useNavigate } from 'react-router'

/* ─── Inline styles & tokens matching the "Avenue Montaigne" design system ─── */
const tokens = {
    surface: '#fbf9f6',
    surfaceLow: '#f5f3f0',
    surfaceLowest: '#ffffff',
    surfaceHigh: '#eae8e5',
    surfaceHighest: '#e4e2df',
    onSurface: '#1b1c1a',
    onSurfaceVariant: '#4d463a',
    secondary: '#7A6E63',
    muted: '#B5ADA3',
    primary: '#C9A96E',
    primaryDark: '#745a27',
    outlineVariant: '#d0c5b5',
    outline: '#7f7668',
}

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const { handleGetCart, handleIncrementCartItem } = useCart()
    const navigate = useNavigate()

    /* Local quantity state — key: cartItem._id, value: number */
    const [ quantities, setQuantities ] = useState({})

    useEffect(() => {
        handleGetCart()
    }, [])

    /* Sync local qty state when cartItems arrive */
    useEffect(() => {
        if (cartItems?.length) {
            const initial = {}
            cartItems.forEach(item => {
                initial[ item._id ] = item.quantity ?? 1
            })
            setQuantities(initial)
        }
    }, [ cartItems ])

    const changeQty = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [ id ]: Math.max(1, (prev[ id ] ?? 1) + delta),
        }))
    }

    /* ─── Derived totals ─── */
    const subtotal = cartItems?.reduce((sum, item) => {
        const qty = quantities[ item._id ] ?? item.quantity ?? 1
        return sum + (item.price?.amount ?? 0) * qty
    }, 0) ?? 0

    const freeShippingThreshold = 15000
    const shippingFree = subtotal >= freeShippingThreshold
    const totalPieces = cartItems?.length ?? 0

    /* ─── Helpers ─── */
    const getVariantDetails = (product, variantId) => {
        if (!product?.variants || !variantId) return null
        return product.variants.find(v => v._id === variantId) ?? null
    }

    const getDisplayImage = (product, variant) => {
        if (variant?.images?.length) return variant.images[ 0 ].url
        if (product?.images?.length) return product.images[ 0 ].url
        return null
    }

    const formatCurrency = (amount, currency = 'INR') =>
        `${currency} ${Number(amount).toLocaleString('en-IN')}`

    console.log(cartItems)

    /* ─── Empty state ─── */
    if (!cartItems?.length) {
        return (
            <>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <div
                    className="min-h-screen flex flex-col"
                    style={{ backgroundColor: tokens.surface, fontFamily: "'Inter', sans-serif" }}
                >
                    {/* Nav */}
                    <nav
                        className="px-8 lg:px-16 xl:px-24 pt-10 pb-6 flex items-center justify-between"
                        style={{ borderBottom: `1px solid ${tokens.surfaceHighest}` }}
                    >
                        <Link
                            to="/"
                            className="text-sm font-medium tracking-[0.35em] uppercase hover:opacity-80 transition-opacity"
                            style={{ fontFamily: "'Cormorant Garamond', serif", color: tokens.primary }}
                        >
                            Snitch.
                        </Link>
                        <button
                            onClick={() => navigate(-1)}
                            className="text-[10px] uppercase tracking-[0.22em] font-medium transition-colors hover:opacity-70"
                            style={{ color: tokens.secondary }}
                        >
                            Return to Archive
                        </button>
                    </nav>

                    <div className="flex-1 flex flex-col items-center justify-center gap-6 pb-24 px-8">
                        <p
                            className="text-5xl md:text-6xl font-light leading-tight"
                            style={{ fontFamily: "'Cormorant Garamond', serif", color: tokens.onSurface }}
                        >
                            Your selection is empty.
                        </p>
                        <p
                            className="text-[10px] uppercase tracking-[0.22em]"
                            style={{ color: tokens.muted }}
                        >
                            Curate your collection
                        </p>
                        <Link
                            to="/"
                            className="mt-4 px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
                            style={{
                                backgroundColor: tokens.onSurface,
                                color: tokens.surface,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = tokens.primary
                                e.currentTarget.style.color = tokens.onSurface
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = tokens.onSurface
                                e.currentTarget.style.color = tokens.surface
                            }}
                        >
                            Explore the Archive
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="min-h-screen pb-24 selection:bg-[#C9A96E]/30"
                style={{ backgroundColor: tokens.surface, fontFamily: "'Inter', sans-serif" }}
            >


                {/* ── Main Content ── */}
                <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 pt-12 lg:pt-20">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                        {/* ═══════════════════════════════════════════════
                            LEFT COLUMN — Cart Items (65%)
                        ═══════════════════════════════════════════════ */}
                        <div className="w-full lg:w-[65%]">
                            {/* Heading */}
                            <div className="mb-10">
                                <h1
                                    className="font-light leading-[1.05] mb-2"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        color: tokens.onSurface,
                                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    }}
                                >
                                    Your Selection
                                </h1>
                                <p
                                    className="text-[10px] uppercase tracking-[0.24em] font-medium"
                                    style={{ color: tokens.muted }}
                                >
                                    {totalPieces} {totalPieces === 1 ? 'piece' : 'pieces'}
                                </p>
                            </div>

                            {/* ── Cart Item List ── */}
                            <div className="flex flex-col gap-6">
                                {cartItems.map(item => {
                                    const { product, variant: variantId, price, product: { _id } } = item
                                    const variantDetail = getVariantDetails(product, variantId)
                                    const imageUrl = getDisplayImage(product, variantDetail)
                                    const displayPrice = price ?? variantDetail?.price ?? product?.price
                                    const qty = quantities[ _id ] ?? item.quantity ?? 1
                                    const attributes = variantDetail?.attributes ?? {}
                                    const stock = variantDetail?.stock

                                    return (
                                        <div
                                            key={_id}
                                            className="flex gap-6 md:gap-8 p-6 md:p-8 transition-all duration-300"
                                            style={{ backgroundColor: tokens.surfaceLow }}
                                        >
                                            {/* Product Image */}
                                            <div
                                                className="flex-shrink-0 overflow-hidden"
                                                style={{
                                                    width: 'clamp(100px, 15vw, 160px)',
                                                    aspectRatio: '4/5',
                                                    backgroundColor: tokens.surfaceHighest,
                                                }}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={product?.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full flex items-center justify-center"
                                                        style={{ backgroundColor: tokens.surfaceHigh }}
                                                    />
                                                )}
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    {/* Title */}
                                                    <h2
                                                        className="font-light leading-tight mb-3"
                                                        style={{
                                                            fontFamily: "'Cormorant Garamond', serif",
                                                            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                                                            color: tokens.onSurface,
                                                        }}
                                                    >
                                                        {product?.title}
                                                    </h2>

                                                    {/* Variant Attribute Chips */}
                                                    {Object.keys(attributes).length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {Object.entries(attributes).map(([ key, val ]) => (
                                                                <span
                                                                    key={key}
                                                                    className="px-3 py-1 text-[9px] uppercase tracking-[0.18em] font-medium"
                                                                    style={{
                                                                        backgroundColor: tokens.primary,
                                                                        color: '#fff',
                                                                    }}
                                                                >
                                                                    {val}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* Price */}
                                                    <p
                                                        className="text-[11px] uppercase tracking-[0.2em] font-medium mb-1"
                                                        style={{ color: tokens.onSurface }}
                                                    >
                                                        {displayPrice
                                                            ? formatCurrency(displayPrice.amount, displayPrice.currency)
                                                            : '—'}
                                                    </p>

                                                    {/* Stock */}
                                                    {stock !== undefined && (
                                                        <p
                                                            className="text-[10px] uppercase tracking-[0.15em] mb-4"
                                                            style={{ color: tokens.muted }}
                                                        >
                                                            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Bottom Row: Quantity + Remove */}
                                                <div className="flex items-center justify-between flex-wrap gap-4">
                                                    {/* Quantity Stepper */}
                                                    <div
                                                        className="flex items-center"
                                                        style={{ border: `1px solid ${tokens.outlineVariant}` }}
                                                    >
                                                        <button
                                                            id={`qty-dec-${_id}`}
                                                            onClick={() => changeQty(_id, -1)}
                                                            className="w-9 h-9 flex items-center justify-center text-sm font-light transition-colors hover:opacity-60"
                                                            style={{ color: tokens.onSurface, borderRight: `1px solid ${tokens.outlineVariant}` }}
                                                            aria-label="Decrease quantity"
                                                        >
                                                            −
                                                        </button>
                                                        <span
                                                            className="w-10 text-center text-[11px] tracking-[0.12em] font-medium select-none"
                                                            style={{ color: tokens.onSurface }}
                                                        >
                                                            {qty}
                                                        </span>
                                                        <button
                                                            id={`qty-inc-${_id}`}
                                                            onClick={() => handleIncrementCartItem({ productId: _id, variantId })}
                                                            className="w-9 h-9 flex items-center justify-center text-sm font-light transition-colors hover:opacity-60"
                                                            style={{ color: tokens.onSurface, borderLeft: `1px solid ${tokens.outlineVariant}` }}
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    {/* Remove */}
                                                    <button
                                                        id={`remove-${_id}`}
                                                        className="text-[10px] uppercase tracking-[0.22em] font-medium transition-all duration-200 hover:underline hover:opacity-70"
                                                        style={{ color: tokens.muted }}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Policy strip */}
                            <div
                                className="mt-10 pt-8 grid grid-cols-3 gap-4 text-[10px] uppercase tracking-[0.12em]"
                                style={{ borderTop: `1px solid ${tokens.surfaceHighest}`, color: tokens.muted }}
                            >
                                <div>
                                    <p className="font-medium mb-1" style={{ color: tokens.secondary }}>Shipping</p>
                                    <p>Complimentary over INR 15,000</p>
                                </div>
                                <div>
                                    <p className="font-medium mb-1" style={{ color: tokens.secondary }}>Returns</p>
                                    <p>Within 14 days of delivery</p>
                                </div>
                                <div>
                                    <p className="font-medium mb-1" style={{ color: tokens.secondary }}>Authenticity</p>
                                    <p>100% Guaranteed</p>
                                </div>
                            </div>
                        </div>

                        {/* ═══════════════════════════════════════════════
                            RIGHT COLUMN — Order Summary (35%, Sticky)
                        ═══════════════════════════════════════════════ */}
                        <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
                            <div
                                className="p-8"
                                style={{ backgroundColor: tokens.surfaceLowest, boxShadow: '0 20px 40px rgba(27,28,26,0.04)' }}
                            >
                                {/* Heading */}
                                <h2
                                    className="font-light mb-6"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: '1.75rem',
                                        color: tokens.onSurface,
                                    }}
                                >
                                    The Total
                                </h2>

                                {/* Tonal divider */}
                                <div className="mb-6" style={{ height: 1, backgroundColor: tokens.surfaceHighest }} />

                                {/* Line items */}
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="flex justify-between items-baseline">
                                        <span
                                            className="text-[10px] uppercase tracking-[0.18em]"
                                            style={{ color: tokens.secondary }}
                                        >
                                            Subtotal
                                        </span>
                                        <span
                                            className="text-[11px] uppercase tracking-[0.12em] font-medium"
                                            style={{ color: tokens.onSurface }}
                                        >
                                            {formatCurrency(subtotal)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-baseline">
                                        <span
                                            className="text-[10px] uppercase tracking-[0.18em]"
                                            style={{ color: tokens.secondary }}
                                        >
                                            Shipping
                                        </span>
                                        <span
                                            className="text-[10px] uppercase tracking-[0.1em]"
                                            style={{ color: shippingFree ? '#5a7a5a' : tokens.muted }}
                                        >
                                            {shippingFree ? 'Complimentary' : `Complimentary over INR 15,000`}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-baseline">
                                        <span
                                            className="text-[10px] uppercase tracking-[0.18em]"
                                            style={{ color: tokens.secondary }}
                                        >
                                            Duties & Taxes
                                        </span>
                                        <span
                                            className="text-[10px] uppercase tracking-[0.1em]"
                                            style={{ color: tokens.muted }}
                                        >
                                            Included
                                        </span>
                                    </div>
                                </div>

                                {/* Total divider */}
                                <div className="mb-6" style={{ height: 1, backgroundColor: tokens.surfaceHighest }} />

                                {/* Grand Total */}
                                <div className="flex justify-between items-baseline mb-8">
                                    <span
                                        className="text-[10px] uppercase tracking-[0.22em] font-medium"
                                        style={{ color: tokens.onSurface }}
                                    >
                                        Total
                                    </span>
                                    <span
                                        className="text-base uppercase tracking-[0.18em] font-medium"
                                        style={{ color: tokens.onSurface }}
                                    >
                                        {formatCurrency(subtotal)}
                                    </span>
                                </div>

                                {/* Primary CTA */}
                                <button
                                    id="proceed-checkout"
                                    className="w-full py-4 mb-3 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: tokens.onSurface,
                                        color: tokens.surface,
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = tokens.primary
                                        e.currentTarget.style.color = tokens.onSurface
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = tokens.onSurface
                                        e.currentTarget.style.color = tokens.surface
                                    }}
                                >
                                    Proceed to Checkout
                                </button>

                                {/* Secondary ghost CTA */}
                                <button
                                    id="continue-shopping"
                                    className="w-full py-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: `1px solid ${tokens.outlineVariant}`,
                                        color: tokens.onSurface,
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = tokens.primary
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = tokens.outlineVariant
                                    }}
                                    onClick={() => navigate('/')}
                                >
                                    Continue Shopping
                                </button>

                                {/* Policy footnote */}
                                <p
                                    className="mt-6 text-center text-[9px] uppercase tracking-[0.14em] leading-relaxed"
                                    style={{ color: tokens.muted }}
                                >
                                    Free returns within 14 days · Authenticity guaranteed
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart