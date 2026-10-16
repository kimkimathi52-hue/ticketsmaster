# ticketsmaster
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TicketFlow · live events</title>
  <!-- Google Font & Font Awesome for icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #f5f7fc;
      color: #1a1e2b;
      display: flex;
      justify-content: center;
      padding: 2rem 1rem;
      min-height: 100vh;
    }

    .app-container {
      max-width: 1360px;
      width: 100%;
    }

    /* Header */
    .header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-icon {
      background: linear-gradient(145deg, #2c3e9e, #1b2a7a);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      box-shadow: 0 6px 12px rgba(28, 45, 145, 0.15);
    }

    .logo-text {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      color: #1a1e2b;
    }

    .logo-text span {
      color: #2c3e9e;
    }

    .header-actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    .icon-btn {
      background: white;
      border: 1px solid #e3e7f0;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3a4055;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
    }

    .icon-btn:hover {
      background: #f0f3fe;
      border-color: #b9c3e0;
      color: #1f2a5e;
    }

    .user-avatar {
      background: linear-gradient(145deg, #3e4b8f, #1e2a6b);
      color: white;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 8px 16px -6px rgba(20, 30, 90, 0.3);
      transition: transform 0.1s;
    }

    .user-avatar:hover {
      transform: scale(1.02);
    }

    /* Hero / search */
    .hero-section {
      background: linear-gradient(105deg, #ffffff 0%, #f9fbff 100%);
      border-radius: 32px;
      padding: 1.5rem 2rem;
      margin-bottom: 2.2rem;
      box-shadow: 0 20px 35px -8px rgba(25, 35, 75, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.7) inset;
      border: 1px solid #eff2fa;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .hero-left h2 {
      font-size: 1.9rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      background: linear-gradient(145deg, #1a1e2b, #222b60);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-left p {
      color: #5d637b;
      margin-top: 0.2rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .hero-left p i {
      color: #2c3e9e;
      font-size: 0.9rem;
    }

    .search-wrapper {
      background: white;
      border-radius: 60px;
      padding: 0.35rem 0.35rem 0.35rem 1.5rem;
      display: flex;
      align-items: center;
      box-shadow: 0 12px 28px -10px rgba(20, 30, 80, 0.2);
      border: 1px solid #e2e8f5;
      min-width: 320px;
      flex: 1 0 320px;
      max-width: 460px;
    }

    .search-wrapper i {
      color: #8a92ab;
      font-size: 1rem;
      margin-right: 0.6rem;
    }

    .search-wrapper input {
      border: none;
      outline: none;
      flex: 1;
      font-size: 0.95rem;
      padding: 0.6rem 0;
      background: transparent;
      color: #1a1e2b;
      font-weight: 500;
    }

    .search-wrapper input::placeholder {
      color: #a8b0c7;
      font-weight: 400;
    }

    .search-btn {
      background: #1e2a6b;
      border: none;
      color: white;
      padding: 0.7rem 1.6rem;
      border-radius: 40px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 6px 14px rgba(28, 45, 145, 0.3);
      letter-spacing: 0.01em;
    }

    .search-btn:hover {
      background: #141f52;
      transform: translateY(-1px);
      box-shadow: 0 10px 18px rgba(28, 45, 145, 0.35);
    }

    /* filter tabs */
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 2rem;
      align-items: center;
    }

    .filter-tab {
      background: #ffffffd9;
      border: 1px solid #dfe5f2;
      color: #3f465e;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.6rem 1.4rem;
      border-radius: 40px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .filter-tab i {
      font-size: 0.85rem;
      color: #677090;
    }

    .filter-tab.active {
      background: #1e2a6b;
      border-color: #1e2a6b;
      color: white;
      box-shadow: 0 10px 18px -6px rgba(30, 42, 107, 0.4);
    }

    .filter-tab.active i {
      color: #cbd3ff;
    }

    .filter-tab:hover:not(.active) {
      background: #f0f4fe;
      border-color: #b7c2e0;
    }

    /* event grid */
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.8rem;
      margin-bottom: 2.5rem;
    }

    .event-card {
      background: white;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 20px 35px -10px rgba(20, 30, 65, 0.12);
      transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1);
      border: 1px solid #edf1fa;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
    }

    .event-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 30px 45px -12px rgba(20, 30, 85, 0.2);
      border-color: #cfd9f0;
    }

    .card-media {
      position: relative;
      height: 170px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 1rem;
    }

    .card-badge {
      background: rgba(20, 28, 55, 0.8);
      backdrop-filter: blur(5px);
      color: white;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.35rem 0.9rem;
      border-radius: 40px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .card-content {
      padding: 1.3rem 1.3rem 1.2rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .event-title {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 0.3rem;
      color: #151b2e;
      line-height: 1.3;
    }

    .event-meta {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1rem;
      margin-top: 0.2rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.82rem;
      color: #55607a;
      font-weight: 500;
    }

    .meta-item i {
      width: 16px;
      color: #2c3e9e;
      font-size: 0.8rem;
    }

    .price-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding-top: 0.8rem;
      border-top: 1px solid #ecf0f9;
    }

    .price {
      font-weight: 700;
      font-size: 1.35rem;
      color: #1a1e2b;
      letter-spacing: -0.02em;
    }

    .price small {
      font-weight: 500;
      font-size: 0.75rem;
      color: #6f7893;
      letter-spacing: 0;
      margin-left: 2px;
    }

    .book-btn {
      background: #f0f3fe;
      border: none;
      color: #1e2a6b;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.6rem 1.2rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.15s;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: 1px solid transparent;
    }

    .book-btn i {
      font-size: 0.8rem;
      transition: transform 0.15s;
    }

    .book-btn:hover {
      background: #1e2a6b;
      color: white;
      border-color: #1e2a6b;
    }

    .book-btn:hover i {
      transform: translateX(3px);
    }

    /* toast / snackbar */
    .toast-message {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: #1e2a6b;
      color: white;
      padding: 0.9rem 2rem;
      border-radius: 60px;
      font-weight: 500;
      font-size: 0.95rem;
      box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s;
      z-index: 999;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      pointer-events: none;
      white-space: nowrap;
    }

    .toast-message i {
      color: #9bb1ff;
    }

    .toast-message.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }

    /* bottom loader / note */
    .load-more {
      display: flex;
      justify-content: center;
      margin: 2.5rem 0 1rem;
    }

    .load-btn {
      background: transparent;
      border: 1.5px solid #cfd8ed;
      color: #2f3a60;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0.9rem 2.8rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .load-btn i {
      color: #2c3e9e;
    }

    .load-btn:hover {
      background: #eef2fe;
      border-color: #aebbe0;
    }

    /* price range slider (decorative) */
    .price-filter {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-left: auto;
      font-size: 0.85rem;
      color: #3e4866;
      font-weight: 500;
    }

    .price-filter input[type="range"] {
      width: 130px;
      height: 4px;
      border-radius: 5px;
      background: #dbe1f0;
      -webkit-appearance: none;
    }

    .price-filter input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #1e2a6b;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    /* responsive */
    @media (max-width: 750px) {
      .hero-section {
        flex-direction: column;
        align-items: stretch;
        padding: 1.5rem;
      }
      .search-wrapper {
        min-width: unset;
        width: 100%;
      }
      .header {
        flex-wrap: wrap;
      }
      .price-filter {
        margin-left: 0;
      }
    }

    @media (max-width: 480px) {
      .event-grid {
        grid-template-columns: 1fr;
      }
      .filter-tabs {
        gap: 0.4rem;
      }
      .filter-tab {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
    }
  </style>
</head>
<body>
<div class="app-container">
  <!-- Header -->
  <header class="header">
    <div class="logo-area">
      <div class="logo-icon">
        <i class="fas fa-ticket-alt"></i>
      </div>
      <div class="logo-text">Ticket<span>Flow</span></div>
    </div>
    <div class="header-actions">
      <div class="icon-btn"><i class="far fa-heart"></i></div>
      <div class="icon-btn"><i class="far fa-bell"></i></div>
      <div class="user-avatar">JD</div>
    </div>
  </header>

  <!-- Hero / Search -->
  <div class="hero-section">
    <div class="hero-left">
      <h2>Find your next experience</h2>
      <p><i class="fas fa-map-pin"></i> Live events near New York · 124 events</p>
    </div>
    <div class="search-wrapper">
      <i class="fas fa-search"></i>
      <input type="text" id="searchInput" placeholder="Search by artist, team, or venue...">
      <button class="search-btn" id="searchBtn">Search</button>
    </div>
  </div>

  <!-- Filter tabs + price range (decorative) -->
  <div class="filter-tabs">
    <button class="filter-tab active" data-filter="all"><i class="fas fa-layer-group"></i> All events</button>
    <button class="filter-tab" data-filter="concert"><i class="fas fa-music"></i> Concerts</button>
    <button class="filter-tab" data-filter="sports"><i class="fas fa-futbol"></i> Sports</button>
    <button class="filter-tab" data-filter="theater"><i class="fas fa-theater-masks"></i> Theater</button>
    <button class="filter-tab" data-filter="festival"><i class="fas fa-glass-cheers"></i> Festivals</button>
    <div class="price-filter">
      <i class="fas fa-dollar-sign" style="color: #2c3e9e;"></i>
      <input type="range" min="20" max="400" value="220" id="priceRange">
      <span id="priceLabel">$220</span>
    </div>
  </div>

  <!-- Event Grid (dynamic) -->
  <div class="event-grid" id="eventGrid"></div>

  <!-- Load more -->
  <div class="load-more">
    <button class="load-btn" id="loadMoreBtn"><i class="fas fa-arrow-down"></i> Load more events</button>
  </div>
</div>

<!-- Toast notification -->
<div class="toast-message" id="toast"><i class="fas fa-check-circle"></i> <span id="toastText">Ticket added to cart</span></div>

<script>
  (function() {
    // ---------- DATA ----------
    const events = [
      {
        id: 1,
        title: 'Coldplay · Music of the Spheres',
        category: 'concert',
        venue: 'MetLife Stadium',
        date: 'Jun 15 · 7:30 PM',
        price: 189,
        image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Almost sold out'
      },
      {
        id: 2,
        title: 'NBA Finals · Game 5',
        category: 'sports',
        venue: 'Madison Square Garden',
        date: 'Jun 18 · 8:00 PM',
        price: 420,
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Playoffs'
      },
      {
        id: 3,
        title: 'Hamilton · Original Broadway',
        category: 'theater',
        venue: 'Richard Rodgers Theatre',
        date: 'Jul 2 · 7:00 PM',
        price: 249,
        image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Best seller'
      },
      {
        id: 4,
        title: 'Governors Ball 2025',
        category: 'festival',
        venue: 'Flushing Meadows',
        date: 'Jun 6-8 · 12:00 PM',
        price: 329,
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: '3-day pass'
      },
      {
        id: 5,
        title: 'Taylor Swift · Eras Tour',
        category: 'concert',
        venue: 'Soldier Field',
        date: 'Jun 22 · 6:30 PM',
        price: 499,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'VIP'
      },
      {
        id: 6,
        title: 'NY Knicks vs Lakers',
        category: 'sports',
        venue: 'Barclays Center',
        date: 'Jul 10 · 7:30 PM',
        price: 145,
        image: 'https://images.unsplash.com/photo-1504457043681-8b5d2d781e6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Rivalry'
      },
      {
        id: 7,
        title: 'The Lion King',
        category: 'theater',
        venue: 'Minskoff Theatre',
        date: 'Jun 28 · 2:00 PM',
        price: 135,
        image: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Family'
      },
      {
        id: 8,
        title: 'Coachella 2026 (early)',
        category: 'festival',
        venue: 'Empire Polo Club',
        date: 'Apr 10-12 · 12:00 PM',
        price: 549,
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        badge: 'Presale'
      }
    ];

    // DOM elements
    const eventGrid = document.getElementById('eventGrid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    const priceRange = document.getElementById('priceRange');
    const priceLabel = document.getElementById('priceLabel');

    let activeFilter = 'all';
    let searchQuery = '';
    let visibleCount = 6;      // initial items to show
    const totalItems = events.length;

    // ---------- RENDER ----------
    function renderEvents() {
      // Filter by category & search & price (price filter is decorative but we can filter too)
      let filtered = events.filter(event => {
        const matchesCategory = activeFilter === 'all' || event.category === activeFilter;
        const matchesSearch = searchQuery === '' || 
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.venue.toLowerCase().includes(searchQuery.toLowerCase());
        const priceLimit = Number(priceRange.value);
        const matchesPrice = event.price <= priceLimit;
        return matchesCategory && matchesSearch && matchesPrice;
      });

      // how many to show
      const showCount = Math.min(visibleCount, filtered.length);
      const visibleEvents = filtered.slice(0, showCount);

      if (visibleEvents.length === 0) {
        eventGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:#7a829b; background:white; border-radius:28px; border:1px solid #e9eef9;">
          <i class="fas fa-search" style="font-size:2rem; margin-bottom:1rem; color:#b8c2dd;"></i>
          <p style="font-weight:500;">No events match your filters.</p>
        </div>`;
        updateLoadMoreButton(0);
        return;
      }

      eventGrid.innerHTML = visibleEvents.map(event => `
        <div class="event-card" data-id="${event.id}">
          <div class="card-media" style="background-image: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1)), url('${event.image}');">
            <span class="card-badge">${event.badge}</span>
          </div>
          <div class="card-content">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-meta">
              <div class="meta-item"><i class="fas fa-map-marker-alt"></i> ${event.venue}</div>
              <div class="meta-item"><i class="far fa-calendar-alt"></i> ${event.date}</div>
            </div>
            <div class="price-row">
              <div class="price">$${event.price} <small>USD</small></div>
              <button class="book-btn" data-id="${event.id}"><i class="fas fa-shopping-cart"></i> Buy</button>
            </div>
          </div>
        </div>
      `).join('');

      // Attach book now event listeners to each card button
      document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-id');
          const ev = events.find(ev => ev.id == id);
          if (ev) showToast(`🎟️ ${ev.title} added to cart`);
        });
      });

      // Card click also shows toast (for demo)
      document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.book-btn')) return; // avoid duplicate if button clicked
          const id = card.getAttribute('data-id');
          const ev = events.find(ev => ev.id == id);
          if (ev) showToast(`📌 ${ev.title} · starting at $${ev.price}`);
        });
      });

      updateLoadMoreButton(filtered.length);
    }

    function updateLoadMoreButton(filteredTotal) {
      if (visibleCount >= filteredTotal || filteredTotal === 0) {
        loadMoreBtn.style.opacity = '0.6';
        loadMoreBtn.style.pointerEvents = 'none';
        if (filteredTotal === 0) {
          loadMoreBtn.innerHTML = `<i class="fas fa-ban"></i> No more events`;
        } else {
          loadMoreBtn.innerHTML = `<i class="fas fa-check-circle"></i> All events shown`;
        }
      } else {
        loadMoreBtn.style.opacity = '1';
        loadMoreBtn.style.pointerEvents = 'auto';
        loadMoreBtn.innerHTML = `<i class="fas fa-arrow-down"></i> Load more events (${filteredTotal - visibleCount} left)`;
      }
    }

    // ---------- TOAST ----------
    let toastTimeout;
    function showToast(message) {
      toastText.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2800);
    }

    // ---------- FILTERING / SEARCH ----------
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilter = tab.getAttribute('data-filter');
        // reset visible count when filter changes
        visibleCount = 6;
        renderEvents();
      });
    });

    function performSearch() {
      searchQuery = searchInput.value.trim();
      visibleCount = 6; // reset pagination when searching
      renderEvents();
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') performSearch();
    });

    // price range (decorative filter)
    priceRange.addEventListener('input', (e) => {
      priceLabel.textContent = '$' + e.target.value;
      visibleCount = 6; // reset
      renderEvents();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 3; // load 3 more at a time
      renderEvents();
    });

    // initial render
    renderEvents();

    // add some randomness to show "live" effect
    setTimeout(() => {
      showToast('🔥 5 people are viewing Coldplay tickets');
    }, 3000);
  })();
</script>
</body>
</html>