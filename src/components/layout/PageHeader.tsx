@@ .. @@
 const PageHeader: React.FC<PageHeaderProps> = ({
   title,
   description,
   actions = []
 }) => {
   return (
-    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
+    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
       <div>
-        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
+        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h1>
         {description && (
           <p className="text-gray-600 mt-1">{description}</p>
         )}
       </div>
       {actions.length > 0 && (
-        <div className="flex space-x-3">
+        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
           {actions.map((action, index) => (
             <Button
               key={index}
               variant={action.variant || 'primary'}
               onClick={action.onClick}
               icon={action.icon}
+              fullWidth={true}
+              className="sm:w-auto"
             >
               {action.label}
             </Button>
           ))}
         </div>
       )}
     </div>
   );
 };