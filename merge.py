import os

def merge_angular_files(source_folder, output_file):
    excluded_dirs = {'node_modules', 'dist', '.angular', '.git'}
    included_extensions = ('.ts', '.html', '.scss', '.css', '.json')  # Add more if needed

    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, dirs, files in os.walk(source_folder):
            # Modify dirs in-place to skip excluded directories
            dirs[:] = [d for d in dirs if d not in excluded_dirs]

            # Filter files by extension
            relevant_files = [f for f in files if f.endswith(included_extensions)]

            # Sort files to keep order consistent
            relevant_files.sort()

            for file in relevant_files:
                file_path = os.path.join(root, file)
                print(f"Adding: {file_path}")

                outfile.write(f"\n/* File: {file_path} */\n")

                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        outfile.write(infile.read())
                        outfile.write('\n')
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

# Example usage
source_folder = "./"  # Update with the root folder of your Angular project
output_file = "merged.txt"
merge_angular_files(source_folder, output_file)