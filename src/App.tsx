function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-50 relative">
          <Sidebar 
            collapsed={sidebarCollapsed} 
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            isMobile={isMobile}
          />
          <div className={`flex-1 flex flex-col transition-all duration-300 ${
            isMobile 
              ? sidebarCollapsed ? 'ml-0' : 'ml-0' 
              : sidebarCollapsed ? 'ml-16' : 'ml-64'
          }`}>
            <Header />
            <main className="flex-1 overflow-y-auto bg-gray-50">
              <div className="w-full max-w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/invoices" element={<InvoiceManagement />} />
                  <Route path="/company-setup" element={<CompanySetup />} />
                  <Route path="/employees" element={<EmployeeManagement />} />
                  <Route path="/suppliers" element={<SupplierManagement />} />
                  <Route path="/inventory" element={<InventoryManagement />} />
                  <Route path="/sales" element={<SalesManagement />} />
                  <Route path="/accounting" element={<Accounting />} />
                  <Route path="/taxes" element={<TaxManagement />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/coffee-demo" element={<CoffeeDemo />} />
                </Routes>
              </div>
            </main>
          </div>
          {/* Mobile overlay */}
          {isMobile && !sidebarCollapsed && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setSidebarCollapsed(true)}
            />
          )}
        </div>
      </Router>
    </QueryClientProvider>
  );
}