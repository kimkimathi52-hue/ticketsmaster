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
